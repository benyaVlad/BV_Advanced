
const priceAspirin = 15.678;
const priceClaritin = 123.965;
const priceSupradyn = 90.2345;

console.log(`Максимальна ціна: ${Math.max(priceAspirin, priceClaritin, priceSupradyn)}`);

console.log(`Мінімальна ціна: ${Math.min(priceAspirin, priceClaritin, priceSupradyn)}`);

const sumPrices = priceAspirin+priceClaritin+priceSupradyn;
console.log(`Вартість усіх товарів: ${sumPrices}`);

const floorPriceAspirin = Math.floor(priceAspirin);
const floorPriceClaritin = Math.floor(priceClaritin);
const floorPriceSupradyn = Math.floor(priceSupradyn);
const floorSumPrices = floorPriceAspirin+floorPriceClaritin+floorPriceSupradyn;
console.log(`Округлена вартість усіх товарів у меншу сторону: ${floorSumPrices}`);

console.log(`Округлена вартість усіх товарів до сотень: ${Math.round(sumPrices/100)*100}`);

if (floorSumPrices%2 === 0){
    console.log(`Округлена вартість усіх товарів - парне число: ${true}`);
} else {
    console.log(`Округлена вартість усіх товарів - непарне число: ${false}`);
}

const sumClient = 500;
const sumRest = sumClient - sumPrices;
console.log(`Сума решти: ${sumRest}`);


const sumMedian = sumPrices/3;
console.log(`Cереднє значення цін, округлене до другого знаку після коми: ${sumMedian.toFixed(2)}`);

const saleClaritin = Math.random() * priceClaritin;
const toPayClaritin = priceClaritin - saleClaritin;
console.log(`Снижка : ${Math.round(saleClaritin/0.01)*0.01}`);
console.log(`До сплати: ${Math.round(toPayClaritin/0.01)*0.01}`);
const sumEarnings = priceClaritin/2 - saleClaritin;
console.log(`Чистий прибуток: ${Math.round(sumEarnings/0.01)*0.01}`);