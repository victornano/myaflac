import { storiesOf, moduleMetadata } from '@storybook/angular';
import { SelectModule } from './select.module';
import { text, withKnobs } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
// @ts-ignore: suppresses all errors that originate on the following line
import readme from './select.md';

//height style was added just for Storybook
const template = `
    <aflac-select style="height: 3.125em;"
        [label]="label"
        [items]="items"
        [selectedValue]="selectedValue"
        (selectionChange)="selectionChange($event)"
    ></aflac-select>`;

const stories = storiesOf('Select', module);

stories.addDecorator(
  moduleMetadata({
    imports: [
        SelectModule,
    ],
  }),
);
stories.addDecorator(withA11y);
stories.addDecorator(withKnobs);

stories.add('default', () => {

  return {
    template,
    props : {
        label: text('label', ''),
        items: [
            {
                text: 'User Text',
                value: 'user',
                icon: 'icon-user',
            },
            {
                text: 'Dashboard Text',
                value: 'dashboard',
                icon: 'icon-dashboard',
            },
            {
                text: 'Price Check Text',
                value: 'price-check',
                icon: 'icon-price-check',
            }
        ],
        selectedValue: text('selectedValue', 'user'),
        selectionChange: action('selectionChange'),
      }
  };
},
  {
    notes: { markdown: readme }
  }
);
