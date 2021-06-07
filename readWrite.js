// I have read the file + reversed it char by char + console "logged" it.
// Now need to figure out how to get 2 file names as program args and do the rest :)

const fs = require('fs')
fs.readFile('./readFile.txt', (err, data) => {
    if(err){
        throw new Error(err)
    }else{
        file_content = data.toString()
        file_content_reverse = file_content.split("").reverse().join("")
        console.log(file_content_reverse)
    }

})