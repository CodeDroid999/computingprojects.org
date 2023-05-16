import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //AOS.init();
  //variables
  yearsinbiz: number = 0;
  profcount: number = 0;
  clientcount: number = 0;
  projectcount: number = 0;

  yearsinbizstop: any = setInterval(() => {
    this.yearsinbiz++;
    if (this.yearsinbiz == 10) {
      clearInterval(this.yearsinbizstop)
    }
  }, 1000)

  profcountstop: any = setInterval(() => {
    this.profcount++;
    if (this.profcount == 20) {
      clearInterval(this.profcountstop)
    }
  }, 1000)

  clientcountstop: any = setInterval(() => {
    this.clientcount++;
    if (this.clientcount == 50) {
      clearInterval(this.clientcountstop)
    }
  }, 1000)

  projectcountstop: any = setInterval(() => {
    this.projectcount = this.projectcount + 1;
    if (this.projectcount == 200) {
      clearInterval(this.projectcountstop)
    }
  }, 100)

  

  
}
