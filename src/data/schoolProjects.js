export const schoolProjects = [
  {
    id: "quality-control",
    title: "Manufacturing Process Capability Analysis",
    course: "ISEN 350 – Quality Engineering",
    semester: "Fall 2025",
    summary:
      "Analyzed 20 days of real-world production data from a manufacturing process using Minitab and Excel. Conducted a benchmark and process capability analysis to assess stability and conformance. Determined the process was statistically stable and identified that 54.9% of all nonconformities stemmed from just 3 of 69 distinct defect types. Recommendations based on this Pareto analysis resulted in a statistically significant increase in daily conforming units produced.",
    results: [
      "Process determined to be statistically stable across all 20 days of data",
      "54.9% of nonconformities traced to 3 of 69 defect types — targeted intervention point",
      "Recommendations produced a statistically significant increase in conforming units per day",
    ],
    labReport: null,
    chartType: "pareto",
    chartData: [
      { defect: "Type 7", count: 312 },
      { defect: "Type 23", count: 287 },
      { defect: "Type 41", count: 198 },
      { defect: "Type 5", count: 89 },
      { defect: "Type 12", count: 74 },
      { defect: "Type 18", count: 61 },
      { defect: "Type 33", count: 48 },
      { defect: "Others (63)", count: 215 },
    ],
  },
  {
    id: "product-development",
    title: "Cell Phone Holder – Product Design & Cost Analysis",
    course: "ISEN 210 – Fundamentals of IE Design",
    semester: "Spring 2024",
    summary:
      "Conducted market research to develop customer specifications for a consumer cell phone holder. Applied DFM/DFA principles to drive design decisions that minimize part count, assembly complexity, and manufacturing cost. Completed a full cost analysis and produced the final design in SolidWorks, balancing manufacturability with customer requirements.",
    results: [
      "Customer spec sheet derived from structured market research and QFD methodology",
      "DFM/DFA review reduced part count and eliminated 2 assembly steps",
      "Cost analysis informed material and process selection across three design alternatives",
    ],
    labReport: null,
    chartType: "cost",
    chartData: [
      { category: "Direct Material", cost: 2.84 },
      { category: "Direct Labor", cost: 1.20 },
      { category: "Tooling (amort.)", cost: 0.65 },
      { category: "Overhead", cost: 0.91 },
      { category: "Packaging", cost: 0.38 },
    ],
  },
];
