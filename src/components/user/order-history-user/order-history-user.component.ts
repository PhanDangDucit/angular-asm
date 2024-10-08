import { Component } from '@angular/core';
import { TopNavComponent } from "../../ui/top-nav/top-nav.component";
import { NavBarComponent } from "../../ui/nav-bar/nav-bar.component";
import { FooterComponent } from "../../ui/footer/footer.component";

@Component({
  selector: 'app-order-history-user',
  standalone: true,
  imports: [TopNavComponent, NavBarComponent, FooterComponent],
  templateUrl: './order-history-user.component.html',
  styleUrl: './order-history-user.component.css'
})
export class OrderHistoryUserComponent {

}
