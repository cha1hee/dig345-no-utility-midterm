let instagram = ["assets/img/choiwoosik.PNG", "assets/img/patrickdempsey.PNG"];

// var elem = document.createElement("img");
// elem.setAttribute("src", "assets/img/choiwoosik.png");
// elem.setAttribute("width", "100%");
// var elem1 = document.createElement("img");
// elem1.setAttribute("src", "assets/img/patrickdempsey.png");
// elem1.setAttribute("width", "100%");

// let instaElems = [];

// instagram.forEach(e => {
//     var elem = document.createElement("img");
//     elem.setAttribute("src", e);
//     elem.setAttribute("width", "100%");
//     instaElems[e] = elem;
// });

const random = Math.floor(Math.random() * 2)

let inststr =""
inststr += `
<img src="${instagram[random]}" style = "width: 100%">
`;

$("#insta-pic").html(inststr);


// document.getElementById("insta-pic").appendChild(instaElems[random]);

