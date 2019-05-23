var introIpt;

// these arrays include all the images that are going to pop up when a specific mood is put into an input.

var happyimg = ["https://support.discordapp.com/hc/user_images/jU570fSTMucYUKyohxNC1g.png", "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif", "https://i.pinimg.com/236x/5e/f4/c1/5ef4c1f499730a5b92e203c4dd7af2f6--fairy-tail-happy-fairy-tail-love.jpg"];

var sickimg = ["https://66.media.tumblr.com/79359b0bde7d7961481a36822ff8928a/tumblr_plblccRPu31u8ay3m_540.jpg", "https://media1.tenor.com/images/b97e44b337ad3141a3f1c7dd206b1301/tenor.gif?itemid=4111990", "http://images3.wikia.nocookie.net/__cb20101115140239/fairytail/images/f/f3/Beaten_happy.jpg"];

var madimg = ["https://i.pinimg.com/originals/e9/72/eb/e972eb32b30b5b4cadaeea959a15b0a8.jpg","http://24.media.tumblr.com/17bab82230dc604a08dbe44e67cfe469/tumblr_movedhUDo61sr5hnuo1_500.gif","https://i.ytimg.com/vi/EbPfIBtW93w/maxresdefault.jpg",];

var sadimg = ["https://i.pinimg.com/originals/16/eb/35/16eb3597431dc0359b93f3b1ac7fcbec.png","https://media.giphy.com/media/dWbO5cuyqrhzW/giphy.gif","https://cdn140.picsart.com/273455707000201.jpg?r1024x1024"];
$(".stepone").hide();
$(".steptwo").hide();
$(".flexualassult").hide();

var excitedimg = ["https://media.tenor.com/images/20be90e772bd60ab4c290baff10cc16b/raw","https://thumbs.gfycat.com/GrimPortlyHochstettersfrog-size_restricted.gif","https://data.whicdn.com/images/103960169/large.jpg"];

// the two following functions change the color of the background and text color when a mood is put into. 
// for example if mad is put into the input, the background color will turn red and text color will turn black.
function changebackground(color) {
    $("body").css("background-color", color);
}
function changetext(color) {
    $("h1").css("color", color);
    $(".greet").css("color",color);
    $(".continue3").css("background-color", color);
    $(".reset").css("background-color", color);
}

function holymoly(name) {
    $(".target").html(name);
}
//the following 3 click functions are transitions between divs.
$(".introbutton").click(function() {
    introIpt = $(".introinput").val();
    $(".stepone").delay(800).fadeIn();
    $(".intro").delay(200).fadeOut();
    holymoly(introIpt);
});

$(".continue").click(function() {
    $(".stepone").delay(200).fadeOut();
    $(".steptwo").delay(800).fadeIn();
});

$(".continue2").click(function() {
    $(".steptwo").delay(200).fadeOut();
    $(".flexualassult").delay(800).fadeIn();
});

//removes the images so new images can pop up.
$(".reset").click(function() {  
    $("img").remove();
});

$(".continue3").click(function() {
    var mood = $(".mood").val();
    //the specific mood here is happy. If the user inputs happy the background is yellow and will stay yellow
    //the text is also changed to red, and it will remain red.
    if(mood === "happy") {
        changebackground("yellow");
        changetext("red");
        //Allows all images in the happyimg array to show when the mood happy is put.
        happyimg.forEach(function(image){
            $(".imgtarget").delay(800).append("<img src='" + image + "'/>");
        });
    }
    if(mood === "sad") {
        changebackground("blue");
        changetext("green");
        sadimg.forEach(function(image){
            $(".imgtarget").delay(800).append("<img src='" + image + "'/>");
        });
    }
    if(mood === "mad") {
        $(".continue3").css("color", "white");
        $(".reset").css("color", "white");
        changebackground("red");
        changetext("black");
        madimg.forEach(function(image){
            $(".imgtarget").delay(800).append("<img src='" + image + "'/>");
        });
    }
    if(mood === "sick") {
        changebackground("green");
        changetext("purple");
        sickimg.forEach(function(image){
            $(".imgtarget").delay(800).append("<img src='" + image + "'/>");
        });
    }
    
    if(mood === "excited") {
        changebackground("orange");
        changetext("pink");
        excitedimg.forEach(function(image){
            $(".imgtarget").delay(800).append("<img src='" + image + "'/>");
        });
    }
    
});











