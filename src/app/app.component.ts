import { Component } from '@angular/core';
import { e } from '@angular/core/src/render3';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
arr = ['',''];

link:string = ""
  value: boolean = true;
  onchange()
  {
    this.value = false
  }

  post(event:any){
    const body = {email: this.link}
  }
  input(event:any)
  {
    let input = <HTMLInputElement>document.getElementsByClassName('input')[0]!;

    //alert(value)
   setTimeout(() => {
     if(input.value == 'test@test.test')
     {
      this.link = "такая почта уже существует";
     }
     else {

     }
   }, 2000)
   // this.http.post('http://localhost:3000/postuser', this.link);

  }
  input1(event){
    let input = <HTMLInputElement>document.getElementsByClassName('input1')[0]!;
    //this.arr[0] = input.value;
    this.arr[0] = 'footbal'
  }
  input2(event){
    let input = <HTMLInputElement>document.getElementsByClassName('input2')[0]!;
    this.arr[1] = '2 month';
  }
}
