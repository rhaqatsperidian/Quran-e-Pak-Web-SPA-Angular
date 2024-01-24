import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AlQuranApp';
  surahList: any[] = [];  // Define a property to store the Surah list

  constructor(private service: DataService) {}

  ngOnInit() {
    // Fetch the Surah list on component initialization
    this.service.getSurahList().subscribe(data => {
      this.surahList = data;
      console.log(JSON.stringify(data))
    });
  }
}
