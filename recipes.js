function backk() {
    window.location.reload()
}

function enterHeart(obj) {
    if (!obj.classList.contains('clicked')) {
        obj.setAttribute('class', 'fa-solid fa-heart');
        obj.style.color = '#f84747';
    }
}

function leaveHeart(obj) {
    if (!obj.classList.contains('clicked')) {
        obj.setAttribute('class', 'fa-regular fa-heart');
        obj.style.color = '';
    }
}
window.onload = function () {
    if(window.location.href.includes('myRecipes.html')){
        if(!JSON.parse(localStorage.getItem('userProfile'))?.uid){
            document.getElementById('myRecipesStatus').innerHTML = "Log in to save your own recipes!";
        }
    }
}
var globalnaSearch = 0
setTimeout(() => {
    var favsArray = '';
    if (window.favourites)
        favsArray = favourites
    const loggedUser = JSON.parse(localStorage.getItem('userProfile'));
    var offset = 0;
    // Recipes first 8
    if (window.location.pathname.endsWith('recipes.html')) {
        var container = document.getElementById('recipesContainer');
        for (let j = 0; j < 2; j++) {
            var recepti = '<div class="recipesBrowse">';
            for (var i = 0; i < 4; i++) {
                if (favsArray.includes(window.recipes[offset].id)) {
                    var recept = '<div><div class="browseImg" data-recipe-id="' + window.recipes[offset].id + '">' +
                        '<img src="' + window.recipes[offset].img + '" />' +
                        '</div><div style="display: flex"><h2 class="recipe-name">' +
                        '' + window.recipes[offset].name + '</h2> <i style="color: #f84747" id="srcence" class="fa-solid fa-heart clicked" ' +
                        'onclick="window.zacrveniGo(this)"></i></div></div>';
                } else {
                    var recept = '<div><div class="browseImg" data-recipe-id="' + window.recipes[offset].id + '">' +
                        '<img src="' + window.recipes[offset].img + '" />' +
                        '</div><div style="display: flex"><h2 class="recipe-name">' +
                        '' + window.recipes[offset].name + '</h2> <i id="srcence" class="fa-regular fa-heart" ' +
                        'onclick="window.zacrveniGo(this)" onmouseenter="enterHeart(this)" onmouseleave="leaveHeart(this)"></i></div></div>';
                }
                recepti += recept;
                offset++;
            }
            recepti += '</div>';
            container.innerHTML += recepti;
        }
    }

    var celaStrana = document.getElementById('recipesAll');
    var newContent = document.getElementById('newContent');

    // <div className="stars-single-page">  .right pod h1 za Zvezdi
    //     ${[...Array(5)].map((_, i) => `<i class="fa fa-star${i < 5 ? '' : '-o'}"></i>`).join('')}
    // </div>

    function generateRecipeContent(recipe) {
        return `
        <div class="singleItemPageFull">
            <div class="single-item-container">
                 <div id="goBackButton">
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                 </div>
                <div class="left">
                    <img src="${recipe.img}" alt="${recipe.name}"><br>
                    <div class="clock-time">
                        <i class="fa fa-clock-o"></i>
                        <span>${recipe.time}</span>
                    </div>
                </div>
                <div class="right">
                    <h1>${recipe.name}</h1>
                    <div class="single-page-ingredients-list">
                        <h2>Ingredients</h2>
                        <div class="ingredient-list-item">
                            ${recipe.ingredients.map((ingredient, index) => `
                                <div class="item">
                                    <input type="checkbox" id="ing-item${index + 1}">
                                    <div class="item-div-right"><label for="ing-item${index + 1}">${ingredient}</label></div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-item-directions">
                <div class="line-text" style="margin: 0;">
                    <div class="line-heading">DIRECTIONS</div>
                </div>
                <p>${recipe.description}</p>
            </div>
        </div>
    `;
    }

    function showRecipe(recipeId) {
        var recipe = window.recipes.find(r => r.id === parseInt(recipeId));
        if (recipe) {
            celaStrana.style.display = 'none';
            newContent.innerHTML = generateRecipeContent(recipe);
            newContent.style.display = 'block';
        }
    }

    function showAllRecipes() {
        celaStrana.style.display = 'block';
        newContent.style.display = 'none';
    }

    document.addEventListener("click", function (event) {
        var slika = event.target.closest(".browseImg");
        if (slika) {
            var recipeId = slika.dataset.recipeId;
            if (recipeId) {
                sessionStorage.setItem('scrollPosition', window.scrollY);
                history.pushState({recipeId: recipeId}, "", "#recipe-" + recipeId);
                showRecipe(recipeId);
                window.scrollTo(0, 0)
            }
        }
        var cardLink = event.target.closest(".card-link");
        if (cardLink) {
            var recipeId = cardLink.getAttribute('data-recipe-id');
            if (recipeId) {
                sessionStorage.setItem('scrollPosition', window.scrollY);
                history.pushState({recipeId: recipeId}, "", "#recipe-" + recipeId);
                showRecipe(recipeId);
                window.scrollTo(0, 0);
            }
        }
        var goBackButton = event.target.closest("#goBackButton");
        if (goBackButton) {
            history.back();
            vratiSearch()
        }
    });
    window.addEventListener("popstate", function (event) {
        if (event.state && event.state.recipeId) {
            showRecipe(event.state.recipeId);
        } else {
            showAllRecipes();
            const scrollPosition = sessionStorage.getItem('scrollPosition') || 0;
            window.scrollTo(0, scrollPosition);
        }
    });
// Recipes add more
    document.addEventListener("click", function (event) {
        if (event.target.closest(".more-recipes-div")) {
            for (let j = 0; j < 2; j++) {
                var recepti = '<div class="recipesBrowse">'
                for (var i = 0; i < 4; i++) {
                    if (favsArray.includes(window.recipes[offset].id)) {
                        var recept = '<div><div class="browseImg" data-recipe-id="' + window.recipes[offset].id + '">' +
                            '<img src="' + window.recipes[offset].img + '" />' +
                            '</div><div style="display: flex"><h2 class="recipe-name">' +
                            '' + window.recipes[offset].name + '</h2> <i style="color: #f84747" id="srcence" class="fa-solid fa-heart clicked" ' +
                            'onclick="window.zacrveniGo(this)"></i></div></div>';
                    } else {
                        var recept = '<div><div class="browseImg" data-recipe-id="' + window.recipes[offset].id + '">' +
                            '<img src="' + window.recipes[offset].img + '" />' +
                            '</div><div style="display: flex"><h2 class="recipe-name">' +
                            '' + window.recipes[offset].name + '</h2> <i id="srcence" class="fa-regular fa-heart" ' +
                            'onclick="window.zacrveniGo(this)" onmouseenter="enterHeart(this)" onmouseleave="leaveHeart(this)"></i></div></div>';
                    }

                    recepti += recept;
                    offset++;
                }
                recepti += '</div>'
                container.innerHTML += recepti
            }
            if (offset >= window.recipes.length - 1) {
                document.querySelector('.more-recipes-div').style.display = 'none';
            }
        }
    })
// Ingredients recipes
    document.addEventListener("click", function (event) {
        var item = event.target.closest(".ingredient-gallery .ingredient-item")
        if (item) {
            window.scrollTo(0, 0)
            var ing = item.children[1].innerHTML.toLowerCase()
            var filteredRecipes = window.recipes.filter(r => r.ing.includes(ing));

            document.getElementById("gallery-container").innerHTML = ""
            document.getElementById("ingredientHeader").innerHTML = ""

            var recipeContainer = document.querySelector('.recipe-container');
            var contentOvde = '<div class="contentIngr"><h1>' + ing.toUpperCase() + '</h1><p>The main ingredient in your meal</p></div>'
            recipeContainer.innerHTML = contentOvde
            recipeContainer.innerHTML += '<div class="goBackButton" onclick="backk()"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>'
            var n = filteredRecipes.length;
            var ii = 0
            for (let i = 0; i < (Math.ceil(n / 4)); i++) {
                var recepti = '<div class="recipesBrowse">'
                for (var j = 0; (j < 4) && (ii < n); j++) {
                    if (favsArray.includes(filteredRecipes[ii].id)) {
                        var recept = '<div><div class="browseImg" data-recipe-id="' + filteredRecipes[ii].id + '">' +
                            '<img src="' + filteredRecipes[ii].img + '" /></div><div style="display: flex"><h2 class="recipe-name">' + filteredRecipes[ii].name + '</h2><i style="color: #f84747" id="srcence" class="fa-solid fa-heart clicked" ' + 'onclick="window.zacrveniGo(this)"></i></div></div>';

                    } else {
                        var recept = '<div><div class="browseImg" data-recipe-id="' + filteredRecipes[ii].id + '">' +
                            '<img src="' + filteredRecipes[ii].img + '" /></div><div style="display: flex"><h2 class="recipe-name">' + filteredRecipes[ii].name + '</h2><i id="srcence" class="fa-regular fa-heart" ' + 'onclick="window.zacrveniGo(this)" onmouseenter="enterHeart(this)" onmouseleave="leaveHeart(this)"></i></div></div>';

                    }
                    recepti += recept;
                    ii++
                }
                recepti += '</div>'
                recipeContainer.innerHTML += recepti
            }
        }
    })
// Category functions
    document.addEventListener("click", function (event) {
        var item = event.target.closest(" .ikonka")
        if (item) {
            window.scrollTo(0, 0)
            document.getElementById('index-categories-container').innerHTML = ""
            var novContainer = document.getElementById('index-container')
            var kategorija = item.children[1].innerHTML.toLowerCase()
            novContainer.innerHTML += '<div class="goBackButton" onclick="backk()"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>' +
                '<h1 id="kategorijaHeading">' + kategorija.toUpperCase() + '</h1>'

            var filteredRecipes = window.recipes.filter(r => r.cat.includes(kategorija));

            var n = filteredRecipes.length;
            var ii = 0
            for (let i = 0; i < (Math.ceil(n / 4)); i++) {
                var recepti = '<div class="recipesBrowse">'
                for (var j = 0; (j < 4) && (ii < n); j++) {
                    if (favsArray.includes(filteredRecipes[ii].id)) {
                        var recept = '<div><div class="browseImg" data-recipe-id="' + filteredRecipes[ii].id + '">' +
                            '<img src="' + filteredRecipes[ii].img + '" /></div><div style="display: flex"><h2 class="recipe-name">' + filteredRecipes[ii].name + '</h2><i style="color: #f84747" id="srcence" class="fa-solid fa-heart clicked" ' + 'onclick="window.zacrveniGo(this)"></i></div></div>';

                    } else {
                        var recept = '<div><div class="browseImg" data-recipe-id="' + filteredRecipes[ii].id + '">' +
                            '<img src="' + filteredRecipes[ii].img + '" /></div><div style="display: flex"><h2 class="recipe-name">' + filteredRecipes[ii].name + '</h2><i id="srcence" class="fa-regular fa-heart" ' + 'onclick="window.zacrveniGo(this)" onmouseenter="enterHeart(this)" onmouseleave="leaveHeart(this)"></i></div></div>';

                    }
                    recepti += recept;
                    ii++
                }
                recepti += '</div>'
                novContainer.innerHTML += recepti
            }
        }
    })
    document.addEventListener("click", function (event) {
        var item = event.target.closest(" .categoriesImg")
        if (item) {
            // console.log(item)
            window.scrollTo(0, 0)
            document.getElementById('recipesFirstPage').innerHTML = ""
            var novContainer = document.getElementById('recipesAllContainer')
            var kategorija = item.children[1].innerHTML.toLowerCase()
            novContainer.innerHTML += '<div class="goBackButton" onclick="backk()"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>' +
                '<h1 id="kategorijaHeading">' + kategorija.toUpperCase() + '</h1>'

            var filteredRecipes = window.recipes.filter(r => r.cat.includes(kategorija));

            var n = filteredRecipes.length;
            var ii = 0
            for (let i = 0; i < (Math.ceil(n / 4)); i++) {
                var recepti = '<div class="recipesBrowse">'
                for (var j = 0; (j < 4) && (ii < n); j++) {
                    if (favsArray.includes(filteredRecipes[ii].id)) {
                        var recept = '<div><div class="browseImg" data-recipe-id="' + filteredRecipes[ii].id + '">' +
                            '<img src="' + filteredRecipes[ii].img + '" /></div><div style="display: flex"><h2 class="recipe-name">' + filteredRecipes[ii].name + '</h2><i style="color: #f84747" id="srcence" class="fa-solid fa-heart clicked" ' + 'onclick="window.zacrveniGo(this)"></i></div></div>';

                    } else {
                        var recept = '<div><div class="browseImg" data-recipe-id="' + filteredRecipes[ii].id + '">' +
                            '<img src="' + filteredRecipes[ii].img + '" /></div><div style="display: flex"><h2 class="recipe-name">' + filteredRecipes[ii].name + '</h2><i id="srcence" class="fa-regular fa-heart" ' + 'onclick="window.zacrveniGo(this)" onmouseenter="enterHeart(this)" onmouseleave="leaveHeart(this)"></i></div></div>';
                    }
                    recepti += recept;
                    ii++
                }
                recepti += '</div>'
                novContainer.innerHTML += recepti
            }
        }
    })
// Favourites page
    if (window.location.pathname === '/Proektna/favourites.html' || window.location.pathname === '/TastyRecipes/favourites.html') {
        var allFavs = '';
        if (window.favourites)
            allFavs = window.recipes.filter(recipe => favourites.includes(recipe.id));
        console.log("allfavs", allFavs)

        var divce = document.getElementById('favouritesRecipes');
        divce.innerHTML = '';

        var ii = 0;
        var n = allFavs.length;

        for (let i = 0; i < Math.ceil(n / 4); i++) {
            var recepti = '<div class="recipesBrowse">';

            for (var j = 0; (j < 4) && (ii < n); j++) {
                console.log("favsArray:", favsArray)
                if (favsArray.includes(allFavs[ii].id)) {
                    var recept = '<div><div class="browseImg" data-recipe-id="' + allFavs[ii].id + '">' +
                        '<img src="' + allFavs[ii].img + '" />' +
                        '</div><div style="display: flex"><h2 class="recipe-name">' +
                        '' + allFavs[ii].name + '</h2> <i style="color:#f84747" id="srcence" class="fa-solid fa-heart clicked" ' +
                        'onclick="window.zacrveniGo(this)"></i></div></div>';
                } else {
                    var recept = '<div><div class="browseImg" data-recipe-id="' + allFavs[ii].id + '">' +
                        '<img src="' + allFavs[ii].img + '" />' +
                        '</div><div style="display: flex"><h2 class="recipe-name">' +
                        '' + allFavs[ii].name + '</h2> <i id="srcence" class="fa-regular fa-heart" ' +
                        'onclick="window.zacrveniGo(this)" onmouseenter="enterHeart(this)" onmouseleave="leaveHeart(this)"></i></div></div>';
                }
                recepti += recept;
                ii++;
            }
            recepti += '</div>';
            divce.innerHTML += recepti;
        }
        if (localStorage.getItem('userProfile') && divce.innerHTML === '') {
            divce.innerHTML += '<div class="go-login-favourites">Like your favorite recipes to see them displayed here!</div>';
        } else if (divce.innerHTML === '') {
            divce.innerHTML += '<div class="go-login-favourites">Log in to save your favourite recipes!</div>';
        }
    }
// Search button
    const searchButton = document.getElementById('search-navigation');
    const searchContainer = document.getElementById('search-container');
    const searchInput = searchContainer.children[0];

    var allRecipesDiv;
    if (location.href.endsWith('.html')) {
        allRecipesDiv = document.getElementById('recipesAll');
    } else {
        allRecipesDiv = document.querySelector('.singleItemPageFull');
    }
    if (!allRecipesDiv) {
        allRecipesDiv = document.createElement("div");
        allRecipesDiv.id = "searchResultsContainer";
        document.body.appendChild(allRecipesDiv);
    }
    let originalContent = allRecipesDiv.innerHTML;

    function eraseSearch() {
        if (searchContainer.classList.contains('active')) {
            allRecipesDiv.innerHTML = originalContent;
            searchContainer.children[0].value = ""
        } else {
            originalContent = allRecipesDiv.innerHTML;
        }
        searchContainer.classList.toggle('active');
    }

    function trgniSearch() {
        searchContainer.classList.remove('active');
        globalnaSearch = 1;
    }

    function vratiSearch() {
        if (globalnaSearch === 1) {
            searchContainer.classList.add('active');
            globalnaSearch = 0;
        }
    }

    searchButton.addEventListener('click', function () {
        eraseSearch();
        searchInput.focus();
    });

    window.eraseSearch = eraseSearch;
    window.trgniSearch = trgniSearch;

    searchInput.addEventListener('keyup', function () {
        const searchValue = searchInput.value.toLowerCase().trim();
        var desiredRecipes = window.recipes.filter(recipe => recipe.name.toLowerCase().includes(searchValue));

        if (searchValue === '' || desiredRecipes.length === 0) {
            allRecipesDiv.innerHTML = `
            <div style="height: 254px; text-align: center">
                <h1 style="margin-top: 200px; color: grey; font-family: math;">Search recipes ...</h1>
            </div>`;
        } else {
            var s = `
            <div id="searchedRecipesDiv" style="
                display: grid; 
                grid-template-columns: repeat(5, minmax(270px, 1fr)); 
                gap: 20px; 
                max-width: 100%; 
                box-sizing: border-box;
                margin: 50px 45px;
                padding: 0 10px;">
        `;

            desiredRecipes.forEach(recipe => {
                s += `
                <div style="box-sizing: border-box; max-width: 250px;" class="searchRecipeDiv">
                    <div class="browseImg" data-recipe-id="${recipe.id}" style="width: 100%;" onclick="trgniSearch()">
                        <img src="${recipe.img}" style="width: 100%; height: 375px; object-fit: cover; border-radius: 8px;" />
                    </div>
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <h2 class="recipe-name" style="margin: 5px 0; font-size: 16px;">${recipe.name}</h2>
                        ${favsArray.includes(recipe.id)
                    ? `<i style="color: #f84747" id="srcence" class="fa-solid fa-heart clicked" onclick="window.zacrveniGo(this)"></i>`
                    : `<i id="srcence" class="fa-regular fa-heart" onclick="window.zacrveniGo(this)" 
                                onmouseenter="enterHeart(this)" onmouseleave="leaveHeart(this)"></i>`}
                    </div>
                </div>`;
            });

            s += '</div>';
            allRecipesDiv.innerHTML = s;
        }
    });

    if (window.location.pathname === ('/Proektna/myRecipesAddNew.html')) {
        const ingredientsContainer = document.getElementById('ingredients-container');
        const addIngredientButton = document.getElementById('add-ingredient-button');
        addIngredientButton.addEventListener('click', () => {
            const newIngredientInput = document.createElement('input');
            newIngredientInput.type = 'text';
            newIngredientInput.name = 'ingredients[]';
            newIngredientInput.placeholder = 'Enter another ingredient';
            ingredientsContainer.appendChild(newIngredientInput);
        });
    }

    // My Recipes
    if (window.location.href.endsWith('myRecipes.html')) {
        var myRecipesCards = document.getElementById('myRecipesCards');
        var moiRecepti = window.myRecipes
        console.log(moiRecepti)
        moiRecepti.forEach((recipe) => {
            console.log(recipe);
            var str = '<div class="myRecipesCard">' +
                '<div class="recipeCat">' + recipe.category + '</div>' +
                '<h2 class="recipeName">' + recipe.title + '</h2>' +
                '<p class="recipeTime">Time: ' + recipe.time + '</p>' +
                `<hr><button class="recipeButtonViewMore" onclick='prikaziMojRecept(${JSON.stringify(recipe)})'>View More</button></div>`;

            myRecipesCards.innerHTML += str
        })
    }
    window.prikaziMojRecept = function (obj) {
        console.log(obj.id)
        var allMyRecipes = document.getElementById('myRecipesAll');
        var ingredStr = '';
        var recipeHTML = '<div class="goBackButton" onclick="backk()">' +
            '<i class="fa fa-chevron-left" aria-hidden="true"></i>' +
            '</div><div id="myRecipeSingleContainer">' +
            '<div class="singleLeft singlePageContainer">' +
            '<h2>' + obj.title + '</h2>' +
            '<div id="stars-clock">' +
            '<div class="my-clock-time">' +
            '<i class="fa fa-clock-o"></i>' +
            '<span> ' + obj.time + '</span>' +
            '</div>' +
            '</div>' +
            '<div class="single-item-directions">' +
            '<div class="line-text" style="margin: 0;">' +
            '<div class="line-heading directs">DIRECTIONS</div>' +
            '</div>' +
            '<p>' + obj.directions + '</p>' +
            '</div>' +
            '</div>' +
            '<div class="singleRight singlePageContainer">' +
            '<div class="single-page-ingredients-list my-ingr-list">' +
            '<h2>Ingredients</h2>' +
            '<div class="ingredient-list-item">';

        obj.ingredients.forEach(ingredient => {
            ingredStr += '<div class="item">' +
                '<input type="checkbox" id="' + ingredient + '">' +
                '<div class="item-div-right"><label for="' + ingredient + '">' + ingredient + '</label></div></div>';
        });
        recipeHTML += ingredStr + '</div></div></div></div>';
        recipeHTML += `<button class="delete-btn" onclick="deleteRecipe('${obj.id}')">Delete</button>`;

        allMyRecipes.innerHTML = recipeHTML;
    }
}, 700)