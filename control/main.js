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

$(document).ready(function() {
    $("img").draggable();
});