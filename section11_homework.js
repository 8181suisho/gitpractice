var name;
var num;
var numbers = [];
var pops = [];
var sum_number;


function input_work(){
  name = prompt("名前を入力してください");
  while(num != "q"){
    num = prompt("数字を入力してください");
    numbers.push(Number(num));
  }
  numbers.pop();
  alert("input => " + name + "," + " 配列 = " + "[" + numbers + "]");
}


function sum(numbers){
  var sum = 0;
  var length = numbers.length;
  for(var i = 0; i < length; i++){
    pops.push(numbers.pop());
    sum += pops[i];
  }
  return sum;
}



input_work();
const startTime = performance.now();
sum_number = sum(numbers);
const endTime = performance.now();

alert("name : " + name + "," + " sum : " + sum_number + "," + " 配列 : " + "[" + numbers + "]" + "," + " time : " + (endTime - startTime) + "ms");
