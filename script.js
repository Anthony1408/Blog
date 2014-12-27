var data_pagination = {mass_pagination: []}
var numpage = 1
var data_right = {
    mass_right: [
        {
            author_head: "Anthony",
            page_head: "Планирование производственно-хозяйственной " +
            "деятельности предприятия (фирмы, компании и т.д.) является важнейшей" +
            " функцией управления, видоизменяющейся в процессе его деятельности. Это" +
            " центральное звено хозяйственного механизма, включающее сложную взаимосвязанную " +
            "систему планов, определяющих комплексное развитие "
        },
    ]
}
var picture_data = {
    picture_mass: [
        {
            img1: "images/gallery_image/img2.jpg",
            img2: "images/gallery_image/1.png",
            title: "img2.jpg"
        },
        {
            img1: "images/gallery_image/img2.jpg",
            img2: "images/gallery_image/1.png",
            title: "img2.jpg"
        },
        {
            img1: "images/gallery_image/img2.jpg",
            img2: "images/gallery_image/1.png",
            title: "img2.jpg"
        },
        {
            img1: "images/gallery_image/img2.jpg",
            img2: "images/gallery_image/1.png",
            title: "img2.jpg"
        },
        {
            img1: "images/gallery_image/img2.jpg",
            img2: "images/gallery_image/1.png",
            title: "img2.jpg"
        },
        {
            img1: "images/gallery_image/img2.jpg",
            img2: "images/gallery_image/1.png",
            title: "img2.jpg"
        },
        {
            img1: "images/gallery_image/img2.jpg",
            img2: "images/gallery_image/1.png",
            title: "img2.jpg"
        },
        {
            img1: "images/gallery_image/img2.jpg",
            img2: "images/gallery_image/1.png",
            title: "Antoshka"
        },
        {
            img1: "images/gallery_image/img2.jpg",
            img2: "images/gallery_image/1.png",
            title: "img2.jpg"
        }
    ]
}
var data = {
    mass: [
        {
            author: "Блэкволл",
            img: "images/page_image/blackwall-gallery-01.jpg",
            page: "Серые Стражи несут свою вахту вдали от беспокойного мира, " +
            "готовые терпеть лишения и жертвовать собой, чтобы защитить мир от зла, " +
            "которое не надеются истребить. Мало кто добровольно подпишется на все это — " +
            "тяготы, одиночество и неизбежность ужасной гибели. Но путь Стража — это еще и" +
            " путь доблести. Те, кто взял на себя эту задачу, получают в награду " +
            "сознание того, что они теперь выше, чем были раньше. Блэкволл — один из " +
            "тех немногих Стражей, кто добровольно и с энтузиазмом выбрал такую долю. Он " +
            "всем сердцем верит в благородные идеалы Серых Стражей и не променял бы эту жизнь " +
            "ни на какую другую. "
        },
        {
            author: "Лелиана",
            img: "images/page_image/leliana-1.jpg",
            page: "У нее много имен. Многим она знакома как" +
            " «сестра Соловей» или «левая рука Верховной жрицы»." +
            " Для немногочисленных же друзей она просто Лелиана." +
            " Говорят, она обрела веру посреди мрака, а ее любовь" +
            " к Создателю сравнима лишь с ее преданностью своей" +
            " наставнице и спасительнице — Верховной жрице Джустинии" +
            " V. Тем, на чьей она стороне, не найти товарища надежнее." +
            " Но врагам Верховной жрицы лучше поостеречься, ибо Лелиана " +
            "— грозная тень за Солнечным троном. Терпеливая и прозорливая," +
            " она наносит удар тогда, когда жертва меньше всего этого ждет. "
        },
        {

            author: "Варрик Тетрас",
            img: "images/page_image/varric-gallery-01-ru.jpg",
            page: "Смешайте одну часть авантюризма, одну часть " +
            "краснобайства и три части неприятностей — и получится " +
            "Варрик Тетрас. Варрик родился на поверхности и не очень-то " +
            "тянется к своим подземным сородичам. Его связи с гномами ограничиваются " +
            "Торговой гильдией, но и ее интриги Варрику не по душе. Тем не менее," +
            " он прекрасно обжился в наземном мире, заведя знакомства как в светских" +
            " кругах, так и среди самых закоренелых мерзавцев. Ничто так не манит его," +
            " как свежая сплетня... Хотя те, кто знает его получше, говорят иное. Варрик," +
            " говорят они, все глубже увязает в больших бедах большого мира — тех, выбраться" +
            " из которых не всегда помогает даже хорошо подвешенный язык."

        },
        {

            author: "Anthony4",
            img: "",
            page: "enot Планирование производственно-хозяйственной " +
            "деятельности предприятия (фирмы, компании и т.д.) является важнейшей" +
            " функцией управления, видоизменяющейся в процессе его деятельности. Это" +
            " центральное звено хозяйственного механизма, включающее сложную взаимосвязанную " +
            "систему планов, определяющих комплексное развитие ",

        },
        {

            author: "Anthony5",
            img: "",
            page: "enot Планирование производственно-хозяйственной " +
            "деятельности предприятия (фирмы, компании и т.д.) является важнейшей" +
            " функцией управления, видоизменяющейся в процессе его деятельности. Это" +
            " центральное звено хозяйственного механизма, включающее сложную взаимосвязанную " +
            "систему планов, определяющих комплексное развитие "

        }
    ]
}
var storage = data
function restore() {
    data = storage
    build_pagination()
    page(1)
}
function build_pagination() {
    data_pagination = {mass_pagination: []}
    for (i = 0; i < data.mass.length; i++) {
        data_pagination.mass_pagination.push({num: i + 1})
    }
    $("#pagination-top").load("templates.html #template3", function () {
        var template = document.getElementById('template3').innerHTML;
        var output = Mustache.render(template, data_pagination);
        $("#pagination-top").html(output);
    });
    $("#pagination-bottom").load("templates.html #template3", function () {
        var template = document.getElementById('template3').innerHTML;
        var output = Mustache.render(template, data_pagination);
        $("#pagination-bottom").html(output);
    });
}
function start_page() {
    $("#main").load("templates.html #template2", function () {
        var template = document.getElementById('template2').innerHTML;
        var output = Mustache.render(template, {title: "Dragon Age : inquisition", body: "The Adventure Begins"});
        $("#main").html(output);
    });


    $("#right-div").load("templates.html #template4", function () {
        var template = document.getElementById('template4').innerHTML;
        var output = Mustache.render(template, data_right);
        $("#right-div").html(output);
    });
}


function page(a) {
    numpage = a
    var data1 = {mass: []}
    data1.mass = data.mass.slice(numpage - 1, numpage)
    $("#left-div").load("templates.html #template1", function () {
        var template = document.getElementById('template1').innerHTML;
        var output = Mustache.render(template, data1);
        $("#left-div").html(output);
    });
}

function nextPage() {
    if (numpage < data.mass.length) {
        page(numpage + 1)
    }

}
function previousPage() {
    if (numpage > 1) {
        page(numpage - 1)
    }

}

$("#gallery").load("templates.html #gallery_template", function () {
    var template = document.getElementById('gallery_template').innerHTML;
    var output = Mustache.render(template, picture_data);
    $("#gallery").html(output);
});

$(function () {
    $('#thumbnails a').lightBox();
});

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
}
document.getElementById('gallery').style.display = 'none';

//search
function search() {
    var text = document.getElementById("search_text").value
    document.getElementById("search_text").value = "";
    var dataS = {mass: []}
    for (i = 0; i < data.mass.length; i++) {
        if (data.mass[i].author.indexOf(text) >= 0) {
            dataS.mass.push(data.mass[i])
            continue;
        } else if (data.mass[i].page.indexOf(text) >= 0) {
            dataS.mass.push(data.mass[i])
        }
    }
    data = dataS
    build_pagination()
    page(1)
}