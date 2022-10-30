import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = '';
  constructor(private storage: Storage) { }

  public uploadImage($event: any, name:any){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, 'imagen/' + name)
    uploadBytes(imgRef, file)
    .then(res =>{
      this.getImages()
    })
    .catch(err => {
      console.log(err);
    })
  }


  getImages(){
    const imagesRef = ref(this.storage, 'imagen/');
    list(imagesRef)
    .then(async res => {
      for(let item of res.items){
        this.url = await getDownloadURL(item);
      }
      console.log(this.url)
    })
    .catch(err => {
      console.log(err);
    })
  }
}
