     //   使用这个插件的初始化代码
 
        $('#fullpage').fullpage(
            {
                //显示项目导航
                navigation:true,
                afterLoad:function(a,index){
                    console.log ( index );
                    //一开始就删除所有的类
                    $(".animation").removeClass("animation1");
                    $(".animation").eq(index-1).addClass("animation1");
                }
            }
        );

       


 