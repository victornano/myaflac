import { text, number, boolean } from '@storybook/addon-knobs';
import { ButtonModule } from './button.module';
import { Input, Component } from '@angular/core';

@Component({
  template: `
  <aflac-button 
    [disabled]="disabled"
    [half]="half"
    [primary]="primary"
    [secondary]="secondary"
  >
    <ng-container body>{{ text }} </ng-container> 
       
  </aflac-button>`
})
class ButtonDemoComponent {
  @Input() disabled = false;
  @Input() half = false;
  @Input() primary = false;
  @Input() secondary = false;
  @Input() text = '';
}

export default {
  title: 'Button'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ButtonModule]
  },
  component: ButtonDemoComponent,
  props: {
    disabled: boolean('disabled', false),
    half: boolean('half', false),
    primary: boolean('primary', false),
    secondary: boolean('secondary', false),
    text: text('ng-content[body]', 'My Button'),
  }
})
