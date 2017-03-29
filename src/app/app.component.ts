import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private dS: DataService) {
    this.dS.getAllData().subscribe(lesson => {
      console.log(lesson);
    });

  }
}
