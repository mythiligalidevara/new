// const fs=require("fs")
// const readStream=fs.createReadStream("./example.txt","utf8")
// const writeStream=fs.createWriteStream("example2.txt")
// readStream.pipe(writeStream)


//compressing
// const fs=require("fs")
// const zlib=require("zlib")
// const gzip=zlib.createGzip()
// const readStream=fs.createReadStream("./example.txt","utf8")
// const writeStream=fs.createWriteStream("example2.txt.gz")
// readStream.pipe(gzip).pipe(writeStream)

//uncompressing
const fs=require("fs")
const zlib=require("zlib")
const gunzip=zlib.createGunzip();
const readStream=fs.createReadStream("./example2.txt.gz")
const writeStream=fs.createWriteStream("uncompress.txt")
readStream.pipe(gunzip).pipe(writeStream)


