import { Component, ViewChild,OnInit} from '@angular/core';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { Clipboard } from '@angular/cdk/clipboard';
import { Scanner } from 'src/app/data/module/Scanner/scanner';
@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.css']
})
export class QrscannerComponent implements OnInit{
  @ViewChild('action', { static: false }) public action!: NgxScannerQrcodeComponent;

  but=true;
  butval="start";
  value?:string[];
  scanner!:Scanner;

  Fullvalue!:string;
  copyvalue="file_copy";
  style="lightblue"
  x!:any;
  email=false;
  website=false;
  mobile=false;
  constructor(private clipboard:Clipboard){}
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
    console.log(this.action.data.value[0]);
    this.value=this.action.data.value[0].value.split('\n'||',');
    console.log(this.value);
    this.Fullvalue=this.action.data.value[0].value;
    console.log(this.value);
    for(let i=0;i<this.value.length;i++)
    {
      const gmailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      this.email=gmailRegex.test(this.value[i]);
      if(this.email){

      }
      const websiteRedex=/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
      this.website=websiteRedex.test(this.value[i]);
      const mobileredex = /^[0-9]{10}$/;
      this.mobile=mobileredex.test(this.value[i]);

    }


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
      // this.value.length=0;
      this.Fullvalue="";
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
  copy(){
    this.copyvalue="offline_pin";
    this.style="lightgreen"
    this.clipboard.copy(this.Fullvalue)
  }

}
