var name = prompt("名前を入力してください");
var num;
var numbers = [];
var popin = [];
var sum_number;

function sum(numbers){
  var sum = 0;
  var length = numbers.length;
  for(var i = 0; i < length; i++){
    popin.push(numbers.pop());
    sum += popin[i];
  }
  return sum;
}



while(num != "q"){
  num = prompt("数字を入力してください");
  numbers.push(Number(num));
}

numbers.pop();
alert("input => " + name + "," + " 配列 = " + "[" + numbers + "]");
const startTime = performance.now();
sum_number = sum(numbers);
const endTime = performance.now();
alert("name : " + name + "," + " sum : " + sum_number + "," + " 配列 : " + "[" + numbers + "]" + "," + " time : " + (endTime - startTime) + "ms");
