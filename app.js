////////////////////////////////////////////////////////
// CHAPTER 21 - 25
///////////////////////////////////////////////////////

//////////i

// var fname = prompt();
// var lname = prompt();
// var fullName = fname + " " + lname;
// alert("Welcome " + fullName + " !");

//////////ii

// var mbl = prompt("Your Favourite Mobile Phone is :")
// var los = prompt("Length Of String :")
// document.write("Your Favourite Mobile Phone is : " + mbl + "<br/>" + "Length Of String : " + los);

//////////iii

// var pak = "Pakistan"
// var indexp = pak.indexOf("n");
// document.write("String : " + pak + "<br/>" + "Index Of  'n' : " + indexp);

//////////iv

// var hello = "Hello World"
// var indexl = hello.lastIndexOf('l');
// document.write("String : " + hello + "<br/>" + "Last Index Of  'l' : " + indexl);

//////////v

// var pak = "Pakistan"
// var chartAt3 = pak.charAt(3);
// document.write("String : " + pak + "<br/>" + "Chart At '3' is : " + chartAt3);

//////////vi

// var fname = prompt();
// var lname = prompt();
// var fullName = fname.concat(lname);
// alert("Welcome " + fullName + " !");

//////////vii

var hyd = "Hyder";
var abd = "abad";
hyd = hyd.replace("hyder", "Islam");
var hyderabad = hyd.concat(abd);
document.write(hyderabad);



////////////////////////////////////////////////////////
// CHAPTER 35 - 38
///////////////////////////////////////////////////////

//////////i

// function date() {
//     var daet = new Date();
//     console.log(daet);
// }
// date();

//////////ii

// function fullName(fname, lname) {
//     console.log(fname + " " + lname);
// }
// fullName("Muhammad", "Hunain");

//////////iii

// function sumOfTwoNumbers() {
//     var number1 = prompt();
//     number1 = Number(number1)
//     var number2 = prompt();
//     number2 = Number(number2)
//     var finalNumber = number1 + number2;
//     return finalNumber;
// }
// var fnr = sumOfTwoNumbers();
// console.log(fnr);

//////////iv

// function threeArguments(num1, num2) {
//     console.log(num1 * num2);
// }
// threeArguments(3, 3);

//////////v

// function squareArguments(num1, num2) {
//     console.log(num1 ** num2);
// }
// squareArguments(3, 6);


//////////vi

// function fractionalArguments(num1, num2) {
//     console.log(num1 / num2);
// }
// fractionalArguments(225, 3);

//////////vii

// function counting() {
//     var countStart = prompt();
//     var countEnd = prompt();
//     for (var i = countStart; i <= countEnd; i++) {
//         if (i % 1 == 0) {
//             console.log(i);
//         }
//     }
// }
// counting();

//////////viii

// function base(){
//     var bas = prompt() ** 2;
//     return bas;
// }
// var bass = base();
// function perpendicular(){
//     var prep = prompt() ** 2;
//     return prep;
// }
// var prepp = perpendicular();
// var hyp = bass + prepp;
// function hypotenuse(){
//     var hypo = hyp;
//     console.log("Hypotenuse " + " : " + hyp);
// }
// hypotenuse();

//////////ix

// function aAsArguments (width , height) {
//     console.log(width * height);
// }
// aAsArguments(6, 5);

// function aAsVariable () {
//     var width = 12
//     var height = 2
//     console.log(width * height);
// }
// aAsVariable();

//////////xiv

// var pie = 3.14;
// var radius = prompt();
// function circumfrenceOfCircle() {
//     circle = 2 * pie * radius;
//     circle = circle.toFixed(2);
//     console.log(circle);
// }
// circumfrenceOfCircle();
// function areaOfCircle() {
//     var area = pie * radius ** 2;
//     area = area.toFixed(2);
//     console.log(area);
// }
// areaOfCircle();



////////////////////////////////////////////////////////
// CHAPTER 38 - 44
///////////////////////////////////////////////////////

//////////i

// function power(a, b) {
//    console.log(a + b);
// }
// power(6, 5);

//////////ii

// function findLeapYear() {
//     var year = prompt("Find leap year So, Enter Year in Numbers");
//     if (year % 4 == 0) {
//         console.log("This is Leap Year");
//     }else {
//         console.log("This isn't Leap Year");
//     }
// }
// findLeapYear();

//////////ii

// function areaOfTriangle(a, b, c) {
//     var s = (a + b + c) / 2;
//     var area = s*((s - a)*(s - b)*(s - c));
//     console.log(area);
// }
// areaOfTriangle(2, 4, 5);

//////////iii

// function sub1 (math) {
//     var tot = 100;
//     var ave = (math * 100) / tot;
//     return math;
// }
// var s1 = sub1(90);
// function sub2 (phy) {
//     var tot = 100;
//     var ave = (phy * 100) / tot;
//     return phy;
// }
// var s2 = sub2(85);
// function sub3 (chem) {
//     var tot = 100;
//     var ave = (chem * 100) / tot;
//     return chem;
// }
// var s3 = sub3(82);
// function totalpercen () {
//     var tot = 300;
//     var percen = ((s1 + s2 + s3) * 100) / tot;
//     percen = percen.toFixed(2);
//     console.log(percen);
// }
// totalpercen();

//////////iv



