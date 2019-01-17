const addBook = ({ Book, Author, Publisher }) => (req, res) => {
  const { authorName, publisherName, title, price, publicationYear, imageUri } = req.body;

  // Check to see if author and publisher exist in database
  Promise.all([
    Author.findOne({ name: authorName }).exec(),
    Publisher.findOne({ name: publisherName }).exec()
  ])
    .then(([author, publisher]) => {
      // If not then create new author and publisher
      if (!author) {
        author = new Author({ name: authorName });
      }

      if (!publisher) {
        publisher = new Publisher({ name: publisherName });
      }

      const book = new Book({
        title,
        price,
        publicationYear,
        author,
        publisher,
        imageUri
      });

      return Promise.all([book.save(), author.save(), publisher.save()]);
    })
    .then(([book, author, publisher]) => res.send(book))
    .catch(err => res.status(400).send({ err }));
};

const editBook = ({ Book, Author, Publisher }) => (req, res) => {
  const { authorName, publisherName, title, price, publicationYear, imageUri } = req.body;

  Promise.all([
    Author.findOne({ name: authorName }).exec(),
    Publisher.findOne({ name: publisherName }).exec()
  ])
    .then(([author, publisher]) => {
      if (!author) {
        author = new Author({ name: authorName });
      }

      if (!publisher) {
        publisher = new Publisher({ name: publisherName });
      }

      return Promise.all([author.save(), publisher.save()]);
    })
    .then(([author, publisher]) => {
      return Book.findByIdAndUpdate(req.params.id, {
        title, price, publicationYear, author, publisher, imageUri
      }, { new: true })
        .exec();
    })
    .then(book => res.send(book))
    .catch(err => {
      console.log(err);
      res.status(400).send({ err })
    });
};

const deleteBook = ({ Book }) => (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => res.send({ success: true }))
    .catch(err => res.status(400).send({ err }));
}

const getAllBooks = ({ Book }) => (req, res) => {
  Book.find({})
    .populate('author')
    .populate('publisher')
    .exec()
    .then(books => res.send(books))
    .catch(err => res.status(400).send({ err }));
}

const getOneBook = ({ Book }) => (req, res) => {
  const { id } = req.params;

  Book.findById(id)
    .populate('author')
    .populate('publisher')
    .exec()
    .then(book => res.send(book))
    .catch(err => res.status(400).send({ err }));
}

module.exports = {
  addBook,
  editBook,
  deleteBook,
  getAllBooks,
  getOneBook
};
