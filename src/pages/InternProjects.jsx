import {
  ResponsiveContainer, LineChart, Line, BarChart, Bar,
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ReferenceLine,
} from 'recharts'
import { internProjects } from '../data/internProjects'
import styles from './InternProjects.module.css'

function LineChartViz({ chart }) {
  return (
    <div className={styles.chartBlock}>
      <p className="chart-label">{chart.title}</p>
      <p className="chart-desc">{chart.description}</p>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={chart.data} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="week" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: 'var(--text-muted)' }} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ fontSize: '0.82rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
          <Legend wrapperStyle={{ fontSize: '0.82rem' }} />
          <Line type="monotone" dataKey="actual" name="Actual" stroke="var(--accent)" strokeWidth={2} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="forecast" name="Forecast" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 3" dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

function BarChartViz({ chart }) {
  const keys = Object.keys(chart.data[0])
  const xKey = keys[0]
  const hasBefore = 'before' in chart.data[0]
  const dataKey1 = hasBefore ? 'before' : keys[1]

  return (
    <div className={styles.chartBlock}>
      <p className="chart-label">{chart.title}</p>
      <p className="chart-desc">{chart.description}</p>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chart.data} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey={xKey} tick={{ fontSize: 11, fill: 'var(--text-muted)' }} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: 'var(--text-muted)' }} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ fontSize: '0.82rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
          {hasBefore && <Legend wrapperStyle={{ fontSize: '0.82rem' }} />}
          {hasBefore ? (
            <>
              <Bar dataKey="before" name="Records In" fill="#9ca3af" radius={[4,4,0,0]} />
              <Bar dataKey="after" name="Records Out" fill="var(--accent)" radius={[4,4,0,0]} />
            </>
          ) : (
            <Bar dataKey={dataKey1} fill="var(--accent)" radius={[4,4,0,0]} />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

function ScatterViz({ chart }) {
  return (
    <div className={styles.chartBlock}>
      <p className="chart-label">{chart.title}</p>
      <p className="chart-desc">{chart.description}</p>
      <ResponsiveContainer width="100%" height={240}>
        <ScatterChart margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="observed" name="Observed" type="number" domain={['auto','auto']} tick={{ fontSize: 11, fill: 'var(--text-muted)' }} tickLine={false} label={{ value: 'Observed (min)', position: 'insideBottom', offset: -2, fontSize: 11, fill: 'var(--text-muted)' }} />
          <YAxis dataKey="simulated" name="Simulated" type="number" domain={['auto','auto']} tick={{ fontSize: 11, fill: 'var(--text-muted)' }} tickLine={false} axisLine={false} label={{ value: 'Simulated', angle: -90, position: 'insideLeft', fontSize: 11, fill: 'var(--text-muted)' }} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ fontSize: '0.82rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
          <ReferenceLine segment={[{x:85,y:85},{x:125,y:125}]} stroke="#e5e7eb" strokeDasharray="4 2" />
          <Scatter data={chart.data} fill="var(--accent)" opacity={0.7} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

function ChartRenderer({ chart }) {
  if (chart.type === 'line') return <LineChartViz chart={chart} />
  if (chart.type === 'bar') return <BarChartViz chart={chart} />
  if (chart.type === 'scatter') return <ScatterViz chart={chart} />
  return null
}

export default function InternProjects() {
  return (
    <div className="page-container">
      <h1 className="page-title">Internship Projects</h1>
      <p className="page-subtitle">
        Data science and operations work from two summers of industry experience.
      </p>

      {internProjects.map((project) => (
        <div key={project.id} className="card">
          <div className={styles.projectHeader}>
            <div>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectMeta}>{project.company} · {project.location} · {project.dates}</p>
            </div>
          </div>

          <p className={styles.summary}>{project.summary}</p>

          <div className={styles.tools}>
            {project.tools.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>

          <div className={styles.charts}>
            {project.charts.map((chart, i) => (
              <ChartRenderer key={i} chart={chart} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
