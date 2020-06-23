import { text, object, boolean } from '@storybook/addon-knobs';
import { StepBarComponent } from './step-bar.component';

const stepContent = [{
  'value':'Enter Your Claim Details',
  'icon':'assets/images/correct.png'
},
{
  'value':'Upload Your Documents',
  'icon':'assets/images/geometric-shape.png'
},
{
  'value':'Review & Submit',
  'icon':''
}];

export default {
  title: 'Step Bar'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: StepBarComponent,
  props: {
    steps: object('tabs', stepContent )
  }
})
primary.story = {
  parameters: {
    knobs: {
      escapeHTML: false,
    }
  }
};
