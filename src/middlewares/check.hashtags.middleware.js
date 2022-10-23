async function checkForHashtags(req, res, next) {
  const { description } = res.locals.body;

  const hashtags = description?.match(/#[^\s#\.\;]*/gmi);

  res.locals.hashtags = hashtags;

  next();
}

export { checkForHashtags };
