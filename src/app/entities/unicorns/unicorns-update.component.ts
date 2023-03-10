import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UnicornsService } from './unicorns.service';

@Component({
  selector: 'app-unicorns-update',
  templateUrl: './unicorns-update.component.html',
})
export class UnicornsUpdateComponent {

  constructor(
    private dialogRef : MatDialogRef<UnicornsUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public unicorn: any , private unicornService : UnicornsService){

}

ngOnInit(): void {
    if(!this.unicorn){ 
        this.unicorn = {name:"",age:0,colour:""};
    }
}

guardar():void{
    if(this.unicorn && this.unicorn._id){
        console.log("PUT id unicornio ==>" , this.unicorn._id);            
        this.unicornService.putUnicorn(this.unicorn,this.unicorn._id).subscribe(resp =>{
            this.dialogRef.close(resp.status);
        });
    }else{
        console.log("POST unicornio ==>" , this.unicorn);            
        this.unicornService.postUnicorn(this.unicorn).subscribe(res=>{
            this.dialogRef.close(res.status);
        });
    }
}

cerrarVentana() {
    this.dialogRef.close();
  }

}
