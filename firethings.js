// firethings.js
import {initializeApp} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    updateDoc,
    arrayRemove,
    arrayUnion
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyD4b89NjXn5oLJ6Vcfs4lVcJqEzrZDcT9Y",
    authDomain: "tastyrecipes-52469.firebaseapp.com",
    projectId: "tastyrecipes-52469",
    storageBucket: "tastyrecipes-52469.firebasestorage.app",
    messagingSenderId: "505495116240",
    appId: "1:505495116240:web:ca21c994742da1d69c81d5"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export async function getAllRecipes() {
    try {
        const recipesRef = collection(db, "Recipes");
        const querySnapshot = await getDocs(recipesRef);
        let recipes = [];
        querySnapshot.forEach((doc) => {
            recipes.push(doc.data());
        });
        window.recipes = recipes;
    } catch (error) {
        console.error("Error getting documents: ", error);
    }
}
// Initialize recipe fetch when the script is loaded
getAllRecipes();
// Authentication
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
const auth = getAuth();
const provider = new GoogleAuthProvider(auth);
console.log(window.location.pathname)
if (window.location.pathname === '/Proektna/login.html' || window.location.pathname === '/Proektna/register.html' || window.location.pathname === '/TastyRecipes/register.html' || window.location.pathname === '/TastyRecipes/login.html') {
    const googleLogin = document.getElementById('google-login');
    googleLogin.addEventListener('click', function (event) {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(1)
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const user = result.user;
                localStorage.setItem('userEmail', user.email);
                localStorage.setItem('userProfile', JSON.stringify(user));
                // TODO koga ke se logiras od nov account da go stava vo Users collection
                window.location.href = 'loggedPage.html'
            }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
    });

}

if (window.location.pathname === '/Proektna/loggedPage.html') {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        document.getElementById('user-email-login').textContent = userEmail;
    } else {
        document.getElementById('user-email-login').textContent = 'No user logged in';
    }

    document.getElementById('logout-page-button').addEventListener('click', () => {
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userProfile');
        window.favourites = ''
        window.location.href = 'login.html';
    });
}
// console.log(localStorage.getItem('userProfile'))


const userId = JSON.parse(localStorage.getItem('userProfile'));

export async function getAllFavourites() {
    try {
        const recipesRef = collection(db, "Users");
        const querySnapshot = await getDocs(recipesRef);
        let recipes = [];
        querySnapshot.forEach((doc) => {
            recipes.push(doc.data());  // Assuming the document data is the recipe object
        });
        window.favourites = recipes;
    } catch (error) {
        console.error("Error getting documents: ", error);
    }
}
if(localStorage.getItem('userEmail')){
    getAllFavourites()
} else{
    window.favourites = ''
}

export async function zacrveniGo(obj) {
    var idOfRecipe = parseInt(obj.parentElement.parentElement.children[0].getAttribute('data-recipe-id'));
    // console.log(userId)
    const userDocRef = doc(db, "Users", userId.uid);
    try {
        if (obj.classList.contains('clicked')) {
            obj.setAttribute('class', 'fa-regular fa-heart');
            obj.style.color = '';

            // 🚫 Remove recipe from Firebase
            await updateDoc(userDocRef, {
                "recipe-ids": arrayRemove(idOfRecipe)
            });
            console.log(`Recipe ID ${idOfRecipe} removed from favourites.`);

        } else {
            obj.setAttribute('class', 'fa-solid fa-heart clicked');
            obj.style.color = '#f84747';

            // ➕ Add recipe to Firebase
            await updateDoc(userDocRef, {
                "recipe-ids": arrayUnion(idOfRecipe)
            });
            console.log(`Recipe ID ${idOfRecipe} added to favourites.`);
        }
    } catch (error) {
        console.error("Error updating favourites: ", error);
    }
}
window.zacrveniGo = zacrveniGo;
// const facebookProvider = new FacebookAuthProvider();
//
// if (window.location.pathname === '/Proektna/login.html' || window.location.pathname === '/Proektna/register.html') {
//     const facebookLogin = document.getElementById('facebook-login');
//     console.log(facebookLogin);
//
//     facebookLogin.addEventListener('click', function (event) {
//         signInWithPopup(auth, facebookProvider)
//             .then((result) => {
//                 const credential = FacebookAuthProvider.credentialFromResult(result);
//                 const user = result.user;
//                 console.log(user.email);
//
//                 localStorage.setItem('userEmail', user.email);
//                 window.location.href = 'loggedPage.html';
//
//                 setTimeout(function () {
//                     window.location.href = 'index.html';
//                 }, 1000);
//
//             }).catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.error('Error during Facebook login:', errorMessage);
//             alert(errorMessage);
//         });
//     });
// }



/*
git add .
git commit -m "Your commit message herej"
git push origin main

 */



