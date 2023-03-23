import React, { useState } from 'react';

export const HeartButton = (props) => {
  const [like, setLike] = useState(false);
  const [hearts, setHearts] = useState(props.hearts)
  const heartButtonToggle = like ? ' on ' : '';
  const postLike = () => {
    return fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${props.id}/like`, {
      method: 'POST'
    })
  }
  const toggleLike = () => {
    postLike().then((response) => response.json()).then((data) => {
      setHearts(data.hearts)
      if (!like) {
        setLike(true);
      }
    })
  }
  return (
    <div>
      <button
        aria-label="Heart-button"
        type="button"
        className={`heartButton${heartButtonToggle}`}
        disabled={like}
        onClick={toggleLike}>
        🖤
      </button>
      <span>x {hearts}</span>
    </div>
  )
}
