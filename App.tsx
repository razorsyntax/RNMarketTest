/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { Component } from 'react';
import { Text, View, Button } from 'react-native';
import BackEndClient from './services/dataService/data.service';
import TickerList from './containers/TickerList';
import apimappings from './utilities/apimappings';
import TradeView from './containers/TradeView/TradeView';
import AppStyles from './AppStyles';

const key: string = '...';
const secret: string = '...';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  }

  state = {
    data: null,
    selectedItem: null
  };

  async loadData() {
    const backEndApi = new BackEndClient(key, secret);
    const map = apimappings.BasePairsMapping();
    await backEndApi.api('Ticker', { pair: map }).then(res => {
      const adjustedData = apimappings.PriceDataMapping(res);
      this.setState({
        data: adjustedData
      })
    }).catch(err => {
      this.setState({
        data: 'failed to load'
      })
    });
  };

  itemSelectedHandler = (key) => {
    this.setState({
      selectedItem: key
    })
  }

  modalClosedHandler = () => {
    this.setState({
      selectedItem: null
    })
  }

  render() {
    const resData = (this.state.data !== null) ? <TickerList assetListItems={this.state.data} onItemSelected={this.itemSelectedHandler} /> : null;
    return (
      <View style={AppStyles.container}>
        <TradeView selectedAsset={this.state.selectedItem} onModalClosed={this.modalClosedHandler}/> 
        <Text style={AppStyles.welcome}>Crypto Asset Prices</Text>
        <Button title={'Press Me'} onPress={this.loadData.bind(this)}/>
        <View style={AppStyles.listContainer}>{resData}</View>
        
      </View>
    );
  }
}