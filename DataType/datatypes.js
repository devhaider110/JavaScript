"use strict";

/*
JavaScript Primitive Data Types
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt
*/

/* =========================
   1. NUMBER
   ========================= */

// Stores integer and decimal values
let a = 10;
let b = 3.5;

// Special number values
let c = Infinity;   // Represents infinity
let d = NaN;        // Not a Number (invalid math result)

console.log(typeof a); // "number"
console.log(d);        // NaN


/* =========================
   2. STRING
   ========================= */

// Stores text inside quotes ('', "", ``)
let name = "Haider";
let city = 'Jaunpur';

// Strings are immutable (cannot be changed directly)
name[0] = "h"; // ❌ No effect

console.log(name); // "Haider"
console.log(typeof name); // "string"


/* =========================
   3. BOOLEAN
   ========================= */

// Stores only true or false
let isLoggedIn = true;
let isAdmin = false;

console.log(typeof isLoggedIn); // "boolean"


/* =========================
   4. UNDEFINED
   ========================= */

// Variable declared but value not assigned
let x;

console.log(x);        // undefined
console.log(typeof x); // "undefined"


/* =========================
   5. NULL
   ========================= */

// Represents intentional empty value
let data = null;

console.log(data);        // null
console.log(typeof data); // "object" (JavaScript bug)


/* =========================
   6. SYMBOL (ES6)
   ========================= */

// Creates unique values
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false (always unique)
console.log(typeof id1);  // "symbol"


/* =========================
   7. BIGINT
   ========================= */

// Used for very large integers
let bigNum = 123456789012345678901234567890n;

console.log(bigNum);
console.log(typeof bigNum); // "bigint"


/* =========================
   IMPORTANT POINTS (SUMMARY)
   ========================= */

// ✔ Primitive data types store single values
// ✔ They are immutable
// ✔ Stored by value (copy is created)
// ✔ Changes do not affect original value

let p = 10;
let q = p;  // copy of value

q = 20;

console.log(p); // 10 (unchanged)
console.log(q); // 20
