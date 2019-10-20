document.addEventListener('DOMContentLoaded', function() {
  
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'left'});
});


    $('ul.tabs').tabs({
      swipeable : true,
      responsiveThreshold : Infinity
    });