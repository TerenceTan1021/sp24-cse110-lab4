# DevTools- Debugging

**Question 1**

The problem is that in the function printSum when getting the Input value. It converts the number you type into a string instead of a number. To finx it we would need it to grab the input as a Int.

**Question 2**

To fix the problem for line 5 and 6 of the file

```
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
```

we want to add in .valueAsNumber for both to

```
let num1 = document.getElementById("num1").valueAsNumber;
let num2 = document.getElementById("num2").valueAsNumber;
```
!["fix page"](screenshots/fix.png)

