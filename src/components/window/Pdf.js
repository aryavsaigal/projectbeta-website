import React from "react";

import guidelines_src from "../../PDFs/guidelines.pdf";

// Pdf acts as a placeholder for displaying PDF files

export default function Pdf(props) {
  function setIframe() {
    // Manual switch-case to determine which PDF to display based on the webpage it is opened in
    switch (props.dir) {
      case "Guidelines.pdf": {
        return guidelines_src;
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
