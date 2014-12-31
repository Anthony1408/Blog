var data = {
    mass_pagination : [],

    top_content : [
        {
            title: 'Dragon Age : inquisition',
            body: 'The Adventure Begins',
            button_label: 'Biggest Button!!!!!!!!!!'
        }
    ],
    left_content : [
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
    ],
    right_content : [
        {
            author_head: "Anthony",
            page_head: "Планирование производственно-хозяйственной " +
            "деятельности предприятия (фирмы, компании и т.д.) является важнейшей" +
            " функцией управления, видоизменяющейся в процессе его деятельности. Это" +
            " центральное звено хозяйственного механизма, включающее сложную взаимосвязанную " +
            "систему планов, определяющих комплексное развитие "
        },
    ],
    gallery: [
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
            img2: "images/gallery_image/1.png"
        },
        {
            img1: "images/gallery_image/img2.jpg",
            img2: "images/gallery_image/1.png",
            title: "img2.jpg"
        }
    ]
}
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




