import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CardModule } from './card.module';
import { withKnobs, text } from '@storybook/addon-knobs/angular';
import { Component, Input } from '@angular/core';

// @ts-ignore: suppresses all errors that originate on the following line
import readme from './card.md';

@Component({
  template: `
  <div aflac-card>
    <div header >
      <div [innerHTML]="header"></div>
    </div>
    <div body>
      <div [innerHTML]="body"></div>
    </div>
  </div>`
})
class CardDemoComponent {
  @Input() header = '';
  @Input() body = '';
}

export default {
  title: 'Card'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [CardModule]
  },
  component: CardDemoComponent,
  props: {
    header: text('ng-content[header]', '<h1> Card Header</h1>'),
    body: text('ng-content[body]', '<p> Card Body</p>')
  }
});
primary.story = {
  parameters: {
    knobs: {
      escapeHTML: false,
    }
  }
};