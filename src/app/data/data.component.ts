import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  userName = '';

  constructor(){
    this.userName =  '';
  }

  onClickUserName(event: any){
    this.userName = event.target.value;
  }

  onClickButton(){
    this.userName = '';
  }
}
