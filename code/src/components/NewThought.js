import React, { useState } from 'react';

export const NewThought = () => {
  const [newThought, setNewThought] = useState('');

  const HandleFormSubmit = (event) => {
    event.preventDefault();
    if (newThought.length < 5) {
      return alert('Minimum thought-length is 5 characters!')
    } else if (newThought.length > 140) {
      return alert('Max thought-length is 140 characters!')
    } else {
      const Submit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newThought })
      };
      fetch('https://project-happy-thoughts-api-rg22bvxr4q-lz.a.run.app/thoughts', Submit)
        .then((response) => response.json())
        .then(() => {
          setNewThought('');
          setTimeout(() => window.location.reload(), 3000)
        })
    }
  };

  return (
    <section className="mainContainer">
      <form onSubmit={HandleFormSubmit} className="formCard">
        <label htmlFor="newThought" className="headThought">What&apos;s making you happy right now?
          <textarea
            id="newThought"
            type="text"
            placeholder="Enter the happy thought there.."
            aria-label="type-happines"
            rows="4"
            cols="40"
            value={newThought}
            onChange={(event) => setNewThought(event.target.value)} />
        </label>
        <p className={newThought.length > 140 ? 'counter' : 'counter'}>Number of characters: {newThought.length} / 140</p>
        <button className="submitBtn" type="submit">
          <span>
            Send a happy thought!
            <span className="heart" role="img" aria-label="heart"> 🖤 </span>
          </span>
        </button>
      </form>
    </section>
  )
};