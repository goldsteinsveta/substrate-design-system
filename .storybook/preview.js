import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { loadFontsForStorybook } from '../src/utils/index';

import { GlobalStyle } from '../src/components/shared/global';

addParameters({
  options: {
    showRoots: true,
  },
});

addDecorator(withA11y);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

loadFontsForStorybook();
