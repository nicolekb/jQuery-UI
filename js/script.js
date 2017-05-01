$(function (){
  /* -----------------
  jQuery - UI draggable
  -------------------*/
  //dragging the boxes
  $('.box').draggable();

  //Will allow the box to scroll down when dragged
  $('#box1').draggable({scroll: true, revert: 'invalid'}); //revert: "invalid" - extension of droppable. It will bring box 1 to its original position if was not dropped on the right box.

  //constrained movement
  $('#box2').draggable({axis: 'x'}); //box 2 can only be dragged left and right
  $('#box3').draggable({axis: 'y'}); //box 3 can only be dragged up and down
  $('#box4').draggable({containment: '.container', revert: 'invalid'}); //box 4 can only be around the container

  /* -----------------
  jQuery - UI droppable
  -------------------*/
  $('#droppable').droppable( {
    accept: '#box1', //only accepts box 1
    drop: function() {
      $(this).text("Dropped the box!"); //this - pertained to droppable
    } //drop is the default.
  });

  /* -----------------
  jQuery - UI sortable
  -------------------*/
  $('#sortable').sortable({connectWith: '#sortableToo', placeholder: 'placeholderBox'}); //connectWith - sortableToo so you coould drop it on to the sortableToo side.
  //adding placeholder so you have a "blank space"

  $('#sortableToo').sortable();

  /* -----------------
  jQuery - UI accordion
  -------------------*/
  $('#accordion').accordion({collapsible: 'true', heightStyle: 'content'}); //collapsible - so it will colapse when tab header was clicked.
  //heightStyle - to resize the container according to the content

  /* -----------------
  jQuery - UI datepicker
  -------------------*/
  $('.date').datepicker({
    showOtherMonths: true, //show the previous month
    selectOtherMonths: true, //to select previous month
    showButtonPanel: true, //to select current date
    changeMonth: false, //select month
    changeYear: false, //select year
    numberOfMonths: 2, //toggle between months
    minDate: 0, //you couldnt choose "yesterday", -1D = -1 day, 1W = -1 week, -1W 3D = - 1 week and 3 days
    // maxDate: opposite of minDate '+1D' etc..
  });

  /* ----------------------------------
  jQuery - UI toDo List Web Application
  -----------------------------------*/
  $('#todoList ul').sortable({
    items: "li:not('.listTitle, .addItem')", //unable to sort list title and addItem
    connectWith: 'ul', //connectWith all other list items so you could drag all week long
    dropOnEmpty: true, //drop on an empty unordered list
    placeholder: 'emptySpace'
  }); //todoList sortable

  $('input').keydown(function(e){
    if (e.keyCode == 13) {
      var item = $(this).val();

      $(this).parent().parent().append('<li>' + item + '</li>');
      $(this).val('');
    }
  }); //end of input

  $('#trash').droppable ({
    drop: function(event, ui) {
      ui.draggable.remove();
    }
  })
});
