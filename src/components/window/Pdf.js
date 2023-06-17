// Pdf acts as a placeholder for displaying PDF files

//  Note: Currently unused

import React from "react";

import guidelinesSrc from "../../PDFs/guidelines.pdf";

export default function Pdf(props) {
  function setIframe() {
    // Manual switch-case to determine which PDF to display based on the webpage it is opened in
    switch (props.dir) {
      case "Guidelines.pdf": {
        return guidelinesSrc;
        // return "https://drive.google.com/file/d/1Jv_ZrE-Brk8Bcf_3va0ZBlrSNcRzbbns/view?usp=sharing";
      }
      default: {
        return "";
      }
    }
  }

  const iframeURL = React.useState(setIframe())[0];

  return (
    <div className="pdfcontainer">
      <iframe
        title="Window PDF Viwer"
        className="pdfviewer"
        src={iframeURL}
      ></iframe>
    </div>
  );
}
