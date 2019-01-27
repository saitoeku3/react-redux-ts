import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './index';

storiesOf('Button', module).add('default', () => {
  return <Button>default</Button>;
});
