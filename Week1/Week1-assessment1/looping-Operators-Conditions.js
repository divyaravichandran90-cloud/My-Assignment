
function OddOrEven() {
    for (let x = 1; x <= 20; x++) {
        if (x % 2 === 0) {
            console.log(x + " " + "is a even number");

        } else {
            console.log(x + " " + "is a odd number");
        }
    }

}
// OddOrEven()

//while loop

function isOddOrEven(){
    let x=1
    while(x<=20){
        if (x%2===0) {
            console.log(x + " " + "is a even number");
        } else {
            console.log(x + " " + "is a odd number");
        }
        x++
    }

}

isOddOrEven()