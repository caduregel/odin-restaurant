import Logo from "./images/Logo.png"
import displayMenu from './pages/menuPage'
import displayHomePage from './pages/homePage'

const displayHeader = function () {
    const myIcon = new Image()
    myIcon.src = Logo
    let clickedButton = 'home'


    const navigation = function () {
        const navigation = document.createElement('nav')

        const homeButton = document.createElement('Button')
        homeButton.textContent = 'Home'
        navigation.appendChild(homeButton)

        const menuButton = document.createElement('button')
        menuButton.textContent = 'Menu'
        navigation.appendChild(menuButton)


        const aboutButton = document.createElement('Button')
        aboutButton.textContent = 'HomeButton'
        navigation.appendChild(aboutButton)

        const reservationsButton = document.createElement('Button')
        reservationsButton.textContent = 'Reservations'
        navigation.appendChild(reservationsButton)

        homeButton.addEventListener('click', () => {
            clickedButton = 'home'
            displayHomePage()
        })
        menuButton.addEventListener('click', () => {
            clickedButton = 'menu'
            displayMenu()
        })
        aboutButton.addEventListener('click', () => {
            clickedButton = 'about'
        })
        reservationsButton.addEventListener('click', () => {
            clickedButton = 'reservations'
        })

        return navigation
    }
    document.querySelector("#header").innerHTML = ''
    document.querySelector('#header').appendChild(myIcon)
    document.querySelector("#header").appendChild(navigation())

    return { clickedButton }
}

export default displayHeader