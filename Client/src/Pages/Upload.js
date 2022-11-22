import React, {useState} from 'react'

function Upload() {
    const [image, setImage] = useState([]);
    const [status, setStatus] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      let formData = new FormData()
      
      formData.append("photo",image.data)
      console.log(image);
  
      // formData.append('file', image.data)
      const response = await fetch('http://localhost:8000/users/upload', {
        method: 'POST',
        body: formData,
      })
      if (response) setStatus(response.statusText)
      console.log(image.length);
    };
  
    const handleFileChange = (e) => {
        console.log(e.target.file);
      setImage(e.target.file)
    };
  
    return (
      <div className='App'>
        <h1>Upload to server</h1>
        
        <hr></hr>
        <form onSubmit={handleSubmit}>
          <input type='file' name='file' onChange={handleFileChange}></input><br></br>
          <button type='submit'>Submit</button>
        </form>
        {status && <h4>{status}</h4>}
      </div>
    );
}

export default Upload