/**
 * React Native Market Test
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
    const backEndApi = new BackEndClient();
    const map: string = apimappings.BasePairsMapping();
    await backEndApi.api('Ticker', { pair: map }).then(res => {
      const adjustedData = apimappings.PriceDataMapping(res);
      this.setState({
        data: adjustedData
      })
    }).catch(err => {
      this.setState({
        data: 'failed to load'
      })
      console.log(err);
    });
  };

  itemSelectedHandler = (key: string) => {
    this.setState({
      selectedItem: key
    })
  };

  modalClosedHandler = () => {
    this.setState({
      selectedItem: null
    })
  };

  render() {
    const resData = (this.state.data !== null) ? <TickerList assetListItems={this.state.data} onItemSelected={this.itemSelectedHandler} /> : null;
    return (
      <View style={AppStyles.container}>
        <TradeView selectedAsset={this.state.selectedItem} onModalClosed={this.modalClosedHandler} />
        <Text style={AppStyles.welcome}>Crypto Asset Prices</Text>
        <Button title={'Press Me'} onPress={this.loadData.bind(this)} />
        <View style={AppStyles.listContainer}>{resData}</View>
      </View>
    );
  }
}