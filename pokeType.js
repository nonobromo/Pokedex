const typeSelectTwo = document.querySelector('#poke-type');

document.querySelector("#poke-img").src = "pokemonIMG/normal.svg";
document.getElementById("poke-img").style.backgroundColor = "#9099A1";

typeSelectTwo.addEventListener('input', function () {
    const poketype = document.querySelector('#poke-type').value;
    switch (poketype) {
        case "normal":
            document.querySelector("#poke-img").src = "pokemonIMG/normal.svg";
            document.getElementById("poke-img").style.backgroundColor = "#9099A1";
            break;
        case "fighting":
            document.querySelector("#poke-img").src = "pokemonIMG/fighting.svg";
            document.getElementById("poke-img").style.backgroundColor = "#CE4069";
            break;
        case "flying":
            document.querySelector("#poke-img").src = "pokemonIMG/flying.svg";
            document.getElementById("poke-img").style.backgroundColor = "#8FA8DD"
            break;
        case "poison":
            document.querySelector("#poke-img").src = "pokemonIMG/poison.svg";
            document.getElementById("poke-img").style.backgroundColor = "#AB6AC8"
            break;
        case "ground":
            document.querySelector("#poke-img").src = "pokemonIMG/ground.svg";
            document.getElementById("poke-img").style.backgroundColor = "#C7B78B";
            break;
        case "rock":
            document.querySelector("#poke-img").src = "pokemonIMG/rock.svg";
            document.getElementById("poke-img").style.backgroundColor = "#C7B78B"
            break;
        case "bug":
            document.querySelector("#poke-img").src = "pokemonIMG/bug.svg";
            document.getElementById("poke-img").style.backgroundColor = "#90C12C"
            break;
        case "ghost":
            document.querySelector("#poke-img").src = "pokemonIMG/ghost.svg";
            document.getElementById("poke-img").style.backgroundColor = "#5269AC"
            break;
        case "steel":
            document.querySelector("#poke-img").src = "pokemonIMG/steel.svg";
            document.getElementById("poke-img").style.backgroundColor = "#5A8EA1"
            break;
        case "fire":
            document.querySelector("#poke-img").src = "pokemonIMG/fire.svg";
            document.getElementById("poke-img").style.backgroundColor = "#FF9C54"
            break;
        case "water":
            document.querySelector("#poke-img").src = "pokemonIMG/water.svg";
            document.getElementById("poke-img").style.backgroundColor = "#4D90D5"
            break;
        case "grass":
            document.querySelector("#poke-img").src = "pokemonIMG/grass.svg";
            document.getElementById("poke-img").style.backgroundColor = "#63BB5B"
            break;
        case "electric":
            document.querySelector("#poke-img").src = "pokemonIMG/electric.svg";
            document.getElementById("poke-img").style.backgroundColor = "#F3D23B"
            break;
        case "psychic":
            document.querySelector("#poke-img").src = "pokemonIMG/psychic.svg";
            document.getElementById("poke-img").style.backgroundColor = "#F97176"
            break;
        case "ice":
            document.querySelector("#poke-img").src = "pokemonIMG/ice.svg";
            document.getElementById("poke-img").style.backgroundColor = "#74CEC0"
            break;
        case "dragon":
            document.querySelector("#poke-img").src = "pokemonIMG/dragon.svg";
            document.getElementById("poke-img").style.backgroundColor = "#0A6DC4"
            break;
        case "dark":
            document.querySelector("#poke-img").src = "pokemonIMG/dark.svg";
            document.getElementById("poke-img").style.backgroundColor = "#5A5366"
            break;
        case "fairy":
            document.querySelector("#poke-img").src = "pokemonIMG/fairy.svg";
            document.getElementById("poke-img").style.backgroundColor = "#EC8FE6"
            break;
    }
});
