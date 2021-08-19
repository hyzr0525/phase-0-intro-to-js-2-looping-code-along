const names = ["Ada", "Brendan", "Ali"];
const eventName = "birthday";

function writeCards(names, eventName){
    let writtenLetters = [];
    for (let n = 0; n < names.length; n++){
       writtenLetters.push(`Thank you, ${names[n]}, for the wonderful ${eventName} gift!`);
    }
    return writtenLetters;
    debugger;
};

function countDown(Number){
    while (0 <= Number ){
        console.log(Number --);
    } 
}

countDown(10);