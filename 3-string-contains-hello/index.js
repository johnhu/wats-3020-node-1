/*
The user should run this from the root of the project using `node 1-odd-even/index.js <integer> and should see the word odd or even depending on the integer.  If an integer is not provide, the user should see a usage statement reminding them of the how to run this code.
*/

// get input using getargs
let getargs = require("../modules/getargs/index.js")
let input = getargs.getStringArg()

/**** Do not modify anything above this line ****/

if (!input) {
  console.log("usage: node 2-string-contains-hello/index.js <string>");
  console.log("if string contains a space, put it in quotes");
} 
else {
  if (input.indexOf("hello") > -1) {
    console.log(`input contains hello at location ${input.indexOf("hello")} of the string ${input}`);
  } else {
    console.log(`input does not contain the string "hello"`);
  }
}
