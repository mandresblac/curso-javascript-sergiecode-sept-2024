// Conversion de string a number
// Existen 4 formas: Number(), parseInt(), parseFloat(), +
let a = Number("3.141592653589793");
let b = parseInt("3.141592653589793");
let c = parseFloat("3.141592653589793");
let d = +"3.141592653589793";

console.log(`${a} \n${b} \n${c}`);
console.log(typeof a); // number
console.log(typeof b); // number
console.log(typeof c); // number
console.log(typeof d); // number

// Conversion de number a string
// Existen 2 formas: String(), toString()
let e = String(1);
let f = 1;
let g = f.toString();

console.log(`${e} \n${g}`);
console.log(typeof e); // string
console.log(typeof g); // string

// Conversion de Dates a number
let h = new Date();
let i = Number(h);

console.log(`${i}`);
console.log(typeof i); // number

// Conversion de Dates a string
let j = new Date().toString();
let k = String(j);

console.log(`${j} \n${k}`);
console.log(typeof j); // string
console.log(typeof k); // string

// Conversion de number a boolean
let l = Boolean(0); // 0 = false
let m = Boolean(1); // 1 = true

console.log(`${l} \n${m}`);
console.log(typeof l); // boolean
console.log(typeof m); // boolean

// Conversion de boolean a string
let n = String(true);
let o = String(false);
let p = true.toString();

console.log(`${n} \n${o} ${p}`);
console.log(typeof n); // string
console.log(typeof o); // string
console.log(typeof p); // string
