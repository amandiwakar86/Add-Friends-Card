// Select the Status heading
var isstatus = document.querySelector("h5")
// Select the button
var addfriend = document.querySelector("#addfriend")
// set the value of status for change the conditon
var c = 0
// create a function and add click functionality
addfriend.addEventListener("click", function () {
    // Give the condition
    if (c == 0) {
        // Change the status if someone add the friend
        addfriend.innerHTML = "Remove Friend"
        isstatus.innerHTML = "Friends 😊"
        isstatus.style.color = "rgb(4, 11, 48)"
        // Increase the status value
        c = 1
    }
    else {
        // Change the contant if someone remove the friend
        addfriend.innerHTML = "Add Friend"
        isstatus.innerHTML = "Stranger"
        isstatus.style.color = "rgb(236, 33, 33)"
        // Decrease the status value
        c = 0
    }

})
