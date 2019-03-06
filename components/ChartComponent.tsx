import React from 'react';
import { View, StyleSheet } from 'react-native';
import PureChart from 'react-native-pure-chart';

const RenderLineChart = (props) => {
    return (
        <View style={styles.chartContainer}>
            <PureChart data={props.chartData} type='line' />
        </View>
    );
}

const styles = StyleSheet.create({
    chartContainer: {
        borderRadius: 3,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#eeeeee',
        padding: 2
    }
})

export default RenderLineChart;