$(document).ready(function()
{

$(function(){
$('#logo').each(function(){
$(this).addClass('link');
$(this).mousedown(function(){
window.location='Index.html';
});
});

$('#Portfolio').each(function(){
  $(this).addClass('link');
  $(this).mousedown(function(){
  window.location='Portfolio.html';
  });
  });

  $('#Contact').each(function(){
    $(this).addClass('link');
    $(this).mousedown(function(){
    window.location='About.html#contact';
    });
    });

    $('#About').each(function(){
      $(this).addClass('link');
      $(this).mousedown(function(){
      window.location='About.html';
      });
      });

});

  
$(function(){
  $('.catDesc').each(function(){
    $(this).hide();
  });



  $('.catImg').mouseover(function(){
    $(this).next('.catDesc').stop().fadeIn(200);
  });

  $('.catImg').mouseleave(function(){
    $(this).next('.catDesc').stop().fadeOut(200);
  });
});

$(function(){
  $('[Color]').each(function(){
  let Color=$(this).attr('Color');
  $(this).css('color', Color);
});
});


  $(function(){
    $('[backgroundColor]').each(function(){
    let backgroundColor=$(this).attr('backgroundColor');
    $(this).css('background-color', backgroundColor);
  });
});




$(function(){
  $('[hoverColor]').each(function(){
    let defualtColor = $(this).css('color');
    let hvrColor=$(this).attr('hoverColor');
  $(this).hover(
    function(){
    $(this).css('color', hvrColor);
    },
    function(){
    $(this).css('color', defualtColor);
    });
});
});




$(function(){
  $('[hoverBackgroudColor]').each(function(){
    let defualtColor = $(this).css('background-color');
    let bgColor=$(this).attr('hoverBackgroundColor');
  $(this).hover(
    function(){
    $(this).css('background-color', bgColor);
    },
    function(){
    $(this).css('background-color', defualtColor);
    });
});
});


$(function(){
  $('[hoverBorderColor]').each(function(){
    let defualtColor = $(this).css('border-color');
    let hvrBorderColor=$(this).attr('hoverBorderColor');
  $(this).hover(
    function(){
    $(this).css('border-color', hvrBorderColor);
    },
    function(){
    $(this).css('border-color', defualtColor);
    });
});
});

  $('.NavBx').hide().delay(350).fadeIn(500);
  $('#logo').hide().delay(350).fadeIn(500);  
});



$(window).on('load', function() {
  $("#cover").fadeOut(400);
});



function windowDelay()
{
  $(window).load();
}
setTimeout(windowDelay, 100);
