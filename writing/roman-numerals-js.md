---
layout: article.njk 
title: Roman Numerals
date: 2020-09-12
tags: ['write', 'js']
---
I love the Roman Numeral to Integer problem! It seems like a very easy problem, but the edge cases make it a fun way to stretch your JavaScript skills. Today I will work through one way to solve it.

<!-- excerpt -->

---

The [Roman to Integer](https://leetcode.com/problems/roman-to-integer/) problem on [LeetCode](https://leetcode.com/) states: 

---

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.  
X can be placed before L (50) and C (100) to make 40 and 90.  
C can be placed before D (500) and M (1000) to make 400 and 900.  

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:  
Input: "III"  
Output: 3  

Example 2:  
Input: "IV"  
Output: 4  

Example 3:  
Input: "IX"  
Output: 9  

Example 4:  
Input: "LVIII"  
Output: 58  
Explanation: L = 50, V= 5, III = 3.  

Example 5:  
Input: "MCMXCIV"  
Output: 1994  
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.  

---

## Maps and Ternaries

If you've read a few other posts on my blog, you may get the impression that I love maps and ternary operators, and you might be right. My answer to the Roman to Integer problem uses both.

    const romanToInt = function(roman) {
        
        // Map of roman numerals
        const romanMap = new Map([
            ['I', 1],
            ['V', 5],
            ['X', 10],
            ['L', 50],
            ['C', 100],
            ['D', 500],
            ['M', 1000]
        ]);

        roman = roman.split("").reverse();
        
        let i = 0;
        let result = romanMap.get(roman[i]);

        while ( i < roman.length - 1) {
            const curr = romanMap.get(roman[i]);
            const next = romanMap.get(roman[i+1]);

            (curr <= next) ? result += next : result -= next;

            i++
        }
        return result;
    }

### Breaking it down line by line

I start with a function expression. 

    const romanToInt = function(roman) {

    }

I've talked about the differences between function declarations and function expressions very briefly, but let's dig a little more into the differences. The biggest difference is in scope. A function declaration:

    function doSomething() {

    }

is hoisted to the top of the scope. That means we can do something like:

    doSomething();
    function doSomething() {
        // do something here
    }

A function expression like I use here:

    const romanToInt = function(roman) {
        // function body
    }

creates a variable, then creates an anonymous function, then assigns the function to the variable. It is not hoisted to the top of the scope. If I called my function like this:

    let romanString = prompt("Please enter a Roman numeral");
    if (romanString) {
        romanToInt(romanString);
        const romanToInt = function(roman) {
            // function body
        }
    }

I would get a ReferenceError. To read more on the subject of functions, see [this wonderful explanation on Stack Overflow](https://stackoverflow.com/questions/33040703/proper-use-of-const-for-defining-functions-in-javascript) and [this blog post on 2ality](https://2ality.com/2015/02/es6-scoping.html). To see the error in action, checkout my [Function Scope repl](https://repl.it/@ekelseya/FunctionScope#index.js).

Back to the Roman to Integer problem, I create a Map object to store the values of each Roman numeral:

    const romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

A map stores key value pairs so it's perfect for this case.

The tricky part of converting a Roman numeral to an integer is catching the subtraction cases. "III" is easy: just add the value of each I. However, in "IV" or "IX", we subtract the lesser value. I could brute force a check for every variation, but that would increase the time complexity. Instead, I reverse the string:

    roman = roman.split("").reverse();

See [my Reverse String post](/blog/posts/2020/post-4) for an exhaustive breakdown of reversing strings.

Let's compare two examples:

---

Input: "LVIII"  
Output: 58  
Explanation: L = 50, V= 5, III = 3.  

Input: "MCMXCIV"  
Output: 1994  
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.  

---

To catch the subtraction cases, I have to check if each numeral is worth less than the numeral following.

In the first example, "LVII," I have to ask, is L worth less than V? No, add them. Is V less than I? No, add them... And so on until the sum = 58. That's not too bad.

In the second example, "MCMXCIV" it goes like this: Is M less than C? No, add them. Is C less than M? Yes, crap. Go back and undo the addition I just did, subtract C from M, then add that total to the original M. \*Deep breath\* Is X less than C? Yes, subtract X from C, then add the total to the sum... And so on until I get 1994. That's a lot of back and forth. Complexity is going through the roof.

If I reverse the string, I don't have to go foward and backwards! I'll use the second example: "MCMXCIV" becomes "VICXMCM". Now I can compare pairs and add or subtract as appropriate. Is V less than I? No, subtract I from V and move on. Is C less than X? No, subtract X from C and keep going! Now, it is important to note that I don't have to reverse the string; I could just start from the end and move forward. I have both methods in the [repl](https://repl.it/@ekelseya/RomanToInteger#index.js) for comparison.

Next I set some variables, one for the index counter, initialized to 0, and one for the result, which is initialized to the value of the first element of the Roman numeral:

    let i = 0;
    let result = romanMap.get(roman[i]);

And finally, I get to the meat of the solution: the while loop:

    while ( i < roman.length - 1) {
        const curr = romanMap.get(roman[i]);
        const next = romanMap.get(roman[i+1]);

        (curr <= next) ? result += next : result -= next;

        i++
    }

Normally when stepping through an array (or an array like object) I would set my conditional to i < length. In this case, I want to stop at the second to last element, so I can compare it to the last element without an index overflow.

I have two variables, curr (for the current element) and next (for the next element). I use the Map.get method to retrieve the values from my map, then I compare them with a ternary operator. The syntax for a ternary operator is:

    conditional ? doIfTrue : doIfFalse

In this case, I am checking if the current element is equal to or less than the next element. If it is, I add the *next* element to the result. If the current element is greater than the next, I subtract the *next* element from the result.

I then increment the index counter, and do it all over again. When I have finished stepping through the Roman numeral, I return the result.

### Complexity Analysis

Time complexity: O(n)*  
Space complexity: O(n)

Technically reversing the string adds O(n) complexity, but since the longest possible Roman numeral can only be 13 characters long, and the largest value is 3999, I am not including it in this analysis.