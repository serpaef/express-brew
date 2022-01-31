module.exports = (req, res, next) => {
  const { brew_coffee } = req.body;
  if (brew_coffee) return res.status(418).send("I'm a teapot, no coffee here.");
  next();
}
