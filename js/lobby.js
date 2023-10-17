window.addEventListener("load", () => {
    let dojo = document.querySelector("#dojo")
    let menu = document.querySelector("#burger-menu")
    dojo.addEventListener("click", popUpDojo)
    menu.addEventListener("click", burgerMenu)

})

function popUpDojo() {
    console.log("dojo")
    
    let back = document.createElement("div")
    back.id = "dojo-menu-bg"
    back.style.backgroundColor = "white"
    back.style.height = "100vh"
    back.style.width = "100vw"
    back.style.opacity = "0.3"

    let container = document.createElement("div")
    container.id = "dojo-menu"
    container.style.width = "30vw"
    container.style.height = "50vh"
    container.style.backgroundColor = "rgb(77, 73, 66)"
    container.style.borderRadius = "10px"
    container.style.position = "absolute"
    container.style.top = "50%"
    container.style.left = "50%"
    container.style.transform = "translate(-50%, -50%)"
    container.style.display = "flex"
    container.style.alignItems = "center"
    container.style.justifyContent = "space-around"

    let pvp = elemMenu("PVP", "JOUER")
    let training = elemMenu("TRAINING", "PRATIQUE")
    
    container.append(pvp)
    container.append(training)

    document.querySelector("body").append(back)
    document.querySelector("body").append(container)

    back.addEventListener("click", removeDojoMenu)
}

function elemMenu(gameType, title) {

    let element = document.createElement("form")
    element.setAttribute('action', '')
    element.setAttribute('method', 'post')
    element.style.padding = "0"
    element.style.width = "45%"
    element.style.height = "95%"
    element.style.display = "block"
    element.style.backgroundColor = "red"
    element.style.borderRadius = "10px"
    element.style.display = "flex"
    element.style.alignItems = "center"
    element.style.justifyContent = "space-around"
    element.style.position = "relative"
    element.style.top = "50%"
    element.style.transform = "translateY(-50%)"

    let input = document.createElement("input")
    input.setAttribute('name', 'game_mode')
    input.setAttribute('value', gameType)
    input.setAttribute('type', 'hidden')

    let btn = document.createElement("button")
    btn.style.width = "100%"
    btn.style.height = "100%"
    btn.style.margin = "0"

    btn.innerHTML = title
    btn.setAttribute("type", "submit")

    if (gameType == "PVP") {
        btn.style.backgroundImage = 'url("../images/background/pvp.jpg")'  
    } else {
        btn.style.backgroundImage = 'url("../images/background/training.jpg")'
    }

    btn.style.backgroundPosition = "center"
    btn.style.backgroundRepeat = "no-repeat"
    btn.style.backgroundSize = "cover"
    btn.style.backgroundAttachment = "fixed"

    btn.style.color = "white"
    btn.style.fontFamily = "'Ubuntu', sans-serif"
    btn.style.fontSize = "larger"
    btn.style.fontWeight = "700"

    element.append(input)
    element.append(btn)

    return element 
}

function removeDojoMenu(){
    document.querySelector("#dojo-menu-bg").remove()
    document.querySelector("#dojo-menu").remove()
}

function burgerMenu(){
    let menu = document.createElement("div")
    menu.style.height = "250px"
    menu.style.width = "15vw"
    menu.style.position = "absolute"
    menu.style.top = "2vh"
    menu.style.right = "2vw"
    menu.style.backgroundColor = "#5c4033"
    menu.style.borderRadius = "10px"
    menu.style.border = "solid 4px #453026"

    let menuTitle = document.createElement('h2')
    menuTitle.innerHTML = "PARAMETRES"
    menuTitle.style.textAlign = "center"
    menuTitle.style.fontFamily = "'Ubuntu', sans-serif"
    menuTitle.style.color = "#ebe7e5"
    menu.append(menuTitle)

    let listMenu = document.createElement('ul')

    let music = document.createElement('li')
    music.style.display = "flex"
    music.style.alignItems = "center"
    music.innerHTML = '<p>Musique</p>\
        <label class="switch">\
            <input type="checkbox">\
            <span class="slider round"></span>\
        </label>'

    let chat = document.createElement('li')
    chat.innerHTML = "Chat"

    let deckCreation = document.createElement('li')
    deckCreation.innerHTML = "Gestion du deck"

    let signout = document.createElement('li')
    signout.innerHTML = "Deconnection"
    
    listMenu.append(music)
    listMenu.append(chat)
    listMenu.append(deckCreation)
    listMenu.append(signout)

    menu.append(listMenu)
    document.querySelector("body").append(menu)
    
}