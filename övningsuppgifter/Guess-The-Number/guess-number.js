const guessForm = document.querySelector(`#guess-form`);
const guess = document.querySelector(`#guess`);


const count = [];

let randomNr = Math.random() * 100;
randomNr = Math.round(randomNr);
console.log(randomNr);


guessForm.addEventListener(`submit`, e => {
    e.preventDefault();

    const inputValue = document.querySelector(`#input`);
    
    
    if(input.value == `` ){
        return 'det blev fel';
    }
    if (inputValue.value > 100 || inputValue.value < 0 ) {

        console.log(`Unvalid number, write a number between 0 and 100`);
        document.getElementById("return-text").innerText = `Unvalid number, write a number between 0 and 100`;
        return;
    }
    count.push(inputValue.value);
    let countTimes = count.length;

    if (input.value == randomNr) {
        document.getElementById("return-text").innerText = `Good job!! You found the right number after ${countTimes} tries!` ;
        console.log(`God job!!`)
        console.log(`You found the right number after ${countTimes} tries`);
    }

    else if (input.value > randomNr) {
        document.getElementById("return-text").innerText = `Your number is to high`;
        console.log(`Your number is to high`);
    }

    else if (input.value < randomNr) {
        document.getElementById("return-text").innerText = `Your number is to low`;
        console.log(`Your number is to low`);
    }


    console.log(count);
    input.value = ``;
})    
