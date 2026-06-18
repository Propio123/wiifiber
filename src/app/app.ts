import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { SocialSidebar } from "./components/social-sidebar/social-sidebar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, SocialSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('wiifiber');
}
