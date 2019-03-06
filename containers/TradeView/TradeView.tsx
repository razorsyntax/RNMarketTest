import React from 'react';
import { Modal, Button, Text, View, Image, StyleSheet, Platform } from 'react-native';
import currencies from '../../assets/currencies';
import ChartContainer from '../ChartContainer';
import TradeViewStyles from './TradeViewStyles'

let buttonColor = (Platform.OS === 'ios') ? '#eeeeee' : '#343434';

const TradeView = props => {
    let modalContent: any = null;
    const items = currencies.cryptoassets;
    const selectedItem = items.filter(x => x.tradingpair === props.selectedAsset);
    const tradingPair: string = (selectedItem.length !== 0) ? selectedItem[0].tradingpair : '';
    if (props.selectedAsset) {
        modalContent = (
            <View style={TradeViewStyles.modalBody}>
                <Button color={buttonColor} title={'Close'} onPress={props.onModalClosed} />
                <View style={TradeViewStyles.assetDetailsContainer}>
                    <Image source={selectedItem[0].imagePath} style={TradeViewStyles.assetImage} />
                    <Text style={TradeViewStyles.assetName}>{selectedItem[0].name}</Text>
                </View>
                <View style={TradeViewStyles.chartContainer}>
                    <Text style={TradeViewStyles.chartText}>{'Weekly Prices'}</Text>
                    <ChartContainer tradingPair={tradingPair} />
                    <Text style={TradeViewStyles.slideText}>{'slide chart >>>'}</Text>
                </View>
            </View>
        );
    }
    return (
        <Modal visible={props.selectedAsset !== null} animationType={'slide'}>
            {modalContent}
        </Modal>
    )
};

export default TradeView;