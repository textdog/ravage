class Show{
    constructor(number){
        this.number = number;
    }
    getNumber(){
        return this.number;
    }
}

function goToBooked(){
    url  = "booked.html";
    window.location.href = url;
}

function goToMediaKit(){
    url = "media-kit.html";
    window.location.href = url;
}

function returnToIndex(){
    url = "index.html";
    window.location.href = url;
}

function createShowData(showNumber){
    const output = document.querySelector("#show");
    output.appendChild(createNumber("Your selected show is: " + showNumber));
}

function createNumber(number){
    let item = document.createElement('p');
    item.textContent = number;
    return item;
}