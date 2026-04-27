export const schoolProjects = [
  {
    id: "lab5-benchmark",
    title: "Manufacturing Facility Production Analysis",
    course: "ISEN 350 – Quality Engineering",
    semester: "Fall 2025",
    labReport: "/ISEN350_Lab5.pdf",
    summary:
      "Evaluated 20 days of production and quality data from the Mouse Factory to assess current process performance and identify the primary sources of nonconforming output. Benchmark analyses of total, good, off-spec, and bad daily parts showed that the process is stable and that average daily production corresponds to nearly 272,000 parts per million nonconforming. Out of 69 observed types of nonconformity, 6 types accounted for 75.6% and 3 types accounted for 55.7% of all defects.",
    results: [
      "Total daily output stable: mean = 806.45 parts, I-MR chart showed all 20 days within control limits",
      "Good parts yield: 591.45/day (73.3%), 95% CI (583.57, 599.33)",
      "272,000 PPM nonconforming — 3 defect types drive 55.7% of all nonconformities",
      "Button-Hole Diameter is the single largest source at 22.0% of all defects (1,059 of 4,820)",
    ],
    charts: [
      {
        type: "pareto-cumulative",
        title: "Pareto Chart of Nonconforming Parts (Lab 5)",
        description:
          "Button-Hole Diameter is the dominant defect at 22% of all nonconformities. Top 3 types (Button-Hole, SWA-Missing Teeth, Diffuser-Part Stuck) account for 55.7% of all defects across 4,820 total nonconformities.",
        data: [
          { defect: "Button-Hole Dia",     count: 1059 },
          { defect: "SWA-Missing Teeth",   count: 814  },
          { defect: "Diffuser-Part Stuck", count: 813  },
          { defect: "SWA-Shaft Pin Dia",   count: 325  },
          { defect: "Base-Part Stuck",     count: 319  },
          { defect: "Button-Mold Flash",   count: 313  },
          { defect: "Other (63 types)",    count: 1177 },
        ],
      },
    ],
  },
  {
    id: "lab7-spc",
    title: "Control Chart Implementation Analysis",
    course: "ISEN 350 – Quality Engineering",
    semester: "Fall 2025",
    labReport: "/ISEN350_Lab7.pdf",
    summary:
      "Evaluated how implementing an X-bar control chart for Button-Hole Diameter influenced production quality during Phase 2 of the Mouse Factory SPC simulation. Phase 1 established control limits from 15 retrospective subgroups (n=10) under stable conditions. Phase 2 deployed those limits across 264 real-time subgroups — 34.8% exceeded the UCL, confirming a sustained upward process shift. Despite this, good part output rose from 591.45 to 616.45/day and bad parts fell from 151.20 to 123.60/day, both statistically significant improvements.",
    results: [
      "Phase 1: 15 subgroups (n=10) all in statistical control — UCL = 0.25335 in., X̄ = 0.24140 in., LCL = 0.22946 in.",
      "Phase 2: 92 of 264 subgroup means (34.8%) exceeded UCL — sustained upward shift detected",
      "Good parts increased: 591.45 → 616.45/day (statistically significant, p < 0.001)",
      "Bad parts decreased: 151.20 → 123.60/day (statistically significant)",
      "Button-Hole nonconformities reduced 55%: 1,059 → 480 — dropped from #1 defect to #3",
    ],
    charts: [
      {
        type: "xbar",
        title: "X-bar Chart – Phase 1 (Retrospective, In Control)",
        description:
          "All 15 subgroup means fall within control limits (UCL=0.25335, LCL=0.22946). No trends, shifts, or non-random patterns — Phase 1 baseline is stable.",
        ucl: 0.25335,
        mean: 0.24140,
        lcl: 0.22946,
        data: [0.23952,0.24714,0.23928,0.24464,0.23635,0.24338,0.23767,0.24134,0.25011,0.23598,0.23776,0.24305,0.23985,0.24203,0.24297],
      },
      {
        type: "xbar",
        title: "X-bar Chart – Phase 2 (Online Monitoring, Out of Control)",
        description:
          "Phase 1 control limits overlaid on 264 Phase 2 subgroup means. 34.8% of points exceed the UCL — a sustained upward shift indicating persistent assignable-cause variation in Button-Hole Diameter.",
        ucl: 0.25335,
        mean: 0.24140,
        lcl: 0.22946,
        data: [
          0.25096,0.24570,0.26429,0.25670,0.25572,0.24605,0.24509,0.24445,0.24828,0.25274,0.25652,0.24406,0.26519,
          0.24884,0.26061,0.25153,0.25456,0.24713,0.25687,0.25419,0.24291,0.22860,0.24391,0.24027,0.23892,0.24161,
          0.24114,0.23925,0.23941,0.25078,0.25288,0.26414,0.23887,0.24707,0.24303,0.23859,0.23893,0.25532,0.24410,
          0.25935,0.24164,0.25601,0.26077,0.25223,0.26518,0.23221,0.25483,0.24943,0.25785,0.24416,0.25608,0.25484,0.23705,
          0.25894,0.24032,0.24366,0.23940,0.23478,0.23597,0.24106,0.23963,0.24337,0.24359,0.25074,0.26213,0.23655,
          0.24706,0.23839,0.25791,0.25612,0.25484,0.23728,0.23525,0.25629,0.24371,0.24312,0.26315,0.23708,0.24092,
          0.25035,0.25653,0.23611,0.24170,0.25741,0.24351,0.25770,0.25693,0.25419,0.25218,0.25119,0.25958,0.25422,
          0.24256,0.24689,0.26411,0.25924,0.24218,0.24181,0.25563,0.24471,0.25997,0.24658,0.24496,0.25567,0.24485,
          0.25909,0.24977,0.25836,0.23574,0.24202,0.26156,0.25429,0.24807,0.25314,0.25271,0.25843,0.23984,0.26190,
          0.24725,0.24689,0.25473,0.25103,0.25726,0.23635,0.25086,0.25890,0.24239,0.26236,0.25261,0.26325,0.24720,
          0.26289,0.25243,0.26206,0.23261,0.24342,0.25967,0.25423,0.23886,0.24549,0.25951,0.24008,0.24144,0.25597,0.24625,
          0.24845,0.25282,0.26090,0.24127,0.23771,0.23951,0.23497,0.25894,0.24304,0.23721,0.23898,0.24190,0.25633,
          0.23599,0.24988,0.25907,0.25982,0.25215,0.25704,0.23892,0.24373,0.25496,0.24199,0.25622,0.23439,0.26098,
          0.23702,0.25992,0.25268,0.26152,0.23688,0.26225,0.24268,0.24676,0.24171,0.26303,0.24140,0.25535,0.23829,
          0.24494,0.23916,0.23486,0.25318,0.25683,0.24071,0.24124,0.23752,0.25207,0.26196,0.22678,0.24004,0.24420,
          0.23458,0.24306,0.25811,0.25924,0.23754,0.23731,0.25619,0.24190,0.24973,0.26140,0.24460,0.25674,0.24000,0.26082,
          0.25081,0.25750,0.25845,0.23989,0.23790,0.24344,0.23911,0.23574,0.24397,0.24108,0.23868,0.24368,0.23431,
          0.25184,0.25771,0.25902,0.24591,0.25119,0.25783,0.24054,0.25187,0.25732,0.26038,0.23929,0.24244,0.23349,
          0.24119,0.24010,0.24852,0.25708,0.24191,0.26713,0.23229,0.23769,0.24000,0.25603,0.24292,0.23388,0.24494,0.24474,
          0.25360,0.25173,0.26259,0.23521,0.24089,0.25640,0.23847,0.24360,0.24563,0.26223,0.25813,0.23724,0.25191,
        ],
      },
      {
        type: "pareto-cumulative",
        title: "Pareto Chart of Nonconforming Parts (Phase 2)",
        description:
          "After implementing the Button-Hole control chart, Button-Hole Diameter dropped from #1 defect (1,059) to #3 (480). Diffuser-Part Stuck in Mold is now the dominant defect — the next target for process improvement.",
        data: [
          { defect: "Diffuser-Part Stuck", count: 842  },
          { defect: "SWA-Missing Teeth",   count: 791  },
          { defect: "Button-Hole Dia",     count: 480  },
          { defect: "SWA-Shaft Pin Dia",   count: 376  },
          { defect: "Button-Mold Flash",   count: 322  },
          { defect: "Base-Part Stuck",     count: 321  },
          { defect: "Other (63 types)",    count: 1095 },
        ],
      },
    ],
  },
  {
    id: "packaging-simulation",
    title: "Packaging & Distribution System Simulation",
    course: "ISEN 355 – System Simulation",
    semester: "Spring 2026",
    labReport: null,
    summary:
      "Built a discrete-event simulation of a 24/7 packaging and distribution facility using Simio. Items arrive via a Poisson process at 300 items/day and travel a conveyor to a single packaging station. After packaging, items route to either a domestic outgoing dock or one of two international processing clerks with different service speeds. The model captures stochastic arrivals, variable service times, and shared queue contention for international resources.",
    results: [
      "Domestic Product Cycle Time: 38.10 min",
      "International Product Cycle Time: 89.37 min",
      "Domestic Throughput: 156.3 items/day",
      "International Throughput: 144.2 items/day",
      "WIP: 13.08 items",
    ],
    charts: [
      {
        type: "video",
        title: "Simulation Recording",
        description: "Screen recording of the Simio model running at steady state.",
        src: "/Recording 2026-04-02 172732.mp4",
      },
    ],
  },
  {
    id: "lab8-zipline",
    title: "Zip Line Operation Simulation",
    course: "ISEN 355 – System Simulation",
    semester: "Spring 2026",
    labReport: "/Lab08.pdf",
    summary:
      "Built a Simio simulation of a zip line outfitter operating from 9AM to 3PM during peak tourist season. Tourists arrive in groups at an average rate of 5 per hour, with group sizes uniformly distributed from 1 to 7. Every 30 minutes starting at 9:30, an 8-minute safety video is shown in a room capped at 15 people. After the video, customers walk 10–15 minutes to the zip line, which takes 6 minutes to complete with a mandatory 3-minute safety gap between riders. Separate morning and afternoon arrival sinks tracked wait time differences across 250 replications.",
    results: [
      "Morning arrivals tracked separately from afternoon arrivals to capture empty-system advantage",
      "Average group size watching the safety video measured across all non-zero groups",
      "Zip line operation time measured from open until last customer exits (≥ 6 hours)",
      "250-day replication run used to estimate all output metrics with confidence intervals",
    ],
    charts: [
      {
        type: "video",
        title: "Simulation Recording",
        description: "Screen recording of the Simio zip line model running at steady state.",
        src: "/Lab8 Recording.mp4",
      },
    ],
  },
  {
    id: "lab4-statistics",
    title: "Descriptive Statistics, Probability, and the Central Limit Theorem",
    course: "ISEN 350 – Quality Engineering",
    semester: "Fall 2025",
    labReport: "/ISEN350_Lab4.pdf",
    summary:
      "Investigated fundamental probability and statistics concepts using Minitab. Analyzed glass bottle weight data with run charts, histograms, boxplots, and probability plots to assess process stability and normality. Demonstrated the theoretical and experimental distribution of a linkage length formed as the sum of three independent normal variables. Showed the Central Limit Theorem using Gamma-distributed data across subgroup sizes of n = 5, 15, and 30.",
    results: [
      "Bottle weights: N(325.006g, 1.121) — process stable, ~8.2 PPM defective, sigma level ≈ 4.47 (≈ 5.97 long-term)",
      "Linkage distribution: experimental N(79.009, 0.734) closely matched theoretical N(79.0, 0.738)",
      "CLT demonstrated: normality p-value improved from < 0.001 (raw Gamma data) to > 0.25 as n increased to 30",
    ],
    charts: [],
  },
]
