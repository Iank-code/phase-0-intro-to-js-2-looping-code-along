// Code your solutions in this file

// Done 1
function writeCards(names,event){
    const messages = [];
    for(let i = 0; i < names.length;i++) {
           const thankYouMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
           messages.push(thankYouMessage)
    }
    return messages;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

/* function writeCards(names,event){
    const messages = [];
    for(let i = 0; i < names.length;i++) {
           const thankYouMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
           messages.push(thankYouMessage)
    }
    return messages;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")) */

// While
function countDown(countup){
    let i = 0
    while (i <= countup) {
        console.log(countup--);
    }

}
countDown(10)