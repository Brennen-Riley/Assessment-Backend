const complimentBtn = document.getElementById("complimentButton")
const bookContainer = document.querySelector('#book-container')

const baseURL = `http://localhost:4000/api/books`
const booksCallback = ({ data: books }) => displayBooks(books)
const errCallback = err => console.log(err.response.data)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment) 


const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data
            alert(data)
        })
}

fortuneBtn.addEventListener('click', getFortune)


const inspirationBtn = document.getElementById("inspirationButton")

const getInspiration = () => {
    axios.post("http://localhost:4000/api/inspiration/")
        .then(res => {
            const data = res.data
            alert(data)
        })
}

inspirationBtn.addEventListener('click', getInspiration)


const getAllBooks = () => axios.get(baseURL).then(booksCallback).catch(errCallback)
const updateBook = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(booksCallback).catch(errCallback)
const deleteBook = id => axios.delete(`${baseURL}/${id}`).then(booksCallback).catch(errCallback)

function createBookCard(book) {
    const bookCard = document.createElement('div')
    bookCard.classList.add('book-card')

    bookCard.innerHTML = `<img alt='book cover' src=${book.imageURL} class="book-cover"/>
    <p class="book-title">${book.title}. <br/> I highly recommend checking out this very inspirational book. After you have read it please rate from 1-5 Stars!</p>
    <div class="btns-container">
        <button onclick="updateBook(${book.id}, 'minus')">-</button>
        <p class="book-rating">${book.rating} stars</p>
        <button onclick="updateBook(${book.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteBook(${book.id})">delete</button>
    `

    bookContainer.appendChild(bookCard)
}

function displayBooks(arr) {
    bookContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createBookCard(arr[i])
    }
}



const signUpBtn = document.querySelector("#sign-up");
const input = document.querySelector("input");
const signUpForm = document.querySelector(".enter-email");
const footer = document.querySelector("footer");

function emailSubmitHandle() {
    const message = document.createElement("p");
    message.textContent = "We're excited to add you for our daily inspiration! " + input.value;
    signUpForm.remove();
    footer.appendChild(message);
}
signUpBtn.addEventListener("click", emailSubmitHandle);

getAllBooks()