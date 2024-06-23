import Author from '../models/author.model.js';
export const getAuthor = async (req, res) => {
  const author = await Author.getAuthor();
  res.send(author);
};

export const createAuthor = async (reqq, res) => {
  try {
    const newAuthor = await Author.createAuthor(2, 'Vishal', 'Scince');
    res.send('New auhtor inserted in the database');
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};
