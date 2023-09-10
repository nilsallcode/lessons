import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [file, setFile] = useState('');

  const [pictures, setPictures] = useState([]);

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const getPictures = async () => {

    try {
      const response = await axios.get("http://localhost:4000/api/get-pictures");
      setPictures(response.data.pictures);
    } catch (error) {
      setError("Something went wrong fetching the pictures.");
    }

  };

  const uploadPicture = async () => {

    const formData = new FormData();
    formData.append('file', file);

    try {

      const response = await axios.post("http://localhost:4000/api/upload-picture", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      if (response.data.success) {
        setSuccess(response.data.success);
        getPictures();
      } else if (response.data.error) {
        setError(response.data.error); 
      }

    } catch (error) {
      console.log(error);
      setError("Something went wrong with the file upload");
    }

  };

  

  useEffect(() => {

    getPictures();

  }, [pictures]);

  return (
    <>
      <nav className="bg-violet-600 text-white p-4">
        <h2 className="text-xl font-semibold">Picture Heaven</h2>
      </nav>
      <main className="flex flex-col gap-12 p-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Upload an Awesome Pic!</h1>
          {success ? <p className="bg-green-500 text-white p-4 rounded-xl">{success}</p> : null}
          {error ? <p className="bg-red-500 text-white p-4 rounded-xl">{error}</p> : null}
          <input type="file" onChange={handleFileChange} />
          <button onClick={uploadPicture} className="bg-violet-600 text-white py-2 px-4 rounded-xl w-[20rem]">
            Upload!
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {pictures.map((picture, index) => (
            <img src={"http://localhost:4000" + picture.filePath} className="border-2 border-violet-600 object-cover w-full h-[20rem]" key={index} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
