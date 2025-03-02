const recipes = [
    {
        id: 1,
        name: 'Creamy Chicken and Mushroom Pasta',
        description: 'Season chicken with 4g salt and 1g pepper.\n' +
            'Melt 20g butter in a Dutch oven over medium heat. Working in batches, add chicken to the skillet in a single layer and cook until golden brown, about 7-8 minutes, set aside.\n' +
            'Add 225g mushrooms and 2 shallots, and cook, stirring occasionally, until tender, about 3-4 minutes.\n' +
            'Stir in 3 cloves garlic and 3g thyme until fragrant, about 1 minute.\n' +
            'Whisk in 16g flour until lightly browned, about 1 minute.\n' +
            'Stir in 830ml chicken stock and 7g Dijon, scraping any browned bits from the bottom of the Dutch oven.\n' +
            'Stir in 200g fusilli, season with salt and pepper, to taste.\n' +
            'Bring to a boil; reduce heat and simmer, stirring occasionally, until pasta is just al dente, about 8-9 minutes.\n' +
            'Stir in chicken, 120g spinach, 35g Parmesan, and 60ml heavy cream until spinach has wilted and pasta is tender, about 3 minutes.\n' +
            'Serve immediately.',
        img: 'images/recipesLunchImage.jpg',
        ingredients: ["680g boneless, skinless chicken thighs, cut into bite-size pieces", "20g unsalted butter", "225g cremini mushrooms, thinly sliced", "2 shallots, diced", "3 cloves garlic, minced", "3g chopped fresh thyme leaves", "16g  all-purpose flour", "830ml chicken stock", "7g Dijon mustard", "200g fusilli pasta", "120g baby spinach", "35g freshly grated Parmesan", "60ml heavy cream"],
        time: "40 minutes",
        ing: ["chicken", "pasta"],
        cat: ["lunch"],
    },
    {
        id: 2,
        name: 'Croissant Breakfast Sandwiches',
        description: 'Heat 15ml olive oil in a large skillet over medium-high heat. Add 4 beaten eggs and cook, whisking, until they just begin to set.\n' +
            'Gently whisk in 60ml half and half; season with salt and pepper, to taste. Continue cooking until thickened and no visible liquid egg remains, about 3-5 minutes, set aside.\n' +
            'Fill 8 mini croissants with eggs, 115g ham, and 4 slices cheddar cheese to make 8 sandwiches.\n' +
            'Serve immediately.',
        img: 'images/recipe3.jpg',
        ingredients: ["15ml olive oil", "4 large eggs, lightly beaten", "60ml half and half", "8 mini croissants, halved horizontally", "115g thinly sliced ham", "4 slices cheddar cheese, halved"],
        time: "30 minutes",
        ing: ["eggs"],
        cat: ["breakfast"]
    },
    {
        id: 3,
        name: 'Baked Tacos',
        description: 'Heat 15ml vegetable oil in a large cast-iron skillet over medium-high heat. Add 565g ground beef and cook until browned, about 3-5 minutes, making sure to crumble the beef as it cooks, drain excess fat.\n' +
            'Add 1 small diced onion and cook, stirring frequently, until translucent, about 2-3 minutes.\n' +
            'Stir in 3 minced garlic cloves until fragrant, about 1 minute.\n' +
            'Stir in 35g taco seasoning, 60ml water or beer, and 10ml hot sauce until flavors have blended, about 2-3 minutes.\n' +
            'Preheat oven to 190°C. Lightly oil a 23 x 33cm baking dish or coat with nonstick spray.\n' +
            'Place 12 taco shells in a single layer, standing up, into the prepared baking dish. Bake until crispy, about 3-4 minutes.\n' +
            'Working carefully, add 60ml ground beef mixture to each taco shell; sprinkle with 100g cheese.\n' +
            'Bake until cheese has melted, about 4-5 minutes.\n' +
            'Serve immediately with desired toppings.',
        img: 'images/recipe2.jpg',
        ingredients: ["15ml vegetable oil", "565g lean ground beef", "1 small onion, diced", "3 cloves garlic, minced", "35g package taco seasoning", "60ml water or beer", "10ml hot sauce", "12 hard taco shells", "100g shredded Mexican blend cheese", "Avocado", "Sour cream", "Cilantro", "Shredded lettuce", "Lime wedges", "Pico de gallo"],
        time: "30 minutes",
        ing: ["beef"],
        cat: ["dinner"]
    },
    {
        id: 4,
        name: 'Baked Chicken Nuggets',
        description: 'Preheat oven to 220°C. Coat a cooling rack with nonstick spray and place on a baking sheet, set aside.\n' +
            'In a large bowl, combine 680g chicken, 15g Ranch Seasoning,0.5g cayenne pepper,3g salt and 1g pepper, let sit for at least 30 minutes. In a medium bowl, whisk together 240ml buttermilk and 1 large egg.In a large bowl, combine 150g cornflake crumbs, 35g Parmesan, and 45ml canola oil; season with salt and pepper, to taste.Working one at a time, dredge chicken in 95g flour, dip into buttermilk mixture, then coat in cornflake mixture, pressing to adhere.\n' +
            'Place chicken in a single layer onto the prepared baking sheet and coat with nonstick spray.\n' +
            'Bake until crisp and cooked through, about 13-15 minutes.\n' +
            'Serve immediately.',
        img: 'images/recipe4.jpg',
        ingredients: ["680g boneless, skinless chicken breasts or thighs, cut into 2.5 cm chunks", "15g Ranch Seasoning and Salad Dressing Mix", "0.5g cayenne pepper, optional", "95g all-purpose flour", "240ml buttermilk", "1 large egg", "150g cornflake crumbs", "35g freshly grated Parmesan", "45ml canola oil"],
        time: " 1 hour",
        ing: ["chicken"],
        cat: ["lunch"]
    },
    {
        id: 5,
        name: 'The Best Ever Cheeseburger',
        description: 'In a small bowl, whisk together 120ml mayonnaise, 60ml ketchup, 45g dill pickle relish, and 15g Dijon, set aside.\n' +
            'In a large bowl, combine 900g ground beef, 4.5g salt, and 4.5g pepper. Using a wooden spoon or clean hands, mix until well combined. Gently form into 6 patties, about 2.5 cm thick, sized to match the hamburger buns.\n' +
            'Heat 15ml canola oil in a large cast-iron skillet over medium-high heat.\n' +
            'Add patties and cook until lightly charred or until desired doneness, about 3-5 minutes per side, top with cheese.\n' +
            'Serve immediately in hamburger buns with burger sauce and desired toppings.',
        img: 'images/recipe5.jpg',
        ingredients: ["120ml mayonnaise", "60ml ketchup", "45g dill pickle relish", "15g Dijon mustard", "900g ground beef", "15ml canola oil", "6 slices American cheese", "Brioche hamburger buns", "Romaine or shredded lettuce", "Sliced tomato", "Sliced red onion", "Dill pickle chips"],
        time: "30 minutes",
        ing: ["beef"],
        cat: ["lunch"]
    },
    {
        id: 6,
        name: 'Nutella Donuts',
        description: 'Preheat oven to 230°C. Coat a donut pan with nonstick spray.\n' +
            'In a large bowl, combine 95g flour, 67g sugar, 16g cornstarch, 5g baking powder, and 2.5g salt.\n' +
            'In a separate bowl, whisk together 100ml milk, 15g melted butter, 7.5ml white vinegar, and 1 large egg.\n' +
            'Pour wet ingredients over dry ingredients and stir using a rubber spatula just until combined.\n' +
            'Scoop batter evenly into the donut pan.\n' +
            'Bake for 7-8 minutes, or until donuts are slightly browned and spring back when touched.Combine 150g Nutella and 80ml heavy cream. Whisk until smooth.\n' +
            'If the glaze is too thick, add more heavy cream as needed.When done, cool for 10 minutes, then dip the tops into the glaze. Sprinkle with crushed hazelnuts.\n' +
            'Allow glaze to set before serving.',
        img: 'images/recipe6.jpg',
        ingredients: ["95g all-purpose flour", "67g sugar", "16g cornstarch", "5g baking powder", "2.5g salt", "100ml milk", "15g unsalted butter, melted", "7.5ml white vinegar", "1 large egg", "Crushed hazelnuts, for sprinkling", "150g Nutella", "80ml heavy cream"],
        time: "45 minutes",
        ing: ["chocolate", "flour"],
        cat: ["dessert"]
    },
    {
        id: 7,
        name: 'Best Chicken Caesar Salad with Homemade Croutons',
        description: 'Preheat the oven to 200°C. In a small bowl, whisk together 45ml olive oil, 6g chopped fresh parsley, and 1 grated clove of garlic. Season with salt and pepper to taste. Spread 120g ciabatta bread cubes in a single layer on a baking sheet. Stir in the olive oil mixture and gently toss to combine. Bake for 13-15 minutes until the croutons are crisp and golden, then set aside.\n' +
            '\n' +
            'In a small bowl, combine 45ml olive oil, 30ml freshly squeezed lemon juice, 2.5g lemon zest, 1 grated clove of garlic,5g salt and 2.5g pepper. In a large bowl combine 680g boneless, skinless chicken breasts with the olive oil mixture. Marinate for at least 2 hours, turning occasionally. Drain the chicken from the marinade.\n' +
            '\n' +
            'Preheat the grill to medium-high heat. Add the chicken to the grill and cook, turning occasionally, until fully cooked with an internal temperature of 74°C, about 4-5 minutes per side. Let the chicken cool before dicing into bite-size pieces.\n' +
            '\n' +
            'In a medium bowl, whisk together 60ml mayonnaise, 60ml buttermilk, 45g freshly grated Parmesan, 1 grated clove of garlic, 15ml lemon juice, 15ml Dijon mustard, and 2.5ml Worcestershire sauce. Season with salt and pepper to taste.\n' +
            '\n' +
            'To assemble the salad, place 2 heads of romaine (roughly chopped) in a large bowl. Top with the grilled chicken and croutons. Pour the dressing over the salad and gently toss to combine. Top with 30g freshly grated Parmesan and serve.',
        img: 'images/recipe7.jpg',
        ingredients: ["90ml extra-virgin olive oil", "6g chopped fresh parsley leaves", "2 cloves garlic, grated", "120g ciabatta bread cubes", "30ml freshly squeezed lemon juice", "2.5g lemon zest", "45g freshly grated Parmesan", "60ml mayonnaise", "60ml buttermilk", "15ml Dijon mustard", "2.5ml Worcestershire sauce", "680g boneless, skinless chicken breasts", "2 heads romaine, roughly chopped"],
        time: "2 hours 30 minutes",
        ing: ["chicken"],
        cat: ["breakfast"]
    },
    {
        id: 8,
        name: 'Mushroom Soup',
        description: 'Melt 45g unsalted butter in a large stockpot or Dutch oven over medium heat. Add the diced onion and sliced 680g cremini mushrooms and 115g shiitake mushrooms, and cook, stirring occasionally, until tender and the mushrooms start to brown, about 16-20 minutes.\n' +
            '\n' +
            'Stir in 120ml dry white wine, scraping any browned bits from the bottom of the Dutch oven.\n' +
            '\n' +
            'Stir in 960ml vegetable stock, 30ml reduced sodium soy sauce, 2g paprika, 1.5g dried dill, 5 sprigs fresh thyme, and 1 bay leaf.\n' +
            '\n' +
            'Bring to a boil, then reduce the heat and simmer until slightly reduced and the flavors have blended, about 15-20 minutes.\n' +
            '\n' +
            'In a small bowl, whisk together 45g all-purpose flour and 360ml whole milk. Stir in the flour mixture into the Dutch oven until thickened, about 10 minutes.\n' +
            '\n' +
            'Reduce heat to low; stir in 60ml sour cream, 2.5g lemon zest, 15ml freshly squeezed lemon juice, and 6g chopped fresh parsley. Season with salt and pepper to taste.\n' +
            '\n' +
            'Serve immediately.',
        img: 'images/recipe8.jpg',
        ingredients: ["45g unsalted butter", "1 sweet onion, diced", "680g cremini mushrooms, sliced", "115g shiitake mushrooms, stemmed and diced", "120ml dry white wine", "960ml vegetable stock", "30ml reduced sodium soy sauce\n" +
        "\n", "2g sweet paprika", "1.5g dried dill", "5 sprigs fresh thyme", "1 bay leaf", "45g all-purpose flour", "360ml whole milk", "60ml sour cream", "2.5g lemon zest", "15ml freshly squeezed lemon juice", "6g chopped fresh parsley leaves\n" +
        "\n"],
        time: " 1 hour",
        ing: ["mushrooms"],
        cat: ["dinner"]
    },
    {
        id: 9,
        name: 'Easiest Lasagna Ever',
        description: 'Preheat the oven to 175°C. Lightly oil a 23×33 cm baking dish or coat with nonstick spray.\n' +
            '\n' +
            'In a large pot of boiling salted water, cook 9 lasagna noodles according to package instructions.\n' +
            '\n' +
            'Heat 15ml olive oil in a large cast iron skillet over medium-high heat. Add 450g ground beef and 1 diced onion, cooking until the beef has browned, about 3-5 minutes, making sure to crumble the beef as it cooks. Season with salt and pepper to taste, then drain excess fat. Stir in 800g crushed tomatoes and 15ml Italian seasoning, mixing well.\n' +
            '\n' +
            'In a medium bowl, combine 425g whole milk ricotta, 50g shredded mozzarella, and 1 beaten egg, set aside.\n' +
            '\n' +
            'Spread 240ml of the tomato mixture onto the bottom of the 23×33 cm baking dish. Top with 3 lasagna noodles, half of the ricotta mixture, and 120g mozzarella cheese. Repeat for the second layer. Top with the remaining noodles, the rest of the tomato mixture, 120g mozzarella cheese, and 25g freshly grated Parmesan.\n' +
            '\n' +
            'Place into the oven and bake for 35-45 minutes, or until bubbling. Then broil for 2-3 minutes, or until the top is browned in spots. Let cool for 15 minutes before serving.\n' +
            '\n' +
            'Garnish with 6g chopped fresh parsley, if desired.',
        img: 'images/recipe9.jpg',
        ingredients: ["9 lasagna noodles", "15ml olive oil", "450g ground beef", "1 onion, diced", "800g crushed tomatoes", "15ml Italian seasoning", "425g whole milk ricotta", "350g shredded mozzarella cheese, divided", "1 large egg, beaten", "25g freshly grated Parmesan", "6g chopped fresh parsley leaves"],
        time: " 1 hour",
        ing: ["beef", "pasta"],
        cat: ["lunch"]
    },
    {
        id: 10,
        name: '5 Minute Avocado Toast',
        description: 'Spread 15g unsalted butter evenly on the toasted bread slice.\n' +
            '\n' +
            'Top with ½ sliced avocado, then drizzle with 15ml olive oil. Sprinkle with 3g sesame seeds and 0.5g crushed red pepper flakes, if using. Season with salt and pepper to taste.',
        img: 'images/recipe10.jpg',
        ingredients: ["15g unsalted butter, at room temperature", "1 slice bread, toasted", "½ ripe avocado, halved, seeded, peeled, and thinly sliced", "15ml olive oil", "3g sesame seeds", "0.5g crushed red pepper flakes"],
        time: "5 minutes",
        ing: ["vegetables"],
        cat: ["breakfast"]
    },
    {
        id: 11,
        name: 'Chicken and Broccoli Stir Fry',
        description: 'For the chicken stock mixture: In a small bowl, whisk together 120ml chicken stock, 60ml oyster sauce, 15ml rice wine vinegar, 6g freshly grated ginger, 3 minced garlic cloves, and 5ml Sriracha (if using), set aside.\n' +
            '\n' +
            'Season the 450g chicken thighs with 2g salt and 1g black pepper.\n' +
            '\n' +
            'In a medium bowl, combine the chicken with 30g cornstarch, ensuring an even coating.\n' +
            '\n' +
            'Heat 15ml canola oil and 15ml sesame oil in a large skillet over medium-high heat.\n' +
            '\n' +
            'Working in batches, add the chicken to the skillet in a single layer and cook until golden brown, about 7-8 minutes.\n' +
            '\n' +
            'Stir in 225g broccoli florets and the chicken stock mixture, cooking until the broccoli is just tender, about 3-4 minutes.\n' +
            '\n' +
            'Serve immediately, garnished with 1g toasted sesame seeds.',
        img: 'images/recipe11.jpg',
        ingredients: ["120ml chicken stock", "60ml oyster sauce", "15ml rice wine vinegar", "6g freshly grated ginger", "3 cloves garlic, minced", "5ml Sriracha (optional)", "450g boneless, skinless chicken thighs, cut into bite-size pieces", "30g cornstarch", "15ml canola oil", "15ml sesame oil", "225g broccoli florets", "1g toasted sesame seeds"],
        time: "30 minutes",
        ing: ["chicken", "vegetables"],
        cat: ["lunch"]
    },
    {
        id: 12,
        name: 'Skinny Banana Chocolate Chip Muffins',
        description: 'Preheat the oven to 175°C. Line a 12-cup standard muffin tin with paper liners or coat with nonstick spray; set aside.\n' +
            '\n' +
            'In a large bowl, combine 250g white whole wheat flour, 2g baking powder, 2g baking soda, 5g salt, 1g ground nutmeg, and 1g ground cinnamon.\n' +
            '\n' +
            'In a separate bowl, whisk together 160ml vegetable oil, 50g Wholesome Organic Stevia, 2 large eggs, and 15ml vanilla extract. Gently fold in 3 mashed ripe bananas until just combined. Pour the wet mixture into the dry ingredients and stir using a rubber spatula until just moistened. Add 100g mini chocolate chips and gently mix.\n' +
            '\n' +
            'Evenly scoop the batter into the muffin tray. Sprinkle with the remaining 30g mini chocolate chips.\n' +
            '\n' +
            'Place in the oven and bake for 15-17 minutes, or until a tester inserted in the center comes out clean.\n' +
            '\n' +
            'Remove from the oven and let cool on a wire rack.',
        img: 'images/recipe12.jpg',
        ingredients: ["250g white whole wheat flour", "2g baking powder", "2g baking soda", "5g salt", "1g ground nutmeg", "1g ground cinnamon", "160ml vegetable oil", "50g Wholesome Organic Stevia", "2 large eggs", "15ml vanilla extract", "3 ripe bananas, mashed", "130g mini chocolate chips, divided"],
        time: "35 minutes",
        ing: ["flour", "chocolate"],
        cat: ["dessert"]
    },
    {
        id: 13,
        name: 'Chicken and Avocado Ranch Burritos',
        description: 'Heat 15ml olive oil in a cast iron grill pan over medium heat. Season 450g chicken thighs with 35g taco seasoning. Add the chicken to the skillet and cook until golden, about 3-4 minutes, set aside.\n' +
            '\n' +
            'Heat 4 tortillas according to package instructions.\n' +
            '\n' +
            'Working one at a time, place chicken, diced avocado, 100g shredded mozzarella cheese, 60ml sour cream, 60ml Ranch dressing, and 10g chopped cilantro in the center of each tortilla. Bring the bottom edge of the tortilla tightly over the filling, folding in the sides. Continue rolling until the top of the tortilla is reached. Repeat with the remaining tortillas.\n' +
            '\n' +
            'Heat a cast iron grill pan over medium-high heat. Add the burritos and cook, pressing gently with a spatula, for about 3-4 minutes per side, or until golden brown and the cheese has melted.\n' +
            '\n' +
            'Serve immediately.',
        img: 'images/recipe13.jpg',
        ingredients: ["450g boneless, skinless chicken thighs, cut into chunks", "35g taco seasoning", "15ml olive oil", "4 burrito-size flour tortillas", "2 avocados, halved, peeled, seeded, and diced", "100g shredded mozzarella cheese", "60ml sour cream", "60ml Ranch dressing", "10g chopped fresh cilantro leaves"],
        time: "30 minutes",
        ing: ["chicken", "vegetables"],
        cat: ["breakfast"]
    },
    {
        id: 14,
        name: 'Instant Pot Pho',
        description: 'Set the Pot to the high sauté setting. Heat 15ml canola oil, then add 1 large sweet onion, 5cm ginger, and 2 cloves garlic. Cook, stirring frequently, until browned, about 4-5 minutes.\n' +
            '\n' +
            'Stir in 3 whole cloves, 2 star anise pods, 1 cinnamon stick, 5g ground cardamom, 5g ground coriander, and 1g black peppercorns until fragrant, about 1 minute.\n' +
            '\n' +
            'Add 680g chicken thighs, 960ml chicken stock, 30ml fish sauce, 7.5g brown sugar, 2g salt, and 500ml water. Select manual setting, adjust pressure to high, and set the time for 15 minutes. When finished cooking, quick-release pressure according to the manufacturer’s directions.\n' +
            '\n' +
            'Remove chicken from the Instant Pot® and shred using two forks; set aside.\n' +
            '\n' +
            'Strain broth through a fine-mesh sieve lined with cheesecloth and discard solids. Skim any remaining fat from the surface and discard. Season with salt and pepper to taste.\n' +
            '\n' +
            'In a large pot of boiling water, cook 225g rice noodles according to package instructions; drain well.\n' +
            '\n' +
            'Divide noodles and shredded chicken into serving bowls. Ladle the broth mixture over the noodles and serve immediately, garnished with 240g bean sprouts, 240g fresh basil leaves, 240g torn mint leaves, 1 Thai bird chili pepper (thinly sliced), and 1 lime (cut into wedges).',
        img: 'images/recipe14.jpg',
        ingredients: ["15ml canola oil", "1 large sweet onion, quartered", "5cm piece ginger, sliced", "2 cloves garlic, smashed", "3 whole cloves", "2 star anise pods", "1 cinnamon stick", "5g ground cardamom", "5g ground coriander", "1g black peppercorns", "680g bone-in chicken thighs, skin removed", "960ml chicken stock", "30ml fish sauce", "7.5g brown sugar", "225g rice noodles", "240g bean sprouts", "240g fresh basil leaves", "240g torn mint leaves", "1 Thai bird chili pepper, thinly sliced", "1 lime, cut into wedges"],
        time: "1 hour",
        ing: ["chicken", "pasta"],
        cat: ["dinner"]
    },
    {
        id: 15,
        name: 'Brown Butter Chocolate Chip Cookie Skillet',
        description: 'Preheat the oven to 190°C. Lightly coat 2 cast iron skillets with nonstick spray.\n' +
            '\n' +
            'In a large bowl, combine 220g all-purpose flour, 2g baking soda, and 2g salt; set aside.\n' +
            '\n' +
            'Melt 140g unsalted butter in a medium saucepan over medium heat. Cook, whisking constantly, until the foam subsides and the butter begins to turn a golden brown, about 3 minutes. Remove from heat and strain through cheesecloth or a fine sieve.\n' +
            '\n' +
            'Stir in the remaining 60g unsalted butter until completely melted. Whisk in 65g sugar, 100g dark brown sugar, and 10ml vanilla extract until well combined. Whisk in 1 large egg and 1 egg yolk until well combined. Add the flour mixture, beating just until incorporated. Gently fold in 175g chocolate chips.\n' +
            '\n' +
            'Divide the mixture into the prepared skillets. Place into the oven and bake until the edges are golden brown but the center is still moist, about 12-15 minutes.\n' +
            '\n' +
            'Serve immediately, topped with ice cream, if desired.',
        img: 'images/recipe15.jpg',
        ingredients: ["220g all-purpose flour", "2g baking soda", "2g salt", "200g unsalted butter, divided", "65g sugar", "100g dark brown sugar, packed", "10ml vanilla extract", "1 large egg", "1 large egg yolk", "175g chocolate chips", "Ice cream, for serving"],
        time: "30 minutes",
        ing: ["flour", "chocolate"],
        cat: ["dessert"]
    },
    {
        id: 16,
        name: 'Instant Pot Ground Beef and Pasta',
        description: 'Set a the Pot to the high sauté setting. Heat 15ml olive oil and add 450g ground beef. Cook until browned, about 3-5 minutes, making sure to crumble the beef as it cooks. Drain excess fat.\n' +
            '\n' +
            'Add 1 small diced onion and cook, stirring frequently, until translucent, about 2-3 minutes. Stir in 3 cloves minced garlic and cook until fragrant, about 1 minute.\n' +
            '\n' +
            'Stir in 60ml dry red wine, scraping any browned bits from the bottom of the pot.\n' +
            '\n' +
            'Stir in 700g marinara sauce, 420ml beef stock, and 225g campanelle pasta. Season with kosher salt and freshly ground black pepper, to taste.\n' +
            '\n' +
            'Select the manual setting, adjust pressure to high, and set time for 5 minutes. Once finished, quick-release the pressure according to the manufacturer’s directions.\n' +
            '\n' +
            'Stir in 30g freshly grated Parmesan and 15g chopped fresh basil leaves.\n' +
            '\n' +
            'Serve immediately.',
        img: 'images/recipe16.jpg',
        ingredients: ["15ml olive oil", "450g lean ground beef", "1 small onion, diced", "3 cloves garlic, minced", "60ml dry red wine", "700g jar marinara sauce", "420ml beef stock", "225g campanelle pasta", "30g freshly grated Parmesan", "15g chopped fresh basil leaves"],
        time: "40 minutes",
        ing: ["beef", "pasta"],
        cat: ["lunch"]
    },
    {
        id: 17,
        name: 'Perfect New York Cheesecake',
        description: 'Add 375ml water to the Pot. Place the metal trivet into the pot.\n' +
            '\n' +
            'Lightly oil a 18cm springform pan or coat with nonstick spray.\n' +
            '\n' +
            'In a large bowl, combine 150g graham cracker crumbs, 75g unsalted butter, 15g granulated sugar, and 1g ground cinnamon. Press the crumb mixture onto the bottom and 4cm up the sides of the pan; place in the freezer.\n' +
            '\n' +
            'In the bowl of an electric mixer fitted with the paddle attachment, beat 450g cream cheese until smooth and creamy, scraping the sides of the bowl as needed, about 2 minutes. Beat in 100g granulated sugar and 5g cornstarch. Beat in 3 large eggs, one at a time, until well combined. Beat in 120ml heavy cream, 10ml vanilla extract, 5g fresh lemon zest, and 2.5ml almond extract.\n' +
            '\n' +
            'Remove crust from the freezer; pour the cream cheese mixture into the prepared pan. Carefully and gently place the pan on top of the trivet in the Instant Pot.\n' +
            '\n' +
            'Select manual setting, adjust pressure to high, and set time for 28 minutes. When finished, release pressure naturally according to the manufacturer’s directions, about 20-30 minutes.\n' +
            '\n' +
            'Remove the cheesecake and let cool on a wire rack for 1 hour; run a paring knife around the edges. Cover and refrigerate for 6 hours or overnight.\n' +
            '\n' +
            'In a medium bowl, combine 45g strawberry jam and 15ml water. Cover loosely and microwave for 30 seconds or until melted and smooth. Stir in 300g halved strawberries until evenly coated.\n' +
            '\n' +
            'Remove the cheesecake from the pan and top with the strawberry mixture.\n' +
            '\n' +
            'Serve immediately.',
        img: 'images/recipe17.jpg',
        ingredients: ["150g graham cracker crumbs", "75g unsalted butter, melted", "100g plus 15g granulated sugar, divided", "1g ground cinnamon", "450g cream cheese, at room temperature", "5g cornstarch", "3 large eggs, at room temperature", "120ml heavy cream, at room temperature", "10ml vanilla extract", "5g fresh lemon zest", "2.5ml almond extract", "45g strawberry jam", "300g halved strawberries"],
        time: "8 hours",
        ing: ["fruits"],
        cat: ["dessert"]
    },
    {
        id: 18,
        name: 'Pork Nachos',
        description: 'Set the Pot to the high setting.\n' +
            '\n' +
            'Heat 15ml canola oil. Season pork with 9g salt and 3g pepper. Working in two batches, add pork and cook until evenly browned, about 3-4 minutes.\n' +
            '\n' +
            'Stir in 355ml beer, 6 cloves garlic, 15g chili powder, 5g oregano, and 4.5g cumin; season with salt and pepper to taste. Select the manual setting, adjust pressure to high, and set time for 40 minutes. When finished, quick-release pressure according to the manufacturer’s directions.\n' +
            '\n' +
            'Remove pork shoulder from the Instant Pot® and shred using two forks; season with salt and pepper to taste if needed.\n' +
            '\n' +
            'Preheat oven to 200°C. Lightly oil a baking sheet or coat with nonstick spray.\n' +
            '\n' +
            'Place 340g tortilla chips in a single layer onto the prepared baking sheet. Top with 480g shredded pork (reserve remaining pork for later use), 425g black beans, 180g pico de gallo, and the 180g cheeses (cheddar and Pepper Jack).\n' +
            '\n' +
            'Place into the oven and bake until heated through and the cheeses have melted, about 10-12 minutes.\n' +
            '\n' +
            'Serve immediately, topped with 120g guacamole, 30g pickled jalapenos, 30g sour cream, and 30g cilantro.',
        img: 'images/recipe18.jpg',
        ingredients: ["15ml canola oil", "1.36kg boneless pork shoulder, excess fat trimmed and cut into chunks", "9g kosher salt", "3g freshly ground black pepper", "355ml pilsner or lager beer", "6 cloves garlic, minced", "15g chili powder", "5g dried oregano", "4.5g ground cumin", "340g tortilla chips", "425g can black beans, drained and rinsed", "180g pico de gallo, homemade or store-bought", "120g shredded cheddar cheese", "60g shredded Pepper Jack cheese", "120g guacamole", "30g pickled jalapenos", "30g sour cream", "30g chopped fresh cilantro leaves"],
        time: "1 hour 20 minutes",
        ing: ["pork"],
        cat: ["dinner"]
    },
    {
        id: 19,
        name: 'Garlic Rosemary Beef Tenderloin',
        description: 'For the horseradish cream sauce:\n' +
            '\n' +
            'Combine the sour cream, mayonnaise, prepared horseradish, and chives.\n' +
            'Season with salt and pepper to taste.\n' +
            'Set aside in the refrigerator until ready to serve.\n' +
            'Preheat the oven to 135°C (275°F). Line a baking sheet with foil and coat with nonstick spray.\n' +
            '\n' +
            'Prepare the garlic herb mixture:\n' +
            '\n' +
            'In a small bowl, combine the garlic, rosemary, thyme, 15g salt, and 15g pepper.\n' +
            'Prepare the beef tenderloin:\n' +
            '\n' +
            'Using paper towels, pat the tenderloin dry.\n' +
            'Drizzle with olive oil and rub with the garlic herb mixture, gently pressing to adhere.\n' +
            'Roast the beef tenderloin:\n' +
            '\n' +
            'Place the tenderloin onto the prepared baking sheet.\n' +
            'Bake in the oven until the internal temperature reaches 54-57°C (130-135°F) for medium-rare, about 50 minutes to 1 hour and 15 minutes, or until your desired doneness is achieved.\n' +
            'Let the beef rest for 10 minutes before slicing.\n' +
            'Serve immediately with horseradish cream sauce.',
        img: 'images/recipe19.jpg',
        ingredients: ["4 cloves garlic, minced", "15g chopped fresh rosemary", "15g chopped fresh thyme leaves", "1.8kg beef tenderloin, trimmed and tied into sections", "15ml olive oil", "120g sour cream", "60g mayonnaise", "30g prepared horseradish", "15g chopped fresh chives"],
        time: "1 hour 35 minutes",
        ing: ["beef"],
        cat: ["lunch"]
    },
    {
        id: 20,
        name: 'Roasted Sweet Potatoes',
        description: 'Preheat the oven to 220°C. Lightly oil a baking sheet or coat with nonstick spray.\n' +
            'In a small bowl, whisk together the olive oil, cumin, paprika, chili powder, cinnamon, 6g salt, and 2g pepper.\n' +
            'Place the sweet potatoes in a single layer onto the prepared baking sheet. Stir in the olive oil mixture and gently toss to combine.\n' +
            'Place in the oven and bake for 30-35 minutes, or until fork-tender, stirring halfway through. Sprinkle with cilantro.\n' +
            'Serve immediately with lime wedges.\n' +
            '\n' +
            '\n' +
            '\n' +
            '\n' +
            '\n' +
            '\n',
        img: 'images/recipe20.jpg',
        ingredients: ["45ml olive oil", "5g ground cumin", "5g smoked paprika", "5g chili powder", "0.3g ground cinnamon", "1.35kg small sweet potatoes, scrubbed, patted dry, and cut into chunks", "60ml fresh cilantro leaves", "1 lime, cut into wedges"],
        time: "50 minutes",
        ing: ["potatoes"],
        cat: ["dinner"]
    },
    {
        id: 21,
        name: 'Steak and Veggies',
        description: 'For the butter mixture: In a small bowl, combine 45g butter, garlic, parsley, thyme, lemon zest, salt, and pepper; set aside.\n' +
            'Season steaks with salt and pepper, to taste.\n' +
            'Melt 15g butter in a 30cm skillet over medium-high heat. Place the steaks in the middle of the skillet and cook until a dark crust has formed, about 4-5 minutes. Using tongs, flip, and cook for an additional 4-5 minutes, or until desired doneness; set aside and keep warm.\n' +
            'Melt the remaining 15g butter in the skillet. Add shallot, asparagus, and mushrooms. Cook, stirring occasionally, until mushrooms are tender and browned and asparagus are crisp-tender and bright green, about 3-4 minutes.\n' +
            'Serve immediately with steaks and butter mixture.',
        img: 'images/recipe21.jpg',
        ingredients: ["75g unsalted butter, divided", "1 clove garlic, minced", "15g chopped fresh parsley leaves", "7g minced fresh thyme leaves", "7g fresh lemon zest", "300g strip steaks", "1 shallot, minced", "450g fresh asparagus, trimmed and cut into pieces", "225g cremini mushrooms, halved"],
        time: "40 minutes",
        ing: ["beef", "vegetables"],
        cat: ["lunch"]
    },
    {
        id: 22,
        name: 'Coconut Curry Chicken',
        description: 'In a large saucepan of 360ml water, cook rice according to package instructions; set aside.\n' +
            'Season chicken with 5g salt and 2.5g pepper.\n' +
            'Heat 22g olive oil in a large stockpot or Dutch oven over medium heat. Add chicken and shallot, and cook, stirring occasionally, until chicken is evenly browned, about 6-8 minutes.\n' +
            'Stir in tomato paste, red curry paste, garlic, and ginger until fragrant, about 2 minutes.\n' +
            'Stir in coconut milk and chicken stock; season with salt and pepper, to taste. Bring to a boil; reduce heat and simmer until slightly reduced, about 7-10 minutes.\n' +
            'Stir in bell peppers until softened, about 5-8 minutes.\n' +
            'Stir in cilantro, basil, and lime juice; season with salt and pepper, to taste.\n' +
            '\n' +
            'Serve warm over rice.',
        img: 'images/recipe22.jpg',
        ingredients: ["200g rice", "680g boneless, skinless chicken thighs, cut into chunks", "22g olive oil", "1 medium shallot, diced", "45g tomato paste", "45g red curry paste", "3 cloves garlic, minced", "15g freshly grated ginger", "350ml can unsweetened coconut milk", "120ml chicken stock", "1 medium red bell pepper, chopped", "1 medium yellow bell pepper, chopped", "45g chopped fresh cilantro leaves", "15g chopped fresh Thai basil leaves", "15ml freshly squeezed lime juice"],
        time: "45 minutes",
        ing: ["rice", "chicken"],
        cat: ["lunch"]
    },
    {
        id: 23,
        name: 'Chocolate Sour Cream Cake',
        description: 'Preheat oven to 180°C. Lightly coat a mini pan with nonstick spray.\n' +
            'In a large bowl, combine flour, sugar, and baking soda; set aside.\n' +
            'In a small saucepan, combine butter, cocoa powder, salt, and 240ml water over medium heat. Cook, stirring, until melted and combined, about 2-3 minutes. Pour mixture over dry ingredients and stir using a rubber spatula just until moist. Beat in eggs, one at a time, until well combined. Beat in sour cream and vanilla until well combined.\n' +
            'Scoop the batter evenly into the pan. Place into oven and bake for 20-25 minutes, or until a tester inserted in the center comes out clean.\n' +
            'Remove from oven and let cool for 15 minutes before inverting the cake onto a wire rack.\n' +
            '\n' +
            'To make the glaze:\n' +
            'Combine heavy cream and sugar in a small saucepan over medium heat. Remove from heat. Stir in chocolate and corn syrup. Whisk until smooth. Drizzle the glaze evenly over the top of the cakes, allowing it to drip down the sides.\n' +
            'Allow glaze to set before serving.',
        img: 'images/recipe23.jpg',
        ingredients: ["250g all-purpose flour", "200g sugar", "7.5g baking soda", "225g unsalted butter", "40g Dutch processed cocoa powder", "2.5g salt", "2 large eggs", "120g sour cream", "5ml vanilla extract"],
        time: "1 hour 5 minutes",
        ing: ["flour", "chocolate"],
        cat: ["dessert"]
    },
    {
        id: 24,
        name: 'Steak and Eggs',
        description: 'In a medium bowl, combine parsley, basil, chives, shallot, garlic, and red pepper flakes. Whisk in olive oil and vinegar; season with salt and pepper, to taste.\n' +
            'Using paper towels, pat both sides of the steak dry; season with 5g salt and 2.5g pepper.\n' +
            'Heat a large cast-iron skillet over medium-high heat until very hot, about 1-2 minutes; add canola oil.\n' +
            'Place the steak in the middle of the skillet and cook until a dark crust has formed, about 4-5 minutes. Using tongs, flip, and cook for an additional 3-4 minutes, or until desired doneness. Let rest for 5 minutes.\n' +
            'Thinly slice steak against the grain and serve with parsley mixture and eggs.\n',
        img: 'images/recipe24.jpg',
        ingredients: ["30g chopped fresh parsley leaves", "30g chopped fresh basil", "6g chopped fresh chives", "1 small shallot, diced", "2 cloves garlic, minced", "1g crushed red pepper flakes", "80ml extra virgin olive oil", "15ml red wine vinegar", "680g skirt steak", "15g canola oil", "6 fried eggs"],
        time: "25 minutes",
        ing: ["eggs", "beef"],
        cat: "lunch"
    },
]
function backk() {
    window.location.reload()
}
function enterHeart(obj) {
    if (!obj.classList.contains('clicked')) {
        obj.setAttribute('class', 'fa-solid fa-heart');
        obj.style.color = '#f84747'; // Red color for the solid heart
    }
}
function leaveHeart(obj) {
    if (!obj.classList.contains('clicked')) {
        obj.setAttribute('class', 'fa-regular fa-heart');
        obj.style.color = ''; // Reset color when it's not solid
    }
}
setTimeout(() => {
    var favsArray = '';
    if (window.favourites)
        favsArray = favourites[0]['recipe-ids']
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
                    <div class="stars-single-page">
                        ${[...Array(5)].map((_, i) => `<i class="fa fa-star${i < 5 ? '' : '-o'}"></i>`).join('')}
                    </div>
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
        var goBackButton = event.target.closest("#goBackButton");
        if (goBackButton) {
            history.back();
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
            allFavs = window.recipes.filter(recipe => favourites[0]['recipe-ids'].includes(recipe.id));

        var divce = document.getElementById('favouritesRecipes');
        divce.innerHTML = '';

        var ii = 0;
        var n = allFavs.length;

        for (let i = 0; i < Math.ceil(n / 4); i++) {
            var recepti = '<div class="recipesBrowse">';

            for (var j = 0; (j < 4) && (ii < n); j++) {
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

    searchButton.addEventListener('click', function () {
        const searchContainer = document.getElementById('search-container');
        searchContainer.classList.toggle('active');
    });


    // console.log(window.favourites)
}, 700)


