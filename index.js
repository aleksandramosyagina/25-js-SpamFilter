let comments = [];
let optionsString = "";

const button = document.querySelector('.button');
console.log(button);

function checkSpam(str) {
    console.log(str.includes('viagra'));
    return (str.includes('viagra'));

};


button.addEventListener("click", () => {
    generateComments();

});

function generateComments() {

    let lowerStr = document.getElementById("newComment").value;
    let message = document.createElement('div');
    let spam = checkSpam(lowerStr);
    if (spam) {
        console.log('yes');
        message.textContent = '***';

    } 
    else {
        console.log('no');
        message.textContent = lowerStr;
    }
  
    document.getElementById('container').append(message);


}