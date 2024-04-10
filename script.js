const typeSelect = document.querySelector('#poke-type');


typeSelect.addEventListener('input', async function () {

    showPokemon();
    const lis = document.querySelectorAll('.card');

    for (const l of lis) {
        l.remove();
    }
});

async function showPokemon() {
    const poketype = document.querySelector('#poke-type').value;
    try {
        const types = await fetch(`https://pokeapi.co/api/v2/type/${poketype}`);

        if (!types.ok) {
            throw new Error('no response');
        }

        const data = await types.json();

        const allPokemons = data.pokemon;

        const pokeList = document.querySelector('.container');

        for (let i = 0; i < allPokemons.length; i++) {
            const url = data.pokemon[i].pokemon.url

            fetch(url).then((x) => {
                return x.json();
            }).then(poke => {
                const div = document.createElement("div");
                div.classList.add("card")
                pokeList.appendChild(div);

                const h2 = document.createElement("h2");
                const img = document.createElement("img");
                console.log(poke)
                h2.innerHTML = `${poke.id}:${poke.name}`;
                img.src = poke.sprites.front_default;
                div.appendChild(h2);
                div.appendChild(img);
            });
        }
    } catch (error) {
        console.log(error);
    }
    document.getElementById("poke-img").classList.add("ease-in");
}

showPokemon();

function removeAni() {
    document.getElementById("poke-img").classList.remove("ease-in");
}