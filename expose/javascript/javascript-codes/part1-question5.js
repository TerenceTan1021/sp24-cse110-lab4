function sumValues(num1, num2, add){

    if(add){

        const result = 0;
        
        result = num1 + num2;

        console.log('value added: ', result);
    } else return;

    console.log('final result: ', result);
}
sumValues(10, 10, true);

//Answer returns an error, because you cannot reassign a const value
//so result will always stay a zero