import React, { useState } from 'react'
import axios from 'axios';
import { DNA } from 'react-loader-spinner';
import { render } from 'react-dom';

const SecureUpload = () => {
  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadFile = async (type) => {
    const data = new FormData();

    data.append("file", type === 'image' ? img : video);
    data.append("upload_preset", type === 'image' ? 'images_preset' : 'videos_preset');

    try {
      let cloudName = import.meta.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME;
      let resourceType = type === 'image' ? 'image' : 'video';
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // upload image file 
      const imgUrl = await uploadFile('image');

      // upload video file  
      const videoUrl = await uploadFile('video');

      // Send backend api request 
      // await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/videos`, { imgUrl, videoUrl });

      // Reset states 
      setImg(null);
      setVideo(null);

      console.log("File upload success!");
      setLoading(false);

    } catch (error) {
      console.log(error);
    }
  }



  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="video">Video:</label>
          <br />
          <input
            type="file"
            accept='video/*'
            id='video'
            onChange={(e) => setVideo((prev) => e.target.files[0])}
          />
        </div>
        <br />
        <div>
          <label htmlFor="img">Image:</label>
          <input
            type="file"
            accept='image/*'
            id='img'
            onChange={(e) => setImg((prev) => e.target.files[0])}
          />
        </div>
        <br />
        <button type='submit'>Upload</button>
      </form>

      {loading && <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />}
    </>


  )
}

export default SecureUpload
