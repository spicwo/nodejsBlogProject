const fs = require('fs');
const path = require('path');

function getFileContent(fileName, callback) {
    const fullFileName = path.resolve(__dirname, 'files', fileName);
    fs.readFile(fullFileName, (err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        callback(JSON.parse(data.toString()))
    })
}

// 测试 callback-hell
getFileContent('a.json', aData => {
    console.log('a data', aData);
    getFileContent(aData.next, bData => {
        console.log('b data', bData);
        getFileContent(bData.next, cData => {
            console.log('c data', cData);
        })
    })
})

// 用promise

function getFileContent2(fileName) {
    const promise = new Promise((resolve, reject) => {
        const fullFileName = path.resolve(__dirname, 'files', fileName);
        fs.readFile(fullFileName, (err, data) => {
            if(err) {
                console.error(err);
                return;
            }
            resolve(JSON.parse(data.toString()))
        })
    })
    return promise;

}

getFileContent2('a.json').then(aData => {
    console.log('Adata', aData);
    return getFileContent2(aData.next);
}).then(bData => {
    console.log('Bdata', bData);
    return getFileContent2(bData.next);
}).then(cData => {
    console.log('Cdata', cData);

})