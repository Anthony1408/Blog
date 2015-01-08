var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient
url = 'mongodb://anton:enot1992@ds031751.mongolab.com:31751/anthony1408blog';

var dataCount = 3;

function start(num) {
    var count = 0;
    if (num == 1) {
        return count;
    }
    for (i = 0; i < num - 1; i++) {
        count += dataCount
    }
    return count;
}

function buildPagination(count) {
    var mass = [];
    for (i = 0; i < count / dataCount; i++) {
        mass.push({num: i + 1})
    }
    return mass;
}

exports.mainForm = function (req, res) {
    var data = {gallery: [], left_content: []}
    MongoClient.connect(url, function (err, db) {
        var pageCollection = db.collection('Page');
        var galleryCollection = db.collection('Gallery');
        var galleryCursor = galleryCollection.find();
        galleryCursor.toArray(function (err, result) {
            result.forEach(function (res) {
                data = res;
                db.close()
            })
            res.render('mainForm', data)
        })
    })
}


exports.mainFormPage = function (req, res) {
    var num = req.param('num')
    console.log(num)
    var example
    var data = {left_content: [], mass_pagination: []};
    MongoClient.connect(url, function (err, db) {
        var pageCollection = db.collection('Page');
        var galleryCollection = db.collection('Gallery');
        var pageCursor = pageCollection.find();
        pageCursor.toArray(function (err, result) {
            result.forEach(function (res) {
                var buf = res.left_content;
                num = start(num);
                data.left_content = buf.slice(num, (num * 1) + dataCount)
                data.mass_pagination = buildPagination(res.left_content.length)
                db.close()
            })
            res.render('content_pagination', data)
        })
    })
}
exports.searchMainFormPage = function (req, res) {
    var num = req.param('num')
    var data1 = {left_content: []}
    var dataS;
    MongoClient.connect(url, function (err, db) {
        var pageCollection = db.collection('Page');
        var galleryCollection = db.collection('Gallery');
        var searchCollection = db.collection('search');
        var searchCursor = searchCollection.find();
        searchCursor.toArray(function (err, result) {
            result.forEach(function (res) {
                dataS = res.left_content;
                console.log(res.left_content.leng)
                data1.mass_pagination = buildPagination(res.left_content.length)
                db.close()
            })
            num = start(num)
            data1.left_content = dataS.slice(num, (num * 1) + dataCount);
            res.render('content_pagination', data1)
        })
    })

}

exports.searchForm = function (req, res) {
    dataS = {left_content: [], mass_pagination: []}
    var text;
    var firstDate;
    var param = req.param('param');
    var secandDate;
    var frDate;
    var scDate;
    if (param == 1) {
        text = req.param('str');
    } else {
        console.log(scDate);
        firstDate = req.param('data1');
        frDate = firstDate.split('.');
        secandDate = req.param('data2');
        scDate = secandDate.split('.');
        console.log(scDate);
    }
    MongoClient.connect(url, function (err, db) {
        var pageCollection = db.collection('Page');
        var galleryCollection = db.collection('Gallery');
        var pageCursor = pageCollection.find();
        pageCursor.toArray(function (err, result) {
            result.forEach(function (res) {
                    data = res.left_content;
                    db.dropCollection('search');
                    var searchCollection = db.collection('search');
                    if (param == 1) {
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].author.indexOf(text) >= 0) {
                                dataS.left_content.push(data[i])
                                continue;
                            } else if (data[i].page.indexOf(text) >= 0) {
                                dataS.left_content.push(data[i])
                            }
                        }
                    } else {
                        for (var i = 0; i < data.length; i++) {
                            var buf = data[i].Date.split('.')
                            console.log('buf=',buf[1])
                            console.log('frDate=',frDate[1])
                            console.log('scDate=',scDate[1])
                            if ((buf[1] >= frDate[1]) && (buf[1] < scDate[1])) {
                                dataS.left_content.push(data[i])
                            }
                        }
                    }
                    searchCollection.insert(dataS, function(err){

                    })
                    db.close()
                }
            )
            dataS.mass_pagination = buildPagination(dataS.left_content.length);
            dataS.left_content = dataS.left_content.slice(0, dataCount);
            res.render('content_pagination', dataS)
        })
    })
}

exports.addPublication = function (req, res) {
    console.log('author=', req.param('author'))
    console.log('img=', req.param('img'))
    console.log('content=', req.param('content'))
    var date = new Date();
    var d = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
    var addContent = {
        Date: d,
        author: req.param('author'),
        img: req.param('img'),
        page: req.param('content')
    }
    MongoClient.connect(url, function (err, db) {
        var pageCollection = db.collection('Page');
        var galleryCollection = db.collection('Gallery');
        var buf = {left_content: []}
        var pageCursor = pageCollection.find();
        pageCursor.toArray(function (err, result) {
            result.forEach(function (res) {
                buf.left_content = res.left_content;
                buf.left_content.push(addContent)
                console.log(buf)
                db.dropCollection('Page');
                var updateCollection = db.collection('Page')
                updateCollection.insert(buf,function(err){

                });
                db.close()
            })
        })
    })
}




