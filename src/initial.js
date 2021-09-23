console.log("initial.js loaded")

export function initialLoad() {

    console.log("initialLoad initiated")
    let parent = document.getElementById("content")

    let article = document.createElement("article")
    let header = document.createElement("h1")  
        header.innerHTML = "basil & salt"      
    let description = document.createElement("p")
        let descriptionClass = document.createAttribute("class")
        descriptionClass.value = "description"
        description.setAttributeNode(descriptionClass)
        description.innerHTML = "Enjoy fine, rustic meals with a touch of post-modernity. Relinquish your taste buds to Basil & Salt."
    let disclaimer = document.createElement("p")
        let disclaimerClass = document.createAttribute("class")
        disclaimerClass.value = "disclaimer"
        disclaimer.setAttributeNode(disclaimerClass)
        disclaimer.innerHTML = "*Allergy warning: Basil, Salt"

    parent.appendChild(article)
    article.appendChild(header)
    article.appendChild(description)
    article.appendChild(disclaimer)

}