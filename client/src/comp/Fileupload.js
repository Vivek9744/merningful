import React from 'react';

function FileUploadComponent({ onFileSelect }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileSelect(file); // Pass the selected file to the parent component
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default FileUploadComponent;
