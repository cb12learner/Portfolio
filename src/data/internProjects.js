export const internProjects = [
  {
    id: "bhw-2025",
    title: "Process Automation & Client Development",
    company: "The BHW Group",
    location: "Austin, TX",
    dates: "May 2025 – August 2025",
    summary:
      "Built a fully automated employee vacation surveillance system in Excel using VBA, enabling management to efficiently monitor and manage leave balances without manual tracking. Also participated in client-facing business development meetings to understand needs and present company capabilities. Managed scholarship fund records, optimized online presence through SEO strategies, and leveraged AI tools to evaluate applicants and select scholarship recipients.",
    tools: ["Excel", "VBA", "SEO", "AI Tools"],
    charts: [
      {
        type: "bar",
        title: "Estimated Hours of Manual Work Eliminated per Month",
        description: "Illustrative breakdown of time saved across tasks through Excel/VBA automation.",
        data: [
          { task: "Leave Tracking", hours: 14 },
          { task: "Balance Reports", hours: 9 },
          { task: "Scholarship Review", hours: 11 },
          { task: "Record Updates", hours: 7 },
          { task: "Reporting", hours: 6 },
        ],
      },
    ],
  },
  {
    id: "bhw-2024",
    title: "Data Cleaning & Web Application Development",
    company: "The BHW Group",
    location: "Austin, TX",
    dates: "May 2024 – August 2024",
    summary:
      "Created Named Entity Recognition (NER), Clustering, and Merge/Purge scripts in Python to clean vendor and customer datasets, reducing duplicate and malformed records. Used Anomaly Detection with Python and PostgreSQL to surface discrepancies in Excel financial datasets. Delivered a React/TypeScript web application providing business users a visual interface to a REST JSON API datasource.",
    tools: ["Python", "Scikit-learn", "Pandas", "SQL", "PostgreSQL", "React", "TypeScript", "CSS"],
    charts: [
      {
        type: "bar",
        title: "Records Processed by Script Type",
        description: "Illustrative volume of dataset records cleaned through each pipeline stage.",
        data: [
          { stage: "NER", before: 8400, after: 7100 },
          { stage: "Clustering", before: 7100, after: 5900 },
          { stage: "Merge/Purge", before: 5900, after: 4800 },
        ],
      },
    ],
  },
];
