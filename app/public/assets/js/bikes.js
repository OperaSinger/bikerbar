

$(document).ready(function () {

    // getting data from client

    $.get("/api/bikes", function (data) {

        // console.log(data);

        // Create HTML dynamically for bikes ridden and unridden for
        // both the BIKES page, and for the Root directory

        for (var i = 0; i < data.length; i++) {

            let cardUnridden = (`<div class="card" id="${data[i].ID}><div class="card-body">
            <img src="${data[i].photo}" id="imgL">
            <h5 class="newName">${data[i].name}</h5>
            <p class="card-text">${data[i].bikeType}</p>
            <button type="submit" id="${data[i].ID}" class="ridden btn btn-primary">Ride!</button>
        </div>
        </div>`);

            let cardRidden = (`<div class="card" id="${data[i].ID}><div class="card-body">
            <img src="${data[i].photo}" id="imgR">
            <h5 class="newName">${data[i].name}</h5>
            <p class="card-text">${data[i].bikeType}</p>
        </div>
        </div>`);

            if (data[i].ridden == 0) {

                $("#bikeNotRid").append(cardUnridden);
                $("#allBikes").append(cardUnridden);

            }
            else {
                $("#bikeRid").append(cardRidden);
                $("#allBikes").append(cardRidden);

            }
        }
    })

    // take in data for a new bike to post to the server
$(document).on("click", ".ridden", function(){
    
    var bikeid = $(this).attr("id");

    $.ajax("/api/bikeRid", {
        type: "POST",
        data: {bikeid: bikeid}
    }).then(
        function () {
            console.log("changed Boolean");
            // Reload the page to get the updated list
            location.reload();
        }
    );
})
 
// enter bike information into the database
    $(".enterBike").on("submit", function () {
       
        var bikeObj = {
            newBikeName: $("#newBikeName").val().trim(),
            newBikeType: $("#newBikeType").val().trim(),
            newBikePhoto: $("#newBikePhoto").val().trim()
        }

        // Send the POST request.
        $.ajax("/api/bikes", {
            type: "POST",
            data: bikeObj
        }).then(
            function () {
                console.log("created new bike");
                // Reload the page to get the updated list
                
            }

           
        );

    });
});





