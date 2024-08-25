// Print numbers from 1 to 10:
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        document.write(i + "");
    }
}
// Print the odd numbers less than 100:
function printOddNumbers() {
    for (let i = 1; i < 100; i += 2) {
        document.write(i + " ");
    }
}
// Print the multiplication table with 7:
function printMultiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        document.write("7 * " + i + " = " + 7 * i + "<br>");
    }
}
// Print all the multiplication tables with numbers from 1 to 10 
function printAllMultiplicationTables() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            document.write(i + " * " + j + " = " + i * j + "<br>");
        }
    }
}
// Calculate the sum of numbers from 1 to 10
function calculateSum() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    document.write("Sum = " + sum);
}
// Calculate 10!
function calculateFactorial() {
    let factorial = 1;
    for (let i = 1; i <= 10; i++) {
        factorial *= i;
    }
    document.write("10! = " + factorial);
}
// Calculate the sum of odd numbers greater than 10 and less than 30
function calculateSumOfOddNumbers() {
    let sum = 0;
    for (let i = 11; i < 30; i += 2) {
        sum += i;
    }
    document.write("Sum = " + sum);
}
// Create a function that will convert from Celsius to Fahrenheit 
function celsiusToFahrenheit(celsius) {
    return document.write(celsius * 9 / 5 + 32);    
}
// Create a function that will convert from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return document.write((fahrenheit - 32) * 5 / 9);   
}
// Calculate the sum of numbers in an array of numbers 
function calculateSumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    document.write("Sum = " + sum);
}
// Calculate the average of numbers in an array of numbers
function calculateAverageOfArray(numbers) {
    return calculateSumOfArray(numbers) / numbers.length;
}
// Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers 
function getPositiveNumbers(numbers) {
    let positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        }
    }
    document.write(positiveNumbers);
}
// Find the maximum number in an array of numbers 
function findMaxNumber(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    document.write("Max = " + max);
}
// Print the first 10 Fibonacci numbers without recursion 
function printFibonacciNumbers() {
    let n1 = 0, n2 = 1, n3;
    document.write(n1 + " " + n2 + " ");
    for (let i = 2; i < 10; i++) {
        n3 = n1 + n2;
        document.write(n3 + " ");
        n1 = n2;
        n2 = n3;
    }
}
// Create a function that will find the nth Fibonacci number using recursion 
function findNthFibonacciNumber(n) {
    if (n <= 1) {
        return n;
    }
    return findNthFibonacciNumber(n - 1) + findNthFibonacciNumber(n - 2);
}
// Create a function that will return a Boolean specifying if a number is prime 
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
// Calculate the sum of digits of a positive integer number 
function calculateSumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    document.write("Sum = " + sum);
}
// Print the first 100 prime numbers 
function printPrimeNumbers() {
    let count = 0, n = 2;
    while (count < 100) {
        if (isPrime(n)) {
            document.write(n + " ");
            count++;
        }
        n++;
    }
}
// Create a function that will return in an array the first “p” prime numbers greater than “n” 20. Rotate an array to the left 1 position 
function rotateLeft(numbers) {
    let temp = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        numbers[i - 1] = numbers[i];
    }
    numbers[numbers.length - 1] = temp;
}
// Rotate an array to the right 1 position 
function rotateRight(numbers) {
    let temp = numbers[numbers.length - 1];
    for (let i = numbers.length - 1; i > 0; i--) {
        numbers[i] = numbers[i - 1];
    }
    numbers[0] = temp;
}
// Reverse an array 
function reverseArray(numbers) {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        let temp = numbers[left];
        numbers[left] = numbers[right];
        numbers[right] = temp;
        left++;
        right--;
    }
}
// Reverse a string 
function reverseString(str) {
    return str.split("").reverse().join("");
}
// Create a function that will merge two arrays and return the result as a new array 
function mergeArrays(numbers1, numbers2) {
    return numbers1.concat(numbers2);
}
// Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both 
function getUniqueNumbers(numbers1, numbers2) {
    let uniqueNumbers = [];
    for (let i = 0; i < numbers1.length; i++) {
        if (!numbers2.includes(numbers1[i])) {
            uniqueNumbers.push(numbers1[i]);
        }
    }
    for (let i = 0; i < numbers2.length; i++) {
        if (!numbers1.includes(numbers2[i])) {
            uniqueNumbers.push(numbers2[i]);
        }
    }
    return uniqueNumbers;
}
// Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
function getUniqueElements(numbers1, numbers2) {
    let uniqueElements = [];
    for (let i = 0; i < numbers1.length; i++) {
        if (!numbers2.includes(numbers1[i])) {
            uniqueElements.push(numbers1[i]);
        }
    }
    return uniqueElements;
}


