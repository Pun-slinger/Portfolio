var fs = require('fs');
var blogs = [
    {
        title: "Web Usability",
        date: "9th February 2023",
        content: ""
    },

    {
        title: "Images in creating Multimedia",
        date: "16th February 2023",
        content: ""
    },

    {
        title: "Sound and audio in creating Multimedia",
        date: "18th February 2023",
        content: ""
    },
    {
        title: "Animation in creating Multimedia",
        date: "14th March 2023",
        content: ""
    },
]

var dataArray = [];

let fileCountPromise = new Promise(function (resolve, reject) {
    try {
        fs.readdir(__dirname, (err, files) => {
            console.log(files.length);
            resolve(files.length)
        })
    } catch (e) {
        console.log("Count file failed");
        reject(0);
    }
})

async function someFunction(count) {
    console.log("Count " + count);
    for (var i = 1; i < count; i++) {
        try {
            console.log(__dirname);
            let data = await fs.promises.readFile(__dirname + '/blog' + i + '.html', 'utf-8');
            dataArray.push(data);
        } catch (e) {
            // handle error
            console.log("Read file " + i + " failed")

        }
    }
    // all files have been processed here
    for (var y = 0; y < count-1; y++) {
        blogs[y].content = dataArray[y];
    }
}

fileCountPromise.then(
    function (value) {
        someFunction(value).then(
            function (value) { console.log("Done"); },
            function (error) { console.log(error); }
        );
    },
    function (error) {
        console.log("Error code " + error);
    }
);

module.exports = {
    blogs
}