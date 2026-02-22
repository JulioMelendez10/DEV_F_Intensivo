const password = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");

const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const strengthText = document.getElementById("strengthText");

const bars = [
    document.getElementById("bar1"),
    document.getElementById("bar2"),
    document.getElementById("bar3"),
    document.getElementById("bar4")
];

lengthValue.innerText = lengthSlider.value;

lengthSlider.oninput = () =>{
    lengthValue.innerText = lengthSlider.value;
};

copyBtn.onclick = ()=>{
    navigator.clipboard.writeText(password.value);
    alert("Contraseña copiada");
};

generateBtn.onclick = ()=>{
    const len = lengthSlider.value;
    password.value = generatePassword(len);
    evaluateStrength(password.value);
};

function generatePassword(length){

    let chars = "";

    if(uppercase.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(lowercase.checked) chars += "abcdefghijklmnopqrstuvwxyz";
    if(numbers.checked) chars += "0123456789";
    if(symbols.checked) chars += "!@#$%^&*()_+";

    if(chars === ""){
        alert("Selecciona al menos una opción");
        return "";
    }

    let pass = "";

    for(let i=0;i<length;i++){
        pass += chars[Math.floor(Math.random()*chars.length)];
    }

    return pass;
}

function evaluateStrength(pass){

    let score = 0;

    if(pass.length >= 8) score++;
    if(pass.length >= 12) score++;

    if(/[A-Z]/.test(pass)) score++;
    if(/[0-9]/.test(pass)) score++;
    if(/[!@#$%^&*()_+]/.test(pass)) score++;

    bars.forEach(bar=>bar.style.background="#334155");

    if(score <=2){
        strengthText.innerText = "WEAK";
        bars[0].style.background="red";
    }
    else if(score <=4){
        strengthText.innerText = "MEDIUM";
        bars[0].style.background="orange";
        bars[1].style.background="orange";
        bars[2].style.background="orange";
    }
    else{
        strengthText.innerText = "STRONG";
        bars.forEach(bar=>bar.style.background="green");
    }
}