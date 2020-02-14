const Url = require('./models/url');

const getShort = (req, res, next) => {
  const { short } = req.params;

  Url.getSingle(short)
    .then(rec => {
      if (rec) {
        const { original } = rec;
        res.redirect(`https://${original}`);
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
    Url.find({}, "-_id -__v")
      .then(rec => {
        const sortedRecords = rec.sort((a, b) => b[type] - a[type]);
        sortedRecords.splice(limit);
        res.json(sortedRecords);
      })
      .catch(err => next(err));
  }
};

module.exports = { getShort, createShort, getPopular };
