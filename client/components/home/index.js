import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const HomePage = ({ createShortUrl, shortUrl }) => {
  const [originalUrl, setOriginalUrl] = useState('');
  const submit = e => {
    e.preventDefault();
    createShortUrl(originalUrl);
    setOriginalUrl('');
  };

  return (
    <main>
      <section>
        <h3>Instructions:</h3>
        <ul>
          <li>
            enter url in format which starts with a domain name <span>(e.g.google.com)</span>
          </li>
          <li>
            in your browser enter [projectUrl]/url/:shortKey <span>(e.g. localhost:8000/url/1)</span>
          </li>
        </ul>
      </section>
      <section>
        <form onSubmit={submit} className="flex-start">
          <label htmlFor="url">url to be shortened:</label>
          <input
            type="string"
            name="url"
            id="url"
            onChange={e => setOriginalUrl(e.target.value)}
            value={originalUrl}
          />
          <button>submit</button>
        </form>
        <p>
          short key: <span>{shortUrl}</span>
        </p>
      </section>
    </main>
  );
};

HomePage.propTypes = {
  createShortUrl: PropTypes.func.isRequired,
  shortUrl: PropTypes.string,
};

HomePage.defaultProps = {
  shortUrl: ''
};

export default HomePage;
