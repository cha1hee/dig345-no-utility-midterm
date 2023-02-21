let instagram = ["assets/img/choiwoosik.PNG", "assets/img/patrickdempsey.PNG"];

const random = Math.floor(Math.random() * 2)

let inststr =""
inststr += `
<img src="${instagram[random]}" style = "width: 100%">
`;

$("#insta-pic").html(inststr);


