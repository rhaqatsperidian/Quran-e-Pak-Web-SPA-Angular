import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Correct the property name to styleUrls
})
export class AppComponent {
  title = 'AlQuranApp';
  surahList: string[] = [];  // Define a property to store the Surah list

  constructor(private service: DataService) {
    // Fetch the Surah list on component initialization
    this.service.getSurahList().subscribe(data => {
      this.surahList = data;
    });
  }
}
