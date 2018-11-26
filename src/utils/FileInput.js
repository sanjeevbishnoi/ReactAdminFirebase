import map from "lodash/map";
import React from "react";
import DropZone from "react-dropzone";
import FontAwesome from 'react-fontawesome';
// import { MdCloudUpload } from "react-icons/md";
const renderImagePreview = imagefile => {
console.log(imagefile);

  return map(imagefile, ({ name, preview, size }) => [
    <li key="imagePreview">
      <img
        style={{ display: "block", margin: "auto", paddingTop: "10%" }}
        src={preview}
        alt={name}
        height="220px"
        width="200px"
      />
    </li>,
    <li style={{ textAlign: "center" }} key="imageDetails">
      {name} - {preview} bytes
    </li>
  ]);
};

export default ({
  handleOnDrop,
  input,
  imagefile,
  label,
  meta: { error, touched }
}) => (
  <div style={{ height: 220 }}>
    <DropZone 
      accept="image/jpeg, image/png, image/gif, image/bmp"
      className="upload-container"
      onDrop={handleOnDrop}
      onChange={file => input.onChange(file)}
      style={{ height: 200, width: 500 }}
    >
      {imagefile && imagefile.length > 0 ? (
        <ul
          style={{
            backgroundColor: "#efebeb",
            listStyleType: "none",
            height: 200,
            width: 470
          }}
        >
          {renderImagePreview(imagefile)}
        </ul>
      ) : (
        <div
          style={{
            textAlign: "center",
            backgroundColor: "#efebeb",
            height: "100%",
            width: "100%",
            borderRadius: 5
          }}
        >
          <div style={{ paddingTop: 70 }}>
            <FontAwesome name="upload" />
          </div>
          <p>Click or drag image file to this area to upload.</p>
        </div>
      )}
    </DropZone>
    {touched && error && <div style={{ color: "red" }}>{error}</div>}
  </div>
);
