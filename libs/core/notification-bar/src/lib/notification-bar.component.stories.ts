import { text, boolean } from '@storybook/addon-knobs';
import { NotificationBarModule } from './notification-bar.module';
import { IconModule } from '@aflac/core/icon';
import { Input, Component } from '@angular/core';

@Component({
  template: ` <div
    aflac-notification-bar
    [status]="status"
    [isVisible]="isVisible"
    [canClose]="canClose"
    [hasIcon]="hasIcon"
    [statusIcon]="statusIcon"
  >
    <div [innerHTML]="content"></div>
  </div>`,
})
class NotificationBarDemoComponent {
  @Input() content = '';
  @Input() status = '';
  @Input() isVisible = true;
  @Input() canClose = true;
  @Input() hasIcon = true;
  @Input() statusIcon = '';
}

export default {
  title: 'Notification Bar',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [NotificationBarModule, IconModule],
  },
  component: NotificationBarDemoComponent,
  props: {
    status: text('status', 'info'),
    isVisible: boolean('isVisible', true),
    canClose: boolean('canClose', true),
    hasIcon: boolean('hasIcon', true),
    statusIcon: text('statusIcon', ''),
    content: text('ng-content', '<p>Information message</p>'),
  },
});
primary.story = {
  parameters: {
    knobs: {
      escapeHTML: false,
    }
  }
};