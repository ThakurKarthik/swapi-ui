import React, { useState } from 'react';
import {useNavigate}  from 'react-router-dom';
import './Table.css';

function Table(props) {
  const { data = [], columns = [], fullData } = props;
  const [pagination, setPagination] = useState(0);
  const navigate = useNavigate();  
  
  const totalCount = fullData.totalCount;
  const showPagination = totalCount > 10;
  
  return (
    <div className="table">
      <table className="table-layout">
        <thead>
          <tr>
            {columns.map((column) => {
              return <th key={column}>{column}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((lineItem) => {
            return (
              <tr key={lineItem.node.id} className="line-item" onClick={() => {
                navigate(props.detailPageUrl, {state: lineItem.node})
              }}>
                {columns.map((column) => {
                  return <td key={column}>{lineItem.node[column] || 'NA'}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {showPagination && (
        <div className="pagination">
          {pagination > 0 && (
            <div>
              <button onClick={() => setPagination(pagination - 1)}>
                {'<- '}
                {pagination * 10 + 1}
                {' - '} {pagination * 10 + 10}
              </button>
            </div>
          )}
          <div className='pagination-right'>
            <button onClick={() => setPagination(pagination + 1)}>
              {(pagination + 1) * 10 + 1}
              {' - '} {(pagination + 1) * 10 + 10} {' -> '}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Table;
