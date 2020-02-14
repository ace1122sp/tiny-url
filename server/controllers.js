const Url = require('./models/url');

const getShort = (req, res, next) => {
  const { short } = req.params;

  Url.getSingle(short)
    .then(rec => {
      if (rec) {
        console.log(rec.last_get_count)
        const { original, short } = rec;
        res.json({ original, short, last_get_count: rec.last_get_count });
      } else {
        next();
      }
    })
    .catch(err => next(err));
};

const createShort = (req, res, next) => {
  const { url } = req.body;

  if (!url) {
    res.sendStatus(400);
  } else {
    Url.post(url)
    .then(rec => {
      const { original, short } = rec
      res.status(201).json({ original, short });
    })
    .catch(err => next(err));
  }
};

const getPopular = (req, res, next) => {
  const { type } = req.query;
  const limit = parseInt(req.query.limit);

  if (!type || typeof limit !== 'number') {
    res.sendStatus(400);
  } else {
    Url.getPopular(type, limit)
    .then(rec => {
      res.json(rec);
    })
    .catch(err => next(err));
  }
};

module.exports = { getShort, createShort, getPopular };