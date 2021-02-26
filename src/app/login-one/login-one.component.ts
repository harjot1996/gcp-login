import { Component, OnInit } from '@angular/core';
import { four } from '../sizing/size';
import { one, three, two } from '../sizing/size';
import { SizeService } from '../sizing/size.service';

@Component({
  selector: 'app-login-one',
  templateUrl: './login-one.component.html',
  styleUrls: ['./login-one.component.scss']
})
export class LoginOneComponent implements OnInit {

  sizes: string[] = [
    "one", "two", "three"
  ];

  selectedSize: string;


  ngOnInit(): void {}

  constructor(private readonly sizeService: SizeService) {}

  sizeChange(val) {
    val = val.value;
    console.log(val);
    if (val === 1) {
      this.sizeService.setSize(one);
    }
    if (val === 2) {
      this.sizeService.setSize(two);
    }
    if (val === 3) {
      this.sizeService.setSize(three);
    }
    if (val === 4) {
      this.sizeService.setSize(four);
    }
  }

}
