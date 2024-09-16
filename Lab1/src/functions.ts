function getNumberAndString(userString: string, userNumber: number = 18): string {
    return 'Your string: ' + userString + ' and your number: ' + userNumber;
}

//function parameters(getNumberAndString)
let userString: string = 'GGGG';
let userNumber: number = 44;
console.log(getNumberAndString(userString));