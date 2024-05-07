import Logo from "./images/Logo.png"
import displayMenu from './pages/menuPage'
import displayHomePage from './pages/homePage'
import displayReservations from "./pages/reservationsPage"
import displayAbout from "./pages/aboutPage"

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
        aboutButton.textContent = 'About'
        navigation.appendChild(aboutButton)

        const reservationsButton = document.createElement('Button')
        reservationsButton.textContent = 'Reservations'
        navigation.appendChild(reservationsButton)

        homeButton.addEventListener('click', () => {
            displayHomePage()
        })
        menuButton.addEventListener('click', () => {
            displayMenu()
        })
        aboutButton.addEventListener('click', () => {
            displayAbout()
        })
        reservationsButton.addEventListener('click', () => {
            displayReservations()

        })

        return navigation
    }
    document.querySelector("#header").innerHTML = ''
    document.querySelector('#header').appendChild(myIcon)
    document.querySelector("#header").appendChild(navigation())

    return { clickedButton }
}

export default displayHeader