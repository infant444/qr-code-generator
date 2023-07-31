import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { LatLng, LatLngLiteral } from 'leaflet';
import { NgxQrcodeStylingComponent, Options } from 'ngx-qrcode-styling';
import { ToastrService } from 'ngx-toastr';
import { Tag } from 'src/app/data/module/tag';
import { QrdataService } from 'src/app/service/qrdata/qrdata.service';
import { LoactionService } from 'src/app/service/service/loaction.service';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
  @ViewChild('qrcode', { static: false }) public qrcode!: NgxQrcodeStylingComponent;
  tag: Tag[] = [];
  latlng!: LatLngLiteral;

  type: string = "website";


  weblink!: string;


  Applink!: string;



  Phnolink!: string;



  Email!: string;



  piname!: string;
  piAcno!: string;
  pifcfsc!: string;



  imglink!: string;



  abuildno!: string;
  astreet!: string;
  acity!: string;
  apincode!: string;
  acontry!: string;
  astate!: string;



  Message!: string;

  Otitle!: string;
  Other!: string;



  pfname!: string;
  plname!: string;
  pemail!: string;
  ppno!: string;
  pcomp!: string;
  pstreet!: string;
  pcity!: string;
  pcontry!: string;
  pstate!: string;
  pwebsite!: string;
  pjob!: string;


  country_list: string[] = []
  x: boolean = false;


  password: string = "";

  img!: File;

  framsryle = ["F_020",
    "F_021",
    "F_022",
    "F_023",
    "F_024",
    "F_025",
    "F_026",
    "F_027",
    "F_028",
    "F_029",
    "F_030",
    "F_031",
    "F_032",
    "F_033",
    "F_034",
    "F_035",
    "F_036",
    "F_037",
    "F_038",
    "F_039",
    "F_040",
    "F_041",
    "F_042",
    "F_043",
    "F_044",
    "F_045",
    "F_046",
    "F_047",
    "F_048",
    "F_049",
    "F_050",
    "F_051",
    "F_052",
    "F_053",
    "F_054",
    "F_055",
    "F_056",
    "F_057",
    "F_058",
    "F_059",
    "F_060",
    "F_061",
    "F_062",
    "F_063",
    "F_064",
    "F_065",
    "F_066",
    "F_067",
    "F_068",
    "F_069",
    "F_070",
    "F_071",
    "F_072",
    "F_073",
    "F_074",
    "F_075",
    "F_076",
    "F_077",
    "F_078",
    "F_079",
    "F_080",];

  Dottype = ["dots", "rounded", "classy", "classy-rounded", "square", "extra-rounded"];
  Costype = ["dot", "square", "extra-rounded"];
  Cdotype = ["dot", "square"];
  Qrdata!: string;
  qrshape: string = 'square';
  qrimage: string = '';
  frameOptions: any = {
    style: 'none',
    width: 300,
    height: 300,

  }


  qrdottype: string = 'rounded';
  qrdotcolor: string = '#000000';
  grident: any = {
    type: 'linear',
    rotation: 36,
    colorStops:
      [{ offset: 0, color: '#000000' },
      { offset: 1, color: '#000000' }]
  }


  qrcsotype: string = 'square';
  qrcsocolor: string = '#000000';

  ft = false;
  grident1: any = {
    type: 'linear',
    rotation: 36,
    colorStops:
      [{ offset: 0, color: '#000000' },
      { offset: 1, color: '#000000' }]
  }

  qrcdotype: string = 'square';
  qrcdocolor: string = '#000000';
  grident2: any = {
    type: 'linear',
    rotation: 36,
    colorStops:
      [{ offset: 0, color: '#000000' },
      { offset: 1, color: '#000000' }]
  }

  qrbgtype: number = 0;
  qrbgcolor: string = '#000000';
  grident3: any = {
    type: 'linear',
    rotation: 36,
    colorStops:
      [{ offset: 0, color: '#ffffff' },
      { offset: 1, color: '#ffffff' }]
  }



  class1 = [" cal"];
  class2 = [" cal"];
  class3 = [" cal"];
  class4 = [" cal"];
  class5 = [" cal"];
  class6 = [" cal"];

  display1 = "none";
  display2 = "none";
  display3 = "none";
  display4 = "none";
  display5 = "none";
  display6 = "none";

  toggle1 = false;
  toggle2 = false;
  toggle3 = false;
  toggle4 = false;
  toggle5 = false;
  toggle6 = false;

  constructor(private formbuilder: FormBuilder,
    private toster: ToastrService,
    private qrservice: QrdataService,
    private location: LoactionService) { }
  ngOnInit(): void {
    this.tag = this.qrservice.tags();
    console.log(this.tag);
    this.country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

  }

  web() {
    if (!this.weblink) {
      console.log("x");
      this.toster.warning("Web link Required");
      return;
    }
    else if (this.weblink.length < 8) {
      this.toster.warning("web link is too short");
      return;
    }


    if (this.x) {
      if (this.password.length > 5) {

        return;
      }
      else {
        this.toster.warning("Password is short");
        return;
      }
    }
    this.Qrdata = this.weblink;
    this.change();

  }
  app() {
    if (!this.Applink) {
      this.toster.warning("App link Required");
      return;
    }
    else if (this.Applink.length < 8) {
      this.toster.warning("App link is too short");
      return;
    }


    if (this.x) {
      if (this.password.length > 5) {

        return;
      }
      else {
        this.toster.warning("Password is short");
        return;
      }
    }
    this.Qrdata = this.Applink;
    this.change();
  }
  email() {
    if (!this.Email) {
      this.toster.warning("Email");
      return;
    }

    if (this.x) {
      if (this.password.length > 5) {

        return;
      }
      else {
        this.toster.warning("Password is short");
        return;
      }
    }
    else {
      this.Qrdata = this.Email;
    }
    this.change();

  }
  phono() {
    if (!this.Phnolink && this.Phnolink.length == 10) {
      this.toster.warning("invalid phone number");
      return;
    }
    if (this.x) {
      if (this.password.length > 5) {

        return;
      }
      else {
        this.toster.warning("Password is short");
        return;
      }
    }
    else {
      this.Qrdata = this.Phnolink.toString();
      console.log(this.Qrdata)
    }
    this.change();
  }
  perso() {
    // console.log
    if (!this.pfname || !this.pemail || !this.ppno || this.ppno.length == 10 || !this.pjob || !this.pstreet || !this.pcity || !this.plname || !this.pstate || this.pcontry == 'none') {
      console.log("x");
      this.toster.warning("Enter all required data");
      return;
    }
    if (this.x) {
      if (this.password.length > 5) {

        return;
      }
      else {
        this.toster.warning("Password is short");
        return;
      }
    }
    else {
      this.Qrdata = "First name : " + this.pfname + "\nLast name : " + this.plname +
        "\nEmail : " + this.pemail + "\nMobile number : " + this.ppno
        + " \nJob : " + this.pjob + "\nCompany : " + this.pcomp + "\nstreet : " + this.pstreet
        + "\nCity : " + this.pcity + "\nState : " + this.pstate + "\nCountry : " + this.pcontry + "\nWebsite : " + this.pwebsite;
      console.log(this.Qrdata)
    }
    this.change();

  }
  // image() {

  // }
  address() {
    console.log(this.apincode.length)
    if (!this.abuildno || !this.acity || !this.acontry || !this.astate || !this.astreet || !this.apincode) {
      this.toster.warning("Enter all required data");
      return;
    }
    if (this.x) {
      if (this.password.length > 5) {

        return;
      }
      else {
        this.toster.warning("Password is short");
        return;
      }
    }
    else {
      this.Qrdata = this.abuildno + ", " + this.astreet + ", " + this.acity + ", \n" + this.astate + ", " + this.acontry + ",\n " + this.apincode;
    }
    this.change();

  }
  latLng() {
    this.location.getcurrentloaction().subscribe(
      (latlng) => {
        this.latlng = latlng;
        console.log(this.latlng);
        if (this.x) {
          if (this.password.length > 5) {

            return;
          }
          else {
            this.toster.warning("Password is short");
            return;
          }
        }
        else {
          this.Qrdata = "Lat : " + this.latlng.lat + " Lng : " + this.latlng.lng;
        }
        this.change();
      },
      () => {
        this.toster.error("Allow the location");
      })

  }
  message() {
    if (!this.Message) {
      this.toster.warning("Required");
      return;
    }
    if (this.x) {
      if (this.password.length > 5) {

        return;
      }
      else {
        this.toster.warning("Password is short");
        return;
      }
    }
    else {
      this.Qrdata = "Message : " + this.Message;
    }
    this.change();
  }
  accountinfo() {
    if (!this.piname || !this.piAcno || !this.pifcfsc) {
      this.toster.warning("Enter all required data");
      return;
    }
    if (this.x) {
      if (this.password.length > 5) {

        return;
      }
      else {
        this.toster.warning("Password is short");
        return;
      }
    }
    else {
      this.Qrdata = "Account's holder name : " + this.piname + " \nAccount number : " + this.piAcno + " \n IFSC Code : " + this.pifcfsc;
    }
    this.change();
  }
  other() {
    if (!this.Otitle || !this.Other) {
      this.toster.warning("Enter all required data");
      return;
    }
    if (this.x) {
      if (this.password.length > 5) {

        return;
      }
      else {
        this.toster.warning("Password is short");
        return;
      }
    }
    else {
      this.Qrdata = this.Otitle + " : " + this.Other;
    }
    this.change();
  }




  c1() {
    if (this.toggle1) {
      this.class1 = [" cal"];
      this.toggle1 = false;
      this.display1 = "none";
    }
    else {
      this.class1 = [" cal content20"];
      this.toggle1 = true;
      this.display1 = "block";

    }


  }
  c2() {
    if (this.toggle2) {
      this.class2 = [" cal"];
      this.toggle2 = false;
      this.display2 = "none";
    }
    else {

      this.class2 = [" cal content21"];
      this.toggle2 = true;
      this.display2 = "block";


    }
  }
  c3() {
    if (this.toggle3) {
      this.class3 = [" cal"];
      this.toggle3 = false;
      this.display3 = "none";

    }
    else {
      this.class3 = [" cal content22"];
      this.toggle3 = true;
      this.display3 = "block";

    }

  }
  c4() {
    if (this.toggle4) {
      this.class4 = [" cal"];
      this.toggle4 = false;
      this.display4 = "none";


    }
    else {
      this.class4 = [" cal content23"];
      this.toggle4 = true;
      this.display4 = "block";


    }

  }
  c5() {
    if (this.toggle5) {
      this.class5 = [" cal"];
      this.toggle5 = false;
      this.display5 = "none";

    }
    else {
      this.class5 = [" cal content24"];
      this.toggle5 = true;
      this.display5 = "block";

    }
  }
  c6() {
    if (this.toggle6) {
      this.class6 = [" cal"];
      this.toggle6 = false;
      this.display6 = "none";

    }
    else {
      this.class6 = [" cal content25"];
      this.toggle6 = true;
      this.display6 = "block";

    }
  }




  dow(x: any) {
    console.log(this.config);
    // console.log(x.value);
    x.download();
  }




  onFileSelected(event: any) {
    this.img = event.target.files[0];

    // this.imgpath=this.Fc2.imageurl.value;
    const reader = new FileReader();
    reader.readAsDataURL(this.img);
    reader.onload = () => {
      this.qrimage = reader.result as string;
      if (!this.ft) {
        this.Adddata();
      }
      else {
        this.Adddata1();
      }
    };
    reader.onerror = (error) => {
      console.log("error ouccor", error);
    };
  }
  Adddata() {
    this.qrcode.update(this.qrcode.config, {
      width: 300,
    height: 300,
    margin: 5,
      data: this.Qrdata,
      image: this.qrimage,
      shape: this.qrshape,

      imageOptions: {
        crossOrigin: "anonymous",
      },
      dotsOptions: {
        type: this.qrdottype,
        color: this.qrdotcolor,
        gradient: this.grident,
      },
      cornersSquareOptions: {
        type: this.qrcsotype,
        color: this.qrcsocolor,
        gradient: this.grident1,
      },
      cornersDotOptions: {
        type: this.qrcdotype,
        color: this.qrcdocolor,
        gradient: this.grident2,
      }, backgroundOptions: {
        round: this.qrbgtype,
        color: this.qrbgcolor,
        gradient: this.grident3
      }
    })

  }
  Adddata1() {
    this.qrcode.update(this.qrcode.config, {
      width: 320,
    height: 320,
    margin: 5,
      data: this.Qrdata,
      image: this.qrimage,
      shape: this.qrshape,

      imageOptions: {
        crossOrigin: "anonymous",
      },
      frameOptions: this.frameOptions,
      dotsOptions: {
        type: this.qrdottype,
        color: this.qrdotcolor,
        gradient: this.grident,
      },
      cornersSquareOptions: {
        type: this.qrcsotype,
        color: this.qrcsocolor,
        gradient: this.grident1,
      },
      cornersDotOptions: {
        type: this.qrcdotype,
        color: this.qrcdocolor,
        gradient: this.grident2,
      }, backgroundOptions: {
        round: this.qrbgtype,
        color: this.qrbgcolor,
        gradient: this.grident3
      }

    })
    console.log(this.qrcode)
  }
  public config: Options = {
    width: 300,
    height: 300,
    margin: 5,
    data: this.Qrdata,
    backgroundOptions: {
      color: "#eeeeee",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 5
    }
  };

  change() {
    if (!this.ft) {
      this.Adddata();
    }
    else {
      this.Adddata1();
    }
  }
  fram() {
    if (this.frameOptions.style == 'none') {
      this.Adddata();
      this.ft = false;

    }
    else {
      this.Adddata1();
      this.ft = true;
    }
  }

  dotcolor() {
    this.grident.colorStops[0].color = this.qrdotcolor;
    this.grident.colorStops[1].color = this.qrdotcolor;
    console.log(this.qrdotcolor);
    console.log(this.grident.colorStops[0].color);
    if (!this.ft) {
      this.Adddata();
    }
    else {
      this.Adddata1();
    }
  }
  csocolor() {
    this.grident1.colorStops[0].color = this.qrcsocolor;
    this.grident1.colorStops[1].color = this.qrcsocolor;
    if (!this.ft) {
      this.Adddata();
    }
    else {
      this.Adddata1();
    }
  }
  cdocolor() {
    this.grident2.colorStops[0].color = this.qrcdocolor;
    this.grident2.colorStops[1].color = this.qrcdocolor;
    if (!this.ft) {
      this.Adddata();
    }
    else {
      this.Adddata1();
    }
  }
  bgcolor() {
    this.grident3.colorStops[0].color = this.qrbgcolor;
    this.grident3.colorStops[1].color = this.qrbgcolor;
    if (!this.ft) {
      this.Adddata();
    }
    else {
      this.Adddata1();
    }
  }


}

