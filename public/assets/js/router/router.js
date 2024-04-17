function setRouter() {
    switch (window.location.pathname){
        case "/":
        case "/public/pages/login.html":
        case "/public/pages/signup.html":
            if(localStorage.getItem("token") != null) {
                window.location.pathname = "/public/index.html"
            }
            break;
        case "/public/index.html":
            if(localStorage.getItem("token") == null) {
                window.location.pathname = "/public/pages/login.html"
            }
            break;

        default:
            break;
    }
}

export { setRouter };