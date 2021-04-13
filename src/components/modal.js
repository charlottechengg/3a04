import React from "react";
import "./modal.css";
export default function Modal(props) {
  const { onChange, Replay, score } = props;
  return (
    <div>
      <div class="modal-container modal-opened">
        <div class="modal_memory">
          <div class="modal__details">
            <h1 class="modal__title">Congratulations!</h1>
            <p class="modal__description">
              You finished the game under 50s with score '
              <text className="Red">{score}</text>
            </p>
          </div>

          <p class="modal__text">
            learn more details and assessment in user scores.
          </p>

          <button class="modal__btn" onClick={Replay}>
            Replay &rarr;
          </button>

          <a onClick={onChange} class="link-2"></a>
        </div>
      </div>
    </div>
  );
}
