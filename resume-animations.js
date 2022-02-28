resumeAnimations();

function resumeAnimations(){
    $("#ed-desc").css("display","none")
    $("#title").click(function(){
    $("#ed-desc").slideToggle("slow");
})

    $("#exp-desc").css("display","none")
    $("#experience").click(function(){
    $("#exp-desc").slideToggle("slow");
})

    $("#skills-desc").css("display","none")
    $("#skills").click(function(){
    $("#skills-desc").slideToggle("slow");
})

    $("#awards-desc").css("display","none")
    $("#awards").click(function(){
    $("#awards-desc").slideToggle("slow");


})

$("#extra-desc").css("display","none")
$("#extra").click(function(){
$("#extra-desc").slideToggle("slow");
    
})

$("#gallery-desc").css("display","none")
$("#gallery").click(function(){
$("#gallery-desc").slideToggle("slow");
    
})
    

}
