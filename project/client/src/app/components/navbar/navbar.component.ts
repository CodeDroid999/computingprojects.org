import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  header_variable = false;
  @HostListener('document:scroll')
  scrollFunction() {
    if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 0) {

    } else {
      this.header_variable = false;
    }
  }

}

