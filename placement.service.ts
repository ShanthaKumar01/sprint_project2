import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class placementService {
  API="http://localhost:8080";
  public registerplacement(placementData: any)
  {
    return this.http.post(this.API + '/registerplacement' , placementData);
  }

  public getplacement(){
    return this.http.get(this.API+'/getplacement');
  }

  public deleteplacement(C_id:any){
    return this.http.delete(this.API+'/deleteplacement?C_id=' + C_id);
  }

  public updateplacement(placement: any){
    return this.http.put(this.API +'/updateplacement', placement);
  }
  constructor(private http: HttpClient) { }
}
