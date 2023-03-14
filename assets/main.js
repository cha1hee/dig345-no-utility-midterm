let instNoBio = [
    {user: "user1",
    pics: "assets/img/choiWooShik.PNG",
    top: "assets/img/choiWooShikTop.PNG"},
    {user: "user2",
    pics: "assets/img/patrickDempsey.PNG",
    top: "assets/img/instaTopPatrick.PNG"},
    {user: "user3",
    pics: "assets/img/leeTaeHwan.PNG",
    top: "assets/img/leeTaeHwanTop.PNG"},
    {user: "user4",
    pics: "assets/img/jisoo.PNG",
    top:"assets/img/jisooTop.PNG"},
    {user: "user5",
    pics: "assets/img/songJiHyo.PNG",
    top:"assets/img/songJiHyoTop.PNG"}
];
let instBio = [];
const random = Math.floor(Math.random() * instNoBio.length)

let inststr =""
inststr += `
<img src="${instNoBio[random].pics}" style = "width: 100%">
`;

let topstr =""
topstr +=`
<img src="${instNoBio[random].top}" style = "width: 100%">
`

//popup js
$(function(){
    var overlay = $('<div id="overlay"></div>');
    overlay.show();
    overlay.appendTo(document.body);
    $('.popup').show();
    $('.close').click(function(){
    $('.popup').hide();
    overlay.appendTo(document.body).remove();
    return false;
    });
    
    
     
    
    $('.x').click(function(){
    $('.popup').hide();
    overlay.appendTo(document.body).remove();
    return false;
    });
    });


$("#insta-pic").html(inststr);
$("#insta-top").html(topstr);