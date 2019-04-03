document.addEventListener('DOMContentLoaded', () => {
  const pokemon_container = document.getElementById("pokemon-container")

  POKEMON.forEach(function(pokemon) {

    const pokemon_card = document.createElement("div")
    pokemon_card.setAttribute('class',"pokemon-card");
    pokemon_container.appendChild(pokemon_card)

    const pokemon_frame = document.createElement("div")
    pokemon_frame.setAttribute('class',"pokemon-frame");
    pokemon_card.appendChild(pokemon_frame)

    const center_text = document.createElement("h1")
    center_text.setAttribute('class',"center-text");
    center_text.innerText = pokemon.name
    pokemon_frame.appendChild(center_text)

    const pokemon_image = document.createElement("div")
    pokemon_image.setAttribute('class',"pokemon-image");
    pokemon_frame.appendChild(pokemon_image)

    const image = document.createElement("img")
    image.setAttribute('data-id',`${pokemon.id}`);
    image.setAttribute('data-action',"flip");
    image.setAttribute('class',"toggle-sprite");
    image.setAttribute('src',`${pokemon["sprites"]["front"]}`);

    pokemon_image.appendChild(image)


    image.addEventListener("click", function(){
      if (image.src === pokemon["sprites"]["back"]){
        image.setAttribute('src',`${pokemon["sprites"]["front"]}`)
        return
      }
      else if(image.src === pokemon["sprites"]["front"]) {
      image.setAttribute('src',`${pokemon["sprites"]["back"]}`)
      }
    }); // for if-else statement
  }); // for for.each
})

function myFunction() {
  // Declare variables
  console.log("it worked")
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('pokemon-search-input');
  filter = input.value.toUpperCase();
  ul = document.getElementById("pokemon-container");
  li = ul.getElementsByClassName('pokemon-card');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
