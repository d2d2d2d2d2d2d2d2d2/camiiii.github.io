$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
        
        setTimeout(function() {
            window.location.href = 'Carta.html';
          }, 1000);
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});
