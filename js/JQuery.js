/// <reference path="../typings/globals/jquery/index.d.ts" />

window.onscroll= function(){
  scrollFunction()
};

function scrollFunction(){
var nav=document.getElementById('Navigation');
var navCont=document.getElementById('NavCont');
if(document.body.scrollTop>(navCont.offsetHeight)||document.documentElement.scrollTop>(navCont.offsetHeight)){
  nav.style.position='fixed';
  nav.style.transition='opacity 300ms';
  nav.style.opacity=0.7;
  navCont.style.transition='height 300ms';
  navCont.style.height='50px';

$('.NavBx').each(function(){
  this.style.transitionProperty='margin, font-size, border';
  this.style.trnasitionDuration='300ms';
  this.style.margin='0 20px';
  this.style.fontSize='16px';
  this.style.borderBottom='2px solid transparent';
  $(this).hover(function(){
    this.style.borderBottom='2px solid #00b0f0';
  },function(){
    this.style.borderBottom='2px solid transparent';
  });
});
}
else
{
  nav.style.transition='opacity 300ms';
  nav.style.opacity=1;
  navCont.style.transition='height 300ms';
  navCont.style.height='70px';
  //nav.style.transitionProperty
$('.NavBx').each(function(){
  this.style.transitionProperty='margin, font-size, border';
  this.style.trnasitionDuration='300ms';
  this.style.margin='0 30px';
  this.style.fontSize='17px';
  this.style.borderBottom='3px solid transparent';
  $(this).hover(function(){
    this.style.borderBottom='3px solid #00b0f0';
  },function(){
    this.style.borderBottom='3px solid transparent';
  });
});
}
}


$(document).ready(function()
{

$(function(){
$('#logo').each(function(){
$(this).addClass('link');
$(this).mousedown(function(){
window.location='index.html';
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
});

  $('.catImg').each(function(){
  $(this).mouseover(function(){
    $(this).next('.catDesc').stop().fadeIn(200);
  });
});


  $('.catImg').each(function(){
    $(this).mouseleave(function(){
           if($('.active > .catDesc').html()==$(this).next('.catDesc').html())
          {
          }
          else
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


