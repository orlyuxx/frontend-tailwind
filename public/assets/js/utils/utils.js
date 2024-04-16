// Backend URL
const url = "http://backend.test";

// Notifications
function successNotification(message, seconds) {
    document.querySelector(".alert-success").classList.remove('hidden');
    document.querySelector(".alert-success").classList.add('block');
    document.querySelector(".alert-success").innerHTML = message;

    setTimeout(function() {
        document.querySelector(".alert-success").classList.remove('block');
        document.querySelector(".alert-success").classList.add('hidden');
    }, seconds * 1000)
}

function errorNotification(message, seconds) {
    document.querySelector(".alert-danger").classList.remove('hidden');
    document.querySelector(".alert-danger").classList.add('block');
    document.querySelector(".alert-danger").innerHTML = message;

    setTimeout(function() {
        document.querySelector(".alert-danger").classList.remove('block');
        document.querySelector(".alert-danger").classList.add('hidden');
    }, seconds * 1000)
}

export { url, successNotification, errorNotification };
