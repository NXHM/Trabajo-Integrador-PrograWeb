import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const changeRating = (value) => {
    setRating(value);
  };

  const submitRating = () => {
    console.log("Evaluación enviada:", rating);
    closePopup();
  };

  const popupStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(200, 150, 255, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  };

  const popupContentStyle = {
    backgroundColor: "lightpink",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
  };

  const ratingStarsStyle = {
    unicodeBidi: "bidi-override",
    direction: "ltr",
    textAlign: "center",
    fontSize: "24px",
  };

  const ratingStarStyle = {
    display: "inline-block",
    position: "relative",
    width: "1em",
    color: "black",
  };

  const selectedStarStyle = {
    position: "absolute",
    content: "\2605",
    color: "gold",
  };

  const buttonsStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };

  const calificarBtnStyle = {
    backgroundColor: "lightpurple",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    marginRight: "10px",
  };

  return (
    <div>
      <button style={calificarBtnStyle} onClick={openPopup}>
        Calificar Servicio
      </button>
      {isOpen && (
        <div style={popupStyle}>
          <div style={popupContentStyle}>
            <h2>Evaluación de Servicio</h2>
            <p>Por favor, califique nuestro servicio:</p>
            <div style={ratingStarsStyle}>
              <span
                style={ratingStarStyle}
                onClick={() => changeRating(1)}
              ></span>
              <span
                style={ratingStarStyle}
                onClick={() => changeRating(2)}
              ></span>
              <span
                style={ratingStarStyle}
                onClick={() => changeRating(3)}
              ></span>
              <span
                style={ratingStarStyle}
                onClick={() => changeRating(4)}
              ></span>
              <span
                style={ratingStarStyle}
                onClick={() => changeRating(5)}
              ></span>
            </div>
            <div style={buttonsStyle}>
              <button style={calificarBtnStyle} onClick={submitRating}>
                Enviar Evaluación
              </button>
              <button onClick={closePopup}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
