// Code your solutions in this file

// Done 1
const randomName = ['Guadalupe', 'Ollie', 'Aki']
const loopArr = [...randomName]
function writeCards(loopArr, event){
    let messages = []
    for (let i = 0; i < loopArr.length; i++) {
        const message = `Thank you, ${loopArr[i]}, for the wonderful ${event}!`;
        messages.push(message)
        return messages
    }
}
writeCards(randomName, "gift")


// While
function countDown(countup){
    let i = 0
    while (i <= countup) {
        console.log(countup--);
    }

}
countDown(10)