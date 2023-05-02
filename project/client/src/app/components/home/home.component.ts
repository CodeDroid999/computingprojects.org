import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //variables
  yearsinbiz: number = 0;
  profcount: number = 0;
  clientcount: number = 0;
  projectcount: number = 0;

  yearsinbizstop: any = setInterval(() => {
    this.yearsinbiz++;
    if (this.yearsinbiz == 40) {
      clearInterval(this.yearsinbizstop)
    }
  }, 100)

  profcountstop: any = setInterval(() => {
    this.profcount++;
    if (this.profcount == 200) {
      clearInterval(this.profcountstop)
    }
  }, 10)

  clientcountstop: any = setInterval(() => {
    this.clientcount = this.clientcount + 10;
    if (this.clientcount == 1500) {
      clearInterval(this.clientcountstop)
    }
  }, 1)

  projectcountstop: any = setInterval(() => {
    this.projectcount = this.projectcount + 100;
    if (this.projectcount == 7500) {
      clearInterval(this.projectcountstop)
    }
  }, 1)

  

  
}
