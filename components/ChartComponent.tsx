import React from 'react';
import PureChart from 'react-native-pure-chart';

const RenderLineChart = (props) => {
    return (
        <PureChart data={props.chartData} type='line' />
    );
}

export default RenderLineChart;