// the ../ (2 dots before the back slash and name of the required file) means the required file is 1 directory above. 1 dot (./) would mean same directory 

const assertEqual = require("../assertEqual"); 

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual(1, "1");