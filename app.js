//==================== Question # 01 =======================
let count = createCounter();
let increment = document.getElementById('inc');
let countDisplay = document.getElementById('counter');
let reset = document.getElementById('reset');
function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            return count;
        },

        reset: function () {
            count = 0;
            return count;
        }
    }
}
// updateDisplay();

const updateDisplay = () => {
    countDisplay.textContent = `Counter at: ${count.increment()}`;
};
// updateDisplay();

increment.onclick = () => {
    countDisplay.textContent = `Counter at: ${count.increment()}`;
};

reset.onclick = () => {
    count.reset();
    countDisplay.textContent = `Counter at: 0`;
};


// =================== Question # 02 =======================
function greetUser(username, timeOfDay){
    const message = `Good ${timeOfDay}, ${username}!`;    
    return message;
}

let username = prompt("Enter Your Name: ");
let timeOfDay = prompt("Enter Time of Day: e.g: morning");

const greeting = greetUser(username, timeOfDay);
console.log(greeting);


//======================= Question # 03 =======================
const user = {
    name: "john",
    age: 25,
    city: "New York"
};

function extraction() {
    const { username = 'John', city = 'New York' } = user;
    console.log(`Name: ${username}, City: ${city}`)
}

extraction();


//=========================== Question # 04 ========================
const add = (a, b) => {
    result = a + b;
    console.log(result);
    return result;
}
add(5, 4)


//============================= Question # 05 ================================
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let checkPromise = true;
        if (checkPromise){
            resolve('Success!');
        }
        else{
            reject('Oops! An error occured.');
        }
        
    }, 1000);
});

myPromise
    .then((result) => {
        console.log(result); 
    })
    .catch((error) => {
        console.error(error); 
    });