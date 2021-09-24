
import { clickContactButton, clickMenuButton, clickHomeButton } from "./buttonFunctions"
import { homePageLoad, menuPageLoad, contactPageLoad } from "./homepage"

export let article = document.createElement("article")
export function initialBuild() {

    console.log("initialLBuild initiated")
        let parent = document.getElementById("content")
            let articleId = document.createAttribute('id')
                articleId.value = 'article'
                article.setAttributeNode(articleId)
        
        let header = document.createElement("h1")  
            header.innerHTML = "basil & salt"      
        let tabDiv = document.createElement('div')
            let tabDivId = document.createAttribute('id')
                tabDivId.value = 'tab-div'
                tabDiv.setAttributeNode(tabDivId)
            let homeButton = document.createElement('button')
                homeButton.innerHTML = 'Home'
                homeButton.addEventListener('click', homePageLoad)
            let contactButton = document.createElement('button')    
                contactButton.innerHTML = 'Contact us'
                contactButton.addEventListener('click', contactPageLoad)
            let menuButton = document.createElement('button')
                menuButton.innerHTML = "Menu"
                menuButton.addEventListener('click', menuPageLoad)
        
    parent.appendChild(header)
    parent.appendChild(tabDiv)
        tabDiv.appendChild(homeButton)
        tabDiv.appendChild(menuButton)
        tabDiv.appendChild(contactButton)
    parent.appendChild(article)

    homePageLoad()
}

