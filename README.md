# TypeScript Type Error: Adding Number and String

This repository demonstrates a common type error in TypeScript that occurs when attempting to perform arithmetic operations on incompatible types (in this case, a number and a string).

## Bug Description

The `add` function is defined to accept two numbers and return their sum. However, the code calls the function with a number and a string.  This results in a type error during compilation.

## Solution

The solution involves using type guards or explicit type conversion to ensure that both arguments are numbers before performing the addition.