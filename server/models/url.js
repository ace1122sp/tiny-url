const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema(
  {
    original: {
      type: String,
      required: true
    },
    short: {
      type: Number,
      required: true
    },
    post_hits: {
      type: [Date]
    },
    get_hits: {
      type: [Date]
    }
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

UrlSchema.statics.post = original =>
  Url.findOne({ original })
    .then(async rec => {
      let record = rec;
      if (!record) {
        const totalUrls = await Url.countDocuments({});
        record = new Url({
          original,
          short: totalUrls + 1
        });
      }
      return record;
    })
    .then(record => {
      record.post_hits.push(new Date());
      return record.save();
    });


UrlSchema.statics.getSingle = short => {
  return Url.findOne({ short })
    .then(rec => {
      if (rec) {
        rec.get_hits.push(new Date());
        return rec.save();
      } else {
        return rec;
      }
    });
}

UrlSchema.virtual('last_get_count').get(function() {
  return this.get_hits.filter(
    date => date.valueOf() > Date.now() - 24 * 60 * 60 * 1000
  ).length;
});

UrlSchema.virtual('last_post_count').get(function() {
  return this.post_hits.filter(
    date => date.valueOf() > Date.now() - 24 * 60 * 60 * 1000
  ).length;
});

const Url = mongoose.model('Url', UrlSchema);
module.exports = Url;
