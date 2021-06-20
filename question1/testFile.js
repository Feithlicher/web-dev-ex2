if(process.argv.length === 4){
    file2Read = process.argv[2];
    file2Write = process.argv[3];
}else{
    console.log("Usage: please provide 2 files as CL arguments: first file to read and second file to write");
}