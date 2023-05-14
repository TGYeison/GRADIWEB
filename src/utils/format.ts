export const fortmatCurrency = ({amount, currencyCode}:{amount: string, currencyCode: string}) => (
    parseFloat(amount).toLocaleString("en", {
        style: 'currency',
        currency: currencyCode
    })
);


export const numNegativeToPositive = (number: number) => (number*-1) 