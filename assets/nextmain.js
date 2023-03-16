
//popup js
function myPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function sentences(){
    var sentences = "";

    var input1 = document.getElementById("username").value;
    var input2 = document.getElementById("age").value;
    var input3 = document.getElementById("vibe").value;
    var rate1 = +document.getElementById("adventure").value/5;
    var rate2 = +document.getElementById("creativity").value/5;
    var rate3 = +document.getElementById("fitness").value/5;
    var rate4 = +document.getElementById("shy").value/5;
    var rate5 = +document.getElementById("kind").value/5;
    var rate6 = +document.getElementById("assertive").value/5;
    var rate7 = +document.getElementById("anxiety").value/5;
    var rate8 = +document.getElementById("attractive").value/5;

    if(input1 === ""){sentences = ""; input1 = "User"}
    sentences += `
    <h1>Results</h1>
    <div class="results-css">
    The user, ${input1}, is about ${input2} years old. Who is best described as being ${input3}.
    The user is ${rate1}% adventurous, ${rate2}% creative, ${rate3}% fit, ${rate4}% shy, ${rate5}% kind, 
    ${rate6}% assertive, ${rate7}% anxious, ${rate8}% attractive
    </div>
    
    <div class="popup" onclick="myPopup()"> <button type="button" class="btn btn-primary" id="submit">About</button>
        <span class="popuptext" id="myPopup">What assumptions have you made today? Every day we judge and assume truths about people 
        all the time. This project exposes our subconsciousness making judgements on the character of a person just by an instagram post.
        We take the information given on social media at face value and believe that a person's entire life is based off of these instant
        snap shots of a life. How exposing is social media really? What can you really know from a person's feed? These are all questions 
        that this project hopes to evoke to visitors.</span>
    </div>`


    return sentences;
}

let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener('click', (e) =>{
    //update right side (questions to sentences)
    // let madeSent = sentences();
    document.getElementById("form-questions").remove()
    // let sentenceStr = ""
    // sentenceStr += `
    // <div> ${madeSent}</div>
    // `
    // $("#in-out").html(sentenceStr)
    let sentenceStr = `(placeholder)<br><h1 style="text-align: center">Congrats!<h1> <h5>You've been looking at this user's page for at grand total of ${totalTime} seconds 
    and have managed to analyze this person's personality. You could be a psychologist.</h5>`
    $("#in-out").html(sentenceStr)
});

console.log(totalTime)