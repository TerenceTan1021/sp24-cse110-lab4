function sumValues(num1, num2, add){

    if(add){

        let result = 0;
        
        result = num1 + num2;

        console.log('value added: ', result);
    } else return;

    console.log('final result: ', result);
}
sumValues(10, 10, true);

//Answer: line 9 will print the value 20
