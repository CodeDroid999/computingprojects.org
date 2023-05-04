import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @HostListener('document:scroll')


  header_variable = false;


  scrollFunction() {
    if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 0) {

    } else {
      this.header_variable = false;
    }
  }
  togglerFunction() {
    const element = document.getElementById('toggler');
    if (element && element.getAttribute('aria-expanded') === 'true') {
      this.header_variable = true;
    }
    else {
      this.header_variable = true;
    }
  }
}

