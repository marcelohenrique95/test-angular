import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testangular';

  numberOne!: number;

  numberTwo!: number;

  result!: number;

  showImage: boolean = false;

  buttonName: string = 'Abrir';

  button!: boolean;

  array: any[] = [];

  inputValue: any;

  
  
  constructor() {}

  ngOnInit(): void {
    this.numberOne = 0;
    this.numberTwo = 1;
    this.result = this.numberOne + this.numberTwo;
    const nb: number[] = [0, 1, 2, 3 , 4, 5, 6, 7, 8, 9];
    this.array = nb;
    
  }

 

  run() {
    this.numberOne = this.numberTwo;
    this.numberTwo = this.result;
    this.result = this.numberOne + this.numberTwo;
    console.log('resultado');
    console.log(this.result);

    if (this.result >= 2) {
      this.button = true;
    }

  }

  restart() {
    this.numberOne = 0;
    this.numberTwo = 1;
    this.result = 1;
    this.button = false;
  }

  showHide() {
    this.showImage = !this.showImage;

    if (this.showImage)
      this.buttonName = "Fechar";
    else
      this.buttonName = "Abrir";
  }
  
  onKey(event: any){
    this.inputValue = event.target.value;
    console.log('valor do input');
    console.log(this.inputValue);
  }

  imageClick() {
    this.array = this.inputValue;
    if(this.inputValue == null || this.inputValue == ''){
      this.array = [0, 1, 2, 3 , 4, 5, 6, 7, 8, 9];
    }
  }

}


