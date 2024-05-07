const displayHomePage = function () {
    document.querySelector('#content').innerHTML = ''
    const title = document.createElement('h1')
    title.textContent = `Papa's Pizzeria`

    const description = document.createElement('p')
    description.textContent = "Papa Louie has a style of fully custom pizzas. Whether it is 8 pepperonis everywhere and 2 olives on the lower half, or a 10 onion pizza cooked well done and cut in 4 slices, there is no telling what you will come up with."

    const reviewsHeader = document.createElement('h2')
    reviewsHeader.textContent = 'Reviews'

    document.querySelector('#content').appendChild(title)
    document.querySelector('#content').appendChild(description)
    document.querySelector('#content').appendChild(reviewsHeader)

    const reviewCreator = function (authors, reviews) {
        const author = document.createElement('p')
        const review = document.createElement('review')

        author.textContent = authors
        review.textContent = reviews
        document.querySelector('#content').appendChild(author)
        document.querySelector('#content').appendChild(review)  

        return { author, review }
    }

    const review1 = reviewCreator('Don', 'An awesome restaurant')
    const review2 = reviewCreator('Berd', "A pretty good restaurant")
    const review3 = reviewCreator('Kim', 'An okay restaurant')
}

export default displayHomePage