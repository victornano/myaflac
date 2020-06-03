import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CardModule } from './card.module';
import { withKnobs} from '@storybook/addon-knobs/angular';
import { CounterModule } from '../counter/counter.module';
// @ts-ignore: suppresses all errors that originate on the following line
import readme from './card.md';

const template = `
  <div wfc-card>
    <div header>
      <h1>Header</h1>
    </div>
    <div body>
      <p>Body</p>
    </div>
  </div>`;

const stories = storiesOf('Card', module);

stories.addDecorator(
  moduleMetadata({
    imports: [
      CardModule
    ],
  }),
);
stories.addDecorator(withKnobs);

stories.add('default', () => {

  return {
    template,
  };
},
{
  notes: { markdown: readme }
}
);
