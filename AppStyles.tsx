import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    listContainer: {
        width: '100%',
        margin: 20,
        padding: 10
    }
});

export default AppStyles;