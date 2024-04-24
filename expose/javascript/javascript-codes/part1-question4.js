function sumValues(num1, num2, add){

    if(add){

        var result = 0;
        
        result = num1 + num2;

        console.log('value added: ', result);
    } else return;

    console.log('final result: ', result);
}
sumValues(10, 10, true);

//Answer: line 13 will print an error. Thast because let variables are within the scoped
//til the closing bracket so it works until line 10