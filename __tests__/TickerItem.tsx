/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import TickerItem from '../src/components/TickerItem/TickerItem';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<TickerItem />);
});
