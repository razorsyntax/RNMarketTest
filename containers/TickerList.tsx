import React from 'react';
import { FlatList } from 'react-native';
import TickerItem from '../components/TickerItem/TickerItem'

const TickerList = (props) => {
    return (
        <FlatList
            data={props.assetListItems}
            renderItem={(asset: any) => (
                <TickerItem 
                    name={asset.item.name} 
                    price={asset.item.price} 
                    pair={asset.item.key} 
                    imagePath={asset.item.imagePath}
                    onItemPressed={() => props.onItemSelected(asset.item.key)}
                    />
            )}
        ></FlatList>
    );
}

export default TickerList;