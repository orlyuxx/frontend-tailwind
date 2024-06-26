import { backendURL, successNotification, errorNotification } from "../utils/utils.js";

  // Form Login
  const form_login = document.getElementById("form_login");
  
  form_login.onsubmit = async (e) => {
    e.preventDefault();

    // Disable Button
    document.querySelector("#form_login button").disabled = true;
    document.querySelector(
      "#form_login button"
    ).innerHTML = `<div role="status" class="flex items-center justify-center">
                <span class="text-gray-800 dark:text-gray-400">Logging in...</span>
                </div>`;
  
    // Get Values of Form (input, textarea, select) set it as form-data
    const formData = new FormData(form_login);
  
    // Fetch API User Login Endpoint
    const response = await fetch(backendURL + "/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });
  
    // Get response if 200-299 status code
    if (response.ok) {
      const json = await response.json();
      console.log(json);
  
      // Store Token
      localStorage.setItem("token", json.token);
  
      // Store Role
      localStorage.setItem("role", json.user.role);
  
      form_login.reset();
  
      successNotification("Successfully logged in.");
  
      // Redirect Page
      window.location.pathname = "/public/index.html";
    }
    // Get response if 422 status code
    else if (response.status == 422) {
      const json = await response.json();
  
      errorNotification(json.message, 5);
    }
  
    // Enable Button
    document.querySelector("#form_login button").disabled = false;
    document.querySelector("#form_login button").innerHTML = `Login`;
  };
  