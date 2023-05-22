//---------------------------------nav toggle-------------------------------------
//--------------------------------------------------------------------------------
//capture classes in variables----
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('nav-menu')[0];
let menuOpen = false;

//toggle event listener----
toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')

    if (!menuOpen) {
        toggleButton.classList.add('open');
        menuOpen = true;
    } else {
        toggleButton.classList.remove('open');
        menuOpen = false;
    }
});


//---------------------------------Mobile swipe toggle-----------------------------
//---------------------------------------------------------------------------------
//capture classes in variables--
const circleToggler = document.getElementsByClassName('circle-toggle');

const w = window.innerWidth;

if (w < 576) {
    [...circleToggler].forEach((button) => {
        button.addEventListener('click', (e) => {
            let lastClickedId;
    
            [...circleToggler].forEach((button) => {
                button.classList.remove('active');
                lastClickedId = e.target.id;
            });
    
            e.target.classList.add('active');
    
            const getRid = document.querySelectorAll('.review');
    
            [...getRid].forEach((tab) => {
                tab.classList.remove('active');
            });
        
            document.querySelector('#' + lastClickedId).classList.add('active');
        });
    });
}


//---------------------------------form validation--------------------------------
//--------------------------------------------------------------------------------
//capture tags/classes in variables----
const form = document.querySelector("form");
const input = document.querySelector("input");
const errorMsg = document.querySelector(".error-box")

//event listener type (submit) for form----
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    //if the input is not valid display error message----
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.get("email"))) {
        errorMsg.classList.add('show'); //error text
        input.classList.add('error');  //error border
    } else {
        errorMsg.classList.remove('show');  //error text
        input.classList.remove('error');  //error border
    }
});
