import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AddcartComponent } from './addcart/addcart.component';



@NgModule({
  declarations: [NotfoundComponent, NavbarComponent, FooterComponent, AddcartComponent],
  imports: [CommonModule ,RouterModule],
  exports: [NotfoundComponent, NavbarComponent, FooterComponent]
})
export class SharedModule {}
