import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text } from '@storybook/addon-knobs/angular';
import { IconModule } from './icon.module';
// @ts-ignore: suppresses all errors that originate on the following line
import readme from './icon.md';

const template = `
    <aflac-icon [icon]="icon" class="icon"></aflac-icon>`;

const stories = storiesOf('Icon', module);

stories.addDecorator(
  moduleMetadata({
    imports: [
      IconModule,
    ]
  }),
);
stories.addDecorator(withKnobs);

stories.add('default', () => {

  return {
    template,
    props: {
      icon: text('icon', 'icon-hamburger'),
    },
  };
},
{
  notes: { markdown: readme },
}
);
