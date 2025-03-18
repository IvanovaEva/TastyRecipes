if (window.location.pathname.endsWith('index.html')){
    new Swiper('.card-wrapper1', {
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
        }
    });
    new Swiper('.card-wrapper2', {
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
        }
    });
    new Swiper('.card-wrapper3', {
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination3',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next3',
            prevEl: '.swiper-button-prev3',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
        }
    });
}
const goToTopBtn = document.getElementById("goToTopBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        goToTopBtn.style.display = "block";
    } else {
        goToTopBtn.style.display = "none";
    }
};
goToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Login page
function goToRegister() {
    window.location.href = "register.html";
}
function goToLogin() {
    window.location.href = "login.html";
}
function logInWithEmail() {
    document.getElementById('login-data-div').style.display = "none";
    document.querySelector('#login-form h1').innerHTML += ' with Email'
    var container = document.getElementById('login-data-new');
    container.innerHTML += '<div class="login-input-div" id="login-email-div"><div>Email Address</div><input placeholder="yourname@example.com" type="text" id="login-email"></div><div class="login-input-div" id="login-password-div"><div>Password</div><input type="password" id="login-password" placeholder="password"></div><p id="log-in-button" class="register-login-btn" onclick="signIn()"> Log in</p>'
}
function registerWithEmail() {
    document.getElementById('login-data-div').style.display = "none";
    document.querySelector('#login-form h1').innerHTML += ' with Email'
    var container = document.getElementById('login-data-new');
    container.innerHTML += '<div class="login-input-div" id="login-email-div"><div>Email Address</div><input placeholder="yourname@example.com" type="text" id="login-email"></div><div class="login-input-div" id="login-password-div"><div>Password</div><input type="password" id="login-password" placeholder="password"></div><p id="register-button" class="register-login-btn" onclick="signUp()">Sign up</p>'
}
var loginNav = document.getElementById('login-navigation')
loginNav.addEventListener('click', function () {
    var emailOfTheUser = localStorage.getItem('userEmail')
    if (emailOfTheUser) {
        window.location.href = 'loggedPage.html';
    } else{
        window.location.href = 'login.html';
    }
})