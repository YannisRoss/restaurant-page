import { clickContactButton, clickMenuButton, clickHomeButton } from "./buttonFunctions"

console.log("homepage.js loaded")
export function homePageLoad() {

    console.log("initialLoad initiated")
    let parent = document.getElementById("content")

    let article = document.createElement("article")
    let header = document.createElement("h1")  
        header.innerHTML = "basil & salt"      
    let tabDiv = document.createElement('div')
        let tabDivId = document.createAttribute('id')
            tabDivId.value = 'tab-div'
            tabDiv.setAttributeNode(tabDivId)
        let homeButton = document.createElement('button')
            homeButton.innerHTML = 'Home'
            homeButton.addEventListener('click', clickHomeButton)
        let contactButton = document.createElement('button')    
            contactButton.innerHTML = 'Contact us'
            contactButton.addEventListener('click', clickContactButton)
        let menuButton = document.createElement('button')
            menuButton.innerHTML = "Menu"
            menuButton.addEventListener('click', clickMenuButton)
        
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

    parent.appendChild(article)
    article.appendChild(header)
    article.appendChild(tabDiv)
        tabDiv.appendChild(homeButton)
        tabDiv.appendChild(contactButton)
        tabDiv.appendChild(menuButton)
    article.appendChild(description)
    article.appendChild(disclaimer)

}