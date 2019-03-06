import { StyleSheet } from "react-native";


const TickerItemStyles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#343434',
        margin: 8,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderRadius: 5
    },
    imageStyling: {
        width: 75,
        height: 60,
        marginLeft: 20
    },
    imageContainer: {
        width: 100
    },
    itemText: { 
        flex:1,
        width: 100, 
        height:'100%',
        paddingTop: 19, 
        paddingLeft: 20,
        color: 'white', 
        fontSize: 18 
    }
});

export default TickerItemStyles;