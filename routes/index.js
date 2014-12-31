var jf = require('jsonfile')
var util = require('util')

var data;
var file = 'node_modules/data.json'
jf.readFile(file, function(err, obj) {
    data = obj;
    //console.log(util.inspect(data))
})

var arr = require.resolve('data.json')
function build_pagination() {
    data_pagination = {mass_pagination: []}
    for (i = 0; i < data.mass.length; i++) {
        data_pagination.mass_pagination.push({num: i + 1})
    }
}

exports.mainForm = function (req, res) {
    data.mass_pagination = [];
    for (i = 0; i < data.left_content.length; i++) {
        data.mass_pagination.push({num: i + 1})
    }
    res.render('mainForm', data)
};

exports.mainFormPage = function (req, res) {
    var num = req.param('num')
    var data1 = {left_content:[]}
    data1.left_content = data.left_content[num - 1]
    console.log(num)
    res.render('left_content', data1)
}

exports.searchForm = function(req , res) {
    var dataS = {left_content : []}
    var text = req.param('str');
    console.log('search form')
    console.log(text)
    for (var i = 0; i < data.left_content.length; i++) {
        if (data.left_content[i].author.indexOf(text) >= 0) {
            dataS.left_content.push(data.left_content[i])
            continue;
        } else if (data.left_content[i].page.indexOf(text) >= 0) {
            dataS.left_content.push(data.left_content[i])
        }
    }
    res.render('left_content', dataS)
}




