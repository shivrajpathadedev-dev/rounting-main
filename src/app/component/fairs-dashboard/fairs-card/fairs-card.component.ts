import { Component, ElementRef, Input, OnInit, QueryList,ViewChildren } from '@angular/core';
import { IFairs } from 'src/app/models/fairs';
import { FairsService } from 'src/app/services/fairs.service';

@Component({
  selector: 'app-fairs-card',
  templateUrl: './fairs-card.component.html',
  styleUrls: ['./fairs-card.component.scss']
})
export class FairsCardComponent implements OnInit {
@Input() fairObj !: IFairs
@ViewChildren('fairCard')
fairCards!: QueryList<ElementRef>;
  selectedFairId!: string;
  constructor(
    private _fairsservice:FairsService
  ) { }

  ngOnInit(): void {
    
  }
  onSelectFair(fair: IFairs) {
  this.selectedFairId = fair.fairId;

  setTimeout(() => {
    const activeCard = this.fairCards.find(
      card => card.nativeElement.classList.contains('active')
    );

    activeCard?.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'   // 'start' हवे असेल तर वर येईल
    });
  });
}

}
