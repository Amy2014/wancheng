function pauseVid()
  {
  var test1=document.getElementById("music");
  
  if(test1.paused){
      test1.play();$(".text").hide();$(".text2").show();}
   else{test1.pause(); $(".text").show();$(".text2").hide();}     
  }
$(document).ready(function() {
    $(".imageRotation").each(function(){

        var imageRotation = this, 
            imageBox = $(imageRotation).children(".imageBox")[0], 
            imgArr = $(imageBox).children(),  
            imageHeight = $(imageRotation).height(),  
            activeID = parseInt($($(imageBox).children(".active")[0]).attr("rel")),  
            setIntervalID,  
            imageSpeed =800, 
            titleSpeed =250;  

        var rotate=function(clickID){
            if(clickID){ nextID = clickID+1; }
            $(imgArr[nextID-1]).addClass("active");
            $(imgArr[activeID-1]).removeClass("active");
            $(imageBox).animate({top:"-"+(nextID-1)*imageHeight+"px"} , imageSpeed);
            activeID = nextID;
        }

       
        $(imgArr).click(function(){
            clearInterval(setIntervalID);
            var changeID= parseInt($(this).attr("rel"))+14;
            var clickID = parseInt($(this).attr("rel"));
            rotate(clickID);
            $(this).attr("rel",changeID);
            $(this).clone(true).appendTo(".imageBox");
            var imageNum = $(imageBox).children().size(),  
                 imageReelHeight = imageHeight*imageNum;
            $(imageBox).css({'height' : imageReelHeight + "px"});
            if(activeID%14-1){
                $(".sec2").hide();
            }
            else{
                $(".sec2").show();
            }
        });
           
    });
      
});