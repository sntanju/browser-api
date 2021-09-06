console.log('i am here');

//alert('ma is coming');

const maComing = () => {
    alert('Ammu is comming. Open the book');
}

const askPicnic =() => {
    const response = confirm('Are you going to picnic');
    console.log(response);
    if ( response === true ) {
        alert("Give me the fee by Bkash");
    }
    else {
        alert('Ok');
    }
}

const askName = () => {
    const name = prompt('What is your name');
    if (name) {
        console.log(name);
    }
}