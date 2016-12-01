$(function(){
    var num=0;
    var clientH=$(window).height();
    var clientW=$(window).width();
    var flag=true;
    $("section").click(function(e){
        e.preventDefault();
    });
    $("#fullpage").click(function(e){
        e.preventDefault();
    });
    touch.on("body","swipe","#fullpage",function(){
        if(!flag){
            return ;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }
        $("#fullpage").css({
            marginTop:-num*clientH,
            transition:"margin-top 2s ease"
        })
        flag=false;
    })

    touch.on("body","swipedown","#fullpage",function(){
        if(!flag){
            return ;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        $("#fullpage").css({
            marginTop:-num*clientH,
            transition:"margin-top 2s ease"
        })
        flag=false;
    })

    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;

    })

    //小屏状态下对于菜单的操作
    var flag1=true;
    $(".menu-option").click(function(){
        if(flag1){
            $(this).find(".menu-option-tline").css({
                transform:"translate(0,5px) rotate(45deg)"
        })
            $(this).find(".menu-option-bline").css({
                transform:"translate(0,-5px) rotate(-45deg)"
            })
            /*菜单变化*/
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opacity:0,
                    transform:"rotate(90deg)",
                    animation:"menu .3s linear forwards "+0.2*index+"s "
                })
            })
            flag1=false;
        }else{
            $(this).find(".menu-option-tline").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(this).find(".menu-option-bline").css({
                transform:"translate(0,0px) rotate(0deg)"
            })

            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opacity:1,
                    transform:"rotate(0deg)",
                    animation:"menu1 .3s linear forwards "+(1-0.2*index)+"s "
                })
            })
            flag1=true;
        }
    })

    $(window).resize(function () {
        clientH=$(window).height();
        clientW=$(window).width();
        $("#fullpage").css({
            marginTop:clientH*-num
        })
        if(clientW>1000){
            $(".menu a").css({
                animation:"none",
                opacity:0,
                transform:"rotate(90deg)"
            })

            $(".menu-option .menu-option-tline").css({
                transform:"translate(0,0) rotate(0deg)"
            })
            $(".menu-option .menu-option-bline").css({
                transform:"translate(0,0) rotate(0deg)"
            })

            flag1=true;
        }
    })





})

