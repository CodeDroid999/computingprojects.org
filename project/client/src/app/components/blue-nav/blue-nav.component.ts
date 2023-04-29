import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-blue-nav',
  templateUrl: './blue-nav.component.html',
  styleUrls: ['./blue-nav.component.css']
})
export class BlueNavComponent {

  header_variable = false;
  @HostListener('document:scroll')
  scrollFunction() {
    if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 0) {
      this.header_variable = true;
    } else {
      this.header_variable = false;
    }
  }
}