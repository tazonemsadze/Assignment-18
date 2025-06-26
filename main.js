// 1.დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს და აბრუნებს true თუ ეს სტრინგი ცარიელია, false — თუ არა.

const reverseStringBool = function (str) {
  return str === "";
};

console.log(reverseStringBool("Hello World"));
console.log(reverseStringBool(""));

// 2. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს ფასს დოლარში და ლარის კურსს და აბრუნებს ლარებში ღირებულებას.

const convertUSDToGEL = function (priceInUSD, exchangeRate) {
  const priceInGEL = priceInUSD * exchangeRate;
  return priceInGEL;
};

console.log(convertUSDToGEL(17, 2.72));
console.log(convertUSDToGEL(18, 2.75));
console.log(convertUSDToGEL(35, 2.7));

// 3.დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს ვალუტის კოდს და აბრუნებს ქვეყანის სახელწოდებას: USD -> "United States", EUR -> "European Union", GEL -> "Georgia". თუ სხვა უცნობ კოდს მივაწვდით, დააბრუნოს: "Unknown currency"

const getCurrencyCountry = function (currencyCode) {
  const code = currencyCode.toUpperCase();
  const currencyNameObj = {
    USD: "United States",
    EUR: "European Union",
    GEL: "Georgia",
  };
  return currencyNameObj[code] || "Unknown currency";
};

console.log(getCurrencyCountry("USD"));
console.log(getCurrencyCountry("EUR"));
console.log(getCurrencyCountry("gel"));
console.log(getCurrencyCountry("GBP"));
console.log(getCurrencyCountry("INR"));

// 4.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს uppercase სტრინგს (მაგ: MY NAME IS JANE) და დააბრუნებს lowerCase სტრინგს (my name is jane)

const toUpperCase = function (str) {
  return str.toLowerCase();
};

console.log(toUpperCase("MY NAME IS JANE"));

// 5.დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს რიცხვების მასივს და აბრუნებს მხოლოდ იმ რიცხვებს, რომლებიც მეტია 100-ზე

const numsOver100 = function (arr) {
  const over100 = arr.filter((num) => num > 100);
  return over100;
};

console.log(numsOver100([99, 100, 101, 98, 97, 17, 18, 117, 118]));

// 6*. ლექციაზე დაწერილ რეპოზიტორში მოცემულია ფაილი data.js სადაც გვაქვს პროდუქტების მასივი . გადააკოპირეთ ეს მასივი თქვენთან, ან მთლიანი ფაილი შემოიტანეთ ისეთი ფორმატით როგორც კოდშია და შემდეგ შექმენით ფუნქცია,  რომელიც პარამეტრად მიიღებს ამ მასივს (data.items) და დააბრუნებს იმ ელემენტს(ობიექტს), რომლის ფასიც (price) არის უმცირესი

const cheapestProduct = function (product) {
  return product.reduce((cheapest, current) => {
    return current.price < cheapest.price ? current : cheapest;
  });
};

console.log(cheapestProduct(data.items));

// 7*. დაწერეთ ფუნქცია რომელიც პარამეტრად მიღებს ობიექტების მასივს (თითოეულ ობიექტს უნდა ჰქონდეს id ველი) და მეორე პარამეტრად მიიღებს სტრინგს. ამ მასივში  . find ის დახმარებით მოვძებნოთ ელემენტი რომლის id ველის მნიშვნელობა ემთხვევა ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი

function findById(arr, itemId) {
  return arr.find((obj) => obj.id === itemId);
}

const items = [
  { id: "17", name: "Laptop", price: 3535 },
  { id: "18", name: "Phone", price: 1818 },
  { id: "35", name: "Tablet", price: 1717 },
];

console.log(findById(items, "17"));
console.log(findById(items, "18"));
console.log(findById(items, "35"));
console.log(findById(items, "78"));
