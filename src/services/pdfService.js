import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export async function exportCVToPDF(elementId, fileName = "meu-cv") {
  const element = document.getElementById(elementId);
  if (!element) throw new Error("Área do CV não encontrada.");

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
    logging: false
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 8;
  const contentWidth = pageWidth - margin * 2;
  const ratio = contentWidth / canvas.width;
  const contentHeight = canvas.height * ratio;

  if (contentHeight <= pageHeight - margin * 2) {
    pdf.addImage(imgData, "PNG", margin, margin, contentWidth, contentHeight);
  } else {
    let sourceY = 0;
    const pageContentHeightPx = (pageHeight - margin * 2) / ratio;
    while (sourceY < canvas.height) {
      const sliceHeight = Math.min(pageContentHeightPx, canvas.height - sourceY);
      const pageCanvas = document.createElement("canvas");
      pageCanvas.width = canvas.width;
      pageCanvas.height = sliceHeight;
      const ctx = pageCanvas.getContext("2d");
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
      ctx.drawImage(canvas, 0, sourceY, canvas.width, sliceHeight, 0, 0, canvas.width, sliceHeight);
      const pageImg = pageCanvas.toDataURL("image/png");
      pdf.addImage(pageImg, "PNG", margin, margin, contentWidth, sliceHeight * ratio);
      sourceY += sliceHeight;
      if (sourceY < canvas.height) pdf.addPage();
    }
  }

  pdf.save(`${fileName.replace(/\s+/g, "-").toLowerCase()}.pdf`);
}