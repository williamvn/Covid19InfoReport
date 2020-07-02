// $.get("https://api.covid19api.com/world/total", function(data, status){
//     console.log("Data:" + data + "\n Status:" + status);
// });


function callAPI() {
    fetch("https://api.covid19api.com/world/total")
        .then(response => response.json())
        .then(function (result) {
            console.log(result);
            $("#totalCases").text(result.TotalConfirmed)
            $("#totalDeath").text(result.TotalDeaths)
            $("#totalRecovered").text(result.TotalRecovered)
        });
}

if('serviceWorker' in navigator){
    navigator.serviceWorker.register("./sw.js").then(function() { console.log('Service Worker Registered')});
}