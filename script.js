// Jqery Function to Appened the API search to container. 

$("#fdaSearchAll").on("click", function () {

  $("#searchResults").empty();
  var queryURL = "https://api.fda.gov/food/enforcement.json?search=products&limit=50"


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
      console.log('DATA', response.results);
      $('#generatedRecallResults').DataTable({
        data: response.results,
        columns: [{"data": "city"}, {"data": "reason_for_recall"}, {"data": "status"}]
      });
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


// $("#symptomSearchEnter").on("click", function () {}); 
 
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://priaid-symptom-checker-v1.p.rapidapi.com/issues?language=en-gb",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
    "x-rapidapi-key": "c351c03a0cmsh2f8864383801a38p17eb4fjsn251da310b5fb"
    
	}
};

// Get issue ID from user's search 
$.ajax(settings).done(function (response) {
console.log(response);
 // var issuesId = response[i].ID;
 // console.log(issuesId);
 $('#allSymptomsId').DataTable({
  data: response,
  columns: [{"data": "ID"}, {"data": "Name"}]
});


});

// then send ID to the API 
$("#patientSearchEntry").keypress(function(event){

  if(event.which == 13){
    var issuesId = $("#patientSearchEntry").val();
    console.log(issuesId);
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://priaid-symptom-checker-v1.p.rapidapi.com/issues/" + issuesId +"/info?language=en-gb",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
    "x-rapidapi-key": "c351c03a0cmsh2f8864383801a38p17eb4fjsn251da310b5fb"
  }
}

// Within api create the responses Name, Symptoms, Treatments 

$.ajax(settings).done(function (response) {
  console.log(response);

 
  var symptoms = $("#symptoms").append(response.Name);
  var description = $("#description").append(response.DescriptionShort);
  var diagnoses = $("#diagnoses").append(response.PossibleSymptoms);
  var treatment = $("#treatment").append(response.TreatmentDescription);
  
});

  }
})






