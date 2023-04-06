class Breakfast {
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}

class Lunch{
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner{
    #dessert;
    constructor(salad, soup, entree, dessert){
        this.salad =salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}
const bfast = new Breakfast("eggs", "juice");
const newlunch = new Lunch("side salad", "broccoli cheddar soup", "iced tea");
const newdinner = new Dinner("balsamic salad", "consomme", "filet mignon", "cheesecake");
console.log(bfast);
console.log(bfast.food);
console.log(bfast.drink);
newlunch.salad
newlunch.soup
newlunch.drink
newdinner.salad
newdinner.soup
newdinner.entree


