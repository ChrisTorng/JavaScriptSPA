import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Angular';
  public message: string = 'Hello Angular!';

  public reverseMessage(): void {
    this.message = this.message.split('').reverse().join('');
  }
}
