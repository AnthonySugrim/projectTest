


// Jqery Function to Appened the API search to container. 

$("#fdaSearchAll").on("click", function () {

  $("#searchResults").empty();
  var queryURL = "https://api.fda.gov/food/enforcement.json?search=products&limit=50"


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response);
    for (var i = 0; i < 50; i++) {
      var brandName = $("<li>").text(response.results[i].recalling_firm);
      $("#searchResults").append(brandName);
      var reason = $("<p>").text("Reason:  " + response.results[i].reason_for_recall);
      var status = $("<p>").text("Status:  " + response.results[i].status);
      brandName.append(reason, status);

    }
  });
});


// Make a Jqery Function to Appened the API search to container ("#stateCriteria")
//Makes ajax call to API with state 
$("#stateCriteria").on("change", function (e) {
  var state = e.target.value;

  var queryURL2 = "https://api.fda.gov/food/enforcement.json?search=state:" + state + "&limit=10"

  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function (response) {
    $("#stateUl").empty()
    for (var i = 0; i < 10; i++) {

      var stateResults = $("<li>").text(response.results[i].recalling_firm);
      var reason = $("<p>").text("Reason:  " + response.results[i].reason_for_recall);
      var status = $("<p>").text("Status:  " + response.results[i].status);
      stateResults.append(reason, status);

      $("#stateUl").append(stateResults);


    };

    console.log(response);
  });


});




//within search function set recall type === 


var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://priaid-symptom-checker-v1.p.rapidapi.com/headache?&format=json&language=en-gb",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
    "x-rapidapi-key": "c351c03a0cmsh2f8864383801a38p17eb4fjsn251da310b5fb"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});