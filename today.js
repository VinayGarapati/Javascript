//Hello world

// console.log("hello world");
// function w(a){
//     console.log(a);
    
// }w("hello World")

//Add two numbers

// var a=10
// var b=20
// console.log(a+b);

// //add numbers in Function
// function add(a,b){
//     console.log(a+b);
    
// }add(10,20)

//Find the Square root

// var a=9
// console.log(Math.sqrt(a));
// //Find the Square root using function
// function sq(a){
//     console.log(Math.sqrt(a));
    
// }sq(9)

//guess a random number

// function a(guess){
//     var value=Math.floor(Math.random()*10)
    
//     if(value==guess){
//         console.log("you guessed right",value);
        
//     }
//     else{
//         console.log("wrong",value);
        
//     }
// }a(5)

//Calculate number of vowels in  a string

// var vow=["a","e","i","o","u"]
// var str="Hello World "
// var count=0
// for(i=0;i<str.length;i++){
//     for(j=0;j<vow.length;j++){
//         if(str[i]==vow[j]){
//             count++
//         }
//     }
// }console.log(count);

//delete the value in a object

// var a={
//     name:"hello",
//     age:100
// }
// delete a.age
// console.log(a);

//Starts with specific character or not
// var a="hello world"
// var b=a.toUpperCase()
// console.log(b.startsWith("H"));

//loop through the object
// var a={
//     name:"Helo"
//     ,age:100
// }
// for(var b in a){
//     console.log(b,a[b]);
    
// }

//Merge using assign

// var a={
//     name:"Vinay"
// }
// var b={
//     age:100
// }
// console.log(Object.assign(a,b));

//Generate random String
// var str="hello World"
// var a=Math.floor(Math.random()*10)
// console.log(str[a]);

//date & Time
// var day=new Date()
// var d=day.toLocaleDateString()
// var e=day.toLocaleTimeString()
// console.log(d);
// console.log(e);

//Replace a string
// var a="hello world"
// console.log(a.replace("hello","bye"));

//Push into a array
// var a=[]
// for(i=0;i<10;i++){
//     a.push(i)
   
// } console.log(a);

//pop an array
// var a=[1,2,3,4,5]
// for(j=a.length;j>=0;j--){
//     a.pop()
   
// } console.log(a);

//duplicates in string

// var a=[2,2,3,3,4,4,5,5]
// var b=[]
// for(i=0;i<a.length;i++){
//     if(!b.includes(a[i])){
//         b.push(a[i])
//     }
// }console.log(b);

//New line in a string

// var a="hello \n world"
// console.log(a);

//number of keys in a object

// var a={
//     name:"hello",
//     age:100,
//     city:"rjy"
// }
// var count=0
// for(var b in a){

//     count++
// }
// console.log(count);

//Typeof variables

// function a(b){
//     console.log(typeof(a));
    
// }a("Hello")

//Swapping two numbers

// var a=10
// var b=20
// var temp
// temp=a
// a=b
// b=temp
// console.log(a,b);

// //Function in swap
// function swap(a,b){
//     var temp=a
//     a=b
//     b=temp
//     console.log(a,b);
    
// }swap(10,20)

//Kilometers to Miles
//  var k=20
//  console.log(k*0.62137);

//  //function in Km to M
//  function m(k){
//     console.log(k*0.62137);
    
//  }m(20)

//Celcius to F

// var t=32
// console.log((t*9/5)+32);

//Function C to F
// function temperature(c){
//     console.log((t*9/5)+32);
    
// }temperature(32)

//Generate random Number
// console.log(Math.floor(Math.random()*10));
// //Guess the random number without promt
// function Guess(a){
//     var random=Math.floor(Math.random()*10)
//     if(a==random){
//          console.log(`You Guessed Right ${a} The random number is ${random}`);
//     }
//     else{
//          console.log(`You Guessed Wrong ${a} The random number is ${random}`);
//     }
// }Guess(5)

//+ve or -ve or zero

// var a=0
// if(a>=0){
//     if(a==0){
//         console.log(a,"Zero");
//     }
//     else{
//         console.log(a,"+ve"); 
//     }
// }
// else{
//     console.log(a,"-ve");
// }
// //function for to find +ve or -ve or zero
// function PNZ(a)
// {
//     (a>=0)&&(a==0)?console.log(a,"Zero"):(a>0)?console.log(a,"+ve"):console.log(a,"-ve")
    
// }
// PNZ(-5)

//Odd or Even
//  var a=10
//  if(a%2==0){
//     console.log(a,"Even");
//  }
//  else{
//     console.log(a,"Odd");
    
//  }
// //Function for odd or Even
// function EOO(a){
//     if(a%2==0){
//     console.log(a,"Even");
//  }
//  else{
//     console.log(a,"Odd");
    
//  }
// }EOO(5)

//Largest of Three
// var a=100
// var b=200
// var c=30
// if((a>b)&&(a>c)){
//     console.log(a,"a is big");
// }
// else if((b>a)&&(b>c)){
//     console.log(b,"b is big");
// }
// else{
//     console.log(c,"c is big");
// }

// //Function for biggest of three
// function Big(a,b,c){
//     (a>b)&&(a>c)?  console.log(a,"a is big"):(b>a)&&(b>c)? console.log(b,"b is big"):  console.log(c,"c is big")
// }Big(11,20,3)

//Prime or Not using count variable
//  var a=4
//  var count=0
//  for(i=1;i<=a;i++){
//     if(a%i==0){
//         count++
//     }
//  }
//  if(count==2){
//     console.log(a,"Prime");
//  }
//  else{
//     console.log(a,"Not Prime");
    
//  }

//  //function for prime or not
//  function Prime(a){
//     var isPrime=true
//     for(i=2;i<a;i++){
//         if(a%i==0){
//             isPrime=false
//         }
//      }
//      if(isPrime){
//         console.log(a,"Prime");
//      }
//      else{
//         console.log(a,"Not prime");
//      }
//     }Prime(2)
//     Prime(4)

//Prime in interval
// function Prime(b,c){
//     for(a=b;a<=c;a++){
//         var isPrime=true
//     for(i=2;i<a;i++){
//         if(a%i==0){
//             isPrime=false
//         }
//      }

//      if(isPrime){
//         console.log(a,"Prime");
        
//      }
//      else{
//         console.log(a,"Not prime");
        
//      }
//     }
    
//     }Prime(10,50)

//Multiplication table
// var a=10
// for(var i=1;i<=10;i++){
//     console.log(`${a}*${i}=${a*i}`);
// }
// //Function for Multiplication table
// function Multiplication(a){
//     for(var i=1;i<=10;i++)
//         {
//     console.log(`${a}*${i}=${a*i}`);
//         }
// }Multiplication(17)

//Armstrong number
// const a=1630
// var b=a.toString()
// var temp=a
// var sum=0
// var rem=0
// while(temp>0){
//     rem=temp%10
//     sum+=rem**b.length
//     temp=Math.floor(temp/10)
// }
// if(sum==a){
//     console.log(a,"Armstrong");   
// }
// else{
//     console.log(a,"Not Armstrong");
    
// }

//function for armstrong

// function Arm(num){
// var b=num.toString()
// var temp=num
// var sum=0
// var rem=0
// while(temp>0){
//     rem=temp%10
//     sum+=rem**b.length
//     temp=Math.floor(temp/10)
// }
// if(sum==num){
//     console.log(num,"Armstrong");   
// }
// else{
//     console.log(num,"Not Armstrong");
    
// }
//}Arm(150)

//function for Armstrong in Interval

// function Arm(num1,num2){
//     var n1=num1.toString()
//     var n2=num2.toString()
//     if(n1.length>=3 && n2.length>=3)
//     {
//             for(i=num1;i<=num2;i++)
//         {
//             var b=i.toString()
//             var temp=i
//             var sum=0
//             var rem=0
//             while(temp>0){
//                 rem=temp%10
//                 sum+=rem**b.length
//                 temp=Math.floor(temp/10)
//                     }
//             if(sum==i){
//                 console.log(i,"Armstrong");   
//                     }
//             else{
//                 console.log(i,"Not Armstrong");
//             }
//         }
//     }
//     else{
//         console.log("Enter more than 3 Digit number");
        
//     }
// }Arm(100,2000)

//Simple calculator

// var operator="*"
// var a=10
// var b=20
// switch(operator){
//     case "+":
//         console.log(a+b,"Addition");
//         break;
//     case "-":
//         console.log(a-b,"Subtraction"); 
//         break;
//     case "*":
//         console.log(a*b,"Multiplication");
//         break;
//     case "/":
//         console.log(a/b,"Division"); 
//         break;
//     case "%":
//         console.log(a%b,"Modulus");
//         break;
//     default:
//           console.log("Enter valid operator");
//           break;
// }

//function for calculator

// function calculator(val1,val2,operator){
//     switch(operator){
//     case "+":
//         console.log(val1+val2,"Addition");
//         break;
//     case "-":
//         console.log(val1-val2,"Subtraction"); 
//         break;
//     case "*":
//         console.log(val1*val2,"Multiplication");
//         break;
//     case "/":
//         console.log(val1/val2,"Division"); 
//         break;
//     case "%":
//         console.log(val1%val2,"Modulus");
//         break;
//     default:
//           console.log("Enter valid operator");
//           break;
// }
// }calculator(10,20,"*")

//Sum of natural numbers

// var a=5
// var sum=0
// for(i=a;i>=1;i--){
//     sum+=i
// }
// console.log(sum);

// //function for Sum of natural numbers
// function natural(a){
//     var sum=0
// for(i=a;i>=1;i--){
//     sum+=i
// }
// console.log(sum);

// }natural(10)


//Sum of natural numbers with recursion

// function natural(a){
//     if(a>0){
//         return a+natural(a-1)
//     }
//     else{
//         return a;
//     }
// }
// console.log(natural(5));

//Check if the number has the same last digit or not 

// var a=101
// var b=202
// if(a%10==b%10){
//     console.log(a,b," Both has the same last digit");  
// }
// else{
//       console.log(a,b," Both doesn't has the same last digit");
// }
// //Function for check same last digit
// function last(a,b){
//     if(a%10==b%10){
//     console.log(a,b," Both has the same last digit");  
// }
// else{
//       console.log(a,b," Both doesn't has the same last digit");
// }

// }last(101,200)


//palindrome or not
// var a=102
// var value=a.toString()
// if(value.split("").reverse().join("")==value)
//     {
//     console.log(a," is palindrome");
// }
// else{
//      console.log(a,"is Not a palindrome");
// }
// //function for checking palindrome
// function palindrome(a){
// var value=a.toString()
// if(value.split("").reverse().join("")==value)
//     {
//     console.log(a," is palindrome");
// }
// else{
//      console.log(a,"is Not a palindrome");
// }
// }palindrome(101)

//Replace a string 

// var a="hello World"
// console.log(a.replace("hello","bye"));

// //function for replace a string

// function rep(a){
//     console.log(a.replace("hello","bye"));
// }rep("hello world")

//Replace single characters in a string using Splice
// var a="hello"
// var val=a.split("")
// var result=val.splice(1,2,"a","b")
// console.log(val);

//Reverse a string
// var a="hello World"
// console.log(a.split("").reverse().join(""));

// // function for reverse a string
// function rev(a){
// var val=a.toString()
// console.log(val.split("").reverse().join(""));
// }rev(102)

//Create object 

// var obj={
//     name:"hello"
// }
// obj.age=100
// console.log(obj);

//Remove property from object
// var obj={
//     name:"hello",
//     age:100
// }
// delete obj.name
// console.log(obj);

//Multiline string

// var a="hello \nWorld"
// console.log(a);

//substring
// var a="Hello"

// var c=Math.floor(Math.random()*10)
// if(c>=3){
//     console.log(a.substring(0,c));
// }

//


