
var mainNum = 1;
function hide_main() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('pagination-top').style.display = 'none';
    document.getElementById('pagination-bottom').style.display = 'none';
    document.getElementById('right-div').style.display = 'none';
    document.getElementById('left-div').style.display = 'none';
}
function show_main() {
    document.getElementById('main').style.display = 'block';
    document.getElementById('pagination-top').style.display = 'block';
    document.getElementById('pagination-bottom').style.display = 'block';
    document.getElementById('right-div').style.display = 'block';
    document.getElementById('left-div').style.display = 'block';
}
function hide_gallery() {
    document.getElementById('gallery').style.display = 'none';
}

function show_gallery() {
    document.getElementById('gallery').style.display = 'block';
    start_gallery()
}
function start_gallery() {
    $(function () {
        $('#thumbnails a').lightBox();
    });
}


var changePage = function (num) {
    mainNum = num;
    //console.log("page click " + num);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/left_content" + "/page/" + num, true);
    xhr.send();
    xhr.onload = function () {
        var output = this.responseText;
        $("#left-div").html(output);
    };
};

var search = function () {
    var text = document.getElementById("search_text").value
    var xhr = new XMLHttpRequest();
    xhr.open("GET", '/search/' + text, true);
    xhr.send();
    xhr.onload = function () {
        var output = this.responseText;
        $("#left-div").html(output);
    }
}

var previousPage = function (req, res) {
    if (mainNum > 1) {
        num = mainNum - 1;
        mainNum = num;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/left_content" + "/page/" + num, true);
        xhr.send();
        xhr.onload = function () {
            var output = this.responseText;
            $("#left-div").html(output);
        };
    }
}

var nextPage = function(req, res) {
    if (mainNum ) {
        num = mainNum + 1;
        mainNum = num;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/left_content" + "/page/" + num, true);
        xhr.send();
        xhr.onload = function () {
            var output = this.responseText;
            $("#left-div").html(output);
        };
    }
}

