$(window).scroll(function () 
{ 
    let scrollvalue = $(window).scrollTop(); // to get scroll value
    let secondSection = $("#about").offset().top // to get the element top position

    if(scrollvalue >= secondSection)
    {
        $(".navbar").removeClass("bg-transparent");
        $(".navbar").addClass("bg-dark");
        $(".nav-links").removeClass("pt-4");
        $(".nav-links").addClass("pt-1");
        
    }
    else
    {
        $(".navbar").addClass("bg-transparent");
        $(".navbar").removeClass("bg-dark")
        $(".nav-links").removeClass("pt-1");
        $(".nav-links").addClass("pt-4");
    }
});

$(".navbar a").click(function()
{
    let ahref = $(this).attr("href") ;
    let sectionPosition = $(ahref).offset().top;

    $("html , body ").animate({scrollTop:sectionPosition},1000)
})

