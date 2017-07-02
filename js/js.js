/**
 * Created by Administrator on 2017/6/9 0009.
 */
var i=0;    //µ±Ç°Ò³Âë

var a=$(".page").length-1;
/*ÉÏ»¬*/

touch.on("body","swipeup",
    function(){

        if(i<a){

            $(".page").eq(i).addClass("pageUp")
            $(".page").eq(i).children().addClass("hide")
            i++;
            $(".page").eq(i).removeClass("pageDown")
            $(".page").eq(i).children().removeClass("hide")
        }
    }
)

touch.on("body","swipedown",
    function(){

        if(i>0){

            $(".page").eq(i).addClass("pageDown")
            $(".page").eq(i).children().addClass("hide")
            i++;
            $(".page").eq(i).removeClass("pageUp")
            $(".page").eq(i).children().removeClass("hide")
        }
    }
)


touch.on(".music","tap",
function(){
    $(this).toggleClass("rotateMisic")
}
)

touch.on(".music","tap",
    function(){
        if($(".audio").get(0).paused){

            $(".audio").get(0).play();

        }
        else{
            $(".audio").get(0).pause();
        }
    }
)