import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  user: any = {
    name: 'Noam Chomsky',
    email: 'noam@chomsky.com',
    phone: '+31684567890'
  };
}
