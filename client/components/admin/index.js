import React from 'react';
import PropTypes from 'prop-types';

const AdminPage = ({ urls }) => {
  const renderTableRows = () => {
    return urls.map((url, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{url.original}</td>
          <td>{url.short}</td>
          <td>{url.last_post_count}</td>
        </tr>
      );
    });
  };

  return (
    <main>
      <table>
        <tr>
          <th>order</th>
          <th>url</th>
          <th>short</th>
          <th>total hits</th>
        </tr>
        {renderTableRows()}
      </table>
    </main>
  );
};

AdminPage.propTypes = {
  urls: PropTypes.array
};

AdminPage.defaultProps = {
  urls: []
};

export default AdminPage;
