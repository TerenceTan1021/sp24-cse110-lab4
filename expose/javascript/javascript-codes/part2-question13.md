A. '3' + 2 ='32'
Since you are concatinating with another string
B. '3' - 2 = 1
when you use "-" 3 will be converted into a number and subtracted
C.3 + null = 3
null will be treated as a 0
D. '3' + null  = '3null'
since 3 is a string, null will be converted to a string
E. true + 3 = 4
true will be treated as a 1 false as a 0
F. false + null = 0
same as previously
G. '3' + undefined = '3undefined'
we would force undefined to be a string since we use "+" operator
H. '3' - undefined = NaN
3 cannot be converted to a valid number