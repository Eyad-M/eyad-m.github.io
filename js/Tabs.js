function SwitchTab(evt, TabName){
  // Declare all variables
      var i, tabcontent, tablinks;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("naviBx");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(TabName).style.display = "block";
      evt.currentTarget.className += " active";

      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.cssText+="background-color:#333;color:#f2f2f2;";
      }
      evt.currentTarget.style.cssText+="background-color:white;color:black; ";

}
