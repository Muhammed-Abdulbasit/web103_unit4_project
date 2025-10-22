export const calcPrice = (color, size, design) => {
    let price = 10; // base price
  
    if (size === 'medium') price += 2;
    if (size === 'large') price += 4;
    if (design.includes('custom')) price += 5;
    if (color === 'black') price += 1;
  
    return price;
  };
  