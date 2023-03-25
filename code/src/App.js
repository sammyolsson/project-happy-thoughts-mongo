/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Thought } from 'components/Thought';
import { ListThoughts } from './components/ListThoughts';

export const App = () => {
  const [ThoughtList, setThoughtList] = useState([])
  const [loading, setLoading] = useState(false)
  const submitHandler = (message) => {
    if (message.lenght >= 5 || message.lenght <= 140) {
      fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
        method: 'POST',
        body: JSON.stringify({ message }),
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => response.json()).then((data) => {
        setThoughtList((pv) => [data, ...pv])
      })
    } else {
      alert('your thought needs to be between 5-140 characters long')
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
      {!loading && ListThoughts(ThoughtList)}
      {loading && (<h3>LOADING THOUGHTS...</h3>)}
    </div>
  );
}
