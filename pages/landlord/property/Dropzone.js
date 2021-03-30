import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '200px',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 4,
  borderStyle: 'dashed',
  borderColor: '#d8e6e6',
  fontSize: 14,
  lineHeight: 1.57,
  color: '#888e8e',
  backgroundColor: '#fafcfb',
  transition: 'border .3s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function DropzoneComponent(props) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/jpg, image/png',
    maxFiles: 1,
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  const thumbs = files.map(file => (
    <div key={file.name}>
      <img
        style={{ width: "100%", height: 200, objectFit: "cover" }}
        src={file.preview}
        alt={file.name}
      />
    </div>
  ));

  // clean up
  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section>
      {thumbs.length == 0 &&
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <div>
            Drag & Drop your image here<br />
            or <u style={{ fontWeight: 600, color: "#126660", cursor: "pointer" }}>browse</u>
          </div>
        </div>
      }
      <aside>
        {thumbs}
      </aside>
    </section>
  )
}

export default DropzoneComponent;