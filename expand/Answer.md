**Number 1**
<hr>
The problem is in the printSum function where it grabs the number as a string instead.

**Number 2**
<hr>
To fix it we can do 

```
var num1 = document.getElementById("num1").valueAsNumber;
var num2 = document.getElementById("num2").valueAsNumber;
```
