import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from "../appHeader/appHeader";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('stepik-app');
}
