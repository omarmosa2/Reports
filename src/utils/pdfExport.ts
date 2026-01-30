import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import type { Report } from '../data/mockReports'

/**
 * انتظار تحميل الخطوط العربية
 */
function waitForFonts(): Promise<void> {
  return new Promise((resolve) => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        // انتظار إضافي للتأكد من تحميل الخطوط
        setTimeout(resolve, 500)
      })
    } else {
      setTimeout(resolve, 1000)
    }
  })
}

/**
 * إنشاء HTML محسّن للتصدير
 */
function createExportHTML(report: Report): HTMLElement {
  const container = document.createElement('div')
  
  // إضافة style tag للخطوط
  const style = document.createElement('style')
  style.textContent = `
    @font-face {
      font-family: 'Amiri';
      src: url('https://fonts.gstatic.com/s/amiri/v27/J7aRnpd8CGxBHpUrtLMA7w.woff2') format('woff2'),
           url('https://fonts.gstatic.com/s/amiri/v27/J7aRnpd8CGxBHpUgtLM.woff') format('woff');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Amiri';
      src: url('https://fonts.gstatic.com/s/amiri/v27/J7aRnpd8CGxBHpUrSLIA7w.woff2') format('woff2'),
           url('https://fonts.gstatic.com/s/amiri/v27/J7aRnpd8CGxBHpUrSLIA7g.woff') format('woff');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
    * {
      font-family: 'ITF Qomra Arabic', Arial, sans-serif !important;
    }
  `
  container.appendChild(style)
  
  const contentDiv = document.createElement('div')
  contentDiv.style.cssText = `
    direction: rtl;
    font-family: 'ITF Qomra Arabic', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #ffffff;
    color: #000000;
    padding: 40px;
    width: 800px;
    min-height: 1123px; /* A4 height in pixels */
    line-height: 1.8;
    box-sizing: border-box;
  `

  const formattedDate = new Date(report.date).toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  contentDiv.innerHTML = `
    <div style="margin-bottom: 30px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <span style="background: #3b82f6; color: white; padding: 8px 16px; border-radius: 8px; font-weight: bold;">
          ${report.category}
        </span>
        <span style="color: #666;">
          التاريخ: ${formattedDate}
        </span>
      </div>
      <h1 style="font-size: 28px; font-weight: 900; margin-bottom: 20px; color: #000;">
        ${report.title}
      </h1>
      <p style="font-size: 16px; color: #333; margin-bottom: 30px;">
        ${report.description}
      </p>
    </div>

    <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
      <h2 style="font-size: 20px; font-weight: bold; margin-bottom: 15px; color: #000;">
        الملخص التنفيذي
      </h2>
      <p style="font-size: 14px; color: #000; line-height: 1.8;">
        ${report.summary}
      </p>
    </div>

    <div>
      <h2 style="font-size: 22px; font-weight: bold; margin-bottom: 20px; color: #000;">
        أقسام التقرير
      </h2>
      ${report.sections.map((section, index) => `
        <div style="margin-bottom: 25px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <div style="display: flex; align-items: start; gap: 15px;">
            <div style="background: #eff6ff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #3b82f6; flex-shrink: 0;">
              ${index + 1}
            </div>
            <div style="flex: 1;">
              <h3 style="font-size: 18px; font-weight: bold; margin-bottom: 12px; color: #000;">
                ${section.title}
              </h3>
              <div style="font-size: 14px; color: #000; line-height: 1.8; white-space: pre-line;">
                ${section.content}
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `
  
  container.appendChild(contentDiv)
  return container
}

/**
 * تصدير التقرير إلى ملف PDF باستخدام html2canvas لضمان دعم أفضل للغة العربية
 */
export async function exportReportToPDF(report: Report) {
  try {
    // انتظار تحميل الخطوط العربية
    await waitForFonts()

    // إنشاء HTML محسّن للتصدير
    const exportElement = createExportHTML(report)
    
    // إضافة العنصر إلى الصفحة بشكل مخفي
    exportElement.style.position = 'absolute'
    exportElement.style.left = '-9999px'
    exportElement.style.top = '0'
    document.body.appendChild(exportElement)

    // الانتظار قليلاً للتأكد من عرض العنصر وتحمل الخطوط
    await new Promise(resolve => setTimeout(resolve, 500))

    try {
      // التقاط محتوى التقرير كصورة
      const canvas = await html2canvas(exportElement, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        logging: false,
        backgroundColor: '#ffffff',
        width: exportElement.scrollWidth,
        height: exportElement.scrollHeight,
        windowWidth: exportElement.scrollWidth,
        windowHeight: exportElement.scrollHeight,
        onclone: (clonedDoc) => {
          // التأكد من أن الخطوط محملة في المستند المستنسخ
          const clonedContainer = clonedDoc.body.querySelector('div') as HTMLElement
          if (clonedContainer) {
            clonedContainer.style.fontFamily = "'ITF Qomra Arabic', Arial, sans-serif"
            // التأكد من تحميل الخطوط
            const testElement = clonedDoc.createElement('span')
            testElement.style.fontFamily = "'ITF Qomra Arabic'"
            testElement.textContent = 'اختبار'
            testElement.style.visibility = 'hidden'
            clonedDoc.body.appendChild(testElement)
          }
        }
      })

      // إزالة العنصر المؤقت
      document.body.removeChild(exportElement)

      const imgData = canvas.toDataURL('image/png', 1.0)
      const imgWidth = 210 // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      const pdf = new jsPDF('p', 'mm', 'a4')
      const pageHeight = pdf.internal.pageSize.getHeight()
      
      let heightLeft = imgHeight
      let position = 0

      // إضافة الصورة الأولى
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST')
      heightLeft -= pageHeight

      // إضافة صفحات إضافية إذا لزم الأمر
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST')
        heightLeft -= pageHeight
      }

      const fileName = `${report.title.replace(/[^\w\s-]/g, '').substring(0, 50)}.pdf`
      pdf.save(fileName)
    } catch (error) {
      // إزالة العنصر المؤقت في حالة الخطأ
      if (document.body.contains(exportElement)) {
        document.body.removeChild(exportElement)
      }
      throw error
    }
  } catch (error) {
    console.error('خطأ في تصدير PDF باستخدام html2canvas:', error)
    // في حالة الفشل، استخدم الطريقة البديلة
    exportReportToPDFFromData(report)
  }
}

/**
 * طريقة بديلة لتصدير PDF من البيانات مباشرة (للاستخدام كنسخة احتياطية)
 */
function exportReportToPDFFromData(report: Report) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  })
  
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20
  const maxWidth = pageWidth - 2 * margin
  let yPosition = margin

  // دالة مساعدة لإضافة نص متعدد الأسطر
  const addText = (text: string, fontSize: number, isBold = false, color?: [number, number, number]) => {
    doc.setFontSize(fontSize)
    if (isBold) {
      doc.setFont('helvetica', 'bold')
    } else {
      doc.setFont('helvetica', 'normal')
    }
    
    if (color) {
      doc.setTextColor(color[0], color[1], color[2])
    } else {
      doc.setTextColor(0, 0, 0)
    }

    const lines = doc.splitTextToSize(text, maxWidth)
    
    // التحقق من الحاجة لصفحة جديدة
    if (yPosition + (lines.length * (fontSize * 0.5)) > pageHeight - margin) {
      doc.addPage()
      yPosition = margin
    }

    doc.text(lines, margin, yPosition, {
      align: 'right',
      maxWidth: maxWidth
    })
    
    yPosition += lines.length * (fontSize * 0.5) + 5
    return yPosition
  }

  // العنوان الرئيسي
  yPosition = addText(report.title, 16, true, [0, 0, 0])
  yPosition += 5

  // معلومات التقرير
  doc.setFontSize(10)
  doc.setTextColor(100, 100, 100)
  const dateStr = new Date(report.date).toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  doc.text(`التاريخ: ${dateStr}`, margin, yPosition, { align: 'right' })
  yPosition += 8
  
  doc.setTextColor(0, 0, 0)
  doc.text(`الفئة: ${report.category}`, margin, yPosition, { align: 'right' })
  yPosition += 10

  // خط فاصل
  doc.setDrawColor(200, 200, 200)
  doc.line(margin, yPosition, pageWidth - margin, yPosition)
  yPosition += 10

  // الوصف
  yPosition = addText('الوصف:', 14, true)
  yPosition = addText(report.description, 11, false)
  yPosition += 5

  // الملخص التنفيذي
  yPosition = addText('الملخص التنفيذي:', 14, true)
  doc.setFillColor(240, 240, 240)
  doc.roundedRect(margin, yPosition - 8, maxWidth, 20, 3, 3, 'F')
  yPosition = addText(report.summary, 11, false)
  yPosition += 10

  // أقسام التقرير
  yPosition = addText('أقسام التقرير:', 14, true)
  yPosition += 5

  report.sections.forEach((section, index) => {
    // التحقق من الحاجة لصفحة جديدة
    if (yPosition + 30 > pageHeight - margin) {
      doc.addPage()
      yPosition = margin
    }

    // عنوان القسم
    yPosition = addText(`${index + 1}. ${section.title}`, 12, true, [30, 100, 200])
    yPosition += 2

    // محتوى القسم
    const contentLines = section.content.split('\n').filter(line => line.trim())
    contentLines.forEach(line => {
      if (line.trim()) {
        yPosition = addText(line.trim(), 10, false)
      }
    })
    
    yPosition += 8
  })

  // تذييل الصفحة
  const totalPages = doc.getNumberOfPages()
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.setTextColor(150, 150, 150)
    doc.text(
      `صفحة ${i} من ${totalPages}`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    )
  }

  // حفظ الملف
  const fileName = `${report.title.replace(/[^\w\s-]/g, '').substring(0, 50)}.pdf`
  doc.save(fileName)
}
