import { Component, ViewChild,OnInit} from '@angular/core';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.css']
})
export class QrscannerComponent implements OnInit{
  @ViewChild('action', { static: false }) public action!: NgxScannerQrcodeComponent;

  but=true;
  butval="start";
  value!:string;
  x!:any;
  ngOnInit(): void {
    // const x= setInterval(()=>{
    //   if(this.action.data.value[0])
    //   {
    //     this.sg();
    //     clearTimeout(x);
    //   }
    // })
  }
  sg(){
    console.log(this.action.data.value[0].typeName)
    this.value=this.action.data.value[0].value;
    this.action.stop();
    this.butval="start";
    this.but=true;
  }
  press(){
    if(this.but){
      this.action.start();
      this.butval="stop";
      this.but=false;
      this.action.data.value.length=0;
      console.log(this.action.data.value.length)

     this.x= setInterval(()=>{
        console.log("dvmk");
        // this.action.data
        if(this.action.data.value[0])
        {
      console.log(this.action.data);
          console.log("dvmk");
          this.sg();
          clearTimeout(this.x);
          // this.i++;
        }
      })

    }
    else{

      this.action.stop();
      this.butval="start";
      this.but=true;
      clearTimeout(this.x);

    }
  }


}
