import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { default as react, default as React } from "react";
const GenaratePdf = () => {
  const printRef = react.useRef();

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleDownloadPdf}>
        Download as PDF
      </button>

      <div>I will not be in the PDF.</div>
      <div ref={printRef}></div>
    </div>
  );
};
export default GenaratePdf;
