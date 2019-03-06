import React from 'react';
import { Modal, Button, Text, View, Image, StyleSheet } from 'react-native';
import currencies from '../assets/currencies';
import ChartContainer from './ChartContainer';


const TradeView = props => {
    let modalContent: any = null;
    const items = currencies.cryptoassets;
    const selectedItem = items.filter(x => x.tradingpair === props.selectedAsset);
    const tradingPair: string = (selectedItem.length !== 0) ? selectedItem[0].tradingpair : '';
    if (props.selectedAsset) {
        modalContent = (
            <View style={{ marginTop: 100 }}>
                <Button title={'Close'} onPress={props.onModalClosed} />
                <Image source={selectedItem[0].imagePath} style={{ width: 50, height: 50 }} />
                <Text>{selectedItem[0].name}</Text>
                <Text>{'Chart: Weekly'}</Text>
                <ChartContainer tradingPair={tradingPair} />
            </View>
        );
    }
    return (
        <Modal visible={props.selectedAsset !== null} animationType={'slide'}>
            {modalContent}
        </Modal>
    )
};

const styles = StyleSheet.create({
    chart: {
        flex: 1
    }
});

export default TradeView;