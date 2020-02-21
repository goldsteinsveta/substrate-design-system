import { withKnobs } from '@storybook/addon-knobs';
import { dvisRythm, dvisPercent } from './DataVisInline';

export default {
  title: 'Design System/DataVisInline',
  component: [dvisRythm, dvisPercent],
  decorators: [withKnobs],
};

export const rythm = () => dvisRythm();
export const precent = () => dvisPercent();
