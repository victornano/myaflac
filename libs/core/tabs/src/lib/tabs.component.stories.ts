import { object } from '@storybook/addon-knobs';
import { TabsComponent } from './tabs.component';

export default {
  title: 'Tabs'
}
const tabContent = [{
  'value':'Tab 1',
  'action':'url1'
},
{
  'value':'Tab 2',
  'action':'url2'
},
{
  'value':'Tab 3',
  'action':'url3'
},
{
  'value':'Tab 4',
  'action':'url4'
}];
export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: TabsComponent,
  props: {
    tabs: object('tabs', tabContent )
  }
})
