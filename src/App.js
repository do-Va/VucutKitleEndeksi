import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BmiHesapla, BmiNedir, BmiHesaplamalar } from './components';

const getLocalStorage = () => {
  let profil = localStorage.getItem('profil');

  if (profil) {
    return JSON.parse(localStorage.getItem('profil'));
  } else {
    return [];
  }
};

function App() {
  const [profil, setProfil] = useState(getLocalStorage);

  const addProfil = (name, weight, length, bmi, bmiResult) => {
    let newProfil = {
      id: new Date().getTime(),
      date: new Date().toLocaleDateString(),
      name,
      weight,
      length,
      bmi,
      bmiResult,
    };

    setProfil([...profil, newProfil]);
  };

  const clearList = () => {
    setProfil([]);
  };

  useEffect(() => {
    localStorage.setItem('profil', JSON.stringify(profil));
  }, [profil]);

  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <BmiHesapla addProfil={addProfil} />
          </Route>
          <Route path="/bmiNedir">
            <BmiNedir />
          </Route>
          <Route path="/bmiHesaplamalar">
            <BmiHesaplamalar profil={profil} clearList={clearList} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
