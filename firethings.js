// firethings.js
import {initializeApp} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    setDoc,
    addDoc,
    deleteDoc,
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
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
var auth = getAuth();
const provider = new GoogleAuthProvider(auth);
provider.setCustomParameters({
    prompt: 'select_account'
});

window.signIn = async function () {
    try {
        let email = document.getElementById('login-email').value;
        let password = document.getElementById('login-password').value;

        // Sign in with Firebase Email & Password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store user info in localStorage
        localStorage.setItem('userEmail', user.email);
        localStorage.setItem('userProfile', JSON.stringify(user));

        // Check if user document exists in Firestore
        const userDocRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(userDocRef);

        if (!docSnap.exists()) {
            await setDoc(userDocRef, {
                "recipe-ids": []
            });
        }

        alert('You have signed in');
        window.location.href = 'loggedPage.html';
    } catch (err) {
        alert(err.message);
        console.error(err);
    }
};

window.signUp = async function () {
    try {
        let email = document.getElementById('login-email').value;
        let password = document.getElementById('login-password').value;

        // Sign up with Firebase Email & Password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store user info in localStorage
        localStorage.setItem('userEmail', user.email);
        localStorage.setItem('userProfile', JSON.stringify(user));

        // Create user document in Firestore
        const userDocRef = doc(db, "Users", user.uid);
        await setDoc(userDocRef, {
            "recipe-ids": []
        });

        alert('You have signed up');
        window.location.href = 'login.html';
    } catch (err) {
        alert(err.message);
        console.error(err);
    }
};
if (window.location.pathname === '/Proektna/login.html' || window.location.pathname === '/Proektna/register.html' || window.location.pathname === '/TastyRecipes/register.html' || window.location.pathname === '/TastyRecipes/login.html') {
    const googleLogin = document.getElementById('google-login');
    googleLogin.addEventListener('click', function (event) {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const user = result.user;
                localStorage.setItem('userEmail', user.email);
                localStorage.setItem('userProfile', JSON.stringify(user));
                const userDocRef = doc(db, "Users", user.uid);
                const docSnap = await getDoc(userDocRef);
                if (!docSnap.exists()) {
                    await setDoc(userDocRef, {
                        "recipe-ids": []
                    });
                }

                window.location.href = 'loggedPage.html'
            }).catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    });
}
if (window.location.pathname === '/Proektna/loggedPage.html' || window.location.pathname === '/TastyRecipes/loggedPage.html') {
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
const userId = JSON.parse(localStorage.getItem('userProfile'));

export async function getAllFavourites() {
    const userId = JSON.parse(localStorage.getItem('userProfile'))?.uid;
    if (!userId) {
        window.favourites = [];
        return;
    }
    const userDocRef = doc(db, "Users", userId);
    try {
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            window.favourites = data && data["recipe-ids"] ? data["recipe-ids"] : [];
        } else {
            window.favourites = [];
        }
    } catch (error) {
        console.error("Error getting documents: ", error);
        window.favourites = [];
    }
}

export async function getMyRecipes() {
    const userID = JSON.parse(localStorage.getItem('userProfile'))?.uid;
    if (!userID) {
        window.myRecipes = [];
        return;
    }

    const myRecipesRef = collection(db, "Users", userID, "MyRecipes");
    try {
        const querySnapshot = await getDocs(myRecipesRef);
        if (!querySnapshot.empty) {
            const myRecipes = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            window.myRecipes = myRecipes;
        } else {
            window.myRecipes = [];
            console.log("No recipes found.");
        }
    } catch (error) {
        console.error("Error getting documents: ", error);
        window.myRecipes = [];
    }
}
getMyRecipes();

if(localStorage.getItem('userEmail')){
    getAllFavourites()
} else{
    window.favourites = ''
}
// Add new recipe
window.addNewRecipe = async function (event, obj) {
    // Proverka dali ima najaven korisnik
    event.preventDefault();
    // const user = auth.currentUser;
    // console.log("user:",user)
    const userId = JSON.parse(localStorage.getItem('userProfile'))?.uid;
    if (!userId) {
        console.error("There isn't a logged in user!");
        window.location.href = 'login.html'
        return;
    }
    var naslov = obj.children[2].value;
    var vreme = obj.children[4].value;
    var kategorija = obj.children[6].value;
    var sostojki = obj.children[8].getElementsByTagName('input');
    var sostojkiNiza = [];

    for (var i = 0; i < sostojki.length; i++) {
        sostojkiNiza.push(sostojki[i].value);
    }

    var direkcii = obj.children[11].value;
    var newRecipe = {
        title: naslov,
        time: vreme,
        category: kategorija,
        ingredients: sostojkiNiza,
        directions: direkcii
    };

    try {
        const myRecipesRef = collection(db, "Users", userId, "MyRecipes");
        const docRef = await addDoc(myRecipesRef, newRecipe);
        window.location.href = 'myRecipes.html';
        alert("Successfully added a recipe!");
        console.log("Recipe is added with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding a recipe:", error);
    }
};
// Delete recipe
window.deleteRecipe = async function (recipeId) {
    console.log(recipeId)
    const user = auth.currentUser;
    if (!user) {
        console.error("There isn't a logged in user!");
        return;
    }
    try {
        const recipeRef = doc(db, "Users", user.uid, "MyRecipes", recipeId);

        await deleteDoc(recipeRef);

        alert("Recipe is deleted");
        console.log("Recipe is successfully deleted", recipeId);

        window.location.reload();
    } catch (error) {
        console.error("Error deleting a recipe", error);
    }
};
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





/*
git add .
git commit -m "Ready to show"
git push origin main

 */



