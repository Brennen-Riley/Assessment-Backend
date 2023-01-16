const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
    getCompliment, 
    getFortune,
    getInspiration,
    getAllBooks,
    updateBook,
    deleteBook,
} = require('./controller')



app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune)

app.post("/api/inspiration", getInspiration)



app.get("/api/books", getAllBooks)
app.put("/api/books/:id", updateBook)
app.delete("/api/books/:id", deleteBook)

app.listen(4000, () => console.log("Server running on 4000"));
