let instNoBio = [
    {user: "user1",
    nobio: "assets/img/choiwoosik.PNG",
    bio: ""},
    {user: "user2",
    nobio: "assets/img/patrickdempsey.PNG",
    bio: ""}
    // {user: "user3",
    // nobio: "",
    // bio: ""},
    // {user: "user4",
    // nobio: "",
    // bio:""}
];
let instBio = [];
const random = Math.floor(Math.random() * 2)

let inststr =""
inststr += `
<img src="${instNoBio[random].nobio}" style = "width: 100%">
`;

$("#insta-pic").html(inststr);



function sentences(){
    var sentences = "";
    //user's name
    var input1 = document.getElementById("username").value;
    if(input1 === ""){sentences = ""; input1 = "User"}
    else{sentences += `This user's name is ${input1}.`}

    //pets
    var input2 = document.getElementById("pets").value;
    console.log(typeof input2)
    if(input2 > 1){sentences+= `${input1} has ${input2} pets.`}
    else if(input2 == 1){sentences+= `${input1} has 1 pet.`}
    else if(input2 == 0){sentences+= `${input1} has no pets.`}
    else if(input2 === ">3"){sentences+= `${input1} has more than 3 pets.`}
    else{sentences = sentences}

    //occupation

    //age

    //education



    return sentences;
}

let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener('click', (e) =>{
    //update left side (no bio pic -> bio pic)
    document.getElementById("insta-pic").remove()
    let inststr =""
    inststr += `
    <div id="insta-pic"> 
        <img src="${instNoBio[random].nobio}" style = "width: 100%">
    </div>
    
    `;

    $("#insta-pic-holder").html(inststr);

    //update right side (questions to sentences)
    let madeSent = sentences();
    document.getElementById("form-questions").remove()
    let sentenceStr = ""
    sentenceStr += `
    <p> ${madeSent}</p>
    `
    $("#in-out").html(sentenceStr)
});