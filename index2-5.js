let n1 = 9;
let n2 = 0.1;
let n3 = 0.2;
let n4 = n2+n3; //得到的答案並非0.3,而是0.300...04;

let n5 = '9';
let n6 = 9;

let s3 ='\'國文\''
let s4 = 90

// console.log(s3 + s4);

let xx = [59, 100, 80, 40, 90];

for(let i=0; i<xx.length; i++){
    // console.log(xx[i]);
}

let card ={
    name: '王大明',
    tel: '0800-000-000',
    addr: '中央市中央街1號',
    '職稱':'工程師'
};
// console.log(card.name);
// console.log(card.tel);
// console.log(card.addr);

let y ='職稱';
// console.log(card[y]);

// 傳值
let zz = 123;
let yy = zz;
yy=456;
// console.log(yy);
// console.log(zz);

// 傳址
let card1 = card;
card1.name = '123';
console.log(card1);

console.log(card.name)