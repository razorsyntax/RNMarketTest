import currencies from '../assets/currencies';
import moment from 'moment';

const BasePairsMapping = () => {
    const assets = currencies.cryptoassets;
    const basepairs = assets.map(x => x.tradingpair);

    return basepairs.join(',');
}

const PriceDataMapping = (data) => {
    const assets = currencies.cryptoassets;
    const newArr: any[] = [];
    for (let key in data) {
        const name = assets.filter(x => x.tradingpair === key)
        newArr.push({
            price: data[key].c[0],
            name: name[0].name,
            key: key,
            imagePath: name[0].imagePath
        });
    }
    return newArr;
}

const OHLCMapping = (data, tradingpair) => {
    const tradingData = data[tradingpair];
    const mappedData = tradingData.map(x => {
        return {
            x: moment(x[0] * 1000).format('YYYY-MM-DD'),
            y: parseInt(x[4])
        }
    });
    return (mappedData.slice(0, 60)).reverse();
}

const apimappings = {
    BasePairsMapping: BasePairsMapping,
    PriceDataMapping: PriceDataMapping,
    OHLCMapping: OHLCMapping
}

export default apimappings;