import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchedImage } from '../models/image-service.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  getImageByQuery(query: string){
    return this.http.get<FetchedImage>(`https://api.unsplash.com/photos/random?query=${query}&orientation=squarish`, {
      headers: {
        'Accept-Version': 'v1',
        'Authorization': 'Client-ID wsY7Ae81y8syLoSSBbnV9OpJuWWypCEjLxwLn8Ds0Vg'
      }
    })
  }
}
