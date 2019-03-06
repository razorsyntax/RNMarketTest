import React from 'react';
import { Component } from 'react';
import KrakenClient from '../services/dataService/data.service';
import apimappings from '../utilities/apimappings';
import RenderLineChart from '../components/ChartComponent';

const key: string = '...';
const secret: string = '...';

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
        const kraken = new KrakenClient(key, secret);

        await kraken.api('OHLC', { pair: tradingPair + '&interval=10080' }).then(res => {
            const adjustedData = apimappings.OHLCMapping(res, this.props.tradingPair);
            this.setState({
                chartData: adjustedData
            })
        }).catch(err => {
            this.setState({
                chartData: null
            });
            console.log('failed to load');
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

