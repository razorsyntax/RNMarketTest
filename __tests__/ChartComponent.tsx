/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import ChartComponent from '../src/components/ChartComponent';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const mockPropChartData = [10, 20, 30, 10];
    renderer.create(<ChartComponent chartData={mockPropChartData} type='line' />);
});
