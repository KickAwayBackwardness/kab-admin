// Loading.js
import React, { useState, useEffect } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentFile, setCurrentFile] = useState("");
  const [loadingComplete, setLoadingComplete] = useState(false);

  const resources = [
    "http://localhost:5173/src/components/vendors/Footer/BottomFooter.jsx",
    "http://localhost:5173/src/components/vendors/Footer/ContactColumn.jsx",
    "http://localhost:5173/src/components/vendors/svg/ButtonFrame.jsx",
    // Thêm các URL khác ở đây
  ];

  const loadResource = (url) => {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);

      xhr.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentage = Math.round((event.loaded / event.total) * 100);
          setProgress(percentage);
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response);
        }
      };

      xhr.onerror = () => {
        console.error("Error loading resource");
      };

      xhr.send();
      setCurrentFile(url);
    });
  };

  useEffect(() => {
    const loadData = async () => {
      for (let i = 0; i < resources.length; i++) {
        setProgress(0);
        await loadResource(resources[i]);
        setLoadingComplete(true);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Hiển thị thông báo 1 giây trước khi tải tệp tiếp theo
        setLoadingComplete(false);
      }
      setIsLoading(false);
    };

    loadData();
  }, []);
  if (isLoading) {
    return (
      <div
        style={{
          textAlign: "center",
          background: "black",
          color: "white",
          fontSize: "30px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10000,
          width: "100vw",
          height: "100vh",
        }}
      >
        <h1>
          {loadingComplete
            ? `File ${currentFile} Loaded!`
            : `Loading...${currentFile}`}
        </h1>
        {!loadingComplete && currentFile && (
          <h2 className="mt-[20px] p-[20px]">Current File: {currentFile}</h2>
        )}
        <div
          style={{
            width: "100%",
            backgroundColor: "#f3f3f3",
            borderRadius: "5px",
            margin: "20px 0",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "30px",
              backgroundColor: "#4caf50",
              borderRadius: "5px",
              transition: "width 0.5s",
            }}
          />
        </div>
        <h2>{progress.toFixed(0)}%</h2>
      </div>
    );
  } else {
    return null;
  }
};

export default Loading;
