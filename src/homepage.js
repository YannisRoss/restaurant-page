import { clickContactButton, clickMenuButton, clickHomeButton } from "./buttonFunctions"
import { article } from "./initialBuild"

export function homePageLoad() {

    console.log("homepage initialized")

    let description = document.createElement("p")
        let descriptionClass = document.createAttribute("class")
        descriptionClass.value = "description"
        description.setAttributeNode(descriptionClass)
        description.innerHTML = "Enjoy rustic meals with a modern touch. Relinquish your taste buds to Basil & Salt. Book a table at 1-800-DINE"
    let disclaimer = document.createElement("p")
        let disclaimerClass = document.createAttribute("class")
        disclaimerClass.value = "disclaimer"
        disclaimer.setAttributeNode(disclaimerClass)
        disclaimer.innerHTML = "*Allergy warning: Basil, Salt"


    article.appendChild(description)
    article.appendChild(disclaimer)

}

export function menuPageLoad() {

    console.log('menu initialized')

    let contentDiv = document.getElementById('content')
    
}