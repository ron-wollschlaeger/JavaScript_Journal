# Ron's JavaScript_Journal
Learning with freeCodeCamp.org -> https://www.youtube.com/watch?v=PkZNo7MFNFg&t=2940s

## In-line comment  
    // Hello iCoders!

## Multi-line comment  
    /*  
        I love my wife,
        because she doesn't
        understand anything I do,
        but still supports me!
    */


## Data types:
* Undefined: Data type is not defined
* Null: Nothing
* Boolean: True or false
* String: Text
* Symbol: primitive value, that is unique
* Number: Number
* Object: Store different key values


## Variables
Variables can store data. Like a label for a box with stuff you put inside. Variables are var, let and const.

    var myName = "Ron";
        You can change it later with:
        myName = "Chris";
    // Var is going to be used for your whole program.
    
    let ourName = "iCodeThis";
    // Let will only be used within the scope, where you declare that.
    
    const pi = 3.14;
    // onst is a variable that will and can never change.


## Storing Values with assignment operators
There is a difference between declaring or assigning variables.

    var a;      <-- declaring
    var b = 2;  <-- assigning
    
    console.log() //let you see the data, inside the console of your browser.
    
In this case console.log(b) would show you a 2 in your console.


## Case sensitivity in variables
Variables and function names in JavaScript are Case sensitive. That means that capitalization matters.

    Wrong                                   Right
    var IlOvEpIzZa;                         var iLovePizza;
    iLoVePiZzA = 10;                        iLovePizza = 10;
    /\                                      /\
    |                                       |
    In this case the variable               In this case the variable
    will not be assigned correctly.         will be assigned correctly.
                                            This is called Camel Case


## Adding numbers with '+'
    var sum = 10 + 10;
    console.log(sum)
    
    The console will show you "20".


## Subtraction numbers with '-'
    var difference = 45 - 33;
    console.log(difference)

    The console will show you "12".


## Multiplying numbers with '*'
    var product = 8 * 10;
    console.log(product)

    The console will show you "80".


## Dividing numbers with '/'
    var quotient = 66 / 33;
    console.log(quotient)

    The console will show you "2".


## Incrementing numbers (add 1)
To increment a number means to add 1 to it.

    var myVar = 87;
    myVar++;   ->   myVar = 88;
    /\
    |
    This will increment or add 1
    to my variable.


## Decrementing numbers (subtract 1)
To decrementing a number means to subtract 1 from it.

    var myVar = 87;
    myVar--;   ->   myVar = 86;
    /\
    |
    This will decrement or subtract
    1 from my variable.


## Decimal numbers
Decimal numbers are sometimes referred to as floating point numbers or floats.

    Every number with a '.' in it, is a
    decimal point number.

    var myDecimal = 2.746;  <- decimal number


## Finding a remainder
The remainder operator looks like a '%' sign, and it gives the remainder of a division of tow numbers.
    
    var remainder;
    remainder = 11 % 3;
        11 divided by 3 is 9
        11-9 = 2
    console.log(remainder) -> 2

This operator is often used to define if something is even or odd. If you can divide a number by 2 and the remainder is 0, that means the number is even.


## Compound assignment with augmented addition
    var a = 3;
    var b = 17;
    var c = 12;

    a = a + 12;     ->      a += 12;
    b = 9 + b;      ->      b += 9;
    c = c + 7;      ->      c += 7;


## Compound assignment with augmented subtraction
    var a = 11;
    var b = 9;
    var c = 3;

    a = a - 6;      ->      a -= 6;
    b = b - 15;     ->      b -= 15;
    c = c - 1;      ->      c -= 1;


## Compound assignment with augmented multiplication
    var a = 3;
    var b = 17;
    var c = 12;

    a = a * 12;     ->      a *= 12;
    b = 9 * b;      ->      b *= 9;
    c = c * 7;      ->      c *= 7;


## Compound assignment with augmented division
    var a = 11;
    var b = 9;
    var c = 3;

    a = a /6;      ->    a /= 6;
    b = b / 15;    ->    b /= 15;
    c = c / 1;     ->    c /= 1;


## Declare string variables
    var firstName = "Ron";
    var lastName = "Wollschläger";


## Escaping literal quotes in strings
You can not use double quote inside an double quote. To tell JavaScript that this is a normal quotation mark, you need to put backslash(\) in front of an quotation mark("). Alternatively you can use double quote(") inside an single quote(').

    Wrong
    var myString = "I am a "double quoted" string inside "double quotes"";

    Right
    var myString = "I am a \"double quoted\" string inside \"double quotes\"";

    Right - Alternative
    var myString = 'I am a "double quoted" string inside "double quotes"';    


## Escape sequences in strings
CODE    OUTPUT
\'      single quote
\"      double quote
\\      backslash
\n      newline
\r      carriage return
\t      tab
\b      backspace
\f      form feed

    var myString = "FirstLine\n\t\\SecondLine\nThirdLine";
    console.log(myString)       ->      Will show three different lines.


## Concatenating strings with plus operator
    var myString = "I come first. " + "I come second.";
    console.log(myString)       ->      "I come first. I come second."

Don't forget to add a space at the end of your first string.


## Concatenating strings with plus equals operator
Just like using numbers, '+=' means that you take whatever is on the end here and add it to the variable.

    var myString = "I come first. ";
    myString += "I come second.";
    console.log(myString)       ->      "I come first. I come second."


## Constructing strings with variables
You can concatenate strings together with variables.

    var ourName = "iCodeThis";
    var ourString = "Hello, our name is " + ourName + ", how are you?";
    console.log(ourString)       ->      "Hello, our name is iCodeThis, how are you?"


## Appending variables to strings
You can append variables to strings with this += operator.

    var anAdjective = "awesome!";
    var ourString = "iCodeThis is ";
    ourString += anAdjective;
    console.log(ourString)       ->      "iCodeThis is awesome!"


## Find length of string
To find the length of a string, we use the '.length' property to find the length.

    var firstNameLength = 0;
    var firstName = "Ron";

    firstNameLength = firstName.length;
    console.log(firstNameLength)       ->      "3"


## Bracket notation to find first character in string
Bracket notation is a way to get a character at a specific index within a string.

    var firstLetterOfFirstName = "";
    var firstName = "Ron";

    Computer starts to count with 0 and not 1 like we do.
    This is called "Zero based indexing". In this case "R"
    is 0, "o" is 1 and "n" is 2.

    firstLetterOfFirstName = firstName[0];
    console.log(firstLetterOfFirstName)     ->      "R"


## String Immutability
Strings are immutable, meaning they can not be altered once created. This does not mean they can not be changed, just that the individual characters of a string literal can not be changed. 

    var myString = "Jello World";

    Wrong / Not possible
    myString[0] = "H";

    Right / Possible
    myString = "Hello World";
    console.log(myString)       ->      "Hello World"


## Bracket notation to find Nth character in string
You can use bracket notation to get any character position in a string.

    var firstName = "Ron";
    var secondLetterOfFirstName = firstName[1];
    console.log(secondLetterOfFirstName)        ->      "o"


## Bracket notation to find last character in string
You can also use bracket notation to find the last letter in a string.

    var firstName = "Ron";
    var lastLetterOfFirstName = firstName[firstName.length - 1];
    console.log(lastLetterOfFirstName)      ->      "n"

    We are doing -1 because the computer starts to count with 0.
    That means R = 0, o = 1, n = 2. With '.length' we get "3",
    because it start with 1. We can fix it, when we subtract it by 1.


## Bracket notation to find Nth-to-Last character in string
To get the second last letter or more, you can simply subtract more, depend on however much you want from the length of the sting.

    var firstName = "Ron";
    var lastLetterOfFirstName = firstName[firstName.length - 3];
    console.log(lastLetterOfFirstName)      ->      "R"


## Exercise - Word Blanks
    function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
        var result = "";
        result += "My " + myNoun + " is " + myAdjective + " and " + myVerb + " " + myAdverb + ".";
        return result;
    }

    console.log(wordBlanks("dog", "big", "ran", "quickly"))


## Store multiple values with arrays
Arrays allow you to store several pieces of data in one place.

    var ourArray = ["Ron", 33, "Germany"];
    console.log(ourArray[2])        ->      "Germany"


## Nested arrays
When one of the elements in an array is another array, that's called a nested array or multidimensional array.

    var ourArray = [["the universe, 42"], ["everything", 101010]]


## Access array data with indexes
    var ourArray = [50, 60, 70];
        0 = 50, 60 = 1, 70 = 2

    var ourData = ourArray[1]
    console.log(ourData)        ->      "60"


## Modify array data with indexes
You can use array indexes to modify arrays.

    var ourArray = [18, 64, 99];
    ourArray[1] = 45;
    console.log(ourArray)       ->      18, 45, 99


## Access multi-dimensional arrays
You can also use bracket notation to select an element in a multi-dimensional or array of arrays.

    var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
    var myData = myArray[0][0];
    console.log(myData)     ->      "1"

    var myData = myArray[2][1];
    console.log(myData)     ->      "8"

    var myData = myArray[3][0][2];
    console.log(myData)     ->      "12"


## Manipulate array with push()
You can have pinned data to the end of an array with the push function.

    var ourArray = ["Ron", "Florin", "Chris"];
    ourArray.push("Christiano", "skinnyK");
    // ourArray now equals ["Ron", "Florin", "Chris", "Christiano", "skinnyK"]
    ourArray.push(["Bambi", "Sandra"]);
    console.log(ourArray)       ->      ["Ron", "Florin", "Chris", "Christiano", "skinnyK", ["Bambi, "Sandra"]]


## Manipulate Arrays with pop()
We can remove an item from an array with the pop() function here.

    var ourArray = [1,2,3];
    var removedFromOurArray = ourArray.pop();
    // removedFromOurArray now equals 3 and ourArray now equals [1,2]


## Manipulate Arrays with shift()
The shift() function is very similar to the pop function except it removes the first element of the array instead of the final element.

    var ourArray = ["Ron", "Peter", ["cat"]];
    var removedFromOurArray = ourArray.shift();
    //removedFromOurArray now equals "Ron" and ourArray now equals ["Peter", ["cat"]]


## Manipulate arrays with unshift()
The unshift() function is similar to the push() array function. While push() adds an element to the end of the array, unshift() adds at element to the beginning of the array.

    var ourArray = ["Ron", "Minion", "JJ"];
    ourArray.unshift("Florin");
    console.log(ourArray)
    ourArray = ["Florin", "Ron", "Minions", "JJ];


## Shopping List
Another example of nested arrays:
    var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]]


## Write reusable code with functions
Functions allow us to create reusable code in Javascript.

    Function    Function name   Parenthesis (Where you can pass information into the parenthesis)
    |             |             |
    \/            \/            \/ 
    function ourReusableFunction() { <- Opening curly brackets (Start of a function, when called)
        console.log("Hello, World");
    } <- Closing curly brackets (End of a function, when called)

    ourReusableFunction();      <- calling a function


## Passing Values to Functions with Arguments
Parameters are variables that act as place holders for the values that are to be input to a function when it is called.

                                 Parameters: a and b (Can be anything)
                                  |
                                  \/
    function our FunctionWithArgs(a, b) {
        console.log(a - b);
    }
    ourFunctionWithArgs(10, 5); // Outputs 5


## Global Scope and Functions
Scope refers to the visibility of variables. Variables which are defined outside of a function block have global scope.
Global scope means they can be seen everywhere in your Javascript code.

    var varOutsideFunction = 1;     <- can be seen everywhere
    let letOutsideFunction = 2;     <- can be seen everywhere
    const constOutsideFunction = 3; <- can be seen everywhere

    function rndFunction() {
    var varInsideFunction = 1;      <- can only be seen inside the function
    let letInsideFunction = 2;      <- can only be seen inside the function
    const constInsideFunction = 3;  <- can only be seen inside the function
    }

This will get updated, later on, when I learn more about it.


## Local Scope and Function
Variables which are declared within a function as well as the function parameters have local scope.

    function myLocalScope() {
        var myVar = 5;
        console.log(myVar);
    }
    myLocalScope(); // Output: 5

    console.log(myVar); // Output: myVar is not defined


## Global vs. Local Scope in Functions
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedent over the global variable.

Example 01:

    var outerWear = "T-Shirt";

    function myOutfit() {
        return outerWear;
    }

    console.log(myOutfit()); // Output: "T-Shirt"

Example 02:

    function myOutfit() {
        var outerWear = "sweater";
        return outerWear;
    }

    console.log(myOutfit());    // Output: "sweater"
    console.log(outerWear);     // Output: "T-Shirt"


## Return a Value from a Function with Return
You can return a value from a function with this return statement. Return also ends the function.

    function minusSeven(num) {
        return num - 7;
    }

    console.log(minusSeven(10)) // Output: 3


## Understanding Undefined Value Returned from a Function
Functions can have return statements, but they don't have to. In this case, this function adds 3 to the sum variable which is a global variable, because its defined before the function.

    var sum = 0;    <- Global variable
    function addThree() {
        sum = sum + 3;
    }

    function addFive() {
        sum += 5;
    }

In both cases the return would be undefined. So, if you don't soecify a return vaule, the return value is just undefined.

## Next...
