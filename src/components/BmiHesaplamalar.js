import React from 'react';
import './sass/_bmiHesaplamalar.scss';

const BmiHesaplamalar = ({ profil, clearList }) => {
  return (
    <section className="bmiHesaplamalar-container">
      <p className="title">Hesaplamaların</p>
      <div className="result">
        {profil.map(item => {
          const { id, date, name, weight, length, bmi, bmiResult } = item;
          return (
            <ul className="result-list" key={id}>
              <li className="listItem">
                <div className="header">
                  <p className="date">{date}</p>
                  <p>{name}</p>
                  <p className="weight">{weight} kg</p>
                  <p className="length">{length} cm</p>
                </div>
                <div className="footer">
                  <p>BMI : {bmi}</p>
                  <p>{bmiResult}</p>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
      <button className="btn-clear" onClick={clearList}>
        Temizle
      </button>
    </section>
  );
};

export default BmiHesaplamalar;
