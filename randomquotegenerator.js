$(document).ready(function(){

  var content="",author="",fortweet="An apt quotation is like a lamp which flings its light over the whole sentence.-Letitia Elizabeth Landon";
  $("#new-quote").on('click',function(){

$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?",function(a){
    author="<p>&mdash; " + a[0].title +  "</p>";
    content= "<p>" + a[0].content +  "</p>";
    fortweet = a[0].content.slice(3,-5) + '--' + a[0].title;

    if(fortweet.length >= 140)
    {
      fortweet = fortweet = a[0].content.slice(3,-5);
    }
    $("#quotation").html(content);
    $("#quote-author").html(author);
  });
  });

  $('#tweet').on('click',function(){
    $(this).attr('href','https://twitter.com/intent/tweet/?text=' + fortweet);
  });
});
