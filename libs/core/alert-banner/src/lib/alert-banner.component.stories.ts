import { text, number, boolean, select } from '@storybook/addon-knobs';
import { AlertBannerModule } from './alert-banner.module';
import { IconModule } from '@aflac/core/icon';
import { Component, Input } from '@angular/core';

@Component({
  template: ` <aflac-alert-banner [type]="type">
    <section body class="mobile-alert-copy" [innerHTML]="content">
    </section>
    <section icon-end class="icon-container">
      <aflac-icon icon="icon-arrow-right"></aflac-icon>
    </section>
  </aflac-alert-banner>`,
})
class AlertDemoComponent {
  @Input() type = '';
  @Input() content = '';
}

export default {
  title: 'Alert Banner',
};
const options = ['default', 'error', 'success'];
export const primary = () => ({
  moduleMetadata: {
    imports: [AlertBannerModule, IconModule],
  },
  component: AlertDemoComponent,
  props: {
    type: select('type', options, options[0]),
    content: text('ng-content[body]', '<p>Your hospital claim is successful.</p>'),
  },
});
primary.story = {
  parameters: {
    knobs: {
      escapeHTML: false,
    }
  }
};