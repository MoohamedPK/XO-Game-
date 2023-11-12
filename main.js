
let title = document.querySelector(".title");
let turn = "x";
let morabaat = [];

function endGame (num1,num2,num3) {

    title.innerHTML = `${morabaat[num1]} Is The Winner`;
    document.getElementById('item'+num1).style.background = "black";
    document.getElementById("item" +num2).style.background = "black";
    document.getElementById("item" +num3).style.background = "black";
    setInterval(()=> {title.innerHTML += '.'},1000)
    setTimeout(()=> {location.reload()},4000)
}

function comparison () {

    for (let i = 1; i < 10; i++) {
        morabaat[i] = document.getElementById("item" + i).innerHTML;
    }

    if (morabaat[1]== morabaat[2]&& morabaat[2]== morabaat[3] && morabaat[1] != '') {endGame(1,2,3)}
    else if (morabaat[4]== morabaat[5]&& morabaat[5]== morabaat[6] && morabaat[5] != '') {endGame(4,5,6);}
    else if (morabaat[7]== morabaat[8]&& morabaat[8]== morabaat[9] && morabaat[9] != '') {endGame(7,8,9);}

    else if (morabaat[1]== morabaat[4]&& morabaat[4]== morabaat[7] && morabaat[1] != '') {endGame(1,4,7);}
    else if (morabaat[2]== morabaat[5]&& morabaat[5]== morabaat[8] && morabaat[2] != '') {endGame(2,5,8)}
    else if (morabaat[3]== morabaat[6]&& morabaat[6]== morabaat[9] && morabaat[3] != '') {endGame(3,6,9);}

    else if (morabaat[1]== morabaat[5]&& morabaat[5]== morabaat[9] && morabaat[1] != '') {endGame(1,5,9);}
    else if (morabaat[3]== morabaat[5]&& morabaat[5]== morabaat[7] && morabaat[3] != '') {endGame(3,5,7);}

}

function startPlaying(id) {

    let element = document.getElementById(id);

    if (turn == "x" && element.innerHTML === "") {

        element.innerHTML = "X";
        title.innerHTML = "O Player Turn";
        turn = "o";

    } else if (turn == "o" && element.innerHTML === "") {
        element.innerHTML = "O";
        title.innerHTML = "X Player Turn";
        turn = "x"
    }

    comparison();
}