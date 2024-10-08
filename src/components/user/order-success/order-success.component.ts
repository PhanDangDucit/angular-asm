import { Component } from '@angular/core';
import { TopNavComponent } from "../../ui/top-nav/top-nav.component";
import { NavBarComponent } from "../../ui/nav-bar/nav-bar.component";
import { FooterComponent } from "../../ui/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [TopNavComponent, NavBarComponent, FooterComponent, RouterLink],
  templateUrl: './order-success.component.html',
  styleUrl: './order-success.component.css'
})
export class OrderSuccessComponent {

}
