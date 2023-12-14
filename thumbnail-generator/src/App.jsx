import { useState } from "react";
import Resizer from "react-image-file-resizer";
import "./App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const imageResizer = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const fileChange = async (e) => {
    const resizedFile = await imageResizer(e.target.files[0]);
    setSelectedImage(resizedFile);
  };

  return (
    <div className="App">
      <form>
        <input
          onChange={fileChange}
          accept="image/*"
          type="file"
          id="imageFile"
          name="image"
        />
      </form>
      {selectedImage && (
        <div className="img--container">
          <img
            style={{ width: "200px", height: "200px" }}
            src={selectedImage}
            alt="image not found"
          />
          <a href={selectedImage} download>
            Download
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
