$(document).ready(function() {
    $("#description1").hide()
    $("#description2").hide()

    $("#moreInfo1").click(function(){
        $("#description1").toggle()
    })
    $("#moreInfo2").click(function(){
        $("#description2").toggle()
    })

    $(".expandingImg").hover(function() {
        $(this).css("width", "160px");
    }, function() {
        $(this).css("width", "150px");
    })

    $(".sendBtn").click(function() {
        $("#thanksMsg").text("Tack för ditt meddelande. Vi återkopplar så fort vi kan!");
    })
})