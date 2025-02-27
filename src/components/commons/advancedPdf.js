import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { fetchLocalLogoAsBase64, fetchLogoAsBase64 } from '../../utils/commonFunction';

export const generatePDF = async (widgetData, tableData, filters = []) => {
  if (!widgetData) return;

  const {
    pdfTheme,
    printPDFIn,
    pdfTableFontSize,
    pdfTableheaderBarColor,
    pdfTableheadingFontColour,
    showFilterDetailsInPDF,
    isReportPrintDateRequired,
    isDirectDownloadRequired,
    rptDisplayName,
    isPdfHeaderReqInAllPages
  } = widgetData;

  const orientation = printPDFIn === 'Landscape' ? 'l' : 'p';
  const pdf = new jsPDF(orientation, 'mm', 'a4');

  const pageWidth = pdf.internal.pageSize.getWidth();
  const logoBase64 = await fetchLocalLogoAsBase64("/pdfIcon.jpeg");
  console.log(logoBase64, 'logo')

  // Function to draw the header
  const drawHeader = (doc, title) => {

    if (logoBase64) {
      const logoWidth = 15;
      const logoHeight = 18;
      const logoX = 40;
      const logoY = 10;

      doc.addImage(logoBase64, 'JPEG', logoX, logoY, logoWidth, logoHeight);
    }

    doc.setFontSize(12);
    doc.setFont('bold');
    doc.text('Ministry of Health & Family Welfare', pageWidth / 2, 15, { align: 'center' });
    doc.text('Government of India', pageWidth / 2, 20, { align: 'center' });
    doc.text('DVDMS Central Dashboard', pageWidth / 2, 25, { align: 'center' });

    // rptDisplayName (Dynamic Title Below Static Header)
    doc.setFontSize(11);
    doc.setFont('bold');
    doc.text(rptDisplayName || 'Report', pageWidth / 2, 35, { align: 'center' });
  };

  // Initial Header Drawing for First Page
  drawHeader(pdf);

  let yPosition = 45;

  // Filters Section
  if (showFilterDetailsInPDF === 'Yes' && filters.length) {
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Filters Applied:', 14, yPosition);
    yPosition += 5;
    filters.forEach((filter) => {
      pdf.text(`${filter.label}: ${filter.value}`, 14, yPosition);
      yPosition += 5;
    });
    yPosition += 5;
  }

  // Prepare headers for autoTable
  const headers = Object.keys(tableData[0] || {}).map((key) => ({
    header: key.toUpperCase(),
    dataKey: key
  }));

  pdf.autoTable({
    startY: yPosition,
    head: [headers.map((h) => h.header)],
    body: tableData.map((row) => headers.map((h) => row[h.dataKey])),
    theme: ['grid', 'striped', 'plain'].includes(pdfTheme) ? pdfTheme : 'striped',
    headStyles: {
      fillColor: pdfTableheaderBarColor || "#000000",
      textColor: pdfTableheadingFontColour || '#ffffff',
      fontSize: parseInt(pdfTableFontSize) || 10
    },
    bodyStyles: {
      fontSize: parseInt(pdfTableFontSize) || 10
    },
    styles: {
      overflow: 'linebreak',
    },
    margin: { top: isPdfHeaderReqInAllPages === 'Yes' ? 50 : 10, left: 5, right: 5 },
    didDrawPage: (data) => {
      const pageNumber = data.pageNumber;

      if (pageNumber === 1 || isPdfHeaderReqInAllPages === 'Yes') {
        drawHeader(pdf);
      }

      // Print Date in Bottom Right Corner (on every page if required)
      if (isReportPrintDateRequired === 'Yes') {
        pdf.setFontSize(10);
        const reportDate = `Print Date: ${new Date().toLocaleDateString()}`;
        const textWidth = pdf.getTextWidth(reportDate);
        pdf.text(reportDate, pageWidth - textWidth - 10, pdf.internal.pageSize.getHeight() - 10);
      }
    }
  });

  if (isDirectDownloadRequired === 'Yes') {
    pdf.save(`${rptDisplayName || 'report'}.pdf`);
  } else {
    pdf.output('dataurlnewwindow');
  }
};
