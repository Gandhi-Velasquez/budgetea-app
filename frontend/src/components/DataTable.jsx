import React from 'react';
import '../styles/DataTable.css';

const DataTable = ({ data }) => {
  return (
    <div className="card-table">
      <table>
        <thead>
          {data.length > 0 ? (
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          ) : (
            <tr>
              <th></th>
            </tr>
          )}
        </thead>
        {data.length > 0 ? (
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.Date}</td>
                <td>{row.Description}</td>
                <td>{row.Category}</td>
                <td>{row.Amount}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr className="empty-message">
              <td colSpan="4">No data</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default DataTable;
