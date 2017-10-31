/*Validate US Telephone Numbers
------------------------------------------------------------------------------
Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
*/

function telephoneCheck(str) {
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return regex.test(str);
}
telephoneCheck("555-555-5555");

/*No repeats please
------------------------------------------------------------------------------
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Permutations
RegExp
*/

function permAlone(str) {
  var possible = 0;

  function recursive(n, letters) {
    if (n == 1) {
    	
      possible = (!(/(.)\1+/g).test(letters.join(""))) ? possible + 1 : possible;
      return;
    }

    for (var i = 0; i < n; i += 1) {
      recursive(n - 1, letters);
      if (n % 2 === 0) {
        swap(i, n - 1);
      } else {
        swap(0, n - 1);
      }
    }

    function swap(k, j) {
      var tmp = letters[k];
      letters[k] = letters[j];
      letters[j] = tmp;
    }
  }

  recursive(str.split("").length, str.split(""));

  return possible;
}

permAlone('aab');

/*Record Collection
------------------------------------------------------------------------------
You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.

Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.

If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.

If value is empty (""), delete the given prop property from the album.

Hints
Use bracket notation when accessing object properties with variables.

Push is an array method you can read about on Mozilla Developer Network.

You may refer back to Manipulating Complex Objects Introducing JavaScript Object Notation (JSON) for a refresher.
*/

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  
  
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

/*Reverse a String
------------------------------------------------------------------------------
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object
String.prototype.split()
Array.prototype.reverse()
Array.prototype.join()
*/

function reverseString(str) {
  var strToArr = str.split('');
  strToArr.reverse();
  str = strToArr.join('');
  return str;
}

reverseString("hello");

/*Factorialize a Number
------------------------------------------------------------------------------
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arithmetic Operators
*/

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  
  // This is it! Recursion!!
  return num * factorialize(num - 1);
}

factorialize(5);

/*Check for Palindromes 
------------------------------------------------------------------------------
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.replace()
String.prototype.toLowerCase()
*/

function palindrome(str) {
    // Good luck!
    var newString = str.replace(/[^0-9a-z]/gi, '');
    newString.toLowerCase();
    newString = newString.toLowerCase();
    var count = 0;
    for(var i=0; i<newString.length; i++){
        //console.log(str[newString.length-1-i]);
        if(newString[i]===newString[newString.length-1-i]){
            count ++;
            
        }
    }
    
    if (count===newString.length){
        return true;
        }else{return false;}
}
palindrome("eye");

/*Find the Longest Word in a String
------------------------------------------------------------------------------
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
String.length
*/

function findLongestWord(str) {
  var arr = str.split(" ");
  var max = 0;
  for(var i = 0; i< arr.length; i++){
     max = max > arr[i].length ? max : arr[i].length;
  }
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

/*Title Case a Sentence
------------------------------------------------------------------------------
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
*/

function titleCase(str) {
  var arr = str.split(" ");
  var newString;
  for(var i = 0; i<arr.length; i++){
    arr[i] = arr[i].toLowerCase();
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  newString = arr.join();
  
  return newString.replace(/,/g , " ");
}

titleCase("I'm a little tea pot");

/*Return Largest Numbers in Arrays
------------------------------------------------------------------------------
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Comparison Operators
*/

function largestOfFour(arr) {
  // You can do this!
  var marr = [];
  
  for(var i = 0; i <  arr.length; i++){
    var max = 0;
    for(var j in arr[i]){  
      max = max > arr[i][j]? max : arr[i][j];
    }
    marr[i] = max;
  }
  return marr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*Confirm the Ending
------------------------------------------------------------------------------
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.substr()
String.prototype.substring()
*/

function confirmEnding(str, target) {
  var tlength = target.length;
  var slength = str.length;
  var count = 0;
  for(var i = 0; i<tlength; i ++){
    if(str.charAt(slength -tlength+i)===target.charAt(i)){
      count++;
    }
  }
    if(count === tlength){
      return true;
    }else return false;
  
}

confirmEnding("Bastian", "n");

/*Repeat a string repeat a string
------------------------------------------------------------------------------
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object
*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  var strl = str;
  if(num >= 0){
    for(var x = 0; x < num - 1; x ++){
          str += strl;
    }
    return str;
  }else return "";
  
}

repeatStringNumTimes("abc", 3);

/*Truncate a string
------------------------------------------------------------------------------
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.slice()
*/

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num <= 3){
    return str.slice(0,num)+"...";
  }else if(str.length>num){
    return str.slice(0,num-3)+"...";
  }else{
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

/*Chunky Monkey
------------------------------------------------------------------------------
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.push()
Array.prototype.slice()
*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var j = 0;
  
  for(var i = 0; i < Math.ceil(arr.length/size)+1; i ++, j += size){
    newArr.push(arr.slice(j,j+size));
  }
  if(newArr[newArr.length-1].length<1){
    newArr.pop();
  }
  
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

/*Slasher Flick 
------------------------------------------------------------------------------
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.slice()
Array.prototype.splice()
*/

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany,arr.length);
}

slasher([1, 2, 3], 2);

/*Mutations
------------------------------------------------------------------------------
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.indexOf()
*/

function mutation(arr) {
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();
  
  for(var i = 0; i < second.length; i++){
    if(first.indexOf(second.charAt(i)) == -1){
      return false;
    }
  }
  
  return true;
}

mutation(["hello", "Hello"]);

/*Falsy Bouncer
------------------------------------------------------------------------------
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.prototype.filter()
*/

function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([false, null, 0, NaN, undefined, ""]);

/*Seek and Destroy
------------------------------------------------------------------------------
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.filter()
*/

function destroyer(arr) {
  
  var args = Array.prototype.slice.call(arguments,1);
  
  return arr.filter(function(value){
    return args.indexOf(value) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/*Where do I belong
------------------------------------------------------------------------------
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.sort()
*/

function getIndexToIns(arr, num) {
  // Find my place inCaesars Cipher this sorted array.
  
  arr.push(num);
  var d = arr.sort(function(a, b) {
    return a - b;
  });
 
  
  return arr.indexOf(num);
  
}

getIndexToIns([2, 5, 10], 15);

/*Caesars Cipher
------------------------------------------------------------------------------
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
*/

function rot13(str) { // LBH QVQ VG!
  var char = [];
  var k ='';
  for(var i = 0; i<str.length; i++){
    char[i] = str.charCodeAt(i);
    
    var isSymb = char[i] > 90 || char[i] <65;
    var isLett = char[i]-13 >= 65;
    
    k += String.fromCharCode(char[i] = isSymb? char[i] : isLett? char[i]-13 : char[i]+13);
  }
  
  return k;
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");

/*Sum All Numbers in a Range
------------------------------------------------------------------------------
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.prototype.reduce()
*/

function sumAll(arr) {
  
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0],arr[1]);
  var diff = max-min;
  
  for(var i = 1; i < diff; i++){
    arr.push(++min);
  }
  
  return arr.reduce( (prev, curr) => prev + curr );
}

sumAll([1, 4]);

/*Diff Two Arrays
------------------------------------------------------------------------------
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()
*/

function diffArray(arr1, arr2) {
  var newArr = [];
  for(var i in arr1){
    if (arr2.indexOf(arr1[i])===-1){
      newArr.push(arr1[i]);
    }
  }
  
  for(var j in arr2){
    if (arr1.indexOf(arr2[j])===-1){
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

/*Roman Numeral Converter
------------------------------------------------------------------------------
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Roman Numerals
Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join()
*/

function convertToRoman(num) {
  num = (""+num).split("");
  var ronum = [["","I","II","III","IV","V","VI","VII","VIII","IX"],
              ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
              ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]],
  roman = "",
  i = num.length>=3? 3 : num.length;

  for(var k = 0; k < i; k++)
    roman = ronum[k][num.pop()] + roman;

  while(num--)
    roman = "M" + roman;
  
  return roman;
}
convertToRoman(99);

/*Wherefore art thou
------------------------------------------------------------------------------
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global Object
Object.prototype.hasOwnProperty()
Object.keys()
*/

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourseKeys = Object.keys(source);
  var count = 0;

  for(var i in collection){
    
    for(var k in sourseKeys){
      if(collection[i].hasOwnProperty(sourseKeys[k])){
    	count++;
      }
    }

    if(count === sourseKeys.length){
      count = 0;
      for(var k in sourseKeys){
        if(source[sourseKeys[k].toString()] === collection[i][sourseKeys[k].toString()])
        	count++;
      }
    }
    
    if(count === sourseKeys.length){
      	arr.push(collection[i]);
      	
      }
    count = 0;
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

/*Search and Replace
------------------------------------------------------------------------------
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.splice()
String.prototype.replace()
Array.prototype.join()
*/

function myReplace(str, before, after) {
	var re = new RegExp(before, "i");
	if(before[0]===before[0].toUpperCase()){
		after = after.charAt(0).toUpperCase() + after.slice(1);
	}
	var newstr = str.replace(re, after);
	
	return newstr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/*Pig Latin
------------------------------------------------------------------------------
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()
*/

function isVowel(c) {
	return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}

function cut(str) {
	var divided = [''];
	for(var c = 0; !isVowel(str[c]); c++){
		divided[0] = divided[0] + str.slice(c, c+1);
		divided[1] = str.slice(c+1, str.length);
	}
	return divided;
}

function translatePigLatin(str) {
	if(isVowel(str[0])){
		return str + "way";
	}else{
		return cut(str)[1] + cut(str)[0] + "ay";
	}
}

translatePigLatin("consonant");

/*DNA Pairing
------------------------------------------------------------------------------
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.push()
String.prototype.split()
*/

function pairElement(str) {
  var DNA = str.split('');
  for(var n in DNA){
    switch (DNA[n]){
      case 'A': DNA[n] = ["A","T"];
        break;
      case 'T': DNA[n] = ["T","A"];
        break;
      case 'C': DNA[n] = ["C","G"];
        break;
      case 'G': DNA[n] = ["G","C"];
        break;
    }
  }
  return DNA;
}

pairElement("GCG");

/*Missing letters 
------------------------------------------------------------------------------
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
*/

function fearNotLetter(str) {
	var charCode = str.charCodeAt(0);
	for(var index in str){
		if (str.charCodeAt(index) === 122){ return undefined; 
		}else if (str.charCodeAt(index) < charCode){ return undefined; 
		}else if (str.charCodeAt(index) > charCode) return String.fromCharCode(charCode);
		charCode++; 
	}

}

fearNotLetter("abce");

/*Boo who
------------------------------------------------------------------------------
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Boolean Objects
*/

function booWho(bool) {
  bool = typeof(bool) === "boolean"? true : false;
  return bool;
}

booWho(null);

/*Sorted Union
------------------------------------------------------------------------------
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.reduce()
*/

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

function uniteUnique(arr) {
  arr = Array.prototype.slice.call(arguments);
  arr = arr.reduce(function(a, b) {
    return a.concat(b);
  });
  return arr.filter( onlyUnique );
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*Convert HTML Entities
------------------------------------------------------------------------------
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
HTML Entities
String.prototype.replace()
*/

function convertHTML(str) {
  return str.replace(/[&]/g,"&amp;").replace(/[<]/g,"&lt;").replace(/[>]/g,"&gt;").replace(/["]/g,"&quot;").replace(/[']/g,"&apos;");
 
}

convertHTML("Dolce & Gabbana");

/*Spinal Tap Case
------------------------------------------------------------------------------
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.prototype.replace()
*/

function spinalCase(str) {
  var regex = /\s+|_+/g;

  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return str.replace(regex, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');

/*Sum All Odd Fibonacci Numbers
------------------------------------------------------------------------------
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Remainder
*/

function sumFibs(terminalFib) {
    var nextFib = 1,
    currentFib = 1,
    previousFib = 0,
    sum = 0;

    while (currentFib <= terminalFib){
      sum = nextFib % 2 !== 0 ? sum + currentFib : sum;
       
      nextFib = currentFib + previousFib;
      previousFib = currentFib;
      currentFib = nextFib;
    }

    return sum;
}

sumFibs(4);

/*Sum All Primes
------------------------------------------------------------------------------
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops
Array.prototype.push()
*/

function isPrime(value) {
	for(var i = 2; i < value; i++) {
		if(value % i === 0) {
			return false;
		}
	}
	return value > 1;
}

function sumPrimes(num) {
	var sum = 0;
	for (var i = 2; i <= num; i++) {
		if(isPrime(i)){
			sum+=i;
		}
	}
	return sum;
}

sumPrimes(10);

/*Smallest Common Multiple
------------------------------------------------------------------------------
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Smallest Common Multiple
*/

function smallestCommons(arr) {

  var sequence1 = [];
  var sequence2 = [];

  var num = false;

  var counter = 1;

  for (var i = 1; i <= arr[0]; i++) {
    sequence1.push(i);
  }

  for (var j = 1; j <= arr[1]; j++) {
    sequence2.push(j);
  }

  while (num === false) {

    if (counter % arr[0] === 0 && counter % arr[1] === 0) {

      var check1 = sequence1.map(function(x) {
        return counter % x;
      });

      var check2 = sequence2.map(function(x) {
        return counter % x;
      });

      if (check1.every(elem => elem === 0) && check2.every(elem => elem === 0)) {
        num = true;
      }

    }

    if (!num) {
      counter++;
    }

  }

  return counter;
}

smallestCommons([1,5]);

/*Finders Keepers
------------------------------------------------------------------------------
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.filter()
*/

function findElement(arr, func) {
	return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

/*Drop it 
------------------------------------------------------------------------------
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.shift()
Array.prototype.slice()
*/

function dropElements(arr, func) {
	var l = arr.length;
	for(var i = 0; i<l; i++){
		if(func(arr[0])) break;
		arr.shift();
	}
	return arr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});

/*Steamroller
------------------------------------------------------------------------------
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()
*/

function steamrollArray(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);

/*Binary Agents
------------------------------------------------------------------------------
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
*/

function binaryAgent(str) {
  biString = str.split(' ');
  uniString = [];

/*using the radix (or base) parameter in parseInt, we can convert the binary
  number to a decimal number while simultaneously converting to a char*/

   for(i=0;i < biString.length;i++){
   uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
//we then simply join the string
  return uniString.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

/*Everything Be True 
------------------------------------------------------------------------------
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function truthCheck(collection, pre) {
  
  var count = 0;
  
  for (var i in collection) {
    if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
      count++;
    }
  }
  
  return count == collection.length;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

/*Arguments Optional
------------------------------------------------------------------------------
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Arguments object
*/

/*jshint esversion: 6*/
function addTogether(){
  let args = Array.from(arguments);
  return args.some(x => !Number.isInteger(x))?
  	undefined:
  	args.length === 2 ?
  		args[0] + args[1] :
  		(y) => Number.isInteger(y)? y + args[0] : undefined;
}

addTogether("http://bit.ly/IqT6zt");

