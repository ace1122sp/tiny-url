import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import Admin from "./index";

const AdminContainer = () => {
  const [urls, setUrls] = useState([]);

  const getPopularUrls = () => {
    axios.get('/api/popular?type=last_post_count&limit=25')
      .then(res => {
        setUrls(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    getPopularUrls();
  }, []);

  return (
    <Fragment>
      <Admin urls={urls} />
    </Fragment>
  );
};

export default AdminContainer;
