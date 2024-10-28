$(".lights").click(
    function(){
        $(".room").toggleClass("light");
    }
);

$(".daytime").click(
    function(){
        $("body").toggleClass("time");
    }
);

$( ".draggable" ).draggable();