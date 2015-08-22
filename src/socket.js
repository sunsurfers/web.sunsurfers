/*
 * выносим все jquery в state
 * */

import $ from 'jquery'







/* todo: move to component */
$(function () {
  $('.message-form').submit(function () {


    return false;
  });

  var iamtyping = null;
  $('.message-form input').on('keypress', function(ev){
    if(ev.keyCode !== 13) {
      if(iamtyping == null) {
        socket.emit('i am typing');
      }

      clearTimeout(iamtyping);
      iamtyping = setTimeout(function(){
        socket.emit('i am stop typing')
        iamtyping = null
      }, 1500)
    }
  });

  $('.login').submit(function () {
    $('.login').hide();
    info.nickname = $('.login-input').val();


    socket.emit('set nickname', info.nickname);
    return false
  })

  $('#messages, #private-messages').on('click', 'b', function(ev){
    var val = $('.message-form input').val();
    val = '> ' + $(ev.currentTarget).text() + ': ' + val;
    $('.message-form input').val(val).focus()
  })
});


export default socket;