let instNoBio = [
    {user: "user1",
    pics: "assets/img/choiWooShik.png",
    top: "assets/img/choiWooShikTop.png"},
    {user: "user2",
    pics: "assets/img/patrickDempsey.png",
    top: "assets/img/instaTopPatrick.png"},
    {user: "user3",
    pics: "assets/img/leeTaeHwan.png",
    top: "assets/img/leeTaeHwanTop.png"},
    {user: "user4",
    pics: "assets/img/jisoo.png",
    top:"assets/img/jisooTop.png"},
    {user: "user5",
    pics: "assets/img/songJiHyo.png",
    top:"assets/img/songJiHyoTop.png"}
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

var totalTime
//timer
// if(window.location.href === "https://dig345-no-utility-midterm.vercel.app/"){
//     document.addEventListener("DOMContentLoaded", () => {
//         const start = new Date().getTime();
//         window.addEventListener("beforeunload", () => {
//             const end = new Date().getTime();
//             const totalTime = (end - start) / 1000
//         });
//     });
// }


// if(window.location.href === "file:///Users/paulichali/Desktop/Studies/Spring%202023/DIG345/dig-345-no-utility-midterm/index.html"){
//     document.addEventListener("DOMContentLoaded", () => {
//         const start = new Date().getTime();
//         window.addEventListener("beforeunload", () => {
//             const end = new Date().getTime();
//             totalTime = (end - start) / 1000
//             console.log(totalTime)
//         });
//     });
// }



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

