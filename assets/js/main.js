// header fixed script
$(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
    $('#nav').addClass('top-fixed');
    } else {
    $('#nav').removeClass('top-fixed');
    }
});


$(document).ready(function(){
    $("#video-modal").on("hidden.bs.modal",function(){
        $("#iframeYoutube").attr("src","#");
    })
    })

    function changeVideo(vId){
    var iframe=document.getElementById("iframeYoutube");
    iframe.src="https://www.youtube.com/embed/"+vId;

    $("#video-modal").modal("show");
}


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


const answer = document.getElementById("copyResult");
const copy   = document.getElementById("copyButton");
const selection = window.getSelection();
const range = document.createRange();
const textToCopy = document.getElementById("textToCopy")

copy.addEventListener('click', function(e) {
    range.selectNodeContents(textToCopy);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer.innerHTML = 'Copied!';
    } else {
      answer.innerHTML = 'Unable to copy!';  
    }
    window.getSelection().removeAllRanges()
});

$(function() {
	$('.item').matchHeight();
});


