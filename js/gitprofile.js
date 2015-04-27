 $(document).ready(function() {
    
    var user_error = function() {
      $('.container').prepend("User not found")
    };

    var clear_field = function() {
      $('input.username').val('');
    };

    var fetch_data = function() {
      $('.container').prepend(Mustache.render(template, info));
    };

  $('.gitprofile').on('submit', function(e) {

    e.preventDefault();

    var url = 'https://api.github.com/users/' + $('input.username').val();

    var template = $('template').html();


    function clear_field() {

    };

    $.get(url, function(info) {
      fetch_data()
    })
    .fail(function() {
      user_error()
    })
    .always(function() {
      clear_field()
    });
  });

});

//Could we refactor the anonymous functions that are passed as arguments to fail and always into separate, more clearly named functions?
//How could we test this?
//The external libraries used here are being loaded over a CDN. What is a CDN?
//Can you adapt this to another API? What would you have to change to make it work?
//How could we have the search results return automatically as you type into the search box?
//How would you test this? Would you implement this in a different way?