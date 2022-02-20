import React, { useState } from 'react';
import {useNavigate}  from 'react-router-dom';
import './Table.css';

function Table(props) {
  const { data = [], columns = [], fullData } = props;
  const [pagination, setPagination] = useState(0);
  const navigate = useNavigate();  
  
  const totalCount = fullData.totalCount;
  const showPagination = totalCount > 10;
  const leftIndexOfData = pagination * 10;
  const rightIndexOfData = leftIndexOfData + 10;
  const paginationData = data.slice(leftIndexOfData, rightIndexOfData);
  
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
          {paginationData.map((lineItem) => {
            return (
              <tr key={lineItem.id} className="line-item" onClick={() => {
                navigate(props.detailPageUrl, {state: lineItem})
              }}>
                {columns.map((column) => {
                  return <td key={column}>{lineItem[column] || 'NA'}</td>;
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
                {(pagination - 1) * 10 + 1}
                {' - '} {Math.min((pagination - 1) * 10 + 10, totalCount)}
              </button>
            </div>
          )}
          {leftIndexOfData + 11 < Math.min(rightIndexOfData + 10, totalCount) && (<div className='pagination-right'>
            <button onClick={() => {
              setPagination(pagination + 1);
              props.fetchNextData()
            }}>
              {leftIndexOfData + 11}
              {' - '} {Math.min(rightIndexOfData + 10, totalCount)} {' -> '}
            </button>
          </div>)}
        </div>
      )}
    </div>
  );
}

export default Table;
