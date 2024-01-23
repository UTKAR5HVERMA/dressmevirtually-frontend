import React, { useState } from 'react';
import './AIvirtuallworld.css';
import Vid from '../../../video/video4 .mp4'

const AIvirtuallworld = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch('http://127.0.0.1:5000/api/recommend', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecommendations(data.recommendations);
      })
      .catch((error) => console.error('Error:', error));
  };
 

    return (
      <div className='mains'>
        <div className='aivid'>
          <video src={Vid}></video>
        </div>
      <div className='recomend'>
        <input className='upload' type="file" onChange={handleFileChange} />
        <button className='btn btnRec' onClick={handleUpload}>Upload and Recommend</button>

        <div>
          <h2>Recommendations:</h2>
          <ul>
            {recommendations.map((recommendation, index) => (
              <li key={index}>
                <img src={`/${recommendation}`} alt={`Recommendation ${index}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

};


export default AIvirtuallworld;
