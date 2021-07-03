// ES2015での変更点

// アロー関数
const calc = (i,j) => i + j;
console.log(calc(1,3));

// 分割代入
const myProfile = ["じゃけえ",28];
const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`
console.log(message3);

const [name,age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}です`;
console.log(message4);

// 引数の初期値の設定
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello();

// スプレッド構文...
// 配列の展開
const arr1 = [1,2,3,4];
console.log(arr1);
// 配列ではなく実際の中身を展開する
console.log(...arr1);

const sumFunc = (num1,num2) => console.log(num1 + num2);
sumFunc(arr1[0],arr1[1]);
sumFunc(...arr1);

const arr2 = [1,2,3,4,5];
const [num1, num2, ...arr3] =arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// map関数:順に取り出す
const nameArr = ["たなか","やまだ","じゃけぇ"];
for (let index = 0; index < nameArr.length; index++){
  console.log(nameArr[index]);
}

const nameArr2 = nameArr.map((name) => {
  return name;
})
console.log(nameArr2);

const newNameArr = nameArr.map((name) => {
  if(name === "じゃけぇ"){
    return name;
  }else {
    return `${name}さん`
  }
});
console.log(newNameArr);

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// filter関数:条件にあったものを返す
const numArr = [1,2,3,4,5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

// 三項演算子
// ある条件 ? を書いて条件がtrueの時 : 条件がfalseのとき
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

const num = "1300";
const num10 = 111;
console.log(num.toLocaleString());
const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);
console.log(typeof num);
console.log(typeof num10);
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲ないです";
}
console.log(checkSum(50,40));

// 論理演算子
const flag1 = true;
const flag2 = false;
if (flag1 || flag2){
  console.log("1か2はtrueになります");
}

if (flag1 && flag2){
  console.log("1も2もtrueになります");
}

// &&と||の実際の動き
// ||は左側がfalseとなるとき右側を返す
const num25 = null;
const fee = num25 || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す
const num26 = 100;
const fee2 = num26 && "何か設定されました";
console.log(fee2);