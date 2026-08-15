from pathlib import Path
import re
base=Path('src/lib/roadmap-content/extra')
formats={
'data-engineer.ts':['grain memo, schema sketch, and reconciliation notebook','run ledger, rejected-row bundle, and replay transcript','event-window specification and replay experiment report','architecture review board and cost sensitivity worksheet','catalog entry, lineage map, and incident communication'],
'database-administrator.ts':['migration set, invariant test suite, and transaction trace','recovery evidence log and executive gap memo','query-plan comparison and rollback SQL card','access matrix and denied-action test transcript','incident timeline and diagnostic query cards'],
'machine-learning-engineer.ts':['experiment brief, threshold table, and error gallery','feature lineage notebook and parity test','experiment poster and uncertainty examples','API contract, load-test report, and canary transcript','model card, alert triage sheet, and retraining memo'],
'solutions-architect.ts':['discovery packet and quality-attribute scenario set','landing-zone decision matrix and cost sensitivity sheet','contract examples and failure sequence diagrams','threat-model workshop record and control matrix','executive brief, ADR, and support handoff'],
'network-administrator.ts':['annotated packet captures and fault-isolation worksheet','topology board, verification transcript, and change ticket','firewall test matrix and restored configuration','service catalog, recovery cards, and outage chronology','incident timeline, stakeholder updates, and evidence bundle'],
'it-support-specialist.ts':['intake transcripts, decision trees, and closure notes','provisioning card, inventory output, and recovery report','access decision cards and anonymized case resolutions','field-support command cards and fault reports','fixture tests, redacted sample output, and knowledge article'],
'operations-analyst.ts':['observation notes, swim lanes, and operator feedback','metric dictionary, annotated charts, and action decisions','scenario workbook, staffing roster, and recommendation letter','PDSA poster and revised standard work','control register, sample audit, and corrective-action letter'],
'financial-analyst.ts':['assumption ledger, scenario bridge, and board decision note','close checklist, P&L bridge, and cash narrative','investment committee memo and red-team critique','forecast-error diary and treasury decision brief','risk-control matrix, sample tests, and exception letters'],
'supply-chain-coordinator.ts':['exception-led planning book and supplier call sheet','ABC/XYZ analysis, count calendar, and variance case files','supplier call agenda, scorecard, and shortage escalation','bottleneck storyboard, slotting trial, and standard-work card','trace table, containment notice, and CAPA review'],
'healthcare-administrator.ts':['patient-journey map, huddle card, and scheduling experiment','denial taxonomy, root-cause cases, and compliant action brief','data-flow map, breach tabletop record, and training tracker','cause map, run chart, safety brief, and PDSA review','scenario workbook, manager briefing, and labor-risk plan'],
'hr-people-operations-specialist.ts':['service blueprint, RACI, message set, and exception notes','field dictionary, access matrix, correction case, and headcount brief','triage notes, interview plan, evidence index, and closure communication','expectation rubric, role-play scripts, and calibration findings','insight memo, annotated visuals, and experiment card'],
'project-coordinator.ts':['one-page brief, dependency map, roster, and acceptance rubric','meeting artifacts, blocker escalations, and closeout report','risk register, contingency scripts, and tabletop notes','procurement cards, capacity map, and variance letter','stakeholder map, update pack, decision record, and closeout summary'],
'technical-writer.ts':['audience matrix, task inventory, sitemap, and usability findings','quickstart, OpenAPI reference, and error cookbook','task procedure, verification queries, and test transcript','contribution guide, templates, CI checks, and reviewed PRs','before/after pages, glossary, accessibility findings, and quality rubric']}
for fn,fs in formats.items():
 p=base/fn; text=p.read_text(); matches=list(re.finditer(r'    \{\n      id: "[^"]+",',text))
 for i,m in enumerate(matches):
  start=m.start(); end=(matches[i+1].start() if i+1<len(matches) else text.find('\n    },\n  ],',start)); seg=text[start:end]
  seg=re.sub(r'      project:\n        "[\s\S]*?",','      project:\n        "Complete the scenario as a '+fs[i]+'; make assumptions, decisions, and verification evidence explicit.",',seg,count=1)
  text=text[:start]+seg+text[end:]
 p.write_text(text)
