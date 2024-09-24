import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { UserForm } from "mfe-utilities/dist/index";

@Component({
  selector: 'app-user-form-wrapper', // Changed from 'app-use-form-wrapper'
  standalone: true,
  template: '<div #formContainer></div>',
  styles: []
})
export class UseFormWrapperComponent implements AfterViewInit {
  @ViewChild('formContainer', { static: false }) formContainer!: ElementRef;

  ngAfterViewInit(): void {
    if (this.formContainer) {
      const form = new UserForm({
        onSubmit: (formData: any) => {
          console.log('Form Submitted:', formData);
        }
      });

      form.render(this.formContainer.nativeElement);
    }
  }
}