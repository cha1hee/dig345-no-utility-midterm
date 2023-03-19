var timeTotal;
var start;

// loads first page automatically
$("#main").load('views/first.html', function(){
        start = new Date().getTime();

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
    

});

$(document).on('click', '#next', function(){
        const end = new Date().getTime();
        timeTotal = (end - start) / 1000

    $("#main").load('views/second.html');

});

$(document).on('click', '#submitR', function(){
    var instr = "";
    //7 seconds
    if(timeTotal < 7){
        instr += `Wow! You must really trust your instincts! First impressions for the win.`
    }
    // 1 minute
    else if(timeTotal < 60){
        instr += `A quick look and you got it!`
    }
    // 10 minutes
    else if(timeTotal > 59){
        instr += `You seem to have put some though into this.`
    }
    //45 minutes
    else if(timeTotal > 2700){
        instr += `The average personality test takes 45 minutes and you've surpassed it! Maybe you do really take time to get to know people.`
    }

    $("#main").load('views/results.html',function(){
        document.getElementById('total-time').prepend(timeTotal);
        document.getElementById('time-description').prepend(instr);
    });

});

$(document).on('click', '#about', function(){
    $("#main").load('views/about.html',function(){

    });
});