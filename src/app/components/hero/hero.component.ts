import { Component, OnInit } from '@angular/core';
import { ViewCountService } from 'src/app/backend/services';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  viewCounter: number = 0;
  constructor(
    private viewCount: ViewCountService
  ) { }

  async ngOnInit(): Promise<void> {
    this.viewCounter = (await this.viewCount.viewCountGet().toPromise())?.count ?? 0;
  }

}
