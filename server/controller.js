const books = require('./db.json')
let globalId = 1


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Fearless courage is the foundation of victory.", "Happy life is just in front of you.", "Have a beautiful day.", "How you look depends on where you go.", "I learn by going where I have to go."]
    
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]
    
        res.status(200).send(randomFortune)
    },

    getInspiration: (req, res) => {
        const inspirations = ["Any fool can write code that a computer can understand. Good programmers write code that humans can understand. -Martin Fowler", "Code is like humor. When you have to explain it, it’s bad. -Cory House", "Simplicity is the soul of efficiency. -Austin Freeman"]

        let randomIndex = Math.floor(Math.random() * inspirations.length)
        let randomInspiration = inspirations[randomIndex]

        res.status(200).send(randomInspiration)
    },

    deleteBook: (req, res) => {
        let index = books.findIndex(elem => elem.id === +req.params.id)
        books.splice(index, 1)
        res.status(200).send(books)
    },

    updateBook: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = books.findIndex(elem => +elem.id === +id)

        if (books[index].rating <= 1 && type === 'minus') {
            books[index].rating = 0
            res.status(200).send(books)
        } else if (type === 'plus') {
            books[index].rating += 1
            res.status(200).send(books)
        } else if (type === 'minus') {
            books[index].rating -= 1
            res.status(200).send(books)
        } else {
            res.sendStatus(400)
        }
    },

    getAllBooks: (req, res) => {
        res.status(200).send(books)
    }
}

