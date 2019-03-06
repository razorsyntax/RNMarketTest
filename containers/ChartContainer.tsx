import React from 'react';
import { Component } from 'react';
import BackEndClient from '../services/dataService/data.service';
import apimappings from '../utilities/apimappings';
import RenderLineChart from '../components/ChartComponent';

interface ChartData {
    x?: string;
    y?: number;
}

export default class App extends Component<any> {
    constructor(props: any) {
        super(props);
    }

    state = {
        chartData: []
    }

    componentDidMount() {
        const pair: string = this.props['tradingPair'];
        this.LoadChartData(pair);
    }

    async LoadChartData(tradingPair: string) {
        const backEndApi = new BackEndClient();

        await backEndApi.api('OHLC', { pair: tradingPair + '&interval=10080' }).then(res => {
            const adjustedData: ChartData = apimappings.OHLCMapping(res, this.props.tradingPair);
            this.setState({
                chartData: adjustedData
            })
        }).catch(err => {
            this.setState({
                chartData: null
            });
            console.log(`Failed to Load: ${err}`);
        });
    };

    render() {
        let chart: any = null;
        if (this.state.chartData !== null && this.state.chartData.length !== 0) {
            chart = <RenderLineChart chartData={this.state.chartData} />
        }
        return chart;
        
    }
}

