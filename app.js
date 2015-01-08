var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.engine('mustache', require('hogan-middleware').__express);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.mainForm);
app.get('/left_content/page/:num',routes.mainFormPage);
app.get('/search/:str/Param/:param', routes.searchForm);
app.get('/search/FisrtDate/:data1/SecondDate/:data2/Param/:param',routes.searchForm);
app.get('/search_left_content/page/:num',routes.searchMainFormPage);
app.get('/addPublication/Author/:author/Img/:img/Content/:content',routes.addPublication)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
