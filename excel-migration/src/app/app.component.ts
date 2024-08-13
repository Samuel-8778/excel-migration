import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  title:any;
  constructor(public appService: AppService){
    this.title = 'zorro';
  }

  setCurrentMenu(menuName: String) {
    this.appService.currentMenu = menuName;
    this.appService.title = menuName;
  }
}
