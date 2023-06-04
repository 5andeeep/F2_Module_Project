const apiUrl = "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";

// 1. Fetching the menu data..
async function getMenu(){
    try{
        const response = await fetch(apiUrl);
        const menu = await response.json();
        console.log("The food Menu: ")
        console.log(menu);

        console.log("Take Orders: ");
        let order = await takeOrder(menu);
        console.log('Order: ', order);

        console.log("Preparing Order: ");
        let cooking = await orderPrep();
        console.log(cooking);

        console.log("Paid for Order: ");
        let paidForOrder = await payOrder();
        console.log(paidForOrder);

        let sayThankYou = await thankYou();
        alert(sayThankYou);

    }
    catch(e){
        alert(e);
    }
}

// 2. Taking order random three food items..
function takeOrder(menu){
    return new Promise((resolve, reject) => {
        function data(){
            let randomFood = [];
            let numberOfDishes = 3;
            for(let i=0; i<numberOfDishes; i++){
                let randomIndex = Math.floor(Math.random()*menu.length);
                let dish = menu[randomIndex];
                randomFood.push(dish);
            }
            resolve(randomFood)
            reject("Did not provide order details");
        }
        setTimeout(data, 2500);
    })
}

// 3. Preparing order
function orderPrep(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({order_status: true, paid: false});
            reject("Something wrong in the kitchen");
        }, 1500);
    });
};

// 4. Paying for order..
function payOrder(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({order_status: true, paid: true});
            reject("There is something wrong with payment!");
        }, 1000);
    });
};

// 5. Appriciateting for business..
function thankYou(){
    return new Promise((resolve, reject) => {
        resolve("Thank you for eating with us today!");
        reject("No problem, you can come again");
    })
}

getMenu();
  