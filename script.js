var term;
var queryURL = "https://api.fda.gov/food/event.json?search=products.industry_code:2 3&limit=10"

$.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
 

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