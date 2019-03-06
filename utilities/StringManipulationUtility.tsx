

const priceFormat = (price) => {
    if (price === undefined || price === null) {
        return undefined;
    }
    price = parseFloat(price);
    if (price > 1) {
        return addCommasToNumbers(price.toFixed(2));
    }
    return trimDecimals(price.toString());
}

const addCommasToNumbers = (price) => {
    const parts = price.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (parts[1] === '00') {
        return parts[0];
    }
    return parts.join('.');
}

const trimDecimals = (price) => {
    if (price === "0") {
        return price;
    } else {
        const parts = price.toString().split('.');
        parts[1] = parts[1].slice(0, 8);
        return parts.join('.');
    }

}

const StringManipulationUtility = {
    priceFormat: priceFormat,
    addCommasToNumbers: addCommasToNumbers,
    trimDecimals: trimDecimals
}

export default StringManipulationUtility;