const displayAbout = function () {
    document.querySelector('#content').innerHTML = ''
    const p = document.createElement('p')
    p.textContent = 'About page'
    document.querySelector('#content').appendChild(p)
}

export default displayAbout