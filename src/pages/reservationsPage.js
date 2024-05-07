const displayReservations = function () {
    document.querySelector('#content').innerHTML = ''
    const p = document.createElement('p')
    p.textContent = 'reservations page'
    document.querySelector('#content').appendChild(p)
}

export default displayReservations