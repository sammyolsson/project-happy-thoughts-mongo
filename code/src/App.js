/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import Footer from 'components/Footer';
import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import ThoughtForm from './components/ThoughtForm'
import ThoughtList from './components/ThoughtList'

export const App = () => {
  const [thoughtList, setThoughtList] = useState([])
  const [loading, setLoading] = useState(false)
  const [newThought, setNewThought] = useState('')

  /* FETCHES MOST RECENT THOUGHTS */
  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchThoughts();
  }, [])

  /* WRTIES NEW TEXT-INPUT-VALUE TO SETNEWTHOUGHT */
  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  /* POSTS NEW THOUGHT AND UPDATES STATE */
  const postNewThought = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    };

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((res) => res.json())
      .then((data) => {
        setThoughtList((prevList) => [data, ...prevList]);
      });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    postNewThought();
    setNewThought('')
  };

  /* POSTS NEW LIKES TO API */
  const handleLike = (_id) => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`, { method: 'POST' })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const updateLikes = thoughtList.map((like) => {
          if (like._id === data._id) {
            like.hearts += 1;
            return like;
          } else {
            return like;
          }
        });
        setThoughtList(updateLikes)
      })
  }
  return (
    <div>
      <Header />
      <main>
        <ThoughtForm
          onFormSubmit={handleFormSubmit}
          newThought={newThought}
          onNewThoughtChange={handleNewThoughtChange} />
        <ThoughtList
          loading={loading}
          thoughtList={thoughtList}
          handleLike={handleLike} />
      </main>
      <Footer />
    </div>
  );
}