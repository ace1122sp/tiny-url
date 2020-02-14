import React, { Fragment, useState } from 'react';
import axios from 'axios';
import Home from './index';

const HomeContainer = () => {
  const [shortUrl, setShortUrl] = useState();

  const createShortUrl = url => {
    axios.post('/api/new', {
      url
    })
    .then(res => {
      setShortUrl(res.data.short.toString());
    })
    .catch(err => {
      console.error(err);
    });
  }

  return (
    <Fragment>
      <Home createShortUrl={createShortUrl} shortUrl={shortUrl} />
    </Fragment>
  );
};

export default HomeContainer;
