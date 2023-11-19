console.log('%c HI', 'color: firebrick')

//Challenge 1 (success!)
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(response => response.json())
.then(eachify => {
    console.log(eachify);
    //eachify creates an object that says "message: Array(4), status: 'success'". The message part is important as that's what I need to iterate over to access the array.
    //"eachify.forEach(image => addDoggo(image))" is my code that did not work
    eachify.message.forEach(image => addDoggo(image));
})

function addDoggo(imgUrl){
    let pic = document.createElement('img');
    pic.src = imgUrl;
    const dogPen = document.getElementById('dog-image-container');
    dogPen.appendChild(pic);
}

//Chalenge 2 (success! -- review Object.keys stuff)
const breedUrl = "https://dog.ceo/api/breeds/list/all";
fetch(breedUrl)
.then(res => res.json())
.then(breedify => {
    console.log(breedify);
    Object.keys(breedify.message).forEach(breed => addBreedo(breed, breedify.message[breed]))
})

function addBreedo(breed, breedArray){
    let dogType = document.createElement('li');
    dogType.classList.add('dohgs')
    
        
    dogType.textContent = breed;
    //Ada's explanation on why I need the if statement: To display the sub-breeds as well, you can modify the addBreedo function to check if the breedArray has any sub-breeds. If it does, you can iterate over the sub-breeds and create list items for each of them. [code happens] In this updated version, we check if the breedArray has any sub-breeds by checking its length (breedArray.length > 0). If it does have sub-breeds, we create a new <ul> element to hold the sub-breeds. Then, for each sub-breed, we create a <li> element, set its text content to the sub-breed, and append it to the sub-breeds list. Finally, we append the sub-breeds list to the main breed list item (dogType). This way, if a breed has sub-breeds, they will be displayed as nested list items under the main breed.

    //now to make Challenge 3 easier with my existing knowledge, add a class to these breeds right now.
    

    if (breedArray.length > 0) {
        let puppers = document.createElement('ul');
        breedArray.forEach(pup => {
            let pupperPlace = document.createElement('li');
            pupperPlace.classList.add('sub')
            pupperPlace.textContent = pup;
            puppers.appendChild(pupperPlace);
            pupperPlace.addEventListener("click", () => {
                pupperPlace.style.color = "blue"
            })
        });
        dogType.appendChild(puppers);
    }
    const dogShelter = document.getElementById('dog-breeds');
    dogShelter.appendChild(dogType);

    dogType.addEventListener("click", () => {
        if(dogType.classList.contains('dohgs')) {
            dogType.style.color = "blue"
            if(dogType.children.length > 0) {
                dogType.style.color = "blue"
                console.log(dogType.children)
                Array.from(dogType.children).forEach(dog => {
                    //dog.stlye.color = "black"
                    Array.from(dog.children).forEach(dogLi => {
                        dogLi.style.color = "black"
                    })
                })
            }
           
        }})
        //Challenge 4 (moving on)
const dogFilter = document.getElementById('breed-dropdown');
dogFilter.addEventListener('change', filterDogs);

function filterDogs() {
    const letter = dogFilter.value.toLocaleLowerCase();
    const breedElements = document.querySelectorAll('.dohgs')

    breedElements.forEach((breedElement) => {
        const breedName = breedElement.textContent.toLocaleLowerCase();
        if (letter === '' || breedName.startsWith(letter)) {
            breedElement.style.display = 'block'; //Shows the breed element.
        } else {
            breedElement.style.display = 'none'; //Hides the breed element.
        }
    })
}
}

//Challenge 3 (success kinda...)
// const dogHouse = document.getElementById('dog-breeds');
// dogHouse.addEventListener("click", e => {
//     if(e.target.classList.contains('dohgs')) {
//         e.target.style.color = "blue";
//     }
// })

