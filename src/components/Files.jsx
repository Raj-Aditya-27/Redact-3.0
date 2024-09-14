import { useState } from "react";

function Files() {
  const [fileName, setFileName] = useState("No file chosen");
  const [isFileChosen, setIsFileChosen] = useState(false);
  const [selectedScale, setSelectedScale] = useState("high");
  const [homePage, setHomePage] = useState(true);
  const [file, setFile] = useState(null);
  const [animation, setAnimation] = useState(false);
  const [Data, setData] = useState(undefined);

  function handleFileChoose(event) {
    const chosenFile = event.target.files[0];
    if (chosenFile) {
      setFile(chosenFile);
      setFileName(chosenFile.name);
      setIsFileChosen(true);
    } else {
      setFileName("No file chosen");
      setIsFileChosen(false);
    }
  }

  function handleFileRemove() {
    setFileName("No file chosen");
    setIsFileChosen(false);
    document.getElementById("file-input").value = "";
    setSelectedScale("high");
    setFile(null);
  }

  function handleScaleChange(scale) {
    setSelectedScale(scale);
  }

  function handleConvert() {
    console.log("Enter");
    setAnimation(true);
    if (!file || !isFileChosen) {
      alert("Please choose a file and scale.");
      return;
    }
    console.log("After condition");
    console.log("File :", file);
    console.log("Scale: ", selectedScale);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("level", selectedScale.toUpperCase());

    console.log("After formData");

    fetch("/v2/analyze", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setAnimation(false);
        setHomePage(false);
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <>
      {homePage && (
        <div className="file-section">
          <div className="heading">Redact: Your Data Protector</div>

          {/* {animation && <MyLottieAnimation />} */}
          <div className="input">
            <div className="icons">
              <i className="bi bi-filetype-pdf"></i>
              <i className="bi bi-arrow-right-short"></i>
              <i className="bi bi-file-earmark-lock"></i>
            </div>
            <input
              type="file"
              id="file-input"
              className="file-input"
              onChange={handleFileChoose}
            />
            <label htmlFor="file-input" className="file-input-label">
              CHOOSE FILES
            </label>
            <span className="file-name">
              {fileName}{" "}
              {isFileChosen && (
                <span onClick={handleFileRemove}>
                  <i className="bi bi-x-circle"></i>
                </span>
              )}
            </span>
            <button
              className="button"
              style={{ visibility: isFileChosen ? "visible" : "hidden" }}
              onClick={handleConvert}
            >
              CONVERT
            </button>
          </div>
          <div className="scale">
            <button
              className={`button ${
                isFileChosen && selectedScale === "high" ? "selected" : ""
              }`}
              onClick={() => handleScaleChange("high")}
            >
              HIGH
            </button>
            <button
              className={`button ${
                isFileChosen && selectedScale === "med" ? "selected" : ""
              }`}
              onClick={() => handleScaleChange("med")}
            >
              MEDIUM
            </button>
            <button
              className={`button ${
                isFileChosen && selectedScale === "low" ? "selected" : ""
              }`}
              onClick={() => handleScaleChange("low")}
            >
              LOW
            </button>
          </div>
        </div>
      )}

      {!homePage && (
        <>
          <ReviewPage Data={Data} />
          <button className="submit" onClick={() => setHomePage(true)}>
            Cancel
          </button>
        </>
      )}
    </>
  );
}

export default Files;
