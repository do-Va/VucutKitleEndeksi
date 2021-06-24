import React from 'react';
import './sass/_bmiDiyet.scss';
import { diet } from '../constans';

const BmiDiyet = () => {
  return (
    <div className="bmiDiyet-container">
      <ul className="list-container">
        {diet.map(item => {
          const { id, name, list } = item;
          return (
            <div className="card" key={id}>
              <p className="title">{name}</p>
              {list.map(item => {
                const { id, listItem } = item;
                return (
                  <li className="list" key={id}>
                    {listItem}
                  </li>
                );
              })}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default BmiDiyet;
