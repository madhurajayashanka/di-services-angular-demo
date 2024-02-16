import { Component } from '@angular/core';
import {LoggerService} from "./logger.service";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'di-services-angular-demo';
  dataFromService: any;

  constructor(private dataService: DataService, private loggerService: LoggerService) {}

  onClickGetUsers() {
    this.dataService.getUsers().subscribe(users => {
      this.dataFromService = users;
      this.loggerService.log('Fetched user data successfully!');
    });
  }
}
