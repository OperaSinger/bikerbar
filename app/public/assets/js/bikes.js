

$(document).ready(function () {

    // getting data from client

    $.get("/api/bikes", function (data) {

        console.log(data);

        for (var i = 0; i < data.length; i++) {

            let cardUnridden = (`<div class="card" id="${data[i].ID}><div class="card-body">
            <img src="${data[i].photo}" id="imgL">
            <h5 class="newName">${data[i].name}</h5>
            <p class="card-text">${data[i].bikeType}</p>
            <button type="submit" id="${data[i].ID}" class="ridden btn btn-primary">Ride!</button>
        </div>
        </div>`);

            let cardRidden = (`<div class="card" id="${data[i].ID}><div class="card-body">
            <img src="${data[i].photo}" id="imgL">
            <h5 class="newName">${data[i].name}</h5>
            <p class="card-text">${data[i].bikeType}</p>
        </div>
        </div>`);

            if (data[i].ridden == 0) {

                $("#bikeNotRid").append(cardUnridden);
            }
            else {
                $("#bikeRid").append(cardRidden);
            }
        }
    })

    $.get("/api/allbikes", function (data) {

        for (var i = 0; i < data.length; i++) {

            let cardUnridden = (`<div class="card" id="${data[i].ID}><div class="card-body">
            <img src="${data[i].photo}" id="imgL">
            <h5 class="newName">${data[i].name}</h5>
            <p class="card-text">${data[i].bikeType}</p>
            <button type="submit" id="${data[i].ID}" class="ridden btn btn-primary">Ride!</button>
        </div>
        </div>`);

            let cardRidden = (`<div class="card" id="${data[i].ID}><div class="card-body">
            <img src="${data[i].photo}" id="imgL">
            <h5 class="newName">${data[i].name}</h5>
            <p class="card-text">${data[i].bikeType}</p>
        </div>
        </div>`);

            console.log(data);

            if (data[i].ridden == 0) {
                $("#allBikes").append(cardUnridden);
            }
            else if (data[i].ridden == 1) {
                $("#allBikes").append(cardRidden);
            }

        };
    })

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





