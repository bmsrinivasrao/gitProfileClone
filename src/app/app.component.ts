import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  title = 'app';

  profile: string;
  name: string;
  bio: string;
  location: string;
  blog: string;
  username: string;
  inputText: string;
  res: string;
  resRep: string;
  displayVal: string;

  constructor(public http: Http) {

  }

  getData(inputText) {
    return this.http.get('https://api.github.com/users/' + this.inputText)
      .map(res => res.json());
  }

  getDataReps(inputText) {
    return this.http.get('https://api.github.com/users/' + this.inputText + '/repos')
      .map(resRep => resRep.json());
  }

  keyDownFunction(event, value) {
    if (event.keyCode == 13) {
      this.inputText = value;

      this.getDataReps(this.inputText).subscribe((resRep) => {
        this.resRep = resRep;
      });

      this.getData(this.inputText).subscribe((res) => {
        this.res = res;
      });

      this.displayVal = "DisVal";

    }
  }
}
