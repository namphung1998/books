const getAuthors = ({ Author }) => (req, res) => {
  return Author.find({})
    .exec()
    .then(authors => res.send(authors))
    .catch(err => res.status(400).send({ err }));
};

const getBooksByAuthor = ({ Book }) => (req, res) => {
  return Book.find({ author: req.params.id })
    .exec()
    .then(books => res.send(books))
    .catch(() => res.status(400).send({ err }));
};

module.exports = {
  getAuthors,
  getBooksByAuthor,
}