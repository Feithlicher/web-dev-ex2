const fs = require('fs');

// Check if there are 2 arguments
if(process.argv.length === 4){
    file2Read = process.argv[2];
    file2Write = process.argv[3];

    fs.readFile(file2Read, (err, data) => {
        if(err){
            throw new Error(err)
        }else{
            file_content = data.toString()
            file_content_reverse = file_content.split("").reverse().join("")
            console.log(file_content_reverse)
            // Write To File
            fs.writeFile(file2Write, file_content_reverse, (err) => {
                if(err){
                    throw new Error(err);
                }
            })
        }
    })
}else{
    console.log("Usage: please provide 2 files as CL arguments: first file to read and second file to write");
}