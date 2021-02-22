
const priceAspirin = 15.678;
const priceClaritin = 123.965;
const priceSupradyn = 90.2345;

console.log("Максимальна ціна:", Math.max(priceAspirin, priceClaritin, priceSupradyn));

console.log("Мінімальна ціна:", Math.min(priceAspirin, priceClaritin, priceSupradyn));

const sumDrugPrices = priceAspirin + priceClaritin + priceSupradyn;
console.log("Вартість усіх товарів:", sumDrugPrices);

const floorSumPrices = Math.floor(priceAspirin) + Math.floor(priceClaritin) + Math.floor(priceSupradyn);
console.log("Округлена вартість усіх товарів у меншу сторону:", floorSumPrices);

console.log("Округлена вартість усіх товарів до сотень:", Math.round(sumDrugPrices / 100) * 100);

floorSumPrices % 2 === 0 ? console.log("Округлена вартість усіх товарів - парне число:", true) : console.log("Округлена вартість усіх товарів - непарне число:", false);


const sumClient = 500;
const sumRest = sumClient - sumDrugPrices;
console.log("Сума решти:", sumRest);


const sumMedian = sumDrugPrices / 3;
console.log("Cереднє значення цін, округлене до другого знаку після коми:", sumMedian.toFixed(2));

const discount = Math.floor(Math.random() * 101).toFixed(2);
const toPaySumPrices = (sumDrugPrices - ((sumDrugPrices/100) * discount)).toFixed(2);
console.log("Снижка:", discount, "%");
console.log("До сплати:", toPaySumPrices);
const sumEarnings = ((sumDrugPrices.toFixed(2)/2) - (sumDrugPrices.toFixed(2)-toPaySumPrices));
console.log("Чистий прибуток:", sumEarnings);

const soloString = `
Максимальна ціна: ${Math.max(priceAspirin, priceClaritin, priceSupradyn)}\n
Мінімальна ціна: ${Math.min(priceAspirin, priceClaritin, priceSupradyn)}\n
Вартість усіх товарів: ${sumDrugPrices}\n
Округлена вартість усіх товарів у меншу сторону: ${floorSumPrices}\n
Округлена вартість усіх товарів до сотень: ${Math.round(sumDrugPrices / 100) * 100}\n
Округлена вартість усіх товарів - парне число: ${true}\n
Сума решти: ${sumRest}\n
Cереднє значення цін, округлене до другого знаку після коми: ${sumMedian.toFixed(2)}\n
Снижка: ${discount} %\n
До сплати: ${toPaySumPrices}\n
Чистий прибуток: ${sumEarnings}`;
console.log(soloString);