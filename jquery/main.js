$(".dark-btn").click(
    function(){
        $("body").toggleClass("dark");
        $(".box").toggleClass("dark");
    }
);

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }
);