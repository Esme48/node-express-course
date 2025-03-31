 //This program should use the console.log function to write some globals to the screen. 
 // Set an environment variable with the following command in your command line terminal: export MY_VAR="Hi there!" 
 // The program should then use console.log to print out the values of __dirname (a Node global variable) and process.env.MY_VAR (process is also a global, 
 // and contains the environment variables you set in your terminal.) You could print out other globals as well (Node documentation on available globals). 
 // For each of these programs, you invoke them with node to make sure they work.

//Notes:
// __dirname - path to current directory
// __filename - file name
// require - function to use module (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed 

 console.log(__dirname)

 const process = require('node:process');
 process.on('warning', (warning) => {
   console.warn(warning.name);
   console.warn(warning.message);
   console.warn(warning.stack);
 });

 console.log(process.env.MY_VAR);