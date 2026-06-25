import { Component, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Directive({
  selector: '[appHardCoded]',
})
export class HardCodedDirective {}

@Component({
  selector: 'app-hard-coded',
  imports: [CommonModule],
  templateUrl: './hard-coded.html',
  styleUrl: './hard-coded.css',
})
export class HardCoded {
     not_a_name = "actually this is not a name lol caz i was hcecking the data binding of angular and this is a hard coded value";
     not_a_img = "http://localhost:4200/assets/students/student2.png"
     isNotWorking = true;
    isPopupVisible = false;

     showmsg() {
        alert(this.not_a_name);
     }

     showpopup() {
      // toggle a boolean to show a popup from the template instead of using an unknown "popup" identifier
      this.isPopupVisible = !this.isPopupVisible;
     }
}
