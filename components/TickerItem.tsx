import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native'

const tickerItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View key={props.pair} style={styles.itemContainer}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={props.imagePath} />
                <Text style={{ width: 100 }}>{props.name}</Text>
                <Text style={{ width: 200 }}>{props.price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#eeeeee',
        margin: 10,
        padding: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    }
})

export default tickerItem;