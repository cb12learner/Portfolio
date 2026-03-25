import styles from './PersonalProjects.module.css'

const project = {
  title: 'End-to-End Production Process Design',
  status: 'In Progress',
  expectedCompletion: 'Summer 2026',
  description:
    'A self-directed project that walks through the full lifecycle of bringing a physical product to market from an industrial engineering perspective. The goal is to demonstrate competency across product design, manufacturing systems, and financial viability — the core pillars of production engineering.',
  phases: [
    {
      id: 'design',
      label: 'Phase 1 — Product Design',
      status: 'In Progress',
      progress: 65,
      summary:
        'Selecting and designing a manufacturable consumer product. Builds on prior DFM/DFA and SolidWorks work from ISEN 210. Includes material selection, tolerance analysis, and design decisions that minimize downstream production cost and complexity.',
      deliverables: ['Product specification sheet', 'CAD model (SolidWorks)', 'DFM analysis memo'],
    },
    {
      id: 'simulation',
      label: 'Phase 2 — Manufacturing Process Simulation',
      status: 'Not Started',
      progress: 0,
      summary:
        'Build a discrete-event simulation model of the production line in Simio. Simulate machine utilization, WIP queues, and throughput under various staffing and batch-size scenarios. Identify bottlenecks and propose layout or scheduling improvements.',
      deliverables: ['Simio simulation model', 'Scenario analysis report', 'Bottleneck summary'],
    },
    {
      id: 'cost',
      label: 'Phase 3 — Cost Analysis',
      status: 'Not Started',
      progress: 0,
      summary:
        'Develop a full cost model covering direct materials, direct labor, overhead allocation, and tooling amortization. Build a break-even analysis and sensitivity model in Excel showing how the product economics change with volume, labor rate, and material cost assumptions.',
      deliverables: ['Excel cost model', 'Break-even analysis', 'Sensitivity analysis chart'],
    },
  ],
}

function ProgressBar({ value }) {
  return (
    <div className={styles.progressTrack}>
      <div className={styles.progressFill} style={{ width: `${value}%` }} />
    </div>
  )
}

function StatusBadge({ status }) {
  const cls =
    status === 'In Progress'
      ? styles.badgeActive
      : status === 'Not Started'
      ? styles.badgeIdle
      : styles.badgeDone
  return <span className={`${styles.badge} ${cls}`}>{status}</span>
}

export default function PersonalProjects() {
  return (
    <div className="page-container">
      <h1 className="page-title">Personal Projects</h1>
      <p className="page-subtitle">
        Work outside the classroom — currently focused on one comprehensive systems engineering project.
      </p>

      <div className="card">
        <div className={styles.projectHeader}>
          <div>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.meta}>Expected completion: {project.expectedCompletion}</p>
          </div>
          <StatusBadge status={project.status} />
        </div>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.phases}>
          {project.phases.map((phase) => (
            <div key={phase.id} className={styles.phase}>
              <div className={styles.phaseHeader}>
                <span className={styles.phaseLabel}>{phase.label}</span>
                <StatusBadge status={phase.status} />
              </div>
              <ProgressBar value={phase.progress} />
              <p className={styles.phaseSummary}>{phase.summary}</p>
              <div className={styles.deliverables}>
                <span className={styles.delivLabel}>Deliverables:</span>
                {phase.deliverables.map((d) => (
                  <span key={d} className={styles.delivItem}>{d}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
