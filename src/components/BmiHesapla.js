import React, { useState, useEffect } from 'react';
import './sass/_bmiHesapla.scss';
import BmiDiyet from './BmiDiyet';
import { data } from '../constans';

const BmiHesapla = ({ addProfil }) => {
  const [isResult, setIsResult] = useState(false);
  const [weight, setWeight] = useState(0);
  const [length, setLength] = useState(0);
  const [bmiData, setBmiData] = useState({});
  const [isEmpty, setIsEmpty] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [bmi, setBmi] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    const calculateBmi = (weight, length) => {
      let result = ((weight / (length * length)) * 10000).toFixed(2);
      return result;
    };

    setBmi(calculateBmi(weight, length));
  }, [bmi, weight, length]);

  const handleChange = e => {
    setName(e.target.value);

    setIsResult(false);
    setIsShow(false);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setIsEmpty(true);
    setIsResult(false);
    setIsShow(false);

    if (weight && length) {
      let newData = data.find(e => e.minRate <= bmi && e.maxRate > bmi);

      setIsEmpty(false);
      addProfil(name, weight, length, bmi, newData.title);

      setTimeout(() => {
        setIsResult(true);
        setBmiData(newData);
      }, 500);
    } else {
      setIsEmpty(true);
      setIsResult(false);
    }
  };

  const handleShow = () => {
    setIsShow(true);
  };

  return (
    <section className="bmiHesapla-container">
      <h1 className="title">Vücut Kitle Endeksi Hesaplama</h1>
      <div className="container">
        <div className="hesaplama">
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="control-box">
                <label className="label" htmlFor="name">
                  Adınız :{' '}
                </label>
                <input
                  type="text"
                  id="name"
                  className="input nameInput"
                  onChange={handleChange}
                />
              </div>
              <div className="control-box">
                <label className="label" htmlFor="length">
                  Boyunuz :{' '}
                </label>
                <input
                  type="text"
                  id="length"
                  className="input"
                  onChange={e => setLength(e.target.value)}
                />
                <p className="input-desc">cm (Örn : 172)</p>
              </div>
              <div className="control-box">
                <label htmlFor="weight">Kilonuz : </label>
                <input
                  type="text"
                  id="weight"
                  className="input"
                  onChange={e => setWeight(e.target.value)}
                />
                <p className="input-desc">kg (Örn : 69)</p>
              </div>
            </div>
            <button className="btn-submit" type="submit">
              Hesapla
            </button>
          </form>
          {isResult && (
            <div className="result-container">
              <div className="result">
                <p className="result-title">
                  Vücut kitle endeksiniz :{' '}
                  <span
                    className={`res-${bmiData.color}`}
                  >{`${bmiData.title} (${bmi})`}</span>
                </p>
                <p className="result-description">{bmiData.desc}</p>
              </div>
              <button className="btn" onClick={handleShow}>
                Diyeti Göster
              </button>
            </div>
          )}
          {isEmpty && <div className="error">Lütfen değer giriniz...</div>}
        </div>
        {isShow && <BmiDiyet />}
      </div>
    </section>
  );
};

export default BmiHesapla;
