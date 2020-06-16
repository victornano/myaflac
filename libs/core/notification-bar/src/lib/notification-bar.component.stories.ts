import { text, boolean } from '@storybook/addon-knobs';
import { NotificationBarComponent } from './notification-bar.component';
import { IconModule } from '@aflac/core/icon';

export default {
  title: 'Notification Bar'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [IconModule]
  },
  component: NotificationBarComponent,
  props: {
    status: text('status', 'info'),
    isVisible: boolean('isVisible', true),
    canClose: boolean('canClose', true),
    hasIcon: boolean('hasIcon', true),
    statusIcon: text('statusIcon', ''),
  }
})
