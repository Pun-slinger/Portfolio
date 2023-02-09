var fs = require('fs');

var blogs = [
    {title: "Web Usability",
    date: "8th February 2023",
    content: ""},

    {title: "Second Blog Post",
    date: "10th February 2023",
    content: ""},
]

var dataArray = [];

async function someFunction() {
    for (var i = 1; i < 3; i++) {
        try {
            console.log(__dirname);
            let data = await fs.promises.readFile(__dirname + '/blog'+i+'.html', 'utf-8');
            dataArray.push(data);
        } catch(e) {
            // handle error
            console.log("Read file " + i + " failed")

        }
    }
    // all files have been processed here
    for(var y = 0; y < 2; y++){
        blogs[y].content = dataArray[y];
    }
}

someFunction().then(
    function(value) {console.log("Done");},
    function(error) {console.log(error);}
);

module.exports = {
    blogs
}