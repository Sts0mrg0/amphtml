/**
 * Copyright 2020 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as Preact from '../../../../src/preact';
import {select, withKnobs} from '@storybook/addon-knobs';
import {withA11y} from '@storybook/addon-a11y';
import {withAmp} from '@ampproject/storybook-addon';

export default {
  title: 'amp-base-carousel',
  decorators: [withKnobs, withA11y, withAmp],

  parameters: {
    extensions: [{name: 'amp-base-carousel', version: '1.0'}],
    experiments: ['amp-base-carousel-bento'],
  },
};

export const Default = () => {
  const controls = select('show controls', ['auto', 'always', 'never']);
  return (
    <amp-base-carousel controls={controls} width="440" height="225">
      {['lightcoral', 'peachpuff', 'lavender'].map((color) => (
        <amp-layout width="440" height="225">
          <svg viewBox="0 0 440 225">
            <rect style={{fill: color}} width="440" height="225" />
            Sorry, your browser does not support inline SVG.
          </svg>
        </amp-layout>
      ))}
    </amp-base-carousel>
  );
};

Default.story = {
  name: 'default',
};
