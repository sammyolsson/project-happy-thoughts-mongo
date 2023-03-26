/* eslint-disable linebreak-style */
import React from 'react';

/* Component which contains the form input */
const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  /* Variable that stores the acceptable number of characters */
  const isSubmitButtonDisabled = newThought.length < 6 || newThought.length > 140;
  /* a conditional function that shows either the character-count or a warning message,
  depending on number of characters */
  const characterWarning = () => {
    if (newThought.length > 140) {
      return (<p className="character-warning">Your thought can only be 140 characters long</p>)
    } else {
      return (<p className="character-count">{newThought.length} / 140</p>)
    }
  }
  return (
    <section className="form-section">
      <form className="form" onSubmit={onFormSubmit}>
        <label className="label" htmlFor="thought-input">
          What&apos;s making you happy right now?
          <textarea
            className="thought-input"
            id="thought-input"
            placeholder="Write your happy thought here..."
            value={newThought}
            onChange={onNewThoughtChange} />
        </label>
        {characterWarning()}
        <button
          className="submit-button"
          type="submit"
          disabled={isSubmitButtonDisabled}>
          🖤 Send Happy Thought!
        </button>
      </form>
    </section>)
}

export default ThoughtForm