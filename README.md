# JavaScript_Journal

//////////////////////////////////////////
// Personal Notes from Ron Wollschläger //
//////////////////////////////////////////  


// in-line comment  
// Hello iCoders!


// Multi-line comment  
/*  
    I love my wife,
    because she doesn't
    understand anything I do,
    but still supports me!
*/


// Data types:
/* 
    1. Undefined: Data type is not defined
    2. Null: Nothing
    3. Boolean: True or false
    4. String: Text
    5. Symbol: primitive value, that is unique
    6. Number: Number
    7. Object: Store different key values
*/


// Variables
/*
    Variables can store data. Like a label for a box with stuff you put inside.
    Variables are var, let and const.

    var myName = "Ron";
        You can change it later with:
        myName = "Chris";
    Var is going to be used for your whole program.
    
    let ourName = "iCodeThis";
    Let will only be used within the scope, where you declare that.

    const pi = 3.14;
    Const is a variable that will and can never change.

*/


// Storing Values with assignment operators
/*
    There is a difference between declaring or assigning variables.

    var a;      <-- declaring
    var b = 2;  <-- assigning

    console.log() let you see the data, inside the console of your browser.

    In this case console.log(b) would show you a 2 in your console.
*/


// Case sensitivity in variables
/*
    Variables and function names in JavaScript are Case sensitive.
    That means that capitalization matters.

    Wrong                                   Right
    var IlOvEpIzZa;                         var iLovePizza;
    iLoVePiZzA = 10;                        iLovePizza = 10;
    /\                                      /\
    |                                       |
    In this case the variable               In this case the variable
    will not be assigned correctly.         will be assigned correctly.
                                            This is called Camel Case
*/


// Adding numbers with '+'                   // Subtraction numbers with '-'
/*
    var sum = 10 + 10;                      var difference = 45 - 33;
    console.log(sum)                        console.log(difference)

    The console will show you "20".         The console will show you "12".
*/


// Multiplying numbers with '*'             // Dividing numbers with '/'
/*
    var product = 8 * 10;                   var quotient = 66 / 33;
    console.log(product)                    console.log(quotient)

    The console will show you "80".         The console will show you "2".
*/


// Incrementing numbers (add 1)             // Decrementing numbers (subtract 1)
/*
    To increment a number means             To decrementing a number means
    to add 1 to it.                         to subtract 1 from it.

    var myVar = 87;                         var myVar = 87;
    myVar++;   ->   myVar = 88;             myVar--;   ->   myVar = 86;
    /\                                      /\
    |                                       |
    This will increment or add 1            This will decrement or subtract
    to my variable.                         1 from my variable.
*/


// Decimal numbers
/*
    Decimal numbers are sometimes referred
    to as floating point numbers or floats.

    Every number with a '.' in it, is a
    decimal point number.

    var myDecimal = 2.746;  <- decimal number
*/


// Finding a remainder
/*
    The remainder operator looks like a '%' sign,
    and it gives the remainder of a division of tow numbers.
    
    var remainder;
    remainder = 11 % 3;
        11 divided by 3 is 9
        11-9 = 2
    console.log(remainder) -> 2

    This operator is often used to define if something is even
    or odd. If you can divide a number by 2 and the remainder is
    0, that means the number is even.
*/


// Compound assignment with augmented addition                  // Compound assignment with augmented subtraction
/*
    var a = 3;                                                  var a = 11;
    var b = 17;                                                 var b = 9;
    var c = 12;                                                 var c = 3;

    a = a + 12;     ->      a += 12;                            a = a - 6;      ->      a -= 6;
    b = 9 + b;      ->      b += 9;                             b = b - 15;     ->      b -= 15;
    c = c + 7;      ->      c += 7;                             c = c - 1;      ->      c -= 1;
*/


// Compound assignment with augmented multiplication            // Compound assignment with augmented division
/*
    var a = 3;                                                  var a = 11;
    var b = 17;                                                 var b = 9;
    var c = 12;                                                 var c = 3;

    a = a * 12;     ->      a *= 12;                            a = a / 6;      ->      a /= 6;
    b = 9 * b;      ->      b *= 9;                             b = b / 15;     ->      b /= 15;
    c = c * 7;      ->      c *= 7;                             c = c / 1;      ->      c /= 1;
*/


// Declare string variables
/*
    var firstName = "Ron";
    var lastName = "Wollschläger";
*/


// Escaping literal quotes in strings
/*
    You can not use double quote inside an double quote.
    To tell JavaScript that this is a normal quotation mark, you
    need to put backslash(\) in front of an quotation mark(").

    Alternatively you can use double quote(") inside an single quote(').


    Wrong
    var myString = "I am a "double quoted" string inside "double quotes"";

    Right
    var myString = "I am a \"double quoted\" string inside \"double quotes\"";

    Right - Alternative
    var myString = 'I am a "double quoted" string inside "double quotes"';    
*/


// Escape sequences in strings
/*
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
*/


// Concatenating strings with plus operator
/*
    var myString = "I come first. " + "I come second.";
    console.log(myString)       ->      "I come first. I come second."

    Don't forget to add a space at the end of your first string.
*/


// Concatenating strings with plus equals operator
/*
    Just like using numbers, '+=' means that you take whatever
    is on the end here and add it to the variable.

    var myString = "I come first. ";
    myString += "I come second.";
    console.log(myString)       ->      "I come first. I come second."
*/


// Constructing strings with variables
/*
    You can concatenate strings together with variables.

    var ourName = "iCodeThis";
    var ourString = "Hello, our name is " + ourName + ", how are you?";
    console.log(ourString)       ->      "Hello, our name is iCodeThis, how are you?"
*/


// Appending variables to strings
/*
    You can append variables to strings with this += operator.

    var anAdjective = "awesome!";
    var ourString = "iCodeThis is ";
    ourString += anAdjective;
    console.log(ourString)       ->      "iCodeThis is awesome!"
*/


// Find length of string
/*
    To find the length of a string, we use
    the '.length' property to find the length.

    var firstNameLength = 0;
    var firstName = "Ron";

    firstNameLength = firstName.length;
    console.log(firstNameLength)       ->      "3"
*/


// Bracket notation to find first character in string
/*
    Bracket notation is a way to get a character
    at a specific index within a string.

    var firstLetterOfFirstName = "";
    var firstName = "Ron";

    Computer starts to count with 0 and not 1 like we do.
    This is called "Zero based indexing". In this case "R"
    is 0, "o" is 1 and "n" is 2.

    firstLetterOfFirstName = firstName[0];
    console.log(firstLetterOfFirstName)     ->      "R"
*/


// String Immutability
/*
    Strings are immutable, meaning they can
    not be altered once created. This does not
    mean they can not be changed, just that the
    individual characters of a string literal
    can not be changed. 

    var myString = "Jello World";

    Wrong / Not possible
    myString[0] = "H";

    Right / Possible
    myString = "Hello World";
    console.log(myString)       ->      "Hello World"
*/


// Bracket notation to find Nth character in string
/*
    You can use bracket notation to get any character
    position in a string.

    var firstName = "Ron";
    var secondLetterOfFirstName = firstName[1];
    console.log(secondLetterOfFirstName)        ->      "o"
*/


// Bracket notation to find last character in string
/*
    You can also use bracket notation
    to find the last letter in a string.

    var firstName = "Ron";
    var lastLetterOfFirstName = firstName[firstName.length - 1];
    console.log(lastLetterOfFirstName)      ->      "n"

    We are doing -1 because the computer starts to count with 0.
    That means R = 0, o = 1, n = 2. With '.length' we get "3",
    because it start with 1. We can fix it, when we subtract it by 1.
*/


// Bracket notation to find Nth-to-Last character in string
/*
    To get the second last letter or more, you can simply subtract
    more, depend on however much you want from the length of the sting.

    var firstName = "Ron";
    var lastLetterOfFirstName = firstName[firstName.length - 3];
    console.log(lastLetterOfFirstName)      ->      "R"
*/


// Exercise - Word Blanks
/*
    function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
        var result = "";
        result += "My " + myNoun + " is " + myAdjective + " and " + myVerb + " " + myAdverb + ".";
        return result;
    }

    console.log(wordBlanks("dog", "big", "ran", "quickly"))
*/


// Store multiple values with arrays
/*
    Arrays allow you to store several pieces of data in one place.

    var ourArray = ["Ron", 33, "Germany"];
    console.log(ourArray[2])        ->      "Germany"
*/


// Nested arrays
/*
    When one of the elements in an array is another
    array, that's called a nested array or multidimensional array.

    var ourArray = [["the universe, 42"], ["everything", 101010]]
*/


// Access array data with indexes
/*
    var ourArray = [50, 60, 70];
        0 = 50, 60 = 1, 70 = 2

    var ourData = ourArray[1]
    console.log(ourData)        ->      "60"
*/


// Modify array data with indexes
/*
    You can use array indexes to modify arrays.

    var ourArray = [18, 64, 99];
    ourArray[1] = 45;
    console.log(ourArray)       ->      18, 45, 99
*/


// Access multi-dimensional arrays
/*
    You can also use bracket notation to select an element
    in a multi-dimensional or array of arrays.

    var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
    var myData = myArray[0][0];
    console.log(myData)     ->      "1"

    var myData = myArray[2][1];
    console.log(myData)     ->      "8"

    var myData = myArray[3][0][2];
    console.log(myData)     ->      "12"
*/


// Manipulate array with push()
/*
    You can have pinned data to the end of an
    array with the push function.

    var ourArray = ["Ron", "Florin", "Chris"];
    ourArray.push("Christiano", "skinnyK");
    // ourArray now equals ["Ron", "Florin", "Chris", "Christiano", "skinnyK"]
    ourArray.push(["Bambi", "Sandra"]);
    console.log(ourArray)       ->      ["Ron", "Florin", "Chris", "Christiano", "skinnyK", ["Bambi, "Sandra"]]
*/


// Manipulate Arrays with pop()
/*
    We can remove an item from an array
    with the pop() function here.

    var ourArray = [1,2,3];
    var removedFromOurArray = ourArray.pop();
    // removedFromOurArray now equals 3 and ourArray now equals [1,2]
*/


// Manipulate Arrays with shift()
/*
    The shift() function is very similar to the pop function
    except it removes the first element of the array instead
    of the final element.

    var ourArray = ["Ron", "Peter", ["cat"]];
    var removedFromOurArray = ourArray.shift();
    //removedFromOurArray now equals "Ron" and ourArray
    now equals ["Peter", ["cat"]]
*/

// Manipulate arrays with unshift()
/*
    The unshift() function is similar to the push() array function.
    While push() adds an element to the end of the array,
    unshift() adds at element to the beginning of the array.

    var ourArray = ["Ron", "Minion", "JJ"];
    ourArray.unshift("Florin");
    console.log(ourArray)
*/
