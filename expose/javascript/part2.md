- **Question 1**

<hr>

line 12 will produce the output of _3_, because in the for loop we are iterating 3 elements, in which the prices array in line 19 contain 3 elements, so starting from i = 0, in the for loop. it will stop when i reaches 3. 

<br>

**Question 2**

<hr>

line 13 will produce the output of _150_. Because you call it outside the loop, the output would be the very last element in the array from which it would be discounted. the last element happened to be 300 with a discount of 50%, thus the last assigned discountedPrice would be 150

<br>

**Question 3**

<hr>

line 14 produces the output _150_. I think it is the same type of reasoning as the last question. In the for loop it uses Math.round() which would round it to the nearest whole number, and since we are using the last element discountedPrice at 150 and multiply it by 100 and divide by it, we get 150 and round it the the nearest whole number. Which again is 150 and that would be the last assigned element.

<br>

**Question 4**

<hr>

although there is no output for this function, it does structure the array of the discounted prices, which I am guessing is when you are creating test cases, if it doesnt match the array then it would fail.

<br>

**Question 5**

<hr>

line 12 will produce an error, stating that _i_ is not defined. That is because where you are calling it is not within the for loop which holds the _let i_. so to see how many elements are in the array you would need to put the function into the for loop.

<br>

**Question 6**

<hr>

line 13 will produce the same error, with it not being defined. And that is because discountedPrice labeled by _let_ is within the for loop

<br>

**Question 7**

<hr>

line 14 will produce the output _150_. Since the finalPrice inside the for loop is not labeled with a _let_ it is able to carry on that answer to the _let finalPrice = 0;. So with the last element being assigned to it, and it being within the _let_ scope. an output of _150+ is produce.

<br>

**Question 8**

<hr>

although there is no output for this function, it does structure the array of the discounted prices, which I am guessing is when you are creating test cases, if it doesnt match the array then it would fail.

<br>

**Question 9**

<hr>

line 11 will produce the same error, as _i_ is labeled with a _let_ and since the function isn't within the for loop _i_ would not be defined

<br>

**Question 10**

<hr>

line 12 will return with an output of _3_. Which is the length of the prices array

<br>

**Question 11**

<hr>

although there is no output for this function, it does structure the array of the discounted prices, which I am guessing is when you are creating test cases, if it doesnt match the array then it would fail.

<br>

**Question 12**

<hr>

```
A. console.log(student.name);

B. console.log(student['Grad Year']);

C. student.greeting();

D. console.log(student['Favorite Teacher'].name);

E. console.log(student.courseLoad[0]);
```
<br>

**Question 13**

<hr>

A. '3' + 2 ='32'

- Since you are concatinating with another string

B. '3' - 2 = 1

- when you use "-" 3 will be converted into a number and subtracted

C.3 + null = 3

- null will be treated as a 0

D. '3' + null  = '3null'

- since 3 is a string, null will be converted to a string

E. true + 3 = 4

- true will be treated as a 1 false as a 0

F. false + null = 0

- same reasoning  as previously, false will be treated as a 0 and so does null

G. '3' + undefined = '3undefined'

- we would force undefined to be a string since we use "+" operator

H. '3' - undefined = NaN

- 3 cannot be converted to a valid number

<br>

**Question 14**

<hr>

A.‘2’ > 1 = true

- string 2 will be converted to a number

B.‘2’ < ‘12’ = true

- operation will be done by lexicographically character

C.2 == ‘2’ = true

- string 2 will be converted to a number

D.2 === ‘2’ = false

- === is strictly equal a number is not the same as a string

E.true == 2 = false

- true is labeled as a 1

F.true === Boolean(2) = true

- Boolean(2) is also true

<br>

**Question 15**

<hr>

"==" will convert one operand to match the other before comparison
"===" means strictly equal

<br>

**Question 16**

<hr>

```
for(let car in statistics){
    //prints out all cars stats if the name starts with an r
    if(car[0] === 'r'){
        console.log(car + ':' + statistics[car] + ' ' + 'starts with r');
    }

    //if the value of the property is an odd number
    if(statistics[car] % 2 != 0){
        console.log(car + ':' + statistics[car] + ' ' + 'odd number');
    }
}
```
<br>

**Question 17**

<hr>

_Output_ : [2, 4, 6]

What this function does is double the elements inside the array. In the for loop it will go through 3 times, since we have 3 elements in our array. So everytime a for loop iterates it adds the element to the newArr we have created. and that element is called into the function doSomething which will return a value multiplied by 2. After the for loop is done, the new created array will store all the elements double its original value.

<br>

**Question 18**

<hr>

```
function EverySecond(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
//delay of 1000 millisecond/ every second
setInterval(EverySecond, 1000);
```

<br>

**Question 19**

<hr>

_Output_(inorder): 1 4 3 2.

number 1 and 4 will be outputed immediately. The setTimeout in Javascript is set to execute later after everything else is executed, thus being behind 4, even when the delay is 0. 2 took a little longer, and is outputed after a second after every thing else was done. 

