export default foodMenu;

function foodMenu() {
    let Menu = document.createElement('div');
    Menu.classList.add(`foodMenu`)
    let burger = "../image/food-ham.jpg"
    let burgerP = "this burger is alive but dont worry he already know his destiny and he seems to accept it"
    let sandwich ="../image/cow.jpg"
    let sandwichP = "this sandwich is made by sheep meat no cow is been harmed"
    let special = "../image/Food-face-funny-picture.jpg";
    let specialP = "this meal is to honor our mentor and previous chef. *disclaimer you might feel that the meal is a little bit salty due to whoever is preparing the meal is crying and tears might be involved "
    let normalMeal = "../image/borring.jpg"
    let normalMealP = `some costumers is asking for "normal food" here is it`
    Menu.appendChild(foodCard(burger, "Burger", burgerP , "345$" ))
    Menu.appendChild(foodCard(sandwich, "Sandwich", sandwichP , "23$" ))
    Menu.appendChild(foodCard(special, "Special Meal", specialP , "605$" ))
    Menu.appendChild(foodCard(normalMeal, "Normal Meal", normalMealP , "120$" ))
    return Menu;
}



function foodCard (img , name , p , price) {
    let foodCard = document.createElement('div');
    let image = document.createElement('img');
    let title = document.createElement('h1');
    let par = document.createElement('p');
    let value = document.createElement('span');

    image.src = img
    title.innerText = name
    par.textContent = p 
    value.textContent = price

    foodCard.classList.add(`foodCard`); 

    foodCard.appendChild(image);
    foodCard.appendChild(title);
    foodCard.appendChild(par);
    foodCard.appendChild(value);

    return foodCard;
} 






