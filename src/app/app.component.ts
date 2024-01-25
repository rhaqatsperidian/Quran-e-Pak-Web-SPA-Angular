import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AlQuranApp';
  surahList: any[] = [];  // Define a property to store the Surah list

  constructor(private service: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Fetch the Surah list on component initialization
    this.service.getSurahList().subscribe(data => {
      this.surahList = data;
    });
    
  }
}
