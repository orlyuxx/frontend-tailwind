import { backendURL, successNotification, errorNotification } from "../utils/utils.js";

const btn_logout = document.querySelector("#btn_logout");

btn_logout.onclick = async () => {
    const btn_logout = document.getElementById("btn_logout");
btn_logout.onclick = async () => {
  // Access Logout API Endpoint
  const response = await fetch(backendURL + "/api/logout", {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })

  // Get response if 200-299 status code
  if (response.ok) {
      // Clear Tokens
      localStorage.clear();
      // Redirect Page
      window.location.pathname = "/public/pages/login.html";
    }
    // Get response if 400 or 500 status code
    else {
        const json = await response.json();
        
        errorNotification(json.message, 10);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const btn_logout = document.getElementById("btn_logout");
    if (btn_logout) {
        btn_logout.onclick = async () => {
            alert("clicked");
        };
    } else {
        console.error("Element with ID 'btn_logout' not found.");
    }
});
}

