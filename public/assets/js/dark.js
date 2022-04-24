const switchIcon = document.querySelector(".mode");

switchIcon.addEventListener("click", changeMode);

if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    const e = {};
    
    e.target = switchIcon;
    
    changeMode(e);
}

function changeMode(e) {
    if(e.target.classList.contains("fa-moon")) {
        e.target.classList.remove("fa-moon");
        e.target.classList.add("fa-sun");
    } else {
        e.target.classList.remove("fa-sun");
        e.target.classList.add("fa-moon");
    }
    
    document.querySelectorAll(".bg-light, .bg-dark").forEach(element => {
        if(element.classList.contains("bg-light")) {
            element.classList.remove("bg-light");
	        element.classList.add("bg-dark");
        } else {
            element.classList.add("bg-light");
	        element.classList.remove("bg-dark");
        }
    });
    
    document.querySelectorAll(".text-light, .text-dark").forEach(element => {
        if(element.classList.contains("text-light")) {
            element.classList.remove("text-light");
            element.classList.add("text-dark");
        } else {
            element.classList.add("text-light");
            element.classList.remove("text-dark");
        }
    });
    
    document.querySelectorAll(".btn").forEach(button => {
        if(button.classList.contains("btn-primary")) {
            button.classList.remove("btn-primary");
            button.classList.add("btn-info");
        } else {
            button.classList.remove("btn-info");
            button.classList.add("btn-primary");
        }
    });

    document.querySelectorAll("h2").forEach(element => {
      if(element.classList.contains("light-h2")) {
        element.classList.remove("light-h2");
      } else {
        element.classList.add("light-h2");
      }
    });

    document.querySelectorAll("code").forEach(element => {
      if(element.classList.contains("light-code")) {
        element.classList.remove("light-code");
      } else {
        element.classList.add("light-code");
      }
    });

    document.querySelectorAll("img").forEach(element => {
      if(element.classList.contains("opacity-75")) {
        element.classList.remove("opacity-75");
      } else {
        element.classList.add("opacity-75");
      }
    });
	
	document.querySelectorAll(".navbar-toggler-icon").forEach(element => {
      if(element.classList.contains("icon-invert")) {
        element.classList.remove("icon-invert");
      } else {
        element.classList.add("icon-invert");
      }
    });
}