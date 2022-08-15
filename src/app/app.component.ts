import { Component, Input } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sorting-visualizer';
  percentComplete: number = 0;

  constructor(private progressService: ServiceService) { }

  ngOnInit(): void {
    this.progressService.getMessage().subscribe(number => {
      this.percentComplete = number;
    })
  }
}
