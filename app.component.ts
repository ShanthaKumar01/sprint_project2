import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { placementService } from './placement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'placement-module';
constructor(private placementService: placementService){
  this.getplacementDetails();
}

  register(registerForm: NgForm){
    this.placementService.registerplacement(registerForm.value).subscribe(
      (resp: any)=>{
        console.log(resp);
        registerForm.reset();
        this.getplacementDetails();

      },(err: any)=>{
        console.log(err);
      }
    );
  }

  getplacementDetails(){
    this.placementService.getplacement().subscribe(
      (resp)=>{
        console.log(resp);
        this.placementDetails=resp;
      }, (err)=>{
        console.log(err);
      }
    );
  }

  placementDetails= null as any;

  deleteplacement(placement: any){
    this.placementService.deleteplacement(placement.sid).subscribe(
      (resp)=>{
        console.log(resp);
        this.getplacementDetails();

      },(err)=>{
        console.log(err);
      }
    );
  }
 
  placementToUpdate={
    C_id: "",
    C_name: "",
    C_dept: "",
    desig:"",
    city: ""
  };

  edit(placement: any){
    this.placementToUpdate=placement;
  }
  updateplacement(){
    this.placementService.updateplacement(this.placementToUpdate).subscribe(
      (resp)=>{
        console.log(resp);
      },(err)=>{
        console.log(err);
      }
    );
  }
  
}
