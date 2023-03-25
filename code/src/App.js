/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Thought } from 'components/Thought';
import { ListThoughts } from './components/ListThoughts';
import Footer from './components/Footer';

export const App = () => {
  const [thoughtList, setThoughtList] = useState([])
  const [loading, setLoading] = useState(false)
  const submitHandler = (message) => {
    if (message.length >= 5 || message.length <= 140) {
      fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
        method: 'POST',
        body: JSON.stringify({ message }),
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => response.json()).then((data) => {
        setThoughtList((pv) => [data, ...pv])
      })
    } else {
      alert('make sure the input is between 5-140 characters long')
    }
  }
  useEffect(() => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, []);
  return (
    <div className="main-container">
      <Thought submitHandler={submitHandler} />
      {!loading && ListThoughts(thoughtList)}
      {loading && (<h3>LOADING THOUGHTS...</h3>)}
      <Footer />
    </div>
  );
}
