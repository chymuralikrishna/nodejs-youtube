
//1. File systems 'fs'
const fs=require('fs')
fs.writeFileSync('testFile2.txt','Hello this is test file for File system module i.e., fs');
console.log(__dirname);
console.log(__filename);

const fs2=require('fs').writeFileSync
fs2("fs2.txt","Test file with only write import ")
