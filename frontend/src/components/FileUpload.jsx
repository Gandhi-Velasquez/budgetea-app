import React, { useState } from 'react';
import axios from 'axios';
import '../styles/FileUpload.css';

const FileUpload = ({ onUploadSuccess, onClearData, tableData }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://127.0.0.1:5000/upload', formData, { withCredentials: true });

      if (response.status === 200) {
        console.log('Processed Data:', response.data.data);
        onUploadSuccess(response.data.data);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="file-card">
      <h2>File Upload</h2>

      {selectedFile ? (
        <div className="file-info-box">
          <p>{selectedFile.name}</p>
        </div>
      ) : (
        <div className="file-info-box">
          <p>No file</p>
        </div>
      )}

      <div className='actions-container'>
        <div>
          <label htmlFor="file" className="file-label">
            Choose File
          </label>
          <input
            type="file"
            id="file"
            className="file-input"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <button
            className={`upload-button ${selectedFile ? 'active' : ''}`}
            onClick={handleUpload}
            disabled={!selectedFile}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
