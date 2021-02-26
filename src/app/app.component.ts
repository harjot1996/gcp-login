import { Component, OnInit } from '@angular/core';
import { one, two } from './sizing/size';
import { SizeService } from './sizing/size.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'login-app';

  constructor(private readonly sizeService: SizeService) {}

ngOnInit(): void {
  this.sizeService.setSize(one);
}

}
