async function checkForHashtags(req, res, next) {
  const { description } = res.locals.body;

  const hashtags = description?.match(/#[a-zA-ZÀ-ÿ0-9_-]+/g);

  res.locals.hashtags = hashtags;

  next();
}

export { checkForHashtags };
