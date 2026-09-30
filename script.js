const formulario = document.getElementById("pokemonForm");

formulario.addEventListener("submit", async function (event) {

    event.preventDefault();

    const numero = document.getElementById("numero").value;
    const nombre = document.getElementById("nombre");
    const mensaje = document.getElementById("mensaje");

    nombre.value = "";
    mensaje.textContent = "Consultando Pokémon...";

    try {

        const respuesta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${numero}`
        );

        if (!respuesta.ok) {
            throw new Error("Pokémon no encontrado");
        }

        const pokemon = await respuesta.json();

        nombre.value = pokemon.name;

        mensaje.textContent =
            "Pokémon encontrado correctamente.";

    } catch (error) {

        nombre.value = "";

        mensaje.textContent =
            "No existe un Pokémon con ese número.";
    }
});