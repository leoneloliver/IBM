$(document).ready(function() {
  setTimeout(function(){ 
    // search top bar behaviors
    $('[data-search]').on('keyup', function() {
      var searchVal = $(this).val();
      var filterItems = $('[data-filter-item]');
      if ( searchVal !== '' ) {
      	filterItems.addClass('hidden');
      	$('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
      	$('.term').text("#"+searchVal.toLowerCase());
      } else {
      	filterItems.removeClass('hidden');
      	$('.term').text('');
      }
    });
    // call function to load images
    showimg();
    // buttom to change view list
    $('#viewlist, #viewgrid').on('click', function() {
      $('#grid-view').toggleClass('list masonry');
      if($(this).attr('id') == 'viewlist'){
        $(this).hide();
        $('#viewgrid').show();
      }else{
        $(this).hide();
        $('#viewlist').show();
      }
    });
    // function to load images efects
    function showimg(){
      $('.hides img').each(function(index) {
        var times = (index*5);
        setTimeout(function(){ 
          $('.hides img').eq(index).addClass('show-it'); 
          $('.item').eq(index).removeClass('bgload');
        }, times);
      });
    }
    // controller btn seach when mobile
    $('.search-container i.fa.fa-search, .search-container i.fa.fa-times').on('click', function(){
      $('.search-container').toggleClass('open');
    });
    // open modal for each item
    $('.item').on('click', function(){
      $('body').toggleClass('open-modal');
      $('.modal-containner img').attr('src',$('img',this).attr('src'));
      $('.modal-containner .text-modal').text($('.title',this).text());
    });
    // close modal window
    $('.close-window').on('click', function(){
      $('body').removeClass('open-modal');
    });
    //change topbar when scrolling
    $(window).scroll(function() {
      if ($(this).scrollTop() > 150) {
        $('.top-bar').addClass('interaction');
      }else{
        $('.top-bar').removeClass('interaction');
      } 
    });

  },3000); 
});
