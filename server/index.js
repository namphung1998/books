require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const morgan = require('morgan');

const models = require('./models');
const BookController = require('./controllers/book_controller');
const AuthorController = require('./controllers/author_controller');

const MONGO_URI = "mongodb://nphung:password1@ds211083.mlab.com:11083/book-tiki";
mongoose.set("useCreateIndex", true);
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected to Mlab instance"))
  .on("err", err => console.log("Error connecting to Mlab", err));

const app = express();
app.use(bodyParser.json({ type: "*/*" }));
app.use(cors());
app.use(morgan('combined'));

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get('/authors', AuthorController.getAuthors(models));
app.get('/authors/:id/books', AuthorController.getBooksByAuthor(models));
app.get('/books', BookController.getAllBooks(models));
app.post('/books/new', BookController.addBook(models));
app.get('/books/:id', BookController.getOneBook(models));
app.put('/books/:id', BookController.editBook(models));
app.delete('/books/:id', BookController.deleteBook(models))

const port = process.env.PORT || 4000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log("Server listening on port", port);
});
