import User from '../models/user.model.js';
export const getUser = async (req, res) => {
  const getProduct = await User.getProduct();
  res.send(getProduct);
};
