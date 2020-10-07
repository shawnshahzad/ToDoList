//check off specific todos by clicking
$("ul").on("click", "li",function(){
        $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //prevent bubbling up on parent elements
    event.stopPropagation();
});

//event listener to input text
$("input[type = 'text'").keypress(function(event){

    // 13 == 'enter key'
    if(event.which === 13){
        //grab new text from input
        var todoText = $(this).val();
        //clear input in text field
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
        
    }
});

$(".fa-plus").click(function(){
    $("input[type = 'text'").fadeToggle();

});