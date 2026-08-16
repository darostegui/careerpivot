import os
import re
import markdown
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.colors import HexColor
from xml.sax.saxutils import escape

def generate_pdf():
    # Setup styles
    styles = getSampleStyleSheet()
    
    # Custom colors matching the brand
    emerald_600 = HexColor("#059669")
    zinc_900 = HexColor("#18181b")
    zinc_600 = HexColor("#52525b")

    # Define custom styles
    title_style = ParagraphStyle(
        'CoverTitle',
        parent=styles['Heading1'],
        fontSize=42,
        leading=50,
        textColor=HexColor("#ffffff"),
        spaceAfter=30,
        alignment=0, # Left align
        fontName='Helvetica-Bold'
    )
    
    subtitle_style = ParagraphStyle(
        'CoverSubtitle',
        parent=styles['Normal'],
        fontSize=16,
        leading=22,
        textColor=HexColor("#ffffff"),
        spaceAfter=10,
        fontName='Helvetica'
    )

    h1_style = ParagraphStyle(
        'CustomH1',
        parent=styles['Heading1'],
        fontSize=24,
        leading=30,
        textColor=emerald_600,
        spaceBefore=30,
        spaceAfter=15,
        fontName='Helvetica-Bold'
    )

    h2_style = ParagraphStyle(
        'CustomH2',
        parent=styles['Heading2'],
        fontSize=18,
        leading=24,
        textColor=zinc_900,
        spaceBefore=20,
        spaceAfter=10,
        fontName='Helvetica-Bold'
    )
    
    h3_style = ParagraphStyle(
        'CustomH3',
        parent=styles['Heading3'],
        fontSize=14,
        leading=18,
        textColor=zinc_900,
        spaceBefore=15,
        spaceAfter=8,
        fontName='Helvetica-Bold'
    )

    p_style = ParagraphStyle(
        'CustomP',
        parent=styles['Normal'],
        fontSize=11,
        leading=16,
        textColor=zinc_600,
        spaceBefore=0,
        spaceAfter=12,
        fontName='Helvetica'
    )
    
    list_style = ParagraphStyle(
        'CustomList',
        parent=p_style,
        leftIndent=20,
        firstLineIndent=-10,
    )

    def cover_page(canvas, doc):
        canvas.saveState()
        canvas.setFillColor(emerald_600)
        canvas.rect(0, 0, A4[0], A4[1], fill=True, stroke=False)
        canvas.restoreState()

    def normal_page(canvas, doc):
        canvas.saveState()
        # Add footer
        canvas.setStrokeColor(HexColor("#e4e4e7"))
        canvas.setLineWidth(1)
        canvas.line(50, 50, A4[0] - 50, 50)
        
        canvas.setFont('Helvetica', 9)
        canvas.setFillColor(zinc_600)
        canvas.drawString(50, 35, "CareerPivot.me - The 30-Day Tech Pivot Playbook")
        canvas.drawRightString(A4[0] - 50, 35, f"Page {doc.page}")
        canvas.restoreState()

    output_path = os.path.join(os.getcwd(), 'public', 'downloads', '30-Day-Tech-Pivot-Playbook.pdf')
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        rightMargin=50,
        leftMargin=50,
        topMargin=50,
        bottomMargin=70
    )

    story = []

    # --- Cover Page ---
    story.append(Spacer(1, 150))
    story.append(Paragraph("THE 30-DAY<br/>TECH PIVOT<br/>PLAYBOOK", title_style))
    story.append(Spacer(1, 50))
    story.append(Paragraph("A step-by-step guide to translating your past experience into a thriving future in tech.", subtitle_style))
    story.append(Spacer(1, 200))
    story.append(Paragraph("Presented by CareerPivot.me", subtitle_style))
    story.append(PageBreak())

    # --- Content ---
    content_dir = os.path.join(os.getcwd(), 'pdf_content')
    
    # Process files in order
    chapters = ['ch1.md', 'ch2.md', 'ch3.md', 'ch4.md']
    
    for chapter in chapters:
        filepath = os.path.join(content_dir, chapter)
        if not os.path.exists(filepath):
            continue
            
        with open(filepath, 'r', encoding='utf-8') as f:
            md_text = f.read()
            
        # Basic Markdown Parsing
        lines = md_text.split('\n')
        in_list = False
        
        for line in lines:
            line = line.strip()
            if not line:
                continue
                
            # Handle headers
            if line.startswith('# '):
                text = line[2:]
                story.append(Paragraph(escape(text), h1_style))
            elif line.startswith('## '):
                text = line[3:]
                story.append(Paragraph(escape(text), h2_style))
            elif line.startswith('### '):
                text = line[4:]
                story.append(Paragraph(escape(text), h3_style))
            elif line.startswith('- ') or line.startswith('* '):
                text = line[2:]
                # Bold parsing for list items
                text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', escape(text))
                story.append(Paragraph(f"• {text}", list_style))
            else:
                # Normal paragraph
                # Parse bold
                escaped_line = escape(line)
                escaped_line = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', escaped_line)
                escaped_line = re.sub(r'\*(.*?)\*', r'<i>\1</i>', escaped_line)
                story.append(Paragraph(escaped_line, p_style))
                
        story.append(PageBreak())

    # Build the document
    doc.build(story, onFirstPage=cover_page, onLaterPages=normal_page)
    print(f"PDF generated successfully at {output_path}")

if __name__ == '__main__':
    generate_pdf()
