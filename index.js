
const priceAspirin = 15.678;
const priceClaritin = 123.965;
const priceSupradyn = 90.2345;

console.log("Максимальна ціна:", Math.max(priceAspirin, priceClaritin, priceSupradyn));

console.log("Мінімальна ціна:", Math.min(priceAspirin, priceClaritin, priceSupradyn));

const sumPrices = priceAspirin + priceClaritin + priceSupradyn;
console.log("Вартість усіх товарів:", sumPrices);

const floorSumPrices = Math.floor(priceAspirin) + Math.floor(priceClaritin) + Math.floor(priceSupradyn);
console.log("Округлена вартість усіх товарів у меншу сторону:", floorSumPrices);

console.log("Округлена вартість усіх товарів до сотень:", Math.round(sumPrices / 100) * 100);

if (floorSumPrices % 2 === 0){
    console.log("Округлена вартість усіх товарів - парне число:", true);
} else {
    console.log("Округлена вартість усіх товарів - непарне число:", false);
}

const sumClient = 500;
const sumRest = sumClient - sumPrices;
console.log("Сума решти:", sumRest);


const sumMedian = sumPrices / 3;
console.log("Cереднє значення цін, округлене до другого знаку після коми:", sumMedian.toFixed(2));

const saleSumPrices = Math.floor(Math.random() * 101);
const toPaySumPrices = (sumPrices - saleSumPrices);
console.log("Снижка:", saleSumPrices);
console.log("До сплати:", toPaySumPrices.toFixed(2));
const sumEarnings = sumPrices / 2 - saleSumPrices;
console.log("Чистий прибуток:", sumEarnings.toFixed(2));

const soloString = `
Максимальна ціна: ${Math.max(priceAspirin, priceClaritin, priceSupradyn)}
Мінімальна ціна: ${Math.min(priceAspirin, priceClaritin, priceSupradyn)}
Вартість усіх товарів: ${sumPrices}
Округлена вартість усіх товарів у меншу сторону: ${floorSumPrices}
Округлена вартість усіх товарів до сотень: ${Math.round(sumPrices / 100) * 100}
Округлена вартість усіх товарів - парне число: ${true}
Сума решти: ${sumRest}
Cереднє значення цін, округлене до другого знаку після коми: ${sumMedian.toFixed(2)}
Снижка: ${saleSumPrices}
До сплати: ${toPaySumPrices.toFixed(2)}
Чистий прибуток: ${sumEarnings.toFixed(2)}`;
console.log(soloString);