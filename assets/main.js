let instagram = ["assets/img/choiwoosik.PNG", "assets/img/patrickdempsey.PNG"];

const random = Math.floor(Math.random() * 2)

let inststr =""
inststr += `
<img src="${instagram[random]}" style = "width: 100%">
`;

$("#insta-pic").html(inststr);



function sentences(){
    var input = document.getElementById("username").value;
    var sentence = `The user's name is ${input}.`
    return sentence;
}

let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener('click', (e) =>{
    let madeSent = sentences();
    document.getElementById("form-questions").remove()
    let sentenceStr = ""
    sentenceStr += `
    <p> ${madeSent}</p>
    `
    $("#in-out").html(sentenceStr)
});