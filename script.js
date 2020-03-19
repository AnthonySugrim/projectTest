

  
// Jqery Function to Appened the API search to container. 

$("#fdaSearchAll").on("click", function(){
 
  $("#searchResults").empty();
  var queryURL = "https://api.fda.gov/food/event.json?search=products.industry_code:2 3&limit=50"
  

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    
    console.log(response);
     for (var i = 0; i < 10; i++){
      var brandName = $("<li>").text(response.results[i].products[0].name_brand);
      $("#searchResults").append(brandName);
      console.log(response.results[i].products[0].name_brand);
    }
  });


});
var queryURL = "https://api.fda.gov/food/event.json?search=state.industry_code:2 3&limit=50"


    var settings = {
"async": true,
"crossDomain": true,
"url": "https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations?language=en-gb",
"method": "GET",
"headers": {
    "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
    "x-rapidapi-key": "c351c03a0cmsh2f8864383801a38p17eb4fjsn251da310b5fb"
}
}

$.ajax(settings).done(function (response) {
console.log(response);
});