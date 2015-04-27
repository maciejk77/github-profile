 $(document).ready(function() {

  $('.gitprofile').on('submit', function(e) {

    e.preventDefault();

    var url = 'https://api.github.com/users/' + $('input.username').val();

    var template = $('template').html();

    $.get(url, function(info) {
      $('.container').prepend(Mustache.render(template, info));
    })
    .fail(function() {
      $('.container').prepend("User not found")
    })
    .always(function() {
      $('input.username').val('');
      });
  });

});

//Have a look at the info that is coming back from the $.get request. What information does this contain?
//Do you understand why we have to pass info into function(info) { .... }? What construct in Ruby does this resemble?
//Try using cURL to obtain the same data in the command line.
//What is a Mustache?
//What is a template?
//How does the template interact with the data that we receive from the API call?
//What is the point of the .fail and .always methods? What happens if you take them away?
//Could we refactor the anonymous functions that are passed as arguments to fail and always into separate, more clearly named functions?
//How could we test this?
//The external libraries used here are being loaded over a CDN. What is a CDN?
//Can you adapt this to another API? What would you have to change to make it work?
//How could we have the search results return automatically as you type into the search box?
//How would you test this? Would you implement this in a different way?