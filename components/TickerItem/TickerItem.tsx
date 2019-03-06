import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native'
import TickerItemStyles from './TickerItemStyles';


const tickerItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View key={props.pair} style={TickerItemStyles.itemContainer}>
                <View style={TickerItemStyles.imageContainer}>
                    <Image
                        style={TickerItemStyles.imageStyling}
                        source={props.imagePath} />
                </View>
                <View>
                <Text style={TickerItemStyles.itemText}>{props.name}</Text></View>
                <Text style={TickerItemStyles.itemText}>{'$' + props.price}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default tickerItem;