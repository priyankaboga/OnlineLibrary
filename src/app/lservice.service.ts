import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LserviceService {

  
  constructor(private http : HttpClient) { }

  api = 'http://localhost:9005';
  url = 'http://localhost:9005/insert';
  url1 = 'http://localhost:9005/update';
  url2 ='http://localhost:9005/delete';
  public getBooks()
  {
    return this.http.get(this.api+'/view');
  }
  public insertbook(bookdata: any)
  {
    return this.http.post(this.url,bookdata);
    }

  public updatedetails(bookdata: any)
  {
     return this.http.post(this.url1,bookdata);
  }
   public deletedetails(bookdata: any)
   {
    return this.http.post(this.url2,bookdata);
   }
  }

