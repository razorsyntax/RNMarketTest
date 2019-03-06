import { StyleSheet } from "react-native";


const TickerItemStyles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#343434',
        margin: 10,
        padding: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderRadius: 5
    },
    imageStyling: {
        width: 50,
        height: 50,
        margin: 2
    },
    imageContainer: {
        width: 100
    },
    itemText: { 
        flex:1,
        width: 100, 
        height:'100%',
        paddingTop:15, 
        color: 'white', 
        fontSize: 18 
    }
});

export default TickerItemStyles;