import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UseFormWrapperComponent } from './use-form-wrapper/use-form-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UseFormWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularApp';
}
