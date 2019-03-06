import { StyleSheet } from "react-native";

const TradeViewStyles = StyleSheet.create({
    chart: {
        flex: 1
    },
    chartText: {
        color: 'white'
    },
    slideText: {
        fontSize: 10,
        color: 'white'
    },
    assetImage: { 
        width: 100, 
        height: 100,
        margin: 10
    },
    chartContainer: {
        margin: 20
    },
    assetDetailsContainer: {
        margin: 20,
        alignItems: 'center',
        color: 'white'
    },
    assetName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28
    },
    modalBody: {
        marginTop: 100,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 5,
        backgroundColor: '#343434'
    }
});

export default TradeViewStyles;