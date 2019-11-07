import React, { useEffect, useState } from 'react';
import axios from 'axios';


const NasaCard = () => {
  const [nasaInfo, setnasaInfo] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=gNW3vIQePD9BYex7Oi5tmG3GUC0Tp1UEMFcVeBc4`
      )
      .then(response => {
        console.log('NASA Image Of The Day', response.data);
        setnasaInfo(response.data);
      })
      .catch(error => {
        console.log('The data was not returned', error);
      });
  }, []);

  return (
    <div style={{ maxWidth: '800px' }}>
      {nasaInfo && (
        <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px'
              }}
            >
              <img width='50%' src={nasaInfo.url} alt='Nasa' />
            </div>
            <div>
              <div>{nasaInfo.title}</div>
              <div>{nasaInfo.date}</div>
              <div>{nasaInfo.explanation}</div>
            </div>
          
        </div>
      )}
    </div>
  );
};
export default NasaCard