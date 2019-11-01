$(document).on("pagecreate",function(){
    
    $(".cuadritos").on("swiperight",function(){
        $(".cuadritos").animate({"left":"+=40px"},"slow");
    });
    
    $(".cuadritos").on("swiperleft",function(){
        $(".cuadritos").animate({"left":"-=40px"},"slow");
    });

    $(".cuadritos").on("taphold",function(){
        $(".cuadritos").animate({"width":"+=20px","height":"+=20px"},"slow");
    });

    $(".cuadritos").on("tap",function(){
        $(".cuadritos").animate({"width":"-=20px","height":"-=20px"},"slow");
    });
});
