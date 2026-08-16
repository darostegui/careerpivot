import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";

async function generatePlaybook() {
  // Create a new A4 document
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4",
  });

  const margin = 50;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const contentWidth = pageWidth - margin * 2;
  
  let y = margin;

  // Helper to add text with wrapping and auto-pagination
  function addText(text: string, size: number, color: [number, number, number], fontStyle: "normal" | "bold" = "normal", gap = 15) {
    doc.setFontSize(size);
    doc.setTextColor(...color);
    doc.setFont("helvetica", fontStyle);
    
    const lines = doc.splitTextToSize(text, contentWidth) as string[];
    
    // Check if we need a new page
    if (y + lines.length * (size + 5) > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
    
    doc.text(lines, margin, y);
    y += lines.length * (size + 5) + gap;
  }

  // --- Cover Page ---
  // Background graphic
  doc.setFillColor(5, 150, 105); // Emerald 600
  doc.rect(0, 0, pageWidth, pageHeight, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(54);
  doc.setFont("helvetica", "bold");
  doc.text("THE 30-DAY", margin, 200);
  doc.text("TECH PIVOT", margin, 260);
  doc.text("PLAYBOOK", margin, 320);

  doc.setFontSize(18);
  doc.setFont("helvetica", "normal");
  doc.text("A step-by-step guide to translating your past", margin, 400);
  doc.text("experience into a thriving future in tech.", margin, 425);

  doc.setFontSize(14);
  doc.text("Presented by CareerPivot.me", margin, pageHeight - 100);
  
  doc.addPage();
  y = margin + 20;

  // --- Content Colors ---
  const h1Color: [number, number, number] = [15, 23, 42]; // Zinc 900
  const h2Color: [number, number, number] = [5, 150, 105]; // Emerald 600
  const bodyColor: [number, number, number] = [71, 85, 105]; // Zinc 600

  // --- Page 1: Introduction ---
  addText("Welcome to the Pivot", 28, h1Color, "bold", 25);
  addText(
    "Transitioning into the technology sector can feel overwhelming. You might think you need to go back to school, spend thousands on a bootcamp, or learn complex programming languages. The truth is, tech companies run on much more than code. They rely on product management, operations, customer success, design, data analysis, and project coordination.", 
    12, bodyColor, "normal", 15
  );
  addText(
    "You already have valuable skills. Your previous career—whether in teaching, retail, nursing, or logistics—has equipped you with stakeholder management, crisis resolution, and communication abilities. This 30-day playbook is designed to help you translate those existing skills, identify your ideal role, and take actionable steps toward your first interview.", 
    12, bodyColor, "normal", 40
  );

  // --- Week 1 ---
  addText("Week 1: Mindset & Translation", 22, h2Color, "bold", 20);
  
  addText("Day 1-3: The Skill Audit", 16, h1Color, "bold", 10);
  addText(
    "Stop thinking about your old job title and start breaking your day-to-day into actions. If you were a teacher, you weren't just 'teaching'—you were managing stakeholders (parents), delivering presentations (classes), and tracking metrics (grades). Write down everything you did.", 
    11, bodyColor, "normal", 15
  );

  addText("Day 4-7: Industry Translation", 16, h1Color, "bold", 10);
  addText(
    "Use a tool like CareerPivot.me to map those skills to tech equivalents. 'Dealing with angry customers' becomes 'Customer Success & De-escalation'. 'Organizing shift schedules' becomes 'Operations Management'. Update your LinkedIn headline to reflect the role you want, not the role you had.", 
    11, bodyColor, "normal", 30
  );

  // --- Week 2 ---
  addText("Week 2: The Resume Teardown", 22, h2Color, "bold", 20);
  
  addText("Day 8-10: Ditch the Responsibilities", 16, h1Color, "bold", 10);
  addText(
    "Tech resumes are evaluated on outcomes, not responsibilities. Rewrite your bullet points using the XYZ formula: 'Accomplished [X] as measured by [Y], by doing [Z].' Focus entirely on impact, efficiency, and scale.", 
    11, bodyColor, "normal", 15
  );

  addText("Day 11-14: The Custom Cover Letter", 16, h1Color, "bold", 10);
  addText(
    "Your pivot is not a weakness; it is your strongest asset. In your cover letter, explicitly call out your unique background. Explain how your perspective outside the industry gives you a deeper empathy for the end-user. Confidence is key.", 
    11, bodyColor, "normal", 40
  );

  // --- Week 3 ---
  addText("Week 3: Evidence & Execution", 22, h2Color, "bold", 20);
  
  addText("Day 15-18: Build a Portfolio Project", 16, h1Color, "bold", 10);
  addText(
    "You don't need permission to do the job. Pick a product you use every day, identify a flaw, and write a 2-page brief on how you would fix it. Or, use a free tool like Figma to redesign a screen. The goal is to prove you can do the work, regardless of your past title.", 
    11, bodyColor, "normal", 15
  );

  addText("Day 19-21: The Cold Outreach", 16, h1Color, "bold", 10);
  addText(
    "Don't just apply to the black hole of online portals. Find hiring managers on LinkedIn. Send a short, 3-sentence message containing a link to your portfolio project. Tell them you admire their team and ask if they have 10 minutes to review your brief.", 
    11, bodyColor, "normal", 40
  );

  // --- Week 4 ---
  if (y > pageHeight - 150) {
    doc.addPage();
    y = margin;
  }

  addText("Week 4: The Interview Loop", 22, h2Color, "bold", 20);
  
  addText("Day 22-25: The STAR Method", 16, h1Color, "bold", 10);
  addText(
    "Prepare your stories using the Situation, Task, Action, Result framework. Write down 5 versatile stories from your past career that highlight conflict resolution, leadership, failure, and adapting to new technology.", 
    11, bodyColor, "normal", 15
  );

  addText("Day 26-30: Iterate and Apply", 16, h1Color, "bold", 10);
  addText(
    "Treat the application process like a product. A/B test your resume. If you aren't getting interviews, tweak the keywords. If you are failing interviews, practice your STAR stories. Persistence and iteration are the hallmarks of a great tech employee.", 
    11, bodyColor, "normal", 40
  );

  // --- Footer ---
  doc.setLineWidth(1);
  doc.setDrawColor(200, 200, 200);
  doc.line(margin, y, pageWidth - margin, y);
  y += 20;
  
  addText("Ready to get a personalized, interactive roadmap?", 14, h1Color, "bold", 10);
  addText("Upload your resume at CareerPivot.me and let AI map out your exact next steps, completely tailored to your unique background.", 11, bodyColor, "normal", 0);

  // Save the PDF locally
  const outputPath = path.join(process.cwd(), "public", "downloads", "30-Day-Tech-Pivot-Playbook.pdf");
  fs.writeFileSync(outputPath, Buffer.from(doc.output("arraybuffer")));
  
  console.log("PDF generated successfully at:", outputPath);
}

generatePlaybook().catch(console.error);