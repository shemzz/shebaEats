import React from 'react';

const CurrencyFormatter = ({ amount }) => {
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    currencyDisplay: 'symbol' // Use symbol instead of code
  });

  return <>{formatter.format(amount)}</>;
};

export default CurrencyFormatter;
