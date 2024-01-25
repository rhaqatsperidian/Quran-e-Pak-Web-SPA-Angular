import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderviewComponent } from './readerview.component';

describe('ReaderviewComponent', () => {
  let component: ReaderviewComponent;
  let fixture: ComponentFixture<ReaderviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReaderviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReaderviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
