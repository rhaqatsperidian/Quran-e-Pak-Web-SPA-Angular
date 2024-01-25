import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-readerview',
  templateUrl: './readerview.component.html',
  styleUrl: './readerview.component.scss'
})
export class ReaderViewComponent implements OnInit {
  data:any;
  combinedAr: any;
  constructor(private service: DataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.params.subscribe(params => {
      const surahId = params['surah'];
      if (surahId !== undefined) {
        // Handle the Surah ID as needed
        console.log('Surah ID:', surahId);
        this.service.getSurahData(+surahId).subscribe(data => {
          this.data = data;
  
          // Extracting the "ar" values from each object in the array
          const arValues = this.data.map((item:any) => item.ar);
  
          // Combining all "ar" values into a single string
          this.combinedAr = arValues.join('');
  
          // Log the combined string to the console
          console.log('Combined "ar" values:', this.combinedAr);
  
          // Add your logic here based on the Surah ID
        });
      }
    });
  }
  
}
