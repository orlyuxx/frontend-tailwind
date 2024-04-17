import { setRouter  } from "../router/router.js";  

// set router
setRouter();

// Backend URL
const backendURL = "http://backend.test";

// Notifications
function successNotification(message, seconds = "") {
    document.querySelector(".alert-success").classList.remove('hidden');
    document.querySelector(".alert-success").classList.add('block');
    document.querySelector(".alert-success").innerHTML = message;

    if(seconds !== ""){
        setTimeout(function() {
            document.querySelector(".alert-success").classList.remove('block');
            document.querySelector(".alert-success").classList.add('hidden');
        }, seconds * 1000)
    }
}

function errorNotification(message, seconds = "") {
    document.querySelector(".alert-danger").classList.remove('hidden');
    document.querySelector(".alert-danger").classList.add('block');
    document.querySelector(".alert-danger").innerHTML = message;

    if(seconds != ""){
        setTimeout(function() {
            document.querySelector(".alert-danger").classList.remove('block');
            document.querySelector(".alert-danger").classList.add('hidden');
        }, seconds * 1000)
    }
}

export { backendURL, successNotification, errorNotification };
