const fs = require('fs')

fs.writeFileSync('hello.txt', 'Hello World! \n')

//chalenge: append atext in notes.txt
fs.appendFileSync('hello.txt', 'Appended line to hello.txt')

//1. use appendFileSync to append to the file
//2. Run the script
//3. Check your work to see if the appended text is there
