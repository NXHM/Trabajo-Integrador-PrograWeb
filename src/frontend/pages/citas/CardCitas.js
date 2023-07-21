import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './CardCitas.css';
import userIcon from "./user_icon.png";
import placeholderImage from './placeholder_image.jpg';
const cardStyle = {
    backgroundColor: "purple",
    maxHeight: "170em",
    maxWidth: "22em",
    width: "auto",
    position: "relative",
}
const CardCitas = ({ nombre, titulo, carrera, foto, linkCita, fechaCita, horario, curso, calificacion }) => {

    return (
      <div id="a-card" >
        <div className="card-header">
          <div className="row">
            <div className="col-3">
              <div className="member d-flex align-items-center ps-2">
                <div className="memberpic">
                  <img className="rounded-circle" src={userIcon} alt="User Icon" />
                </div>
              </div>
            </div>
            <div className="col-9 d-flex align-items-center">
              <div className="member-info">
                <h5 className="card-title">{nombre}</h5>
                <p className='card-subtitle'>{titulo}</p>
                
              </div>
            </div>
          </div>
        </div>
        <img src={foto || placeholderImage} className="card-img-top" alt="Placeholder" />
        <div className="card-body d-flex flex-column">
          <div className="cita-info">
            <p className="card-text text-start pb-2"><small className="text-muted">{carrera}</small></p>
            <h5 className="card-title text-start">{fechaCita} - {horario || "9:00"}</h5>
            <p className="card-text text-start"><small className="text-muted">Curso: {curso || "Programación-web"}</small></p>
            <a className="card-text text-start" href={linkCita} target="_blank" rel="noopener noreferrer" mouse="focus">Enlace de zoom</a>
          </div>
          <div className="d-flex justify-content-between mt-auto">
            <div className="col text-start">
              <p className="card-text">Calificación: {calificacion !== null ? calificacion : "Pendiente"}</p>
            </div>
            {calificacion === null && (// Si la cita no ha sido calificada
              <div className="col text-end">
                <button
                  className="btn btn-primary">
                  Calificar
                </button>
              </div>
            )}{// Si la cita ya fue calificada
                <div className="col text-end">
                <button
                  className="btn-primary">
                  Cancelar
                </button>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }


export default CardCitas;
