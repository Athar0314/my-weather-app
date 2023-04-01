import "./currentweather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const CurrentWeather = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  console.log(data);
  console.log(showModal);

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].main}</p>
        </div>
        <img
          alt="weather"
          className="weather-img"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temp">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m.s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
      <button className="btn" onClick={() => setShowModal(true)}>
        More Details
      </button>
      <Modal
        centered="true"
        size="lg"
        isOpen={showModal}
        toggle={() => setShowModal(!showModal)}
      >
        <ModalHeader toggle={() => setShowModal(!showModal)}>
          More Details
        </ModalHeader>

        <ModalBody>
          <div className="parameter-row">
            <span className="parameter-label">Maximum Temperature</span>
            <span className="parameter-value">{data.main.temp_max}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Minimum Temperature</span>
            <span className="parameter-value">{data.main.temp_min}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Clouds</span>
            <span className="parameter-value">{data.clouds.all}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Latitude</span>
            <span className="parameter-value">{data.coord.lat}°</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Longitude</span>
            <span className="parameter-value">{data.coord.lon}°</span>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default CurrentWeather;
