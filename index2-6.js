// 算術運算子:+、-、*、/、%、**
let n1 = 1;
let n2 = 3;
let s1 = '1';
console.log(typeof n1);
console.log(typeof s1);
// console.log(n1+s1);//n1為數值 s1為字串
// console.log(n1 + parseInt(s1));//將s1轉換為數值

// 餘數
// console.log(n1%n2);

let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr[9])
// if(){//條件式
// }
for (let i=0; i < arr.length; i++){
    if(arr[i]%2){
        // console.log(arr[i] + '是奇數')
    }
}


let x=5;
let y='5';
// console.log(!(x==y));
// console.log(!(x===y))

// 條件運算子:?:
let score = 100;
let show = (score >= 60) ?'分數及格' : '分數不及格' ;
console.log(score,show);