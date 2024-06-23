import Author from '../models/author.model.js';
export const getAuthor = async (req, res) => {
  const author = await Author.getAuthor();
  res.send(author);
};
