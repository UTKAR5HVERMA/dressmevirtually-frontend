import React, { useState } from 'react';
import './AIvirtuallworld.css';
import Vid from '../../../video/video5.mp4';


const AIvirtuallworld = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch('http://127.0.0.1:5000/api/recommend', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecommendations(data.recommendations || []);
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="aibox">
      <div className="mains">
        <div className="aivid">
          <video src={Vid} controls loop autoPlay muted></video>
        </div>
        <div className="recomend">
          <input
            id="fileInput"
            className="upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <h3> Clich herer to Upload Dress Pic</h3>
          <label htmlFor="fileInput" className="btnUpload">
            Choose Image
          </label>
          <br />
          <button className="btn btnRec" onClick={handleUpload}>
            Upload and Recommend
          </button>

          <div>
            <h2>Recommendations:</h2>
            {recommendations.length > 0 ? (
              <ul>
                {recommendations.map((recommendation, index) => (
                  <li key={index}>
                    <img
                      src={`http://127.0.0.1:5000${recommendation}`}
                      alt={`Recommendation ${index}`}
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p>No recommendations available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIvirtuallworld;
