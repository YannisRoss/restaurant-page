import { article } from "./initialBuild"

export function homePageLoad() {
    article.style.backgroundColor = "rgb(0,0,0,0)";

    console.log("homepage initialized")
    article.innerHTML = ''
    let description = document.createElement("p")
        let descriptionClass = document.createAttribute("class")
        descriptionClass.value = "description"
        description.setAttributeNode(descriptionClass)
        description.innerHTML = "Enjoy rustic meals with a modern touch. Relinquish your taste buds to Basil & Salt. Book a table at 1-800-DINE"
    let disclaimer = document.createElement("p")
        let disclaimerClass = document.createAttribute("class")
        disclaimerClass.value = "disclaimer"
        disclaimer.setAttributeNode(disclaimerClass)
        disclaimer.innerHTML = "*Not a real restaurant"


    article.appendChild(description)
    article.appendChild(disclaimer)

}

export function menuPageLoad() {

    console.log('menu initialized')

    article.style.backgroundColor = "rgb(0,0,0,0.5)";

    let parent = document.getElementById('article')
        parent.innerHTML = ''
        let menu = document.createElement('article')
            parent.appendChild(menu)
                let startersHeader = document.createElement('h2')
                    menu.appendChild(startersHeader)
                    startersHeader.innerHTML = 'Starters'
                let startersList = document.createElement('ul')
                    let startersArray = ['sublimated kale tacos','artichoke spread, pork belly & bison','free-range sardine toast & activated clam']
                    
                    let i = 0
                    while (i < startersArray.length) {
                        let starter = document.createElement('li')
                        starter.innerHTML = startersArray[i]
                        startersList.appendChild(starter)
                        i++
                    }
                    menu.appendChild(startersList)
                let mainsHeader = document.createElement('h2')
                    menu.appendChild(mainsHeader)
                    mainsHeader.innerHTML = 'Main Dishes'
                let mainsList = document.createElement('ul')
                let mainsArray = ['monkfish','country lamb, homespun watercress & orecchiette','fennel, turned artichoke & pressed corn']
                
                i = 0
                while (i < mainsArray.length) {
                    let main = document.createElement('li')
                    main.innerHTML = mainsArray[i]
                    mainsList.appendChild(main)
                    i++
                }
                menu.appendChild(mainsList)

    
}

export function contactPageLoad() {

    console.log('contactPage initialized')
    article.style.backgroundColor = "rgb(0,0,0,0.5)";
    console.log(1)

    article.innerHTML = ''


        let contactsList = document.createElement('ul')
        let contacts = ['@basil_and_salt', '1-800-DINE', 'info@basilAndSalt.com']
        console.log(2)

            let i = 0
            while (i < contacts.length) {
                let contact = document.createElement('li')
                contact.innerHTML = contacts[i]
                contactsList.appendChild(contact)
                i++
            }

        article.appendChild(contactsList)
}