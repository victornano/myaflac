import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';
import { MenuModule } from './menu.module';

// @ts-ignore: suppresses all errors that originate on the following line
import readme from './menu.md';

//display block style was added just for Storybook
const template = `
  <div aflac-menu style="display: block;"
    [items]="items"
    [closeSiblings]="closeSiblings"
    [parentElementToFit]="parentElementToFit"
    (itemClicked)="itemClicked($event)">
  </div>`;

const stories = storiesOf('Menu', module);

stories.addDecorator(
  moduleMetadata({
    imports: [
        MenuModule,
    ]
  }),
);
stories.addDecorator(withKnobs);

stories.add('default', () => {

  return {
    template,
    props : {
        items: [
          {
            text: 'Dashboard Text',
            value: 'home search value',
            icon: 'icon-dashboard',
          },
          {
            text: 'Price Check Text',
            value: 'price check value',
            icon: 'icon-price-check',
          },
          {
            text: 'User Text',
            value: 'user value',
            icon: 'icon-user',
          }
        ],
        closeSiblings: boolean('closeSiblings', true),
        parentElementToFit: text('parentElementToFit', 'parentElementToFit'),
        itemClicked: action('itemClicked'),
      }
  };
},
{
    notes: { markdown: readme }
}
);

stories.add('without icons', () => {

  return {
    template,
    props : {
        items: [
          {
            text: 'Airport Search Text',
            value: 'value',
            icon: '',
          },
          {
            text: 'Price Check Text',
            value: 'value',
            icon: '',
          },
          {
            text: 'User Text',
            value: 'value',
            icon: '',
          }
        ],
        closeSiblings: boolean('closeSiblings', true),
        parentElementToFit: text('parentElementToFit', 'parentElementToFit'),
        itemClicked: action('itemClicked'),
      }
  };
},
{
    notes: { markdown: readme }
}
);
