const PdfButton = () => {
  const handlePdfButtonClick = () => {
    // Opens a blank page that can be updated later with actual PDF content
    window.open("/pdf", "_blank");
  };

  return (
    <button className="pdf__button" onClick={handlePdfButtonClick}>
      PDF
      <svg
        version="1.1"
        viewBox="0 0 24 24"
        height="22px"
        width="22px"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="info" />
        <g id="icons">
          <g id="save">
            <path d="M11.2,16.6c0.4,0.5,1.2,0.5,1.6,0l6-6.3C19.3,9.8,18.8,9,18,9h-4c0,0,0.2-4.6,0-7c-0.1-1.1-0.9-2-2-2c-1.1,0-1.9,0.9-2,2    c-0.2,2.3,0,7,0,7H6c-0.8,0-1.3,0.8-0.8,1.4L11.2,16.6z" />
            <path d="M19,19H5c-1.1,0-2,0.9-2,2v0c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v0C21,19.9,20.1,19,19,19z" />
          </g>
        </g>
      </svg>
    </button>
  );
};

export default PdfButton;
