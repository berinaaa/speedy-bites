export const convertCurrency = (value, currency) => {
    switch (currency) {
      case 'eur':
        return (value * 1.09).toFixed(2);
      case 'usd':
        return value.toFixed(2);
      case 'denar':
        return (value * 61.60).toFixed(0);
      default:
        return value.toFixed(2);
    }
};

export const returnCurrencySymbol = (currency) => {
switch (currency) {
    case 'eur':
        return '€';
    case 'usd':
        return '$';
    case 'denar':
        return 'ден';
    default:
        return '$';
}
};