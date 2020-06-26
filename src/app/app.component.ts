import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'dyrektywaInputSubscribe';
  normalData: any;
  subData: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('komp changes', changes);
  }

  ngOnInit(): void {
    console.log('komp onInit');
    this.fetchSubData();
    this.normalData = { someData: 'normal data' };

  }

  fetchSubData(): void {
    this.getSubData().subscribe(x => {
      console.log('subData assign', x);
      this.subData = x;
    });
  }

  getSubData(): Observable<any> {
    return of({ someData: 'data from observable' }).pipe(delay(4000));
  }


}
