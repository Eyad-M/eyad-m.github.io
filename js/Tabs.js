//Eyad Moafa © 2018 All Rights Reserved :)
//Eyad Moafa © 2018 All Rights Reserved :)
//Eyad Moafa © 2018 All Rights Reserved :)



function SwitchTab(evt, TabName){
      // Get all elements with class="tabCont" and hide them ***tabCont short form of tab container and it refer to the tab content***
      $('.tabCont').each(function(){
        $(this).stop().fadeOut(400);
      });

      // Get all elements with class="cat" and remove the class "active" ***cat short form of categories and it refer to the tablinks***
      $('.cat').each(function(){
        $(this).removeClass('active');
        });

      // Show the active tab content
      $('#'+TabName).stop().fadeIn(800);


      //currentTarget refer to the clicked tab
      var currentTargt=evt.currentTarget;
      
      //add the class (active) to the clicked tab 
      $(currentTargt).addClass('active');

        // set defual css for the rest of the inactive tabs
        $('.cat').each(function(){
        $(this).css('width','100px');
        });

        //set the new css to the active tab
        $(currentTargt).css('width','110px');


        //special jquery animation you don't need :p
        $('.catDesc').not('.active > .catDesc').stop().fadeOut(200);    
}


//Eyad Moafa © 2018 All Rights Reserved :)
//Eyad Moafa © 2018 All Rights Reserved :)
//Eyad Moafa © 2018 All Rights Reserved :)