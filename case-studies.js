/* Case studies shown on the portfolio.
   To add a new one, append an object with the same fields to this list. */
window.CASE_STUDIES = [
 {
  "slug": "kpi",
  "title": "Salarpur Nigrani Darpan",
  "fullTitle": "Mapping Focus Areas for Actionable Block-Level Strategy: A Gram Panchayat-Level KPI Monitoring Tool",
  "subtitle": "A village-council-level monitoring and prioritisation tool for Salarpur Block, Budaun",
  "card": "A Gram Panchayat-level map of 22 indicators from my own field visits, where opacity shows how many visits sit behind each reading, so thin data is never mistaken for a result.",
  "methods": [
   "Information design",
   "Field investigation",
   "Data reconciliation"
  ],
  "when": "Aug 2023 – present",
  "cover": "img/kpi-1.jpg",
  "live": [
   "Open the live map",
   "https://ms221088.github.io/Salarpur_KPI_maps/"
  ],
  "sections": [
   {
    "title": "Quick Summary",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Salarpur block is tracked on 22 indicators across health, ICDS (Integrated Child Development Services, India's programme for child nutrition and pre-school care) and basic infrastructure. My data comes from random-sample field visits I have recorded on the AB (Aspirational Blocks) Monitoring Portal since August 2023. The goal was to show, for each Gram Panchayat (GP), exactly where to focus limited attention and resources, which no existing health department portal does at GP level. The tool has two views: a GP heat map, where the fill's opacity shows how many visits a reading is based on, so thin data isn't mistaken for a real result; and a ranked table of the most critical GPs, for deciding where to act first. The block's health managers use it to find focus areas, as do the UNICEF team, NGOs visiting families of children who have missed all vaccines, and the officers who run ICDS in the block. It has already led to concrete root-cause findings in the field, and to one decision to drop an unreliable indicator."
     },
     {
      "k": "img",
      "src": "img/kpi-1.jpg",
      "cap": "Checking a child’s recorded height at an Anganwadi centre during a monitoring visit",
      "w": 1600,
      "h": 2133
     },
     {
      "k": "img",
      "src": "img/kpi-2.jpg",
      "cap": "Measuring an infant’s length with the Anganwadi worker, to check measurement accuracy",
      "w": 1600,
      "h": 1200
     },
     {
      "k": "p",
      "html": "Method: I analysed trends per GP in my AB Monitoring Portal field-visit data (August 2023 onward), cross-checked against official Panchayati Raj and health department records, then went to the hotspots the map surfaced to investigate in person. I built the web pages and cleaned the data using Claude, an AI assistant, working on problems and requirements I had identified in my own fieldwork."
     },
     {
      "k": "p",
      "html": "<a href=\"https://ms221088.github.io/Salarpur_KPI_maps/\" target=\"_blank\" rel=\"noopener\">View the live map: ms221088.github.io/Salarpur_KPI_maps</a>"
     },
     {
      "k": "img",
      "src": "img/kpi-3.jpg",
      "cap": "",
      "w": 1427,
      "h": 1071
     }
    ]
   },
   {
    "title": "End Users — Goals, Needs, Details",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "BCPM (Block Community Process Manager), BPM (Block Programme Manager) and MOIC (Medical Officer In-Charge, the doctor heading the block's health services) — need to see quickly which of 77 GPs need attention on which of 22 indicators.",
       "UNICEF field team — needs a shared, credible view of the block's health and nutrition gaps for its own reviews.",
       "NGOs visiting families of zero-dose children (children who have missed all routine vaccines) — need to know which villages to prioritise for counselling visits.",
       "ICDS Supervisor and CDPO (Child Development Project Officer, head of ICDS in the block) — need GP-level visibility of ICDS indicators: nutrition, growth measurement and the facilities at Anganwadi Centres (AWCs), the village centres for child nutrition and pre-school care.",
       "Me — the main user, for my own field monitoring, analysis and reporting."
      ]
     }
    ]
   },
   {
    "title": "Methodology",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "My data comes from random-sample field visits, recorded on the AB Monitoring Portal since August 2023. It is a sample, not a census, so the number of visits varies across GPs and indicators. Building the map meant reconciling two structures that don't match: GP and hamlet boundaries (from Panchayati Raj and health department records), and the health department's reporting units, where each GP is served by one or more ASHAs (village health workers) depending on population. An ASHA's area doesn't line up neatly with GP boundaries. GP names were also spelled differently, and sometimes written in different languages, in the map and in the monitoring data; I reconciled them while cleaning the data, using Claude."
     }
    ]
   },
   {
    "title": "Collected Data",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "22 indicators across three themes: health and nutrition, ICDS, and basic infrastructure (including sub-indicators for antenatal check-ups).",
       "All 77 Gram Panchayats of Salarpur block.",
       "Visits per GP, used as the confidence signal behind each reading.",
       "Data from August 2023 to the present, viewable as an all-time figure or by quarter."
      ]
     }
    ]
   },
   {
    "title": "Synthesis",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "I built two views from the same data, for two ways of using it:"
     },
     {
      "k": "ul",
      "items": [
       "A GP heat map, where colour shows the indicator's rate and opacity shows the number of visits, so a strong reading built on very few visits looks different from the same reading built on many. I had raised the concern that a 100% reading from a barely-visited GP needed checking, not celebrating. Claude suggested showing confidence as opacity; I judged that it solved the actual problem and directed the implementation from there.",
       "A ranked table listing the most critical GPs first. A heat map is good for a visual scan, but a prioritised list is what you need to decide where to act first."
      ]
     },
     {
      "k": "p",
      "html": "The map uses quarterly weighted averages rather than raw monthly figures, matching how planning reviews actually use the data."
     },
     {
      "k": "img",
      "src": "img/kpi-4.jpg",
      "cap": "Same rate, different visit counts — opacity shows which reading to trust",
      "w": 707,
      "h": 463
     },
     {
      "k": "img",
      "src": "img/kpi-5.jpg",
      "cap": "Priority list tab — GPs ranked most-critical first (KPI 1.1, all-time). Beneficiary-level columns hidden for privacy.",
      "w": 1600,
      "h": 1461
     }
    ]
   },
   {
    "title": "Findings",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Urine tests at antenatal check-ups: the map flagged Sikrodi village as a low-completion hotspot. When I investigated, I found the cause: check-ups there happen at the ASHA's home, and pregnant women aren't allowed to use her toilet, so no urine sample can be collected on the spot."
      ]
     },
     {
      "k": "img",
      "src": "img/kpi-6.jpg",
      "cap": "Sikrodi on KPI 1.15(b) urine test, Q2 2026 — urine test done in 2 of 5 monitored ANC cases (40%)",
      "w": 1008,
      "h": 1010
     },
     {
      "k": "ul",
      "items": [
       "Institutional delivery (births in a hospital or health centre rather than at home): hotspots of home births traced back to villages with especially active, trusted dais (traditional birth attendants). That's a trust and behaviour factor the numbers alone would never have shown."
      ]
     },
     {
      "k": "img",
      "src": "img/kpi-7.jpg",
      "cap": "KPI 1.2 institutional delivery, all-time — red and brown GPs mark the home-delivery hotspots",
      "w": 1600,
      "h": 1190
     },
     {
      "k": "ul",
      "items": [
       "Data integrity: the ODF+ indicator (villages that are free of open defecation and keep up sanitation) relied on a self-reported list of families without toilets. I cross-checked it with the Panchayati Raj department through the CDO (Chief Development Officer, the senior development official in the district), Budaun. Of 60 listed families, only 29 were actually still eligible; the rest had already received toilets."
      ]
     }
    ]
   },
   {
    "title": "Solution Space",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "I built the map as an SVG in Inkscape, not because that's the standard GIS approach, but because SVG was a format I already knew and could map data onto directly. I had no GIS background, so I learned to trace GP and hamlet boundaries from YouTube tutorials instead of adopting dedicated GIS software. I kept both the heat map and the ranked table rather than choosing one, because they serve different moments: the map for spotting spatial patterns, the table for deciding what to do first."
     }
    ]
   },
   {
    "title": "Outcome",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "The map is in active use by the BCPM, BPM, MOIC, the UNICEF team, the ICDS Supervisor and CDPO, and NGOs working with zero-dose children, each to target their own focus areas. It has led to field investigations that uncovered specific, non-obvious root causes (Sikrodi, and the dais), and to one data correction: I removed the ODF+ indicator after checking showed its underlying data was largely unreliable."
     }
    ]
   },
   {
    "title": "Before and After: Measuring Change",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "A District Development Officer asked whether the map could show before and after. A quarter-by-quarter comparison would mostly show noise, because most GPs get only one to four visits a quarter. So I used <em>rounds</em> instead: a round ends when at least 95% of the block's GPs have been visited. Round 1 ran from Aug 2023 to Dec 2024 (74 of 77 GPs), round 2 from Jan 2025 to Sep 2026 (75 of 77)."
     },
     {
      "k": "img",
      "src": "img/kpi-8.jpg",
      "cap": "Indicator 1.1 (first-trimester ANC registration), round 1 vs round 2, on the same colour scale. Faint colour means few visits."
     },
     {
      "k": "p",
      "html": "The new tab shows the two maps side by side, a change map that colours a GP only where both rounds have at least three people (the rest are marked as not enough data), a block-level graph of every indicator with its numerator and denominator, and an Excel export. Improvements at block level between the two rounds:"
     },
     {
      "k": "ul",
      "items": [
       "Iron-folic acid tablets during ANC (my own proxy indicator): 68.8% → 97.1% (+28.3 percentage points)",
       "At least 4 ANC check-ups: 58.9% → 77.6% (+18.6)",
       "Working household tap connections: 4.2% → 22.9% (+18.7)",
       "Diabetes screening: 14.0% → 29.0% (+15.1); monitored only from 2024, so round 1 covers fewer GPs",
       "First-trimester ANC registration: 34.7% → 44.8% (+10.1)",
       "Supplementary nutrition for children aged 6 months to 6 years: 59.4% → 69.4% (+10.0)"
      ]
     },
     {
      "k": "img",
      "src": "img/kpi-9.jpg",
      "cap": "Every indicator at block level: hollow dot = round 1, filled dot = round 2. Falls are shown as openly as gains."
     },
     {
      "k": "p",
      "html": "Building it forced two honesty checks. Supplementary nutrition for pregnant women seemed to fall sharply, but the drop was a single step in April 2024, when I had changed the question from &ldquo;got enough&rdquo; to &ldquo;got it at least four times&rdquo;. I now leave the earlier quarters out of every comparison. A dip in Jul&ndash;Dec 2025 lined up with the start of the Face Recognition System for take-home ration, so I marked that date on the trend charts instead of letting it read as a failure of the programme."
     },
     {
      "k": "p",
      "html": "I also removed beneficiary names from the public site. The priority list now shows each village once, with its gaps and the number of people, and merges the many spellings of the same village (301 spellings became 181). Names stay with the departments that need them for follow-up."
     }
    ]
   },
   {
    "title": "Impact on End Users & Administration",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Different departments and organisations now share one GP-level reference for where to focus, instead of each working from raw, unranked data or none at all. Some official systems do map at village level, for example the Jal Jeevan Mission's tap-coverage dashboards, but none I use brings the block's UP ABP+ indicators together at GP level, built from verified field visits and with a visible cue for how reliable each reading is. That is the gap this tool fills: the level where root causes like Sikrodi's become visible and actionable."
     }
    ]
   },
   {
    "title": "What I Learned",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "A strong-looking number built on thin data is a signal to check, not a result to trust. That idea shaped the whole confidence encoding.",
       "Self-reported data needs independent checking before it's shown as fact. The ODF+ case (60 listed, 29 eligible) showed how far off it can be.",
       "Administrative and departmental boundaries don't automatically line up (GP boundaries versus ASHA areas). Reconciling them is groundwork, not a side detail."
      ]
     }
    ]
   },
   {
    "title": "Challenges & How I Overcame Them",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "No GIS background: I taught myself to trace boundaries in Inkscape from YouTube tutorials, and chose SVG because I could already work with it and map data onto it directly.",
       "GP and hamlet boundaries didn't match the health department's ASHA-based reporting units: I reconciled them through careful data mapping.",
       "GP names were spelled differently, or written in different languages, in the map and the monitoring data: I cleaned and matched them using Claude.",
       "Boundary and naming errors in the base map: I corrected them over many rounds (up to version 20) by cross-checking village, hamlet and sub-village lists I got directly from the Panchayati Raj and health departments."
      ]
     }
    ]
   },
   {
    "title": "What I Would Do Differently",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "I'd keep the same tool choice; SVG in Inkscape is still the right fit because it maps so directly to data. Two additions I had planned are now live: a Monitoring trends tab with each indicator's quarterly trend, and a Before vs after tab (above). Next, I would agree the questions and definitions with departments before monitoring starts, so that no indicator needs to be cut from a comparison later."
     }
    ]
   }
  ],
  "glossary": [
   "<strong>Gram Panchayat (GP)</strong> — an elected village council, the smallest unit of local government. Salarpur block has 77. <a href=\"https://en.wikipedia.org/wiki/Gram_panchayat\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Block (Vikas Khand)</strong> — the administrative level below a district. <a href=\"https://en.wikipedia.org/wiki/Community_development_block_in_India\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Hamlet (majra)</strong> — a small settlement that belongs to a larger village or Gram Panchayat.",
   "<strong>UP ABP+ (Uttar Pradesh Aspirational Blocks Programme)</strong> — the state programme, run by the Planning Department, that tracks 108 lagging blocks on 50 development indicators. <a href=\"https://epariyojana.up.gov.in/TABP/OrderGOs.aspx\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>AB Monitoring Portal</strong> — the Planning Department's portal where CM Fellows record their random-sample monitoring visits in aspirational blocks.",
   "<strong>KPI</strong> — key performance indicator; here, one of the 22 indicators I monitor (for example, the share of pregnant women who register for ANC in the first trimester).",
   "<strong>ICDS (Integrated Child Development Services)</strong> — India's programme for child nutrition, health and pre-school care, delivered through Anganwadi Centres. <a href=\"https://en.wikipedia.org/wiki/Integrated_Child_Development_Services\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Anganwadi Centre (AWC)</strong> — the village centre for child nutrition and pre-school care, run by an Anganwadi worker. <a href=\"https://en.wikipedia.org/wiki/Anganwadi\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>ASHA (Accredited Social Health Activist)</strong> — a village woman trained and paid as the community's link to the health system; one per 1,000 people or so. <a href=\"https://en.wikipedia.org/wiki/Accredited_Social_Health_Activist\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>ANC (antenatal care)</strong> — health check-ups during pregnancy. <a href=\"https://en.wikipedia.org/wiki/Prenatal_care\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>BCPM (Block Community Process Manager)</strong> — oversees the block's ASHAs and community health activities.",
   "<strong>BPM (Block Programme Manager)</strong> — manages the block's National Health Mission programmes and data. <a href=\"https://en.wikipedia.org/wiki/National_Health_Mission\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>MOIC (Medical Officer In-Charge)</strong> — the doctor who heads the block's government health services.",
   "<strong>CDPO (Child Development Project Officer)</strong> — the officer who heads ICDS in the block.",
   "<strong>ICDS Supervisor</strong> — supervises a group of Anganwadi Centres.",
   "<strong>CDO (Chief Development Officer)</strong> — the senior official in charge of development programmes across the district.",
   "<strong>Panchayati Raj department</strong> — the state department responsible for Gram Panchayats and village local government. <a href=\"https://en.wikipedia.org/wiki/Panchayati_raj_in_India\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>ODF+</strong> — a village status meaning it is free of open defecation and maintains sanitation; it depends on every household having a toilet. <a href=\"https://en.wikipedia.org/wiki/Swachh_Bharat_Mission\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Zero-dose children</strong> — children who have not received any routine vaccines.",
   "<strong>Institutional delivery</strong> — a birth in a hospital or health centre rather than at home.",
   "<strong>Dai</strong> — a traditional birth attendant, usually an older woman in the village with no formal training. <a href=\"https://en.wikipedia.org/wiki/Traditional_birth_attendant\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Poshan Tracker</strong> — the national app Anganwadi workers use to record child nutrition data. <a href=\"https://poshantracker.in/\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>SVG (Scalable Vector Graphics)</strong> — an image format made of shapes that code can colour individually, which is how each GP on my maps is filled with data. <a href=\"https://en.wikipedia.org/wiki/SVG\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Inkscape</strong> — free, open-source drawing software; I used it to trace GP and hamlet boundaries. <a href=\"https://inkscape.org/\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>GIS (Geographic Information System)</strong> — specialist mapping software, such as QGIS or ArcGIS, normally used for maps like these. <a href=\"https://en.wikipedia.org/wiki/Geographic_information_system\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Choropleth map</strong> — a map where areas are shaded by a value, here each GP by its rate. <a href=\"https://en.wikipedia.org/wiki/Choropleth_map\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Round</strong> — one pass of monitoring visits that covers at least 95% of the block's Gram Panchayats.",
   "<strong>Percentage point</strong> — the plain difference between two percentages, e.g. 34.7% to 44.8% is +10.1 percentage points.",
   "<strong>Proxy indicator</strong> — an extra measure I added to track one part of an official KPI, such as whether iron tablets were given during ANC.",
   "<strong>FRS (Face Recognition System)</strong> — the Poshan Tracker step, from mid-2025, that matches a beneficiary's face before take-home ration is handed over.",
   "<strong>Take-home ration (THR)</strong> — packaged supplementary food given by Anganwadi Centres to pregnant and breastfeeding women and young children.",
   "<strong>FHTC (Functional Household Tap Connection)</strong> — a working piped-water tap at home, under the Jal Jeevan Mission."
  ]
 },
 {
  "slug": "madhubani",
  "title": "Madhubani for Maternal Health",
  "fullTitle": "Madhubani for Maternal Health: Improving Early Antenatal Care Registration Through Folk Art and Multi-Pronged Advocacy",
  "subtitle": "A multi-pronged design intervention to get more women registering early for pregnancy check-ups — Salarpur Block, Budaun",
  "card": "Women in Salarpur were registering for pregnancy care months too late, and the official card that explained why went unread. I designed a text-free folk-art message and pushed it through the health system.",
  "methods": [
   "Contextual inquiry",
   "Visual communication",
   "Advocacy"
  ],
  "when": "Campaign Jul–Sep 2024 · tracked to Dec 2025",
  "cover": "img/madhubani-1.jpg",
  "live": null,
  "sections": [
   {
    "title": "Quick Summary",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "I created a Madhubani folk-art design to get more women in Salarpur block to register for antenatal care (ANC) in the first trimester of pregnancy. In Budaun only about 48% of women can read (Census 2011), so text-based awareness material wasn't working. Madhubani, a traditional painting style from Bihar known for bold outlines and story scenes, could carry the message without words. The Health Department adopted the design for banners at Health &amp; Wellness Centres, and it was used to train frontline health workers. It also set off two things I hadn't planned: a fundraiser that led to a district order on buying Anganwadi equipment, and income and recognition for a local embroidery artisan working in Budaun's ODOP (One District One Product) craft. Quarterly monitoring data shows registration rates rose and stayed higher after the rollout, alongside continuous field monitoring and feedback to administrators."
     },
     {
      "k": "p",
      "html": "Method: contextual interviews and observation during my field visits across Salarpur's Gram Panchayats, checked against first-trimester registration trends from the AB (Aspirational Blocks) Monitoring Portal, August 2023–June 2026."
     },
     {
      "k": "img",
      "src": "img/madhubani-1.jpg",
      "cap": "The original Madhubani design",
      "w": 1600,
      "h": 1134
     }
    ]
   },
   {
    "title": "End Users — Goals, Needs, Details",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Primary end users: newly married couples, families expecting a child, families with only daughters or only sons, families with a history of miscarriage, and low-income, low-literacy and SC (Scheduled Caste) households across Salarpur's Gram Panchayats. The key constraint: female literacy in Budaun was about 48% (Census 2011), so text-based IEC (information, education and communication) material couldn't reach a large share of the audience. I chose a visual, story-based folk-art format specifically to get around this."
     },
     {
      "k": "p",
      "html": "Secondary end users (the delivery channel): ASHAs (Accredited Social Health Activists, village health workers), ANMs (Auxiliary Nurse Midwives) and CHOs (Community Health Officers), who needed something they could use at VHND (Village Health &amp; Nutrition Day) sessions to explain things to families face to face."
     },
     {
      "k": "p",
      "html": "Amplification network: community WhatsApp groups of Rozgar Sewaks (village assistants for the rural employment scheme), Panchayat Sahayaks (village council office assistants), government primary-school teachers, Anganwadi workers and helpers, SHG (Self-Help Group) women across various cadres, Pradhans (elected village heads) and Panchayat Sachivs (village council secretaries), Safai Karamcharis (village sanitation workers), farmers' groups run by the agriculture department, and animal-husbandry para-vets. I expected them to forward and discuss the material within their own networks."
     },
     {
      "k": "p",
      "html": "Note: my original design was purely visual and deliberately had no text, to work around the literacy constraint. When the Health Department adopted it for banners, they added a text message to it. That was their adaptation during scale-up, not part of my design decision."
     }
    ]
   },
   {
    "title": "Methodology",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "The starting point was something I saw in the field, not an existing tool; there was no ANC awareness material of any kind in circulation. On visits across Salarpur, I kept meeting pregnant women who had registered only in their 4th, 5th or even 6th month, well past the ideal early window. Some had deliberately waited until the third month because they misunderstood the word \"trimester\"."
     },
     {
      "k": "img",
      "src": "img/madhubani-2.jpg",
      "cap": "A household interview during a monitoring visit: I ask each family a fixed set of questions on pregnancy care, nutrition, water and sanitation",
      "w": 1600,
      "h": 2133
     },
     {
      "k": "p",
      "html": "Information about first-trimester registration did exist. It was printed on a page of the MCP (Mother and Child Protection) card that every pregnant woman receives, but almost nobody read it. That reframed the problem for me: it wasn't missing information, it was a delivery failure, made worse by low literacy, a dense official document and a passive format."
     },
     {
      "k": "img",
      "src": "img/madhubani-3.jpg",
      "cap": "The MCP card page instructing 1st-trimester registration — present, but almost never read",
      "w": 800,
      "h": 528
     },
     {
      "k": "p",
      "html": "The idea of using folk art came from my own interest in art. I had read Arting Science by Bitasta Das, which explores using art to communicate scientific ideas, and I applied the same principle: could a folk-art story make an abstract medical timeline concrete and instantly understandable, without text or medical vocabulary?"
     }
    ]
   },
   {
    "title": "Collected Data",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "From visits and conversations, I identified several reasons behind late registration:"
     },
     {
      "k": "ul",
      "items": [
       "No active door-to-door tracking to find pregnancies early, which also meant untracked women missed folic acid tablets, which matter most in the first trimester.",
       "Stigma and superstition: a belief that announcing a pregnancy early invites the evil eye (nazar), so some families delay.",
       "Women staying at their maayka (parents' home) in early pregnancy, which puts them outside the local health workers' area.",
       "The MCP card's first-trimester information going unread even though it was there."
      ]
     },
     {
      "k": "p",
      "html": "Later, quantitative data from the AB Monitoring Portal (August 2023–June 2026) tracked first-trimester registration continuously, giving me a basis to compare trends before and after the campaign (see Outcome, below)."
     }
    ]
   },
   {
    "title": "Synthesis",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "I ruled out text-based approaches for two reasons: the literacy constraint (48% female literacy), and evidence that even existing text (the MCP card page) wasn't being read. Together with the mix of barriers I found in the field, structural (no tracking), cultural (stigma) and logistical (women away at their maayka), this pointed to an active, standalone, non-text way of communicating: something people would come across and understand on their own, without needing to read a page of a government document."
     }
    ]
   },
   {
    "title": "Findings",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "The core problem was delivery and engagement, not missing content: the information existed but wasn't reaching or resonating with the people it was for.",
       "The barriers had several causes, systemic (no tracking), cultural (stigma and superstition) and logistical (time away from the service area), so no single fix would solve all of them.",
       "I needed a visual, story-based medium that works without literacy to reach the primary audience directly."
      ]
     }
    ]
   },
   {
    "title": "Solution Space",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "No awareness tool existed for this gap, so the question was less about choosing among existing options and more about finding the right new medium. Choosing Madhubani was a direct, insight-driven decision, shaped by what I'd read about art for science communication, not the result of formally comparing several candidate solutions. To be transparent, the process was closer to applied creative problem-solving than a structured evaluation of options. The alternative the district was using, projector-based awareness sessions, was costly and often failed because the electricity supply was unreliable; a printed image needs neither."
     }
    ]
   },
   {
    "title": "Outcome",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "The District Health Society, Budaun, adopted the design for banners at Health &amp; Wellness Centres in Salarpur and other blocks. Getting there took escalation to the CDO (Chief Development Officer, the senior development official in the district), Budaun, whose direct orders got the department to print and distribute them. The design was also used to train frontline health and nutrition workers and SHG members during the Sampoornata Abhiyaan (July–September 2024), NITI Aayog's campaign to reach full coverage on key indicators in aspirational districts and blocks."
     },
     {
      "k": "img",
      "src": "img/madhubani-4.jpg",
      "cap": "The banner deployed across multiple VHND / Ayushman Arogya Shivir sessions",
      "w": 1280,
      "h": 1280
     },
     {
      "k": "img",
      "src": "img/madhubani-5.jpg",
      "cap": "First-trimester ANC registration rate by quarter, Salarpur block — the red bar is the launch quarter",
      "w": 1600,
      "h": 747
     },
     {
      "k": "p",
      "html": "Quarterly first-trimester registration rates (counted by when the registration decision was actually made, not the later date when the mother was interviewed after delivery) show three phases. Before the campaign, rates swung between 22.7% and 48.8%. In the launch quarter itself they dipped to 19.2%, which fits the time needed to train workers and distribute material. From the next quarter through October–December 2025, they held at a higher 42%–57%. This is consistent with the campaign contributing to a lasting improvement, but I can't separate it from other programmes running in the block at the same time (Aspirational Blocks monitoring, stronger VHND sessions). It's a correlation, not proven cause."
     }
    ]
   },
   {
    "title": "Ripple Effect #1 — Funding a Real Gap",
    "level": 2,
    "blocks": [
     {
      "k": "p",
      "html": "I used two prints of the Madhubani design to raise funds from a relative, which paid for missing weighing and measuring instruments at 4 Anganwadi Centres in 4 Gram Panchayats: two stadiometers, two Salter scales for infants and a digital weighing scale in Sikrodi, a Salter scale in Banei, and a digital weighing scale each in Bilhat and Kundra. (An Anganwadi Centre is the village centre for child nutrition and pre-school care.) I also raised the underlying shortage directly with the then DM (District Magistrate, head of the district administration) of Budaun, who ordered that VHSNC (Village Health, Sanitation &amp; Nutrition Committee) funds be used for such equipment from then on. A one-off personal fix became a standing funding route."
     },
     {
      "k": "img",
      "src": "img/madhubani-6.jpg",
      "cap": "Handing a spring-balance scale, bought with the print sale, to an Anganwadi worker",
      "w": 1600,
      "h": 2133
     },
     {
      "k": "img",
      "src": "img/madhubani-7.jpg",
      "cap": "Handover of a weighing scale, funded through the print sale",
      "w": 1600,
      "h": 2133
     },
     {
      "k": "img",
      "src": "img/madhubani-8.jpg",
      "cap": "A funded stadiometer (height-measuring instrument) in use at an Anganwadi Centre",
      "w": 576,
      "h": 1280
     }
    ]
   },
   {
    "title": "Ripple Effect #2 — Craft & Livelihood",
    "level": 2,
    "blocks": [
     {
      "k": "p",
      "html": "I commissioned an SHG artisan (from Zarkala Mahila Hastshilp Producer Company) to make an Aari embroidery piece based on the Madhubani design. Aari is the base technique of Zari-Zardozi, the metallic-thread embroidery that is Budaun's ODOP craft. The piece won 3rd prize (₹3,000) at the Budaun Science Club science exhibition, where I <a href=\"https://www.youtube.com/watch?v=se7djhqM8rY\" target=\"_blank\" rel=\"noopener\">presented it on video</a>, and brought the artisan income and recognition: an unplanned but meaningful link between a public-health design and the local craft economy. I framed it as an initiative called Jagrukta bhi, Aajeevika bhi (\"awareness and livelihood too\"), and the District Mission Manager for non-farm livelihoods at the National Rural Livelihoods Mission, Budaun, has certified the work."
     },
     {
      "k": "img",
      "src": "img/madhubani-9.jpg",
      "cap": "The Aari embroidery piece, based on the Madhubani design",
      "w": 826,
      "h": 600
     },
     {
      "k": "img",
      "src": "img/madhubani-10.jpg",
      "cap": "Participation/prize certificate, Budaun Science Club exhibition (₹3,000, 3rd prize)",
      "w": 897,
      "h": 655
     },
     {
      "k": "p",
      "html": "The embroidery is now for sale through <a href=\"https://www.instagram.com/p/DfHaEzagPHA/\" target=\"_blank\" rel=\"noopener\">Zarkala's Instagram page</a>, at about ₹3,000 for an A3 piece plus framing. To promote it, I wrote a short appeal in Hindi telling the story behind it: the early-registration message, the artisan's prize, and the fact that every order gives income to SHG women working with Zarkala under the National Rural Livelihoods Mission. I shared it on WhatsApp groups across districts. Each sale supports the women's livelihoods, and making the piece spreads the health message within their own group too."
     },
     {
      "k": "img",
      "src": "img/madhubani-11.jpg",
      "cap": "The framed Aari embroidery, now for sale through Zarkala",
      "w": 972,
      "h": 717
     }
    ]
   },
   {
    "title": "Impact on End Users & Administration",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "For end users: more women registering early means more women getting first-trimester care, folic acid and early risk screening, when it matters most."
     },
     {
      "k": "p",
      "html": "For the administration: the project produced a standing policy change (VHSNC funds for Anganwadi instruments), a district-adopted training and awareness asset (the banners), and showed that a low-cost creative intervention could also expose and help fix an unrelated systemic gap (the equipment shortage) through the advocacy around it."
     }
    ]
   },
   {
    "title": "What I Learned",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "You can move a single indicator with several efforts together, not one silver bullet. The folk-art campaign was one effort among several; it worked alongside continuous field monitoring and the monthly feedback I presented to block administrators and the health department, not instead of them. I can't attribute the improvement to the campaign alone, and that is the lesson: lasting change in an indicator comes from combining a creative, awareness-side intervention with ongoing administrative accountability."
     }
    ]
   },
   {
    "title": "Challenges & How I Overcame Them",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Getting the design printed as banners took escalation to the CDO, Budaun, whose direct orders finally moved the Health Department. A good design alone doesn't guarantee uptake without a senior administrative champion."
     },
     {
      "k": "p",
      "html": "The Anganwadi instrument shortage had no obvious funding route. Instead of treating it as a dead end, I used the fundraiser to show the problem could be solved and deserved attention, and kept raising it with the then DM, which led directly to the VHSNC funding order. The common thread: grassroots design work needed sustained advocacy and escalation to scale, not just more design effort."
     }
    ]
   },
   {
    "title": "What I Would Do Differently",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Village-level munaadi (a drum-beat public announcement) of the same message, to reach people a banner alone can't, given literacy levels.",
       "Banners at Gram Panchayat level, not just at health facilities, putting the message where people gather, not only where they seek care.",
       "Partner with the Basic Education Department (government primary schools) on an art contest where children study the issue and depict it themselves through folk art, visual and performing, making the campaign participatory instead of one-way.",
       "Record the reason behind every \"no\", not just yes or no, so future efforts can target specific barriers (stigma, tracking gaps, maayka absence) directly.",
       "Track this indicator by Gram Panchayat from the start. First-trimester registration now has its own live GP-level map in the 22-indicator KPI monitoring tool I later built for Salarpur, which shows how many visits each reading is based on. Having that during the campaign would have let me target specific under-performing GPs instead of rolling out uniformly across the block. (See ms221088.github.io/Salarpur_KPI_maps, KPI 1.1.)"
      ]
     }
    ]
   },
   {
    "title": "Next Iteration — Sanjhi-Style Design (In Progress)",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Building on the campaign's core insight (visual messaging that works without literacy), I explored a second design in Sanjhi style: embossed clay relief art that people in Salarpur already make on their walls for Navratri and for a homecoming custom that welcomes a newly married couple into the household."
     },
     {
      "k": "p",
      "html": "Madhubani is well known across India, but Sanjhi as practised here is hyper-local. People already see it on their own walls for their own life events, which may carry even more trust and recognition than a style from elsewhere."
     },
     {
      "k": "p",
      "html": "I generated the design with AI, based on reference art I photographed in the field. It carries the same early-ANC message: don't hide pregnancy symptoms, tell your ASHA, and early disclosure does no harm, only good."
     },
     {
      "k": "img",
      "src": "img/madhubani-12.jpg",
      "cap": "AI-generated Sanjhi-style design carrying the early-ANC awareness message",
      "w": 1187,
      "h": 1031
     },
     {
      "k": "p",
      "html": "I've shared it informally on WhatsApp groups for early reactions; it hasn't been field-tested or produced as physical material yet. It's a deliberate next step in the multi-pronged approach from \"What I Learned\": testing whether a hyper-local visual language works better than a generic folk-art one for this message."
     }
    ]
   }
  ],
  "glossary": [
   "<strong>Gram Panchayat (GP)</strong> — an elected village council, the smallest unit of local government. Salarpur block has 77. <a href=\"https://en.wikipedia.org/wiki/Gram_panchayat\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Block (Vikas Khand)</strong> — the administrative level below a district. <a href=\"https://en.wikipedia.org/wiki/Community_development_block_in_India\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>UP ABP+ (Uttar Pradesh Aspirational Blocks Programme)</strong> — the state programme, run by the Planning Department, that tracks 108 lagging blocks on 50 development indicators. <a href=\"https://epariyojana.up.gov.in/TABP/OrderGOs.aspx\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>AB Monitoring Portal</strong> — the Planning Department's portal where CM Fellows record their random-sample monitoring visits in aspirational blocks.",
   "<strong>ANC (antenatal care)</strong> — health check-ups during pregnancy. <a href=\"https://en.wikipedia.org/wiki/Prenatal_care\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>First trimester</strong> — the first three months of pregnancy.",
   "<strong>ASHA (Accredited Social Health Activist)</strong> — a village woman trained and paid as the community's link to the health system; one per 1,000 people or so. <a href=\"https://en.wikipedia.org/wiki/Accredited_Social_Health_Activist\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>ANM (Auxiliary Nurse Midwife)</strong> — a trained health worker who runs village health sessions and supervises ASHAs. <a href=\"https://en.wikipedia.org/wiki/Auxiliary_nurse_midwife\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>CHO (Community Health Officer)</strong> — the health professional who runs a village-level Health &amp; Wellness Centre.",
   "<strong>VHND (Village Health &amp; Nutrition Day)</strong> — a monthly session in each village where ANMs and ASHAs give check-ups, vaccines and advice.",
   "<strong>Health &amp; Wellness Centre (Ayushman Arogya Mandir)</strong> — a village-level government health facility run by a CHO. <a href=\"https://en.wikipedia.org/wiki/Ayushman_Bharat_Yojana\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Ayushman Arogya Shivir</strong> — a government health camp held in villages.",
   "<strong>MCP card (Mother and Child Protection card)</strong> — the booklet given to every pregnant woman to record check-ups and vaccines.",
   "<strong>IEC (Information, Education and Communication)</strong> — awareness material such as posters, banners and leaflets.",
   "<strong>Anganwadi Centre (AWC)</strong> — the village centre for child nutrition and pre-school care, run by an Anganwadi worker. <a href=\"https://en.wikipedia.org/wiki/Anganwadi\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>SHG (Self-Help Group)</strong> — a group of village women who save together and run small livelihoods, organised under the rural livelihoods mission. <a href=\"https://en.wikipedia.org/wiki/Self-help_group_(finance\" target=\"_blank\" rel=\"noopener\">Learn more</a>)",
   "<strong>Pradhan / Rozgar Sewak / Panchayat Sahayak / Safai Karamchari / para-vet</strong> — elected village head / village assistant for the rural employment scheme / GP office assistant / village sanitation worker / animal-health assistant. <a href=\"https://en.wikipedia.org/wiki/National_Rural_Employment_Guarantee_Act,_2005\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>SC (Scheduled Castes)</strong> — communities that have faced historical caste discrimination and are recognised for affirmative action. <a href=\"https://en.wikipedia.org/wiki/Scheduled_Castes_and_Scheduled_Tribes\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>CDO (Chief Development Officer)</strong> — the senior official in charge of development programmes across the district.",
   "<strong>DM (District Magistrate)</strong> — the head of the district administration. <a href=\"https://en.wikipedia.org/wiki/District_magistrate_(India\" target=\"_blank\" rel=\"noopener\">Learn more</a>)",
   "<strong>VHSNC (Village Health, Sanitation &amp; Nutrition Committee)</strong> — a village committee with a small annual fund for local health needs.",
   "<strong>ODOP (One District One Product)</strong> — Uttar Pradesh's scheme promoting one traditional product per district; Budaun's is Zari-Zardozi embroidery. <a href=\"https://odopup.in/\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Zari-Zardozi / Aari</strong> — metallic-thread embroidery / the hooked-needle stitch it is built on. <a href=\"https://en.wikipedia.org/wiki/Zardozi\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Sampoornata Abhiyaan</strong> — a NITI Aayog campaign (July–September 2024) to reach full coverage on key indicators in aspirational districts and blocks.",
   "<strong>Census 2011</strong> — India's most recent completed national census; the source for village population figures. <a href=\"https://en.wikipedia.org/wiki/2011_census_of_India\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Maayka</strong> — a married woman's parents' home; women often go there during pregnancy.",
   "<strong>Nazar</strong> — the evil eye; a belief that others' envy can bring harm. <a href=\"https://en.wikipedia.org/wiki/Evil_eye\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Munaadi</strong> — a traditional public announcement made by beating a drum through the village.",
   "<strong>Madhubani</strong> — a folk painting style from the Mithila region of Bihar, known for bold outlines and story scenes. <a href=\"https://en.wikipedia.org/wiki/Madhubani_art\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Sanjhi</strong> — a folk art form; in Salarpur, raised clay relief made on walls for Navratri (a Hindu festival) and wedding customs. <a href=\"https://en.wikipedia.org/wiki/Sanjhi\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Navratri</strong> — a nine-night Hindu festival held in autumn; in Salarpur, Sanjhi wall art is made for it. <a href=\"https://en.wikipedia.org/wiki/Navaratri\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>KPI monitoring map</strong> — my GP-level dashboard of Aspirational Blocks indicators (see my KPI Focus Area case study). <a href=\"https://ms221088.github.io/Salarpur_KPI_maps/\" target=\"_blank\" rel=\"noopener\">Learn more</a>"
  ]
 },
 {
  "slug": "anaemia",
  "title": "Anaemia-Free Block Poster",
  "fullTitle": "Anaemia-Free Block: Designing a Folk-Art Poster That Answers the Fears Behind Unused Iron Tablets",
  "subtitle": "Turning field interviews about tablet fears into a district-wide iron and folic acid awareness poster — Salarpur Block, Budaun",
  "card": "Women were receiving iron tablets but not taking them, out of fear of black stool. I designed a folk-art poster that gives every age group its dose and explains the fear away; the district ordered it onto walls across Budaun.",
  "methods": [
   "Contextual inquiry",
   "AI-assisted illustration",
   "Stakeholder iteration"
  ],
  "when": "Jul 2026 – ongoing",
  "cover": "img/anaemia-1.jpg",
  "live": null,
  "sections": [
   {
    "title": "Quick Summary",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "In my routine household interviews, many pregnant and breastfeeding women told me they rarely or never took the iron and folic acid (IFA) tablets they were given, mostly out of fear: the tablets turned their stool black, and some felt sick. My own monitoring data showed almost every woman was receiving the tablets, so on paper the programme looked fine. I designed a poster for the National Iron Plus Initiative (NIPI), the government programme that gives iron and folic acid to every age group. It shows the right dose for five groups, from infants to pregnant women, and uses a familiar village scene, a sugarcane crusher, to explain why black stool is normal. I generated the illustration with Google's Gemini AI in the style of Cheriyal, a red-background scroll-painting tradition from Telangana, and added all the Hindi text, doses and colour-coded tablets myself. After three rounds with the Chief Development Officer (CDO), she issued a district order on 23 July 2026 to display it in schools, hospitals, village council offices and Anganwadi centres. It is now being printed and painted on walls across Budaun."
     },
     {
      "k": "p",
      "html": "Method: contextual interviews during random-sample household monitoring, checked against my monitoring data; AI-assisted illustration with manual editing; iteration with district officials and feedback from frontline workers and villagers on WhatsApp."
     },
     {
      "k": "img",
      "src": "img/anaemia-1.jpg",
      "cap": "The final poster: correct iron doses for five groups, and the sugarcane-crusher scene explaining black stool",
      "w": 1600,
      "h": 894
     }
    ]
   },
   {
    "title": "End Users — Goals, Needs, Details",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Pregnant and breastfeeding women — need to know they should take one red tablet every day for 180 days, how to take it, and that black stool and early nausea are normal and no reason to stop.",
       "Mothers of children aged 6–59 months — need to know that young children get IFA syrup twice a week, measured with a dropper or dispensing bottle rather than a spoon.",
       "Schoolchildren and adolescents — primary-school children take a pink tablet once a week; adolescents take a blue tablet once a week, at night, to avoid nausea.",
       "Women of reproductive age (20–49) — one red tablet every week.",
       "Frontline workers who hand out the tablets: ASHAs (village health workers), ANMs (Auxiliary Nurse Midwives), Anganwadi workers and teachers — need one clear reference to explain doses and answer fears.",
       "District officials and departments that display it: the CDO, health, child development (ICDS), basic education and Panchayati Raj."
      ]
     }
    ]
   },
   {
    "title": "Methodology",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "The insight came from my routine monitoring, not from a project brief. In random-sample household visits, I interview mothers whose youngest child is under 2 with a fixed set of questions on antenatal care, nutrition, water, sanitation and more. When I asked about iron tablets, many women said they had received them but rarely or never took them. The reasons were fears: their stool turned black, and some felt nauseous or constipated, so they assumed the tablets were harming them or the baby."
     },
     {
      "k": "img",
      "src": "img/anaemia-2.jpg",
      "cap": "A group interview under a tree during a monitoring visit, where women talked about the iron tablets they were given",
      "w": 1575,
      "h": 2100
     },
     {
      "k": "p",
      "html": "Our monitoring tracks service delivery: whether a woman received IFA tablets at her antenatal check-ups. On my Gram Panchayat-level monitoring map, that figure has been 96–100% in recent quarters. The format doesn't record whether she actually takes them, so the real problem was invisible in the data and only showed up when I talked to women in their homes. In my interviews, consumption is still a challenge."
     },
     {
      "k": "img",
      "src": "img/anaemia-3.jpg",
      "cap": "My monitoring map's IFA indicator: almost every monitored woman receives the tablets, which hides whether she takes them",
      "w": 1477,
      "h": 1071
     },
     {
      "k": "p",
      "html": "Anaemia was also a district priority. When the new CDO joined, I presented my earlier awareness work (the Madhubani antenatal-care poster and a Pichhwai-style livestock poster) and discussed NFHS (National Family Health Survey) findings, where anaemia stood out. She asked me to make a similar poster for iron and folic acid."
     }
    ]
   },
   {
    "title": "Collected Data",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Interview responses from random-sample household visits: women receiving IFA tablets but rarely or never taking them.",
       "Reasons women gave: black stool, nausea and constipation, read as signs that the tablets were harmful.",
       "Monitoring data: 96–100% of monitored women received IFA tablets at antenatal check-ups in recent quarters (receipt, not consumption).",
       "NIPI dosing rules for five groups: syrup twice a week (6–59 months); pink tablet weekly (5–9 years); blue tablet weekly (adolescents); red tablet weekly (women 20–49); red tablet daily for 180 days (pregnant and breastfeeding women).",
       "How to take them: half an hour after a full meal, never with milk (wait two hours), with lemon water for vitamin C, swallowed whole."
      ]
     }
    ]
   },
   {
    "title": "Synthesis",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Women weren't refusing the tablets out of ignorance about anaemia. They stopped because of side effects nobody had explained, and because the instructions differed by age and group and were hard to remember. So the poster had two jobs: give each group its exact dose at a glance, and take the fear out of black stool with an explanation that makes sense in village terms, not medical ones."
     },
     {
      "k": "p",
      "html": "For the explanation I used a sugarcane crusher, a scene everyone in rural Budaun knows. When cane is crushed, the juice is taken and dark, dry fibre is left behind and swept away. The body does the same with iron: it absorbs what it needs and passes the rest out as black stool. The panel's message is direct: don't be afraid of black stool, it is normal, don't stop the tablets."
     }
    ]
   },
   {
    "title": "Findings",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Monitoring tracks delivery, not use: 96–100% of women received the tablets, but interviews showed many didn't take them, and consumption remains a challenge. Only talking to people revealed it.",
       "The barrier was fear of normal side effects, especially black stool, not lack of access. That called for reassurance and explanation, not more distribution.",
       "Doses and tablet colours differ by group, so one poster had to work like a lookup table: find your group, see your tablet, colour and schedule.",
       "Sharing the draft on WhatsApp surfaced a service gap: frontline workers and villagers asked about the IFA syrup their young children had never received."
      ]
     }
    ]
   },
   {
    "title": "Solution Space",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "I could have made a text-heavy leaflet or a standard government poster. Given literacy levels, I chose a folk-art picture story again, as with my Madhubani poster. I picked Cheriyal because its traditional red background suits a message about blood and anaemia, and its bold figures read well on walls from a distance. I generated the illustration with Gemini, which took many prompts to get the folk style right. AI could not produce accurate Hindi text or doses, so I edited the image in Paint: I added all the Hindi text and doses, coloured the tablets to match each group (pink, blue, red), and added a lemonade-glass symbol throughout, because the tablets should be taken with lemon water, not milk."
     },
     {
      "k": "p",
      "html": "The layout gives each group its own panel, ordered by age, with a shared strip of important rules at the bottom and the sugarcane story next to it, so the reassurance sits beside the instructions."
     }
    ]
   },
   {
    "title": "Outcome",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "I showed the poster to the CDO three times in all, revising it after each round, before she approved it. On 23 July 2026 she issued an order (letter no. 423) to the Chief Medical Officer, the Child Development Project Officers, the District Basic Education Officer and the District Panchayat Raj Officer. It tells them to display the poster within a week in schools, hospitals, village council offices and Anganwadi centres, and to send proof of display back to her office. She also asked the Block Development Officers of the district's blocks to have it printed or painted."
     },
     {
      "k": "img",
      "src": "img/anaemia-4.jpg",
      "cap": "The CDO’s order of 23 July 2026 directing departments across Budaun to display the poster within a week",
      "w": 1600,
      "h": 2127
     },
     {
      "k": "p",
      "html": "Printing and painting have begun. The poster has been painted as large wall murals in Gram Panchayats of Ujhani block, and put up as a flex banner at a village council office in Salarpur. In July, ASHAs were also given enough tablet stock and retrained on the topic."
     },
     {
      "k": "img",
      "src": "img/anaemia-5.jpg",
      "cap": "Wall mural of the poster at Sakri Jungle Gram Panchayat, Ujhani block",
      "w": 1600,
      "h": 718
     },
     {
      "k": "img",
      "src": "img/anaemia-6.jpg",
      "cap": "A second wall mural, in another Gram Panchayat of Ujhani block",
      "w": 1110,
      "h": 718
     },
     {
      "k": "img",
      "src": "img/anaemia-7.jpg",
      "cap": "Flex print at a Gram Sachivalaya (village council office), Salarpur block",
      "w": 833,
      "h": 625
     }
    ]
   },
   {
    "title": "Impact on End Users & Administration",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "For families: each group can now find its exact dose and tablet colour, and the most common fear has a simple, local explanation. When I shared the poster on WhatsApp, frontline workers and villagers said the doses were now clear and their worries about black stool were answered. But in my household interviews, getting women to actually take the tablets is still a challenge, and our monitoring format can't yet show whether that is changing."
     },
     {
      "k": "p",
      "html": "For the administration: a design that started from my household interviews became a district-wide order covering four departments, and it gave ASHAs and teachers one shared reference. The questions about missing syrup also pointed health staff to a supply gap for young children."
     }
    ]
   },
   {
    "title": "What I Learned",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Delivery figures aren't outcomes. Asking \"did you receive it?\" is not the same as asking \"do you take it, and if not, why?\"",
       "A fear is best answered with a picture from people's own lives; the sugarcane crusher explains absorption without any medical words.",
       "AI speeds up illustration, but I still had to own accuracy. Every dose, tablet colour and Hindi word had to be added and checked by hand.",
       "Earlier work builds trust. Showing the CDO my previous posters is what led to this request, and her order is what moved four departments at once."
      ]
     }
    ]
   },
   {
    "title": "Challenges & How I Overcame Them",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Getting an authentic folk style from AI: it took many prompts before Gemini produced a convincing Cheriyal-style illustration.",
       "AI-generated text was unusable: I added all Hindi text, doses and colour-coded tablets myself in Paint, so the medical content is exactly right.",
       "Five groups with different doses on one poster: I gave each group its own panel ordered by age, used the real tablet colours, and repeated the lemonade symbol so the key rule is visible everywhere.",
       "Getting sign-off: I revised the poster over three meetings with the CDO until it was ready to issue under her order."
      ]
     }
    ]
   },
   {
    "title": "What I Would Do Differently",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Test drafts with a few women and ASHAs in person before the final version, not only through WhatsApp after sharing it.",
       "Push for the monitoring format to ask whether women actually take the tablets, and why not, so consumption can be tracked alongside delivery. Until then, I keep asking about it in my interviews.",
       "Make audio versions from the start, for WhatsApp and for village munaadi (drum-beat public announcements), to reach people who can't read the poster. These are my next step.",
       "Record where the poster is displayed, so its reach and any change in tablet use can be measured later."
      ]
     }
    ]
   }
  ],
  "glossary": [
   "<strong>Gram Panchayat (GP)</strong> — an elected village council, the smallest unit of local government. Salarpur block has 77. <a href=\"https://en.wikipedia.org/wiki/Gram_panchayat\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Block (Vikas Khand)</strong> — the administrative level below a district. <a href=\"https://en.wikipedia.org/wiki/Community_development_block_in_India\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>UP ABP+ (Uttar Pradesh Aspirational Blocks Programme)</strong> — the state programme, run by the Planning Department, that tracks 108 lagging blocks on 50 development indicators. <a href=\"https://epariyojana.up.gov.in/TABP/OrderGOs.aspx\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Anaemia</strong> — too little haemoglobin in the blood, which causes tiredness and weakness and is dangerous in pregnancy; very common among Indian women and children. <a href=\"https://en.wikipedia.org/wiki/Anemia\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>IFA (iron and folic acid)</strong> — supplements that prevent anaemia; given as syrup to young children and as pink, blue or red tablets to older groups.",
   "<strong>NIPI (National Iron Plus Initiative)</strong> — the Government of India programme that gives iron and folic acid supplements to every age group, with a different tablet colour for each group. <a href=\"https://en.wikipedia.org/wiki/Anemia_Mukt_Bharat\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>ASHA (Accredited Social Health Activist)</strong> — a village woman trained and paid as the community's link to the health system; one per 1,000 people or so. <a href=\"https://en.wikipedia.org/wiki/Accredited_Social_Health_Activist\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>ANM (Auxiliary Nurse Midwife)</strong> — a trained health worker who runs village health sessions and supervises ASHAs. <a href=\"https://en.wikipedia.org/wiki/Auxiliary_nurse_midwife\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Anganwadi Centre (AWC)</strong> — the village centre for child nutrition and pre-school care, run by an Anganwadi worker. <a href=\"https://en.wikipedia.org/wiki/Anganwadi\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>ICDS (Integrated Child Development Services)</strong> — India's programme for child nutrition, health and pre-school care, delivered through Anganwadi Centres. <a href=\"https://en.wikipedia.org/wiki/Integrated_Child_Development_Services\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Cheriyal</strong> — a scroll-painting tradition from Telangana, with bold figures on a red background. <a href=\"https://en.wikipedia.org/wiki/Cheriyal_scroll_painting\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Gemini</strong> — Google's AI model, which I used to generate the illustration. <a href=\"https://gemini.google.com/\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>NFHS (National Family Health Survey)</strong> — India's large national household survey on health and nutrition, including anaemia rates. <a href=\"https://en.wikipedia.org/wiki/National_Family_Health_Survey\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>CDO (Chief Development Officer)</strong> — the senior official in charge of development programmes across the district.",
   "<strong>CMO (Chief Medical Officer)</strong> — the head of government health services in the district.",
   "<strong>CDPO (Child Development Project Officer)</strong> — the officer who heads ICDS in the block.",
   "<strong>BSA (Basic Shiksha Adhikari)</strong> — the district officer in charge of government primary and upper-primary schools.",
   "<strong>DPRO (District Panchayat Raj Officer)</strong> — the district officer in charge of Gram Panchayats.",
   "<strong>BDO (Block Development Officer)</strong> — the block's chief administrative officer.",
   "<strong>Gram Sachivalaya</strong> — the village council office (village secretariat), where villagers come for certificates and schemes.",
   "<strong>Ujhani</strong> — another block in Budaun district.",
   "<strong>Munaadi</strong> — a traditional public announcement made by beating a drum through the village.",
   "<strong>KPI monitoring map</strong> — my GP-level dashboard of Aspirational Blocks indicators (see my KPI Focus Area case study). <a href=\"https://ms221088.github.io/Salarpur_KPI_maps/\" target=\"_blank\" rel=\"noopener\">Learn more</a>"
  ]
 },
 {
  "slug": "tb",
  "title": "Mapping TB by Gram Panchayat",
  "fullTitle": "Mapping TB Burden at Gram Panchayat Level: Turning Free-Text Nikshay Data into a Spatial TB Surveillance Tool for Salarpur Block, Budaun",
  "subtitle": "Turning free-text Nikshay records into a village-council-level TB map for Salarpur Block, Budaun",
  "card": "2,872 TB records had never been counted by village council because addresses were free text. I cleaned them against official place lists and built the block's first GP-level TB map.",
  "methods": [
   "Data cleaning",
   "Geospatial analysis",
   "Transparent caveats"
  ],
  "when": "Data 2020–2025 · built 2026",
  "cover": "img/tb-1.jpg",
  "live": [
   "Open the live dashboard",
   "https://ms221088.github.io/Salarpur_Budaun_Health_Maps/"
  ],
  "sections": [
   {
    "title": "Quick Summary",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Salarpur block's TB records on Nikshay, India's national system for tracking TB patients, hold 2,872 cases from 2020 and 2022–2025 (2021 is missing because of COVID disruption). Nobody had ever counted these cases by Gram Panchayat (GP), because Lab Technicians type patient addresses as free text with no fixed format. I took the raw export from the District TB Officer's (DTO's) office and cleaned it against the official lists of GPs, villages and hamlets from the Panchayati Raj department (the state department for village local government), in English and Hindi. That gave me a GP-level table and a GP map, which I built in the month before the first of three phases of the Sanchari Rog Abhiyaan, Uttar Pradesh's communicable-disease control campaign. The dashboard has five views: rate, absolute count, a ranked list of all 77 GPs, age and gender, and a methodology tab that states the data's caveats openly. I shared it with TB and health staff at block and district level, and asked the DTO to pass it on to the NGOs that visit households in TB hotspots, which until now have relied on officials' informal sense of where the hotspots are. Separately, about a year before the map existed, one of my routine monitoring interviews had already turned up a TB case in Puthi Sarai that led the block's Community Health Centre (CHC) to start sputum testing there. That was a separate route to finding cases; the map didn't create it."
     },
     {
      "k": "p",
      "html": "Method: I counted cases per GP from the DTO office's Nikshay export (2020, 2022–2025), cleaned against Panchayati Raj's GP, village and hamlet lists, and used the same 2024 population base as my diarrhoea and malaria dashboards (Census 2011 projected at 1.65% a year) so rates are comparable across all three. I cleaned the data and built the dashboard using Claude, an AI assistant, working on the specific free-text address problem I found in the raw export."
     },
     {
      "k": "p",
      "html": "<a href=\"https://ms221088.github.io/Salarpur_Budaun_Health_Maps/\" target=\"_blank\" rel=\"noopener\">View the live dashboard: ms221088.github.io/Salarpur_Budaun_Health_Maps (TB tab)</a>"
     },
     {
      "k": "img",
      "src": "img/tb-1.jpg",
      "cap": "TB Surveillance Dashboard — cumulative rate per lakh by GP (2,872 cases; 2020 and 2022–2025)",
      "w": 1600,
      "h": 1000
     }
    ]
   },
   {
    "title": "End Users — Goals, Needs, Details",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "STS (Senior Treatment Supervisor) and STLS (Senior TB Laboratory Supervisor), the block's TB programme staff — need GP-level burden to plan active case-finding and sample collection.",
       "Lab Technicians (LTs) — the staff whose free-text address entries created the data problem; they need to see what standardised addresses make possible.",
       "CHOs (Community Health Officers, who run village Health &amp; Wellness Centres) and ANMs (Auxiliary Nurse Midwives, village health workers) — can use GP-level burden to decide which households to screen in their areas.",
       "BPM (Block Programme Manager), BCPM (Block Community Process Manager) and MOIC (Medical Officer In-Charge, the doctor heading the block's health services) — need block-level evidence for reviews and campaign planning, the same way they already use my KPI monitoring map.",
       "DTO (District TB Officer) — the main official recipient, and the channel I asked to extend the map to NGOs.",
       "NGOs making household visits in hotspots — currently go by officials' informal sense of where hotspots are; they would get actual GP-level counts if the DTO shares the map.",
       "The block's CHC (Community Health Centre) — acted on a finding from my routine field interviews (not the map) by starting sputum testing in Puthi Sarai.",
       "Me — the analyst, and a registered Nikshay Mitra: I have adopted TB patients and give them monthly nutrition kits (Poshan Potli) during treatment."
      ]
     }
    ]
   },
   {
    "title": "Methodology",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "The Nikshay export for Salarpur (2020, 2022–2025; 2021 missing due to COVID) records addresses as free text with no required village or GP field. So no GP-level breakdown had ever been produced from it: not by the LTs entering the data, not by the STS/STLS, and not by the DTO's office. I cleaned the export using Claude, giving it Panchayati Raj's official GP, village and hamlet lists in English and Hindi, to remove duplicates and cases from outside the block and assign each case to a GP. The result was a GP-level table and a GP map. For population, I used the same 2024 base year as my diarrhoea and malaria dashboards: Census 2011 projected forward at 1.65% a year, checked against an independent district estimate of 1.66%."
     }
    ]
   },
   {
    "title": "Collected Data",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "2,872 TB cases across all 77 GPs of Salarpur block, 2020 and 2022–2025 (2021 unavailable).",
       "Block-wide cumulative rate: 1,380.2 per lakh (per 100,000) people, using the 2024 projection.",
       "Gender split: 1,745 male, 1,126 female, 1 transgender (male share ~60.8%).",
       "Age distribution: 25–44 years is the largest band (997 cases, ~34.7%), followed by 45–59 (669) and 15–24 (584); 96 cases (~3.3%) fall in the 0–14 child-TB band.",
       "Per-GP case counts and rates for each year (2020, 2022, 2023, 2024, 2025) and for all years combined."
      ]
     }
    ]
   },
   {
    "title": "Synthesis",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "I built five linked views instead of a single map, following the same idea as my KPI map, which pairs a heat map with a ranked table: different views suit different moments. There's a rate view (per lakh, to compare GPs of different sizes), an absolute-count view (for raw caseload planning), a ranked table of all 77 GPs (to decide where to act first), an age and gender view, and a methodology tab. The methodology tab exists to state data problems openly instead of letting a misleading number stand. One GP, Kunwargaon Dehat, has the block's highest raw rate (4,415.6 per lakh). But about 131 of its 153 cases had addresses reading only \"Kunwargaon\", with no way to tell whether the patient lived in the rural GP or in the overlapping Nagar Panchayat (a small town council). Because the rural census population leaves out the town's residents, this inflates the rate. Rather than quietly include or drop the GP, I show the caveat right next to its figures."
     },
     {
      "k": "img",
      "src": "img/tb-2.jpg",
      "cap": "Methodology tab — the Kunwar Gaon Dehat flag: most of its cases carried ambiguous addresses overlapping the urban Nagar Panchayat",
      "w": 1600,
      "h": 1000
     }
    ]
   },
   {
    "title": "Findings",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "This is the first GP-level TB breakdown for the block in any form. It isn't an improvement on an earlier analysis; there wasn't one, because the free-text address field had stopped everyone from the LT to the DTO from producing it.",
       "Setting aside Kunwargaon Dehat's flagged figure, the two real rate hotspots are Lahi Faridpur (2,490.5 per lakh, 112 cases) and Binavar (2,438.7 per lakh, 182 cases, also the block's highest raw count).",
       "TB here skews male (60.8%) and working-age (25–44 is the largest band). But the 96 cases in children aged 0–14 are an action point in themselves: a child with TB usually means an infected adult in the household who may not yet be diagnosed.",
       "About a year before the map existed, a routine household interview in Puthi Sarai turned up a case that led the CHC to start sputum testing there. The interview was part of my standard Aspirational Blocks monitoring: I visit a mother whose youngest child is under 2 and ask a fixed set of questions on antenatal care, nutrition, water, sanitation, housing, TB, screening for diabetes and blood pressure, and livestock vaccination. Puthi Sarai ranks only 49th of 77 GPs by TB rate, so the numbers didn't point me there. It shows that routine multi-sector monitoring finds cases on its own, without needing a hotspot map."
      ]
     }
    ]
   },
   {
    "title": "Solution Space",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "The alternative was to hand the DTO's office a cleaned spreadsheet. I built a full interactive dashboard instead, for two reasons. First, comparability: using the same 2024 population base as my diarrhoea and malaria dashboards means all three rates can be read against each other. Second, transparency: putting the Kunwargaon Dehat caveat inside the tool, instead of quietly dropping or including that GP, follows the same discipline as my KPI map, where faint colours flag readings based on too few visits and where I dropped an indicator after its self-reported data proved unreliable. A hotspot list handed over without its caveats could easily become another unverified \"official hotspot\" list of the kind NGOs already work from informally."
     }
    ]
   },
   {
    "title": "Outcome",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "I shared the dashboard with the STS, STLS, Lab Technicians, CHOs, ANMs, BPM, BCPM, MOIC and DTO in the month before phase 1 of the Sanchari Rog Abhiyaan (April). I asked the DTO to share it with the NGOs that work with the health department and visit households in hotspots, so they could target visits using actual GP-level counts instead of word of mouth. I'm still waiting for a response; everyone on the list is busy with other duties. Separately, the routine-monitoring route had already produced one concrete action, CHC sputum testing in Puthi Sarai, before the map existed. In January I plan to pull the Nikshay data again and check whether cases have fallen since the map and the campaign. That will be a correlational check, not proof that the map caused any change, the same way I presented my diarrhoea and tap-water finding."
     },
     {
      "k": "p",
      "html": "Alongside the map, I supported patients directly. In February 2025, at an event at the primary health centre, I adopted two TB patients as a Nikshay Mitra, and received the Ministry of Health's Nikshay Mitra certificate in March 2025. I gave them regular counselling and two rounds of Poshan Potli nutrition kits (soya chunks, roasted chana, peanuts and a nutritional supplement to mix into milk). I made a short <a href=\"https://www.youtube.com/watch?v=fhE7eevq9Ls\" target=\"_blank\" rel=\"noopener\">awareness video in simple Hindi</a> with InVideo AI and a Warli-style painting of TB symptoms, and shared both on official WhatsApp groups. Through a Google Form survey I ran in March–April 2025 (83 responses) and my field visits, I identified at least 11 people with possible TB and reported them to the STLS at the CHC, whose team approached them. More people from the survey still need follow-up."
     },
     {
      "k": "img",
      "src": "img/tb-3.jpg",
      "cap": "My Nikshay Mitra certificate from the Ministry of Health and Family Welfare",
      "w": 1600,
      "h": 1132
     },
     {
      "k": "img",
      "src": "img/tb-4.jpg",
      "cap": "Delivering a Poshan Potli nutrition kit to a TB patient’s family",
      "w": 1600,
      "h": 1200
     },
     {
      "k": "p",
      "html": "This TB work was featured in The Times of India, in the <a href=\"https://timesofindia.indiatimes.com/toi-plus/education/a-mission-in-ups-poorest-blocks-take-welfare-to-every-doorstep/articleshow/126544241.cms\" target=\"_blank\" rel=\"noopener\">New Delhi edition on 15 January 2026</a> and the Lucknow edition on 18 January 2026, in stories on Uttar Pradesh's CM Fellows. The articles reported that over three years I had helped identify 11 people with TB."
     }
    ]
   },
   {
    "title": "Impact on End Users & Administration",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Staff at every level, from Lab Technician to DTO, now have a GP-level view of where TB is concentrated in the block, instead of a block-wide total or an informal memory of \"known\" hotspots. If the DTO shares the map with NGOs as I asked, their household visits could be guided by counts from actual patient addresses instead of officials' impressions. Nobody in the existing chain, including the DTO's office, had this level of detail before."
     }
    ]
   },
   {
    "title": "What I Learned",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "A free-text field anywhere in a government data system quietly blocks a whole class of analysis until someone cleans it against an official place-name list. That cleaning is the foundation, not a side task. I found the same thing when I matched GP boundaries to ASHA coverage areas for my KPI map.",
       "A suspicious top-ranked figure (Kunwargaon Dehat) needs the same check-before-presenting discipline I use for low-visit readings on my KPI map and for self-reported data. The right move is to show the caveat openly, not to quietly resolve it one way or the other.",
       "Routine, protocol-based field monitoring is a genuinely separate way of finding cases. Puthi Sarai shows it can catch cases a rate-based hotspot map would never flag.",
       "Releasing a tool just before a fixed government campaign (the Sanchari Rog Abhiyaan) is a design decision in itself. It's what gives a backward-looking analysis a live operational use."
      ]
     }
    ]
   },
   {
    "title": "Challenges & How I Overcame Them",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "No GP-level TB analysis had ever existed at any level of the health department, because of Nikshay's free-text address field. I solved this with the same GP, village and hamlet list-cleaning approach I used for my diarrhoea and malaria dashboards.",
       "Kunwargaon Dehat's cases couldn't be reliably split between the rural GP and the overlapping town from address data alone. I flagged the ambiguity openly in the methodology tab instead of presenting an unqualified figure.",
       "Getting a large, busy group of staff, from STS/STLS through the DTO to NGOs, to act on a shared tool isn't solved yet. I'm still waiting for responses, and I'll do the January re-analysis regardless, to check outcomes without depending on confirmed uptake."
      ]
     }
    ]
   },
   {
    "title": "What I Would Do Differently",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Push for Nikshay to use a GP drop-down instead of free text, so GP-level analysis becomes routine rather than a one-off clean-up.",
       "Build and share the map earlier before the next Sanchari Rog Abhiyaan cycle, not in the month just before phase 1.",
       "Follow up regularly with the people I shared it with, by presenting it again at block and district meetings as I did for the diarrhoea and tap-water finding, instead of sharing once and waiting.",
       "Bring the age and gender view, especially the 96 child-TB cases, into departmental briefings explicitly, since screening household contacts of child cases is a concrete action my first round of sharing didn't call out."
      ]
     }
    ]
   }
  ],
  "glossary": [
   "<strong>Gram Panchayat (GP)</strong> — an elected village council, the smallest unit of local government. Salarpur block has 77. <a href=\"https://en.wikipedia.org/wiki/Gram_panchayat\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Block (Vikas Khand)</strong> — the administrative level below a district. <a href=\"https://en.wikipedia.org/wiki/Community_development_block_in_India\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Hamlet (majra)</strong> — a small settlement that belongs to a larger village or Gram Panchayat.",
   "<strong>Lakh</strong> — the Indian unit for 100,000. \"Per lakh\" means per 100,000 people. <a href=\"https://en.wikipedia.org/wiki/Lakh\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>UP ABP+ (Uttar Pradesh Aspirational Blocks Programme)</strong> — the state programme, run by the Planning Department, that tracks 108 lagging blocks on 50 development indicators. <a href=\"https://epariyojana.up.gov.in/TABP/OrderGOs.aspx\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>TB (tuberculosis)</strong> — a bacterial lung infection; India has the world's largest number of cases. <a href=\"https://en.wikipedia.org/wiki/Tuberculosis_in_India\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Nikshay</strong> — India's national online system for registering and tracking TB patients. <a href=\"https://www.nikshay.in/\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>DTO (District TB Officer)</strong> — the official who heads the TB programme in the district.",
   "<strong>LT (Lab Technician)</strong> — the staff member who tests samples and enters TB patient records.",
   "<strong>STS (Senior Treatment Supervisor)</strong> — block-level TB staff who track patients through treatment.",
   "<strong>STLS (Senior TB Laboratory Supervisor)</strong> — block-level TB staff who oversee testing and sample collection.",
   "<strong>CHO (Community Health Officer)</strong> — the health professional who runs a village-level Health &amp; Wellness Centre.",
   "<strong>ANM (Auxiliary Nurse Midwife)</strong> — a trained health worker who runs village health sessions and supervises ASHAs. <a href=\"https://en.wikipedia.org/wiki/Auxiliary_nurse_midwife\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>CHC (Community Health Centre)</strong> — the block's main government health facility.",
   "<strong>MOIC (Medical Officer In-Charge)</strong> — the doctor who heads the block's government health services.",
   "<strong>BPM (Block Programme Manager)</strong> — manages the block's National Health Mission programmes and data. <a href=\"https://en.wikipedia.org/wiki/National_Health_Mission\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>BCPM (Block Community Process Manager)</strong> — oversees the block's ASHAs and community health activities.",
   "<strong>ASHA (Accredited Social Health Activist)</strong> — a village woman trained and paid as the community's link to the health system; one per 1,000 people or so. <a href=\"https://en.wikipedia.org/wiki/Accredited_Social_Health_Activist\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Nikshay Mitra</strong> — a person or organisation that adopts TB patients and supports them with nutrition during treatment. <a href=\"https://www.nikshay.in/\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Poshan Potli</strong> — a monthly nutrition kit given to TB patients.",
   "<strong>Panchayati Raj department</strong> — the state department responsible for Gram Panchayats and village local government. <a href=\"https://en.wikipedia.org/wiki/Panchayati_raj_in_India\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Nagar Panchayat</strong> — the council of a small town; an urban area, unlike a Gram Panchayat. <a href=\"https://en.wikipedia.org/wiki/Nagar_panchayat\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Sanchari Rog Abhiyaan</strong> — Uttar Pradesh's communicable-disease control campaign, run in phases through the year (including April and October).",
   "<strong>Sputum test</strong> — a test of coughed-up mucus, the standard first test for TB.",
   "<strong>Warli</strong> — a tribal painting style from Maharashtra, made of simple white figures. <a href=\"https://en.wikipedia.org/wiki/Warli_painting\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Census 2011</strong> — India's most recent completed national census; the source for village population figures. <a href=\"https://en.wikipedia.org/wiki/2011_census_of_India\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Choropleth map</strong> — a map where areas are shaded by a value, here each GP by its rate. <a href=\"https://en.wikipedia.org/wiki/Choropleth_map\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Salarpur Health Hotspot Maps</strong> — my public dashboards for diarrhoea, malaria and TB. <a href=\"https://ms221088.github.io/Salarpur_Budaun_Health_Maps/\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>KPI monitoring map</strong> — my GP-level dashboard of Aspirational Blocks indicators (see my KPI Focus Area case study). <a href=\"https://ms221088.github.io/Salarpur_KPI_maps/\" target=\"_blank\" rel=\"noopener\">Learn more</a>"
  ]
 },
 {
  "slug": "diarrhoea",
  "title": "Diarrhoea and Tap Water",
  "fullTitle": "Linking Diarrhoea Hotspots to Water Access: Cross-Referencing Case Data with Jal Jeevan Mission Tap-Water Coverage",
  "subtitle": "Cross-referencing diarrhoea cases with household tap-water coverage, Salarpur Block, Budaun",
  "card": "I noticed on my map that villages with tap connections seemed to have fewer child diarrhoea cases, then tested it: a 25.4% lower rate, real but partial, shared with water and health departments.",
  "methods": [
   "Hypothesis from a map",
   "Cross-dataset analysis",
   "Stakeholder briefing"
  ],
  "when": "Data Jun 2022 – May 2026",
  "cover": "img/diarrhoea-3.jpg",
  "live": [
   "Open the live dashboard",
   "https://ms221088.github.io/Salarpur_Budaun_Health_Maps/"
  ],
  "sections": [
   {
    "title": "Quick Summary",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "I built a diarrhoea surveillance map covering all 77 Gram Panchayats (GPs) of Salarpur block. It uses cases among children under 5 (U5) between June 2022 and May 2026, from e-Kavach, the Uttar Pradesh health department's reporting portal, and from reports by ASHAs, the village health workers: 264 cases in 63 of the 77 GPs. I didn't want to stop at showing where diarrhoea clustered, so I compared the cases with tap-water coverage under Jal Jeevan Mission (JJM), the national scheme to give every rural home a piped water connection, which JJM measures as an FHTC (Functional Household Tap Connection). The effect I found was real but partial: GPs with confirmed FHTC had 7.43 cases per 1,000 under-5 children, against 9.96 in GPs without, a 25.4% lower rate where tap water was present. I presented this to the engineers building the water network (from Jal Nigam, the state water-supply agency, and its contractor PNC), to the health department, and to block and district officials at review meetings."
     },
     {
      "k": "p",
      "html": "Method: I analysed case counts per GP from e-Kavach and ASHA reports (June 2022–May 2026) and compared them with JJM's FHTC records. To keep diarrhoea, malaria and TB rates comparable across my three disease dashboards, I projected every GP's Census 2011 population to a single 2024 base year at 1.65% compound annual growth."
     },
     {
      "k": "p",
      "html": "<a href=\"https://ms221088.github.io/Salarpur_Budaun_Health_Maps/\" target=\"_blank\" rel=\"noopener\">View the live dashboard: ms221088.github.io/Salarpur_Budaun_Health_Maps (Diarrhoea tab)</a>"
     },
     {
      "k": "img",
      "src": "img/diarrhoea-1.jpg",
      "cap": "Diarrhoea Surveillance Dashboard — under-5 burden per 1,000 children by GP (264 cases across 77 GPs, Jun 2022–May 2026)",
      "w": 1600,
      "h": 1000
     }
    ]
   },
   {
    "title": "End Users — Goals, Needs, Details",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Jal Nigam engineers (JE/AE, Junior and Assistant Engineers) and the engineer from PNC, the contractor laying the pipes — need to know where poor water access may be adding to disease, so they can prioritise tap connections there.",
       "The health department — needs to see whether a non-medical fix, water access, could reduce cases alongside clinical treatment.",
       "Panchayat officials: Sachivs (Gram Panchayat secretaries), the BDO (Block Development Officer, the block's chief administrator) and the ADO-Panchayat (the block officer who supervises the secretaries) — need GP-level evidence for planning and review meetings.",
       "Me — I did the analysis and presented the finding at block and district meetings."
      ]
     }
    ]
   },
   {
    "title": "Methodology",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "I took under-5 case data from e-Kavach and ASHA reports for all 77 GPs, June 2022 to May 2026. My malaria and TB dashboards cover different years, so to make all three comparable I used one population base year, 2024, across the whole project. I projected each GP's Census 2011 population forward at 1.65% compound annual growth and checked that rate against an independent district-level estimate of 1.66%. I then added each GP's FHTC status to the same 77-GP base so I could compare it with case rates."
     }
    ]
   },
   {
    "title": "Collected Data",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "264 diarrhoea cases in 63 of 77 GPs, June 2022–May 2026.",
       "Block average: 12.2 cases per 1,000 under-5 children. Highest burden: Khaspur, at 43.4 per 1,000.",
       "Seasonal pattern: 84% of cases (222 of 264) came in the monsoon months, June to August.",
       "FHTC status for 76 GPs: 21 with confirmed tap connections, 55 without."
      ]
     },
     {
      "k": "img",
      "src": "img/diarrhoea-2.jpg",
      "cap": "Monthly epidemic curve — 222 of 264 cases (84%) fell in the June–August monsoon months",
      "w": 1600,
      "h": 778
     }
    ]
   },
   {
    "title": "Synthesis",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "I put the diarrhoea data and the FHTC data on the same GP boundaries so they could be read together. Scanning the combined map, I noticed that GPs with confirmed tap connections seemed to report fewer cases, or none. To test that hunch, I asked Claude, an AI assistant, to calculate the actual rates from the case and FHTC data. It came back with 7.43 against 9.96 per 1,000, a 25.4% difference. The idea that water access might be a driver came from my reading of the map; the AI turned that visual impression into a rate comparison."
     },
     {
      "k": "img",
      "src": "img/diarrhoea-3.jpg",
      "cap": "JJM tab — GPs with confirmed FHTC (green) vs. without (red), with the case-rate comparison above the map",
      "w": 1600,
      "h": 1000
     }
    ]
   },
   {
    "title": "Findings",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "GPs with confirmed FHTC have a 25.4% lower diarrhoea rate than GPs without (7.43 vs 9.96 per 1,000 under-5 children). The link is real but partial: tap water alone doesn't explain every hotspot, and some high-burden GPs need a separate explanation."
      ]
     },
     {
      "k": "img",
      "src": "img/diarrhoea-4.jpg",
      "cap": "FHTC GPs: 7.43 cases per 1,000 U5 vs. 9.96 in non-FHTC GPs — a 25.4% lower rate where tap water is present",
      "w": 1600,
      "h": 125
     },
     {
      "k": "ul",
      "items": [
       "Diarrhoea here is strongly seasonal: 84% of cases come in the monsoon, which points to rainy-season water contamination as a major factor whether or not a GP has tap connections.",
       "Khaspur stands out as the highest-burden GP (43.4 per 1,000) and needs focused follow-up beyond the block-wide pattern."
      ]
     },
     {
      "k": "img",
      "src": "img/diarrhoea-5.jpg",
      "cap": "Khaspur — 16 cases on an under-5 population of 369 (43.4 per 1,000, against a block average of 12.2)",
      "w": 994,
      "h": 984
     }
    ]
   },
   {
    "title": "Solution Space",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Instead of cross-referencing, I could have presented the diarrhoea hotspot map on its own, as a list of high-burden GPs for each department to act on separately. Adding FHTC status turned it into a hypothesis that could be tested and acted on. It gave Jal Nigam and PNC a specific, checkable reason to prioritise certain GPs, not just a list of case counts with no suggested cause."
     }
    ]
   },
   {
    "title": "Outcome",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "I presented the finding to the Jal Nigam engineers, PNC's engineer, the health department, and the Sachivs, BDO and ADO-Panchayat at block and district meetings. It gave the water-supply and health departments one shared, GP-by-GP reference instead of two separate datasets that nobody had compared."
     }
    ]
   },
   {
    "title": "Impact on End Users & Administration",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Departments that usually plan water and health work separately now have shared evidence connecting the two. The FHTC link gives Jal Nigam and PNC a health reason for prioritising specific GPs' tap connections, rather than sequencing the rollout by engineering convenience alone."
     }
    ]
   },
   {
    "title": "What I Learned",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "A pattern I notice on a map is a hypothesis, not a finding. I had to put a number on it before presenting it to departments as evidence.",
       "A partial effect (25.4% lower, not a dramatic difference) is more believable and more useful for planning than an inflated claim. I presented it as exactly that: a real but partial factor.",
       "Using one population base year across three disease dashboards was groundwork I had to do before any comparison across diseases or datasets could be trusted."
      ]
     }
    ]
   },
   {
    "title": "Challenges & How I Overcame Them",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Comparing datasets that cover different years (diarrhoea June 2022–May 2026, malaria 2023–2025, TB 2020–2025): I chose one central base year, 2024, and checked my projection method against an independent growth estimate.",
       "Turning a visual impression into a defensible statistic: I asked Claude to calculate the actual FHTC-linked rates from the underlying data rather than presenting the visual pattern alone."
      ]
     }
    ]
   },
   {
    "title": "What I Would Do Differently",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Because the link is only partial, my next step would be to find out what sets apart high-burden GPs like Khaspur that don't fit the FHTC pattern. I'd use the same on-the-ground root-cause visits I made for my KPI monitoring map, to find causes other than water before the next departmental review."
     }
    ]
   }
  ],
  "glossary": [
   "<strong>Gram Panchayat (GP)</strong> — an elected village council, the smallest unit of local government. Salarpur block has 77. <a href=\"https://en.wikipedia.org/wiki/Gram_panchayat\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Block (Vikas Khand)</strong> — the administrative level below a district. <a href=\"https://en.wikipedia.org/wiki/Community_development_block_in_India\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>UP ABP+ (Uttar Pradesh Aspirational Blocks Programme)</strong> — the state programme, run by the Planning Department, that tracks 108 lagging blocks on 50 development indicators. <a href=\"https://epariyojana.up.gov.in/TABP/OrderGOs.aspx\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Diarrhoea</strong> — a leading cause of illness and death in young children, often spread through unsafe water. <a href=\"https://en.wikipedia.org/wiki/Diarrhea\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>U5</strong> — children under 5 years old.",
   "<strong>ASHA (Accredited Social Health Activist)</strong> — a village woman trained and paid as the community's link to the health system; one per 1,000 people or so. <a href=\"https://en.wikipedia.org/wiki/Accredited_Social_Health_Activist\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>e-Kavach</strong> — the Uttar Pradesh health department's online portal where health workers record cases and services.",
   "<strong>JJM (Jal Jeevan Mission)</strong> — the national scheme to give every rural household a piped drinking-water connection. <a href=\"https://jaljeevanmission.gov.in/\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>FHTC (Functional Household Tap Connection)</strong> — JJM's measure of a working tap connection at a home. <a href=\"https://en.wikipedia.org/wiki/Jal_Jeevan_Mission\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Jal Nigam</strong> — Uttar Pradesh's state agency for building water-supply systems.",
   "<strong>JE / AE</strong> — Junior Engineer / Assistant Engineer.",
   "<strong>PNC</strong> — the private contractor company laying the tap-water network in the block.",
   "<strong>Sachiv (Panchayat Secretary)</strong> — the government official who runs a Gram Panchayat's office and records.",
   "<strong>BDO (Block Development Officer)</strong> — the block's chief administrative officer.",
   "<strong>ADO-Panchayat (Assistant Development Officer, Panchayat)</strong> — the block officer who supervises Gram Panchayat secretaries.",
   "<strong>Census 2011</strong> — India's most recent completed national census; the source for village population figures. <a href=\"https://en.wikipedia.org/wiki/2011_census_of_India\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Choropleth map</strong> — a map where areas are shaded by a value, here each GP by its rate. <a href=\"https://en.wikipedia.org/wiki/Choropleth_map\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Salarpur Health Hotspot Maps</strong> — my public dashboards for diarrhoea, malaria and TB. <a href=\"https://ms221088.github.io/Salarpur_Budaun_Health_Maps/\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>KPI monitoring map</strong> — my GP-level dashboard of Aspirational Blocks indicators (see my KPI Focus Area case study). <a href=\"https://ms221088.github.io/Salarpur_KPI_maps/\" target=\"_blank\" rel=\"noopener\">Learn more</a>"
  ]
 },
 {
  "slug": "malaria",
  "title": "Malaria Hotspots to Their Cause",
  "fullTitle": "Mapping Malaria Hotspots to Their Physical Cause: A District-Contextualized, Village-Level Analysis for Salarpur Block, Budaun",
  "subtitle": "From village-level case data to a specific, actionable water-source diagnosis for Salarpur Block, Budaun",
  "card": "Village rankings pointed to 12 critical villages; field visits traced them to sewage-fed ponds choked with water hyacinth, which turned a hotspot list into a fixable recommendation.",
  "methods": [
   "Root-cause fieldwork",
   "Ranking & clustering",
   "Community dissemination"
  ],
  "when": "Data 2023–2025 · built 2026",
  "cover": "img/malaria-1.jpg",
  "live": [
   "Open the live dashboard",
   "https://ms221088.github.io/Salarpur_Budaun_Health_Maps/"
  ],
  "sections": [
   {
    "title": "Quick Summary",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Salarpur block recorded 712 malaria cases between 2023 and 2025, in 69 of its 77 Gram Panchayats (GPs). Three years is all the data the District Malaria Officer's (DMO's) office had. When I ranked villages using the DMO's own village-level report, one stood out sharply: Ghatbeti (Ghat Behti on the map), at roughly double the rate of the next village. There was also a geographic pattern: the seven GPs of the Puthi Sarai Nyay Panchayat (a cluster of neighbouring GPs) together carry about 108 of the 712 cases, roughly 15% of the block's total. From the ranking I identified 12 critical villages for priority action, spread across several Nyay Panchayats. Field visits traced the pattern to a physical cause: large ponds fed by sewage and choked with water hyacinth, where mosquitoes breed in the still water. That gave a concrete recommendation: clean the ponds in the 12 villages during the Sanchari Rog Abhiyaan, Uttar Pradesh's communicable-disease control campaign. I built the map in the month before the campaign's April phase. The response so far is partial: anti-larval spraying has been done; fogging hasn't, because no fogging machines were available (they were being purchased in October, ahead of the October phase); pond restoration is planned but not done. Separately, I compared all 15 blocks of Budaun district: Salarpur ranks 5th by rate, and highest of Budaun's 6 Aspirational Blocks. That comparison is context only; it wasn't part of how I chose Salarpur or the 12 villages."
     },
     {
      "k": "p",
      "html": "Method: I analysed case counts by village and GP from the DMO office's malaria data (2023–2025), for Salarpur and, for comparison, for all 15 blocks of Budaun district. Populations use the same 2024 base year as my diarrhoea and TB dashboards. I cleaned the data and built the dashboard using Claude, an AI assistant, working from the DMO's raw village-level report."
     },
     {
      "k": "p",
      "html": "<a href=\"https://ms221088.github.io/Salarpur_Budaun_Health_Maps/\" target=\"_blank\" rel=\"noopener\">View the live dashboard: ms221088.github.io/Salarpur_Budaun_Health_Maps (Malaria tab)</a>"
     },
     {
      "k": "img",
      "src": "img/malaria-1.jpg",
      "cap": "Malaria Surveillance Dashboard — rate per 10,000 by GP (712 cases, 2023–2025)",
      "w": 1600,
      "h": 1000
     }
    ]
   },
   {
    "title": "End Users — Goals, Needs, Details",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "The malaria monitor in the DMO's office — supplied the raw village data, and needs the cleaned, ranked map back to plan spraying, fogging and surveillance.",
       "Panchayati Raj department (the state department for village local government) — responsible for cleaning and restoring village ponds, the intervention the finding points to.",
       "Rural Development department — responsible for the drainage and sewage flowing into the ponds.",
       "WhatsApp groups of frontline workers, farmers and SHGs (Self-Help Groups, village women's savings groups) — to spread the finding in the community, beyond the usual official channels.",
       "Sanchari Rog Abhiyaan planners — need a target list of critical villages before the campaign instead of blanket coverage.",
       "Me — the analyst, presenting both the block-level and district-comparison findings."
      ]
     }
    ]
   },
   {
    "title": "Methodology",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "The malaria monitor in the DMO's office gave me village-level case data for Salarpur covering 2023–2025. That was the full span in the DMO's records, not a window I chose. I cleaned the village report and ranked villages by rate per population, then mapped the cases onto GP boundaries for the dashboard, using the same GP, village and hamlet lists I'd used to clean my diarrhoea and TB data. Separately, I built a district-wide comparison from a DMO summary report covering all 15 Budaun blocks (2023–2025), to see where Salarpur stands against the district and against Budaun's other 5 Aspirational Blocks. Both analyses use the same 2024 population base year as my other dashboards."
     }
    ]
   },
   {
    "title": "Collected Data",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Salarpur: 712 cases in 2023–2025 (716 in the DMO's district summary): 217 in 2023, 310 in 2024 and 185 in 2025. 69 of 77 GPs reported at least one case.",
       "All 15 Budaun blocks: 7,798 cases in 2023–2025, a district rate of 3.22 per 1,000 people.",
       "Salarpur's rate (3.57 per 1,000) ranks 5th of 15 blocks, after Samrer (9.47), Miyaun (6.34), Dataganj (5.88) and Jagat (3.99), and is the highest of Budaun's 6 Aspirational Blocks (the other 5 range from 0.57 to 2.8). This is context, not the reason I prioritised Salarpur.",
       "Within Salarpur, Ghatbeti is the sharpest outlier, at roughly double the rate of the next village. The top-12 critical villages are spread across several Nyay Panchayats rather than one cluster.",
       "A secondary pattern: the Puthi Sarai Nyay Panchayat (7 GPs: Faridpur Nausana, Ghat Behti, Bichhu Raiyya, Chandaura, Muhammadi, Puthi Sarai and Sadullapur Bhitara) carries about 108 of the 712 cases, about 15% of the block's total."
      ]
     }
    ]
   },
   {
    "title": "Synthesis",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "The village ranking within the block is what I actually used for targeting. It showed a sharp outlier (Ghatbeti) and a geographic cluster (the Puthi Sarai Nyay Panchayat, about 15% of cases), which together pointed to the 12 critical villages. I didn't hand this over as a bare list. I visited the top-ranked villages to find a physical cause first, so the departments responsible would know what to act on. The 15-block district comparison was a separate analysis that gave Salarpur's burden a wider frame; it ran alongside the targeting, not into it."
     },
     {
      "k": "img",
      "src": "img/malaria-2.jpg",
      "cap": "Ghat Behti (34 cases, 247.1 per 10,000) and the surrounding Puthi Sarai Nyay Panchayat cluster",
      "w": 790,
      "h": 932
     }
    ]
   },
   {
    "title": "Findings",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Ghatbeti is a sharp outlier, at roughly double the rate of the next-highest village in the block.",
       "Alongside it sits a cluster: the 7 GPs of the Puthi Sarai Nyay Panchayat together carry about 15% of the block's malaria. That's a real cluster effect, different from a single-village spike.",
       "My field visits to the top-ranked villages traced the pattern to a physical cause: large ponds fed by sewage and choked with water hyacinth, where mosquitoes breed in still water. That's a mechanism, not just a statistical link.",
       "The 12 critical villages are spread across several Nyay Panchayats, so pond cleaning has to be coordinated across several local bodies, not done in one area.",
       "Separately, Salarpur ranks 5th of 15 Budaun blocks by rate and highest of the 6 Aspirational Blocks. That's useful context, but it wasn't part of how I prioritised Salarpur or the 12 villages."
      ]
     }
    ]
   },
   {
    "title": "Solution Space",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Without field visits, I'd have handed departments a ranked hotspot list with no explanation, leaving them to guess the cause and the fix. Finding the mechanism, sewage-fed ponds choked with hyacinth, turned the list into a specific recommendation: clean these ponds, timed to the Sanchari Rog Abhiyaan. I also deliberately shared beyond the usual official channels (the malaria monitor, Panchayati Raj, Rural Development) to WhatsApp groups of frontline workers, farmers and SHGs, because stagnant ponds are something communities can report and act on themselves, not only something departments manage from above."
     }
    ]
   },
   {
    "title": "Outcome",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "I shared the finding and the 12-village recommendation with the malaria monitor, Panchayati Raj, the Rural Development department and most of the frontline-worker, farmer and SHG WhatsApp groups, in the month before the campaign's April phase, as I did with my TB and diarrhoea dashboards. The response is real but partial. Anti-larval spraying has been done. Fogging hasn't, because fogging machines weren't available; they were being purchased in October for the campaign's October phase. Pond restoration, which tackles the root cause, is planned but not yet done."
     }
    ]
   },
   {
    "title": "Impact on End Users & Administration",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Departments that would otherwise work from an unranked block total now have a prioritised village list linked to a cause. The district comparison places Salarpur's malaria burden against its real peer group, the other Aspirational Blocks, instead of leaving it as an isolated number. And because I shared it in community WhatsApp groups, the finding isn't only in the hands of officials who control spraying and fogging; the people living around the ponds can see it too."
     }
    ]
   },
   {
    "title": "What I Learned",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "A village ranking can show two kinds of pattern at once: a single-village spike (Ghatbeti) and a wider cluster (the Puthi Sarai Nyay Panchayat). Both deserve naming separately, because they may need different responses.",
       "A hotspot list is far more useful to departments once it's linked to a physical mechanism (sewage-fed, hyacinth-choked ponds). The same principle shaped my diarrhoea and tap-water analysis and the Sikrodi root-cause finding from my KPI monitoring map.",
       "Recommendations made before a campaign don't get done on the campaign's timeline. Spraying, fogging and pond restoration are moving at different speeds depending on what each needs (staff time, buying equipment, coordination between departments). Reporting that honestly is more useful than treating \"shared\" as \"done\"."
      ]
     }
    ]
   },
   {
    "title": "Challenges & How I Overcame Them",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "The DMO's office had only 3 years of data (2023–2025). I worked within that limit; it was the data that existed, not a cleaning problem.",
       "The 12 critical villages fall under several Nyay Panchayats, which makes coordinated action harder than a single clean-up. I shared the recommendation widely enough (Panchayati Raj, Rural Development and community WhatsApp groups) to reach each area instead of relying on one local body.",
       "Fogging couldn't go ahead even though the recommendation was accepted, because there were no fogging machines. This isn't fully solved, but machines were being purchased in October for the October campaign phase."
      ]
     }
    ]
   },
   {
    "title": "What I Would Do Differently",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Ask the DMO's office for a longer data history, so I can analyse multi-year malaria trends as I can for TB and diarrhoea.",
       "Check equipment needs (like fogging machines) as part of the recommendation itself, instead of discovering the gap after spraying had started.",
       "Extend the district-wide, peer-group comparison (Aspirational Blocks against all 15 blocks) to my diarrhoea and TB dashboards, since it gave useful context for presenting the malaria finding."
      ]
     }
    ]
   }
  ],
  "glossary": [
   "<strong>Gram Panchayat (GP)</strong> — an elected village council, the smallest unit of local government. Salarpur block has 77. <a href=\"https://en.wikipedia.org/wiki/Gram_panchayat\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Nyay Panchayat</strong> — a cluster of neighbouring Gram Panchayats, used for administration.",
   "<strong>Block (Vikas Khand)</strong> — the administrative level below a district. <a href=\"https://en.wikipedia.org/wiki/Community_development_block_in_India\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Hamlet (majra)</strong> — a small settlement that belongs to a larger village or Gram Panchayat.",
   "<strong>UP ABP+ (Uttar Pradesh Aspirational Blocks Programme)</strong> — the state programme, run by the Planning Department, that tracks 108 lagging blocks on 50 development indicators. <a href=\"https://epariyojana.up.gov.in/TABP/OrderGOs.aspx\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Malaria</strong> — a disease spread by mosquitoes that breed in standing water. <a href=\"https://en.wikipedia.org/wiki/Malaria\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>DMO (District Malaria Officer)</strong> — the official who heads malaria control in the district; the malaria monitor works in this office.",
   "<strong>Panchayati Raj department</strong> — the state department responsible for Gram Panchayats and village local government. <a href=\"https://en.wikipedia.org/wiki/Panchayati_raj_in_India\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Rural Development department</strong> — the state department for rural works such as drainage and roads.",
   "<strong>SHG (Self-Help Group)</strong> — a group of village women who save together and run small livelihoods, organised under the rural livelihoods mission. <a href=\"https://en.wikipedia.org/wiki/Self-help_group_(finance\" target=\"_blank\" rel=\"noopener\">Learn more</a>)",
   "<strong>Sanchari Rog Abhiyaan</strong> — Uttar Pradesh's communicable-disease control campaign, run in phases through the year (including April and October).",
   "<strong>Anti-larval spraying / fogging</strong> — killing mosquito larvae in standing water / spraying insecticide mist to kill adult mosquitoes.",
   "<strong>Water hyacinth</strong> — a floating weed that covers ponds and keeps water still, which helps mosquitoes breed. <a href=\"https://en.wikipedia.org/wiki/Pontederia_crassipes\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Census 2011</strong> — India's most recent completed national census; the source for village population figures. <a href=\"https://en.wikipedia.org/wiki/2011_census_of_India\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Choropleth map</strong> — a map where areas are shaded by a value, here each GP by its rate. <a href=\"https://en.wikipedia.org/wiki/Choropleth_map\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Salarpur Health Hotspot Maps</strong> — my public dashboards for diarrhoea, malaria and TB. <a href=\"https://ms221088.github.io/Salarpur_Budaun_Health_Maps/\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>KPI monitoring map</strong> — my GP-level dashboard of Aspirational Blocks indicators (see my KPI Focus Area case study). <a href=\"https://ms221088.github.io/Salarpur_KPI_maps/\" target=\"_blank\" rel=\"noopener\">Learn more</a>"
  ]
 },
 {
  "slug": "shg",
  "title": "Budaun SHG Catalogue",
  "fullTitle": "Budaun SHG Catalogue: A Bilingual Directory That Helps District Officials Find and Promote Local Women's Enterprises",
  "subtitle": "A bilingual online directory of women's Self-Help Group products and services for district officials — Budaun district, Uttar Pradesh",
  "card": "Officials wanted to promote women's Self-Help Group products, but nobody had collected what the groups make or how to reach them. I gathered it and built a bilingual catalogue anyone can update without code.",
  "methods": [
   "Information gap",
   "Bilingual product design",
   "Maintainable content"
  ],
  "when": "2026 – ongoing",
  "cover": "img/shg-1.jpg",
  "live": [
   "Open the live catalogue",
   "https://ms221088.github.io/shg-catalogue/index.html"
  ],
  "sections": [
   {
    "title": "Quick Summary",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Women's Self-Help Groups (SHGs) across Budaun make natural paint from cow dung, multigrain flour, ghee, honey, pickles, spices and Zari-Zardozi embroidery, and offer services such as drone spraying and tailoring. But nobody had collected each group's name, product photo, price and contact in one place. When a senior officer wanted to promote local products or help a group win a bulk order, the information simply wasn't available. I gathered it through WhatsApp, a Google Form survey and calls to the groups, and built a bilingual Hindi–English website listing 12 products and 4 services, with filters by block and category and a search box. I shared it with district officials and the staff of the rural livelihoods mission. It is a deliberately simple, interim solution until official government platforms are ready."
     },
     {
      "k": "p",
      "html": "Method: identifying an information gap in the administration; data collection through WhatsApp, a Google Form survey and phone follow-ups with SHGs; a static bilingual website hosted free on GitHub Pages."
     },
     {
      "k": "p",
      "html": "View the live catalogue: <a href=\"https://ms221088.github.io/shg-catalogue/index.html\" target=\"_blank\" rel=\"noopener\">ms221088.github.io/shg-catalogue</a>"
     },
     {
      "k": "img",
      "src": "img/shg-1.jpg",
      "cap": "The products page: filters by category, subcategory and block, a search box, and one card per product with price, contact and group",
      "w": 1600,
      "h": 996
     }
    ]
   },
   {
    "title": "End Users — Goals, Needs, Details",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "District officials: the DM (District Magistrate), CDO (Chief Development Officer), ADMs and SDMs (senior district officers), BDOs (Block Development Officers) and the DDO (District Development Officer) — want to know what their district's SHGs make, so they can promote products and help groups get bulk orders.",
       "Staff of the National Rural Livelihoods Mission (NRLM), especially the District and Block Mission Managers (DMMs and BMMs) — need a ready list to share with buyers and departments.",
       "SHG women — benefit from being visible with their name, product photo, price and direct phone number, so buyers can reach them without a middleman.",
       "Me — I collected the data, built the site and maintain it."
      ]
     }
    ]
   },
   {
    "title": "Methodology",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "The project started from a gap I kept seeing in meetings: officers wanted to showcase or buy local SHG products, but there was no list to point them to. The information sat in scattered WhatsApp messages and in people's memory."
     },
     {
      "k": "p",
      "html": "I asked for details on SHG and NRLM WhatsApp groups and through a Google Form survey, then phoned the groups to fill gaps: what they make regularly, prices, photos, contact numbers and addresses. Only a handful of products are made regularly, so a database-driven app wasn't needed. A static website was enough, and it costs nothing to host on GitHub Pages."
     }
    ]
   },
   {
    "title": "Collected Data",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "12 products across food, home improvement, building materials, apparel and home decor: for example natural paint made from cow dung (emulsion ₹156.35 per litre), multigrain flour (₹160 per kg), desi ghee, pickles, ground spices, sweets, milk and paneer, honey, caps, footwear and Zari-Zardozi embroidery from Zarkala.",
       "4 services, such as drone spraying of pesticide and fertiliser (₹400 per acre) and tailoring."
      ]
     },
     {
      "k": "p",
      "html": "One of the services comes from an SHG member trained as a drone pilot under the NaMo Drone Didi scheme, which gives women's groups agricultural drones to earn from spraying. To help her find customers, I also made a <a href=\"https://www.youtube.com/shorts/683jaj1h1Po\" target=\"_blank\" rel=\"noopener\">short video about her service</a> and shared it with farmers' groups."
     },
     {
      "k": "ul",
      "items": [
       "For each entry: the group's name, photo, price, phone number and address, tagged by block and category.",
       "Groups from several blocks, including Salarpur, Sahaswan, Qadar Chowk, Jagat, Wazirganj and Usawan."
      ]
     },
     {
      "k": "img",
      "src": "img/shg-2.jpg",
      "cap": "Filtering by block: the three products from Salarpur",
      "w": 1600,
      "h": 996
     }
    ]
   },
   {
    "title": "Synthesis",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "An officer typically asks one of two questions: \"what do SHGs make?\" or \"what is available in this block?\" So the site lets you filter by category, subcategory and block, and search by name. Each card shows everything needed to act in one place, including a phone number, so a buyer can call the group directly. The site works in Hindi and English, because SHG members and most officials read Hindi, while visitors and outside buyers may need English."
     },
     {
      "k": "img",
      "src": "img/shg-3.jpg",
      "cap": "The same page in Hindi; every label, filter and card switches language",
      "w": 1600,
      "h": 996
     },
     {
      "k": "p",
      "html": "I also separated the content from the code. Every product and service is a short entry in a data file, with a plain-language guide on how to add one, so updating the catalogue means copying an entry rather than editing web pages. The block filter only shows blocks that actually have entries, so it never needs manual updating."
     }
    ]
   },
   {
    "title": "Findings",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "The information existed but had never been collected: officials wanting to help didn't know what was available or whom to call.",
       "Only a few SHG products are made regularly and reliably, which shaped the decision to keep the tool simple.",
       "Price and a direct contact are what a buyer needs most; detailed descriptions matter less.",
       "An existing public marketplace site listed some of these products for sale, but it had no way to filter for Budaun or for SHGs."
      ]
     }
    ]
   },
   {
    "title": "Solution Space",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Government platforms where these products belong, such as the ODOP (One District One Product) portal and NRLM's own marketplace, are still being developed. A full online shop would be too much for a few regular products and would need payments, delivery and ongoing staff. A static directory was quick to build, free to host and easy to hand over later, so I chose it as an interim solution."
     },
     {
      "k": "img",
      "src": "img/shg-4.jpg",
      "cap": "The services page, with drone spraying and tailoring by SHG members",
      "w": 1600,
      "h": 996
     }
    ]
   },
   {
    "title": "Outcome",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "I shared the link on the district development team's WhatsApp group and the district NRLM group, and the block and district mission managers know about it. I maintain it myself. Two more products and a photo for the honey seller are still to be added. I haven't tracked enquiries or orders yet, so I can't say how much business it has brought."
     }
    ]
   },
   {
    "title": "Impact on End Users & Administration",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "District officials now have one link that shows what Budaun's SHGs make and how to reach them, which they can share with buyers or use when planning purchases and exhibitions. SHG members get a public listing with their own name, photo and number."
     }
    ]
   },
   {
    "title": "What I Learned",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Most of the work was collecting and checking information, not building the website.",
       "The simplest tool that fits the real volume of products is the right one; complexity can wait for demand.",
       "Separating content from code makes a tool maintainable by someone who doesn't write code."
      ]
     }
    ]
   },
   {
    "title": "Challenges & How I Overcame Them",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Incomplete information from groups (missing photos, prices or contacts): I followed up by phone, and I list only what has been confirmed.",
       "Making search work in both languages: I made sure both Hindi and English text are searchable.",
       "Keeping it updatable without touching code: data files plus a step-by-step guide."
      ]
     }
    ]
   },
   {
    "title": "What I Would Do Differently",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Ask groups to tell me when a buyer found them through the catalogue, so its value can be measured.",
       "Plan from the start how the listings will move to the official ODOP or NRLM platforms when they are ready.",
       "Ask a few officials what they would use the catalogue for before building, to prioritise the right details."
      ]
     }
    ]
   }
  ],
  "glossary": [
   "<strong>SHG (Self-Help Group)</strong> — a group of 10–20 village women who save together, take small loans and run small businesses. <a href=\"https://en.wikipedia.org/wiki/Self-help_group_(finance\" target=\"_blank\" rel=\"noopener\">Learn more</a>)",
   "<strong>NRLM (National Rural Livelihoods Mission)</strong> — the national programme that organises rural women into SHGs; run in Uttar Pradesh as UPSRLM. <a href=\"https://en.wikipedia.org/wiki/Deendayal_Antyodaya_Yojana\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>BMM / DMM (Block / District Mission Manager)</strong> — the NRLM officers who support SHGs at block and district level.",
   "<strong>Gram Panchayat (GP)</strong> — an elected village council, the smallest unit of local government. Salarpur block has 77. <a href=\"https://en.wikipedia.org/wiki/Gram_panchayat\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Block (Vikas Khand)</strong> — the administrative level below a district. <a href=\"https://en.wikipedia.org/wiki/Community_development_block_in_India\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>DM (District Magistrate)</strong> — the head of the district administration. <a href=\"https://en.wikipedia.org/wiki/District_magistrate_(India\" target=\"_blank\" rel=\"noopener\">Learn more</a>)",
   "<strong>CDO (Chief Development Officer)</strong> — the senior official in charge of development programmes across the district.",
   "<strong>ADM / SDM (Additional / Sub-Divisional Magistrate)</strong> — senior district officers below the District Magistrate.",
   "<strong>BDO (Block Development Officer)</strong> — the block's chief administrative officer.",
   "<strong>DDO (District Development Officer)</strong> — the officer who oversees rural development schemes in the district.",
   "<strong>ODOP (One District One Product)</strong> — Uttar Pradesh's scheme promoting one traditional product per district; Budaun's is Zari-Zardozi embroidery. <a href=\"https://odopup.in/\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Zari-Zardozi / Aari</strong> — metallic-thread embroidery / the hooked-needle stitch it is built on. <a href=\"https://en.wikipedia.org/wiki/Zardozi\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>GitHub Pages</strong> — a free service for hosting simple websites. <a href=\"https://pages.github.com/\" target=\"_blank\" rel=\"noopener\">Learn more</a>"
  ]
 },
 {
  "slug": "gaushala",
  "title": "A QR Code for the Cow Shelter Fund",
  "fullTitle": "A QR Code for the Cow Shelter Fund: How a Small Change in How People Pay Increased Donations",
  "subtitle": "Removing a payment barrier for donations to Budaun's cattle-protection fund",
  "card": "The district's cow shelter fund held very little money because the only way to give was a bank transfer. I pushed for a UPI QR code; donations passed ₹1 lakh within months and are now roughly ₹8–9 lakh.",
  "methods": [
   "Service design",
   "Removing friction",
   "Navigating government"
  ],
  "when": "Jul 2023 – ongoing",
  "cover": "img/gaushala-2.jpg",
  "live": null,
  "sections": [
   {
    "title": "Quick Summary",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Budaun has a district fund for cow shelters (gaushalas), the Gau Sanrakshan evam Samvardhan Nidhi, held at Punjab National Bank. In 2023 it held very little money. When I tried to donate, I found the only way was a bank transfer: I had to add the fund as a beneficiary in my internet banking. I raised ₹5,000 by giving one of my paintings to a forest officer from Madhya Pradesh, then suggested that the fund accept UPI, India's scan-and-pay mobile payment system. Working through the block Veterinary Officer, the animal husbandry department and the Chief Development Officer, the bank issued a UPI QR code within two weeks. Donations passed ₹1 lakh by February 2024 and are now roughly ₹8–9 lakh in total, most of them paid through UPI."
     },
     {
      "k": "p",
      "html": "Method: noticing the problem as a donor myself; mapping who could change it; proposing and following up the change through the departments; promoting it through media and WhatsApp."
     },
     {
      "k": "img",
      "src": "img/gaushala-1.jpg",
      "cap": "The fund's UPI QR code, issued by Punjab National Bank's Vikas Bhawan branch",
      "w": 974,
      "h": 1280
     }
    ]
   },
   {
    "title": "End Users — Goals, Needs, Details",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Donors (villagers, officials, people from outside the district) — want to give small amounts quickly from their phone, without bank details or paperwork.",
       "The animal husbandry department and cow shelters — need funds to feed and care for stray cattle.",
       "The district administration (DM and CDO) — decides how the fund is spent.",
       "Road users and the stray cattle themselves — affected by how the money is used, for example on road safety."
      ]
     }
    ]
   },
   {
    "title": "Methodology",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "I came to the problem as a donor. I was told the fund had received hardly any donations, and wanted to help. I painted a watercolour on the theme of turtle conservation and gave it to a Divisional Forest Officer from Madhya Pradesh, who gave ₹5,000 for the fund. To pay it in, in July 2023, I had to add the fund's account as a beneficiary through my own internet banking. That step showed me why the fund was nearly empty: most people won't go through it for a small gift."
     },
     {
      "k": "img",
      "src": "img/gaushala-2.jpg",
      "cap": "My turtle-conservation watercolour, given in return for the first ₹5,000 donation",
      "w": 1024,
      "h": 768
     },
     {
      "k": "p",
      "html": "I took the idea of a UPI QR code to the Veterinary Officer of Salarpur block, who agreed it would make appeals possible and directed me to the responsible clerk in the animal husbandry department. I then met the Chief Development Officer, who asked the clerk at Vikas Bhawan, the district development office, to get a QR code from the Punjab National Bank branch in the same building."
     }
    ]
   },
   {
    "title": "Collected Data",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Starting point: very little money in the fund (2023).",
       "First donation: ₹5,000, paid by bank transfer in July 2023.",
       "QR code issued within about two weeks of the CDO's instruction.",
       "More than ₹1 lakh received by February 2024; roughly ₹8–9 lakh received in total by now, mostly through UPI by number of donations (exact figures to be confirmed from the passbook)."
      ]
     }
    ]
   },
   {
    "title": "Synthesis",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "People were willing to give; the payment channel was the barrier. A bank transfer needs the account number and IFSC code, adding a beneficiary and sometimes a waiting period, which is too much effort for a ₹100 or ₹500 gift. In India most small payments are now made by scanning a QR code, so the fix was to let donors pay the way they already pay for everything else."
     }
    ]
   },
   {
    "title": "Findings",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Removing one step in the payment process changed donations far more than any appeal could have: from very little to over ₹1 lakh within months.",
       "Most donations by count now come through UPI, which confirms that small donors were the ones being lost.",
       "The change depended on people, not technology: it went from the Veterinary Officer to a department clerk, the CDO and a bank manager.",
       "A new bottleneck appeared on the spending side: money can only be withdrawn after a committee meeting, so the District Magistrate had to use special powers to spend some of it."
      ]
     }
    ]
   },
   {
    "title": "Solution Space",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Other options were to keep appealing for bank transfers, to put a cash box in an office, or to use a private crowdfunding website. Cash is hard to account for, and crowdfunding sites charge fees and aren't official. A QR code from the fund's own bank was free, official and traceable, since every payment goes straight into the government account."
     }
    ]
   },
   {
    "title": "Outcome",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "The QR code was ready within two weeks, and I promoted it through the media and on WhatsApp. Donations passed ₹1 lakh by February 2024 and have reached roughly ₹8–9 lakh in total. Recently the District Magistrate used special powers to withdraw part of the fund for reflective collars for stray cattle, to help prevent road accidents at night. I still need to check the passbook for the exact amounts."
     }
    ]
   },
   {
    "title": "Impact on End Users & Administration",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Donors can now give any amount in seconds from their phone. The fund went from almost empty to a meaningful sum the district can use for stray cattle, and part of it is already going to road safety."
     }
    ]
   },
   {
    "title": "What I Learned",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Service design isn't only screens: here the design change was a payment method.",
       "Experiencing a process myself, as a donor, showed me the barrier faster than asking others would have.",
       "A good idea in government moves through people; knowing who can approve what made a two-week change possible.",
       "Fixing how money comes in exposes how it goes out; the spending rules are now the slower part."
      ]
     }
    ]
   },
   {
    "title": "Challenges & How I Overcame Them",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "No one owned the problem: I worked out the chain of people who could approve and execute the change, and followed it up in person.",
       "I have no authority over the fund: I proposed the change through the Veterinary Officer and the CDO rather than trying to do it myself."
      ]
     }
    ]
   },
   {
    "title": "What I Would Do Differently",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Keep a simple record of donations and spending from the start, and share it publicly, so donors can see what their money did.",
       "Propose clearer rules for spending the fund, so money doesn't wait for a committee meeting or special powers.",
       "Get exact figures from the passbook regularly instead of relying on estimates."
      ]
     }
    ]
   }
  ],
  "glossary": [
   "<strong>Gaushala</strong> — a cow shelter; in Uttar Pradesh many house stray cattle that farmers no longer keep. <a href=\"https://en.wikipedia.org/wiki/Gaushala\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Gau Sanrakshan evam Samvardhan Nidhi</strong> — the district's cow protection and development fund, held in a bank account.",
   "<strong>UPI (Unified Payments Interface)</strong> — India's instant mobile payment system; people pay by scanning a QR code in apps such as Google Pay, PhonePe or BHIM. <a href=\"https://en.wikipedia.org/wiki/Unified_Payments_Interface\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>PNB (Punjab National Bank)</strong> — the bank that holds the fund's account.",
   "<strong>VO (Veterinary Officer)</strong> — the government vet in charge of animal health in the block.",
   "<strong>Vikas Bhawan</strong> — the district development office building in Budaun.",
   "<strong>DFO (Divisional Forest Officer)</strong> — the officer in charge of a forest division.",
   "<strong>CDO (Chief Development Officer)</strong> — the senior official in charge of development programmes across the district.",
   "<strong>DM (District Magistrate)</strong> — the head of the district administration. <a href=\"https://en.wikipedia.org/wiki/District_magistrate_(India\" target=\"_blank\" rel=\"noopener\">Learn more</a>)",
   "<strong>Lakh</strong> — the Indian unit for 100,000. \"Per lakh\" means per 100,000 people. <a href=\"https://en.wikipedia.org/wiki/Lakh\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Block (Vikas Khand)</strong> — the administrative level below a district. <a href=\"https://en.wikipedia.org/wiki/Community_development_block_in_India\" target=\"_blank\" rel=\"noopener\">Learn more</a>"
  ]
 },
 {
  "slug": "candles",
  "title": "Finding Buyers for an SHG's Candles",
  "fullTitle": "Finding Buyers for an SHG's Candles: Using Government Offices and WhatsApp as a Sales Channel for a Women's Self-Help Group",
  "subtitle": "Turning government offices into a market for a women's Self-Help Group's candles and herbal Holi colours — Salarpur and Budaun",
  "card": "A women's group made good candles but had nowhere to sell them. I turned the government offices I already worked in into a market; before Diwali they earned ₹2,500 in a day, and at least ₹10,000 in all.",
  "methods": [
   "Distribution gap",
   "Using existing channels",
   "Festival timing"
  ],
  "when": "Diwali 2023 – 2024",
  "cover": "img/candles-1.jpg",
  "live": null,
  "sections": [
   {
    "title": "Quick Summary",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Kamal Mahila SHG, a women's Self-Help Group in Salarpur block, made chemical-free candles but wasn't selling many, so the work earned the members very little. The product wasn't the problem; the group had no way to reach buyers. I started taking a member and her stock to the places I already worked in, the block and district government offices, and promoted the products on the departments' WhatsApp groups. Two days before Diwali 2023 the group earned ₹2,500 in a single day at the block offices, and villagers placed orders the next day. In 2024 I took her to offices at Vikas Bhawan, the district development office, including the Chief Development Officer's, and to a farmers' organisation during Barawafat, which cleared her leftover stock. Across candles and herbal Holi colours she earned at least ₹10,000."
     },
     {
      "k": "p",
      "html": "Method: identifying a distribution gap rather than a product gap; using existing institutional relationships as a sales channel; timing sales to festivals; promotion through official WhatsApp groups."
     },
     {
      "k": "img",
      "src": "img/candles-1.jpg",
      "cap": "Selling candles in the Chief Development Officer's office, Vikas Bhawan, Budaun",
      "w": 1600,
      "h": 1200
     }
    ]
   },
   {
    "title": "End Users — Goals, Needs, Details",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "SHG members — want a steady income from what they already make, without the cost of a shop or a middleman.",
       "Government staff — a large group of regular buyers who work in one place and buy for festivals, but don't know what local groups make.",
       "Villagers — buy once they hear about the products through WhatsApp groups they already use.",
       "Me — I used my access to offices and official groups to open doors the group couldn't open alone."
      ]
     }
    ]
   },
   {
    "title": "Methodology",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "I met the group through my work with SHGs and saw that their candles were good but sat unsold. Talking to the members showed why: they sold only in their own village, where demand was small, and they had no contacts in town. I already visited dozens of government offices every month, and the staff there are exactly the kind of buyers who spend on candles before Diwali. So the experiment was simple: bring the product to them, at the right time, with an introduction from someone they knew."
     },
     {
      "k": "img",
      "src": "img/candles-2.jpg",
      "cap": "Selling candles from chairs in the block office compound",
      "w": 1600,
      "h": 1200
     }
    ]
   },
   {
    "title": "Collected Data",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Before: chemical-free candles made by Kamal Mahila SHG, with few sales and little income.",
       "Diwali 2023 (two days before the festival): ₹2,500 earned in one day across the block offices of education, Panchayati Raj, rural employment, rural development and animal husbandry; orders from villagers the next day.",
       "2024: sales in district offices at Vikas Bhawan (the Chief Development Officer, the District Programme Officer for child development, the skills development office and the animal husbandry department) and at a farmers' organisation office during Barawafat, clearing the leftover stock.",
       "Total: at least ₹10,000 from candles and herbal Holi colours."
      ]
     }
    ]
   },
   {
    "title": "Synthesis",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "This was a distribution problem, not a product problem. The group needed buyers, and the buyers needed to be told the product existed and trust it. Government offices solved both: many buyers in one place, and my introduction gave the products credibility. Festivals created the reason to buy. WhatsApp groups carried the message to people I couldn't visit."
     },
     {
      "k": "img",
      "src": "img/candles-3.jpg",
      "cap": "Selling to the District Programme Officer's office for child development, Vikas Bhawan",
      "w": 1600,
      "h": 1200
     }
    ]
   },
   {
    "title": "Findings",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "A good product with no route to buyers earns nothing; access to a concentrated group of buyers changed that within a day.",
       "Timing matters: sales spiked just before festivals, when people already plan to buy candles and colours.",
       "A trusted introduction lowered the barrier for officials to buy from a group they had never heard of.",
       "Selling in person in offices doesn't scale on its own; it depends on someone like me being there."
      ]
     }
    ]
   },
   {
    "title": "Solution Space",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "Alternatives were a stall at a district fair, an online marketplace or a shop through a wholesaler. Fairs are occasional, online selling needs packaging, delivery and payments the group didn't have, and wholesalers take most of the margin. Selling in offices used relationships that already existed and cost nothing. To make it less dependent on me, I later built the Budaun SHG Catalogue, so officials can find groups and contact them directly."
     },
     {
      "k": "img",
      "src": "img/candles-4.jpg",
      "cap": "Selling at a farmers' organisation office during Barawafat",
      "w": 1600,
      "h": 1200
     }
    ]
   },
   {
    "title": "Outcome",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "The group earned ₹2,500 in a day before Diwali 2023 and at least ₹10,000 in total from candles and herbal Holi colours, cleared old stock, and gained repeat buyers among villagers and office staff. I also suggested a second line of work, drying vegetables, and paid ₹250 for the first batch to get it started."
     }
    ]
   },
   {
    "title": "Impact on End Users & Administration",
    "level": 1,
    "blocks": [
     {
      "k": "p",
      "html": "For the members, unsold stock turned into income. For officials, buying from a local women's group became an easy, visible way to support the livelihoods mission they are responsible for."
     }
    ]
   },
   {
    "title": "What I Learned",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Ask why something isn't working before redesigning it; here the product was fine and the channel was missing.",
       "My position gave me access to buyers, and lending that access was the most useful thing I could do.",
       "A one-person sales channel is fragile; the lasting fix is a directory buyers can use without me."
      ]
     }
    ]
   },
   {
    "title": "Challenges & How I Overcame Them",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Officials hadn't heard of the group: I introduced the member in person and explained the product myself.",
       "Short selling windows around festivals: I planned the visits in the days just before Diwali.",
       "Leftover stock after the festival: I used later visits, including during Barawafat, to clear it."
      ]
     }
    ]
   },
   {
    "title": "What I Would Do Differently",
    "level": 1,
    "blocks": [
     {
      "k": "ul",
      "items": [
       "Keep a simple record of every sale and buyer from the start, to show the income clearly and find repeat customers.",
       "Help the group take orders by WhatsApp with a UPI QR code, so buyers can reorder without a visit.",
       "Add the group to the SHG Catalogue straight away, so the channel doesn't depend on me."
      ]
     }
    ]
   }
  ],
  "glossary": [
   "<strong>SHG (Self-Help Group)</strong> — a group of 10–20 village women who save together, take small loans and run small businesses. <a href=\"https://en.wikipedia.org/wiki/Self-help_group_(finance\" target=\"_blank\" rel=\"noopener\">Learn more</a>)",
   "<strong>NRLM (National Rural Livelihoods Mission)</strong> — the national programme that organises rural women into SHGs; run in Uttar Pradesh as UPSRLM. <a href=\"https://en.wikipedia.org/wiki/Deendayal_Antyodaya_Yojana\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Diwali</strong> — the Hindu festival of lights, when families buy candles and lamps. <a href=\"https://en.wikipedia.org/wiki/Diwali\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Holi</strong> — the spring festival of colours; herbal colours are a safer alternative to chemical ones. <a href=\"https://en.wikipedia.org/wiki/Holi\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Barawafat</strong> — the festival marking the Prophet Muhammad's birthday.",
   "<strong>Vikas Bhawan</strong> — the district development office building in Budaun.",
   "<strong>CDO (Chief Development Officer)</strong> — the senior official in charge of development programmes across the district.",
   "<strong>DPO, ICDS (District Programme Officer)</strong> — the officer who heads the child development programme in the district.",
   "<strong>Kaushal Vikas office</strong> — the district office of the skills development mission.",
   "<strong>FPO (Farmer Producer Organisation)</strong> — a company owned by farmers that buys inputs and sells produce together.",
   "<strong>UPI (Unified Payments Interface)</strong> — India's instant mobile payment system; people pay by scanning a QR code in apps such as Google Pay, PhonePe or BHIM. <a href=\"https://en.wikipedia.org/wiki/Unified_Payments_Interface\" target=\"_blank\" rel=\"noopener\">Learn more</a>",
   "<strong>Block (Vikas Khand)</strong> — the administrative level below a district. <a href=\"https://en.wikipedia.org/wiki/Community_development_block_in_India\" target=\"_blank\" rel=\"noopener\">Learn more</a>"
  ]
 }
];
