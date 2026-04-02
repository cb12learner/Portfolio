import {
  ResponsiveContainer, ComposedChart, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts'
import { schoolProjects } from '../data/schoolProjects'
import styles from './SchoolProjects.module.css'

function ParetoWithCumulative({ chart }) {
  const total = chart.data.reduce((s, d) => s + d.count, 0)
  let running = 0
  const enriched = chart.data.map((d) => {
    running += d.count
    return { ...d, cumPct: parseFloat((running / total * 100).toFixed(1)) }
  })

  return (
    <div className={styles.chartBlock}>
      <p className="chart-label">{chart.title}</p>
      <p className="chart-desc">{chart.description}</p>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={enriched} margin={{ top: 4, right: 40, left: -20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="defect" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} tickLine={false}
            angle={-35} textAnchor="end" interval={0} />
          <YAxis yAxisId="left" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} tickLine={false} axisLine={false} />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 100]}
            tick={{ fontSize: 11, fill: 'var(--text-muted)' }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip
            contentStyle={{ fontSize: '0.82rem', borderRadius: '8px', border: '1px solid var(--border)' }}
            formatter={(value, name) => name === 'Cumulative %' ? [`${value}%`, name] : [value, name]}
          />
          <Legend verticalAlign="top" wrapperStyle={{ fontSize: '0.82rem', paddingBottom: '8px' }} />
          <ReferenceLine yAxisId="right" y={80} stroke="#fca5a5" strokeDasharray="5 3" strokeWidth={1}
            label={{ value: '80%', position: 'right', fill: '#fca5a5', fontSize: 11, fontWeight: 600 }} />
          <Bar yAxisId="left" dataKey="count" name="Count" fill="var(--accent)" radius={[4, 4, 0, 0]} />
          <Line yAxisId="right" type="monotone" dataKey="cumPct" name="Cumulative %" stroke="#f59e0b"
            strokeWidth={2} dot={{ r: 3, fill: '#f59e0b', strokeWidth: 0 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

function IMRChart({ chart }) {
  const mrData = chart.data.map((v, i) => ({
    day: `Day ${i + 1}`,
    value: v,
    mr: i === 0 ? null : parseFloat(Math.abs(v - chart.data[i - 1]).toFixed(1)),
  }))
  const mrValues = mrData.slice(1).map((d) => d.mr)
  const mrBar = mrValues.reduce((s, v) => s + v, 0) / mrValues.length
  const mrUCL = parseFloat((3.267 * mrBar).toFixed(1))

  return (
    <div className={styles.chartBlock}>
      <p className="chart-label">{chart.title}</p>
      <p className="chart-desc">{chart.description}</p>
      <p className={styles.panelLabel}>Individuals Chart</p>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={mrData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="day" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} tickLine={false} />
          <YAxis domain={['auto', 'auto']} tick={{ fontSize: 11, fill: 'var(--text-muted)' }} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ fontSize: '0.82rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
          <ReferenceLine y={chart.ucl} stroke="#fca5a5" strokeDasharray="4 2"
            label={{ value: `UCL=${chart.ucl}`, position: 'right', fill: '#fca5a5', fontSize: 10 }} />
          <ReferenceLine y={chart.mean} stroke="#9ca3af" strokeDasharray="4 2"
            label={{ value: `X̄=${chart.mean}`, position: 'right', fill: '#9ca3af', fontSize: 10 }} />
          <ReferenceLine y={chart.lcl} stroke="#fca5a5" strokeDasharray="4 2"
            label={{ value: `LCL=${chart.lcl}`, position: 'right', fill: '#fca5a5', fontSize: 10 }} />
          <Line type="monotone" dataKey="value" name="Individual" stroke="var(--accent)" strokeWidth={2}
            dot={{ r: 3, fill: 'var(--accent)', strokeWidth: 0 }} />
        </LineChart>
      </ResponsiveContainer>
      <p className={styles.panelLabel} style={{ marginTop: '12px' }}>Moving Range Chart</p>
      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={mrData.slice(1)} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="day" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} tickLine={false} />
          <YAxis domain={[0, 'auto']} tick={{ fontSize: 11, fill: 'var(--text-muted)' }} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ fontSize: '0.82rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
          <ReferenceLine y={mrUCL} stroke="#fca5a5" strokeDasharray="4 2"
            label={{ value: `UCL=${mrUCL}`, position: 'right', fill: '#fca5a5', fontSize: 10 }} />
          <ReferenceLine y={parseFloat(mrBar.toFixed(1))} stroke="#9ca3af" strokeDasharray="4 2"
            label={{ value: `MR̄=${mrBar.toFixed(1)}`, position: 'right', fill: '#9ca3af', fontSize: 10 }} />
          <Line type="monotone" dataKey="mr" name="Moving Range" stroke="var(--accent)" strokeWidth={2}
            dot={{ r: 3, fill: 'var(--accent)', strokeWidth: 0 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

function XbarChart({ chart }) {
  const data = chart.data.map((v, i) => ({ subgroup: i + 1, mean: v }))

  const CustomDot = (props) => {
    const { cx, cy, payload } = props
    const outOfControl = payload.mean > chart.ucl || payload.mean < chart.lcl
    return <circle cx={cx} cy={cy} r={4} fill={outOfControl ? '#ef4444' : 'var(--accent)'} strokeWidth={0} />
  }

  return (
    <div className={styles.chartBlock}>
      <p className="chart-label">{chart.title}</p>
      <p className="chart-desc">{chart.description}</p>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 4, right: 56, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="subgroup" type="number" tick={{ fontSize: 10, fill: 'var(--text-muted)' }} tickLine={false}
            interval={Math.floor(data.length / 8)} domain={[1, data.length]} />
          <YAxis
            domain={[
              parseFloat((chart.lcl - 0.01).toFixed(3)),
              parseFloat((chart.ucl + 0.01).toFixed(3)),
            ]}
            tick={{ fontSize: 11, fill: 'var(--text-muted)' }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => v.toFixed(3)}
          />
          <Tooltip
            contentStyle={{ fontSize: '0.82rem', borderRadius: '8px', border: '1px solid var(--border)' }}
            formatter={(v) => [v.toFixed(5), 'X̄']}
          />
          <ReferenceLine y={chart.ucl} stroke="#fca5a5" strokeDasharray="4 2"
            label={{ value: `UCL=${chart.ucl}`, position: 'right', fill: '#fca5a5', fontSize: 10 }} />
          <ReferenceLine y={chart.mean} stroke="#9ca3af" strokeDasharray="4 2"
            label={{ value: `X̄=${chart.mean}`, position: 'right', fill: '#9ca3af', fontSize: 10 }} />
          <ReferenceLine y={chart.lcl} stroke="#fca5a5" strokeDasharray="4 2"
            label={{ value: `LCL=${chart.lcl}`, position: 'right', fill: '#fca5a5', fontSize: 10 }} />
          <Line type="monotone" dataKey="mean" name="Subgroup Mean" stroke="var(--accent)"
            strokeWidth={2} dot={<CustomDot />} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

function CostChart({ chart }) {
  return (
    <div className={styles.chartBlock}>
      <p className="chart-label">{chart.title}</p>
      <p className="chart-desc">{chart.description}</p>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={chart.data} layout="vertical" margin={{ top: 4, right: 32, left: 64, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
          <XAxis type="number" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} tickLine={false} axisLine={false} tickFormatter={v => `$${v}`} />
          <YAxis type="category" dataKey="category" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} tickLine={false} axisLine={false} width={90} />
          <Tooltip
            contentStyle={{ fontSize: '0.82rem', borderRadius: '8px', border: '1px solid var(--border)' }}
            formatter={(v) => [`$${v.toFixed(2)}`, 'Cost/unit']}
          />
          <Bar dataKey="cost" name="Cost/unit" fill="var(--accent)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

function VideoBlock({ chart }) {
  return (
    <div className={styles.chartBlock}>
      <p className="chart-label">{chart.title}</p>
      <p className="chart-desc">{chart.description}</p>
      <video src={chart.src} controls style={{ width: '100%', borderRadius: '8px', marginTop: '8px' }} />
    </div>
  )
}

function ChartRenderer({ chart }) {
  if (chart.type === 'pareto-cumulative') return <ParetoWithCumulative chart={chart} />
  if (chart.type === 'imr') return <IMRChart chart={chart} />
  if (chart.type === 'xbar') return <XbarChart chart={chart} />
  if (chart.type === 'cost') return <CostChart chart={chart} />
  if (chart.type === 'video') return <VideoBlock chart={chart} />
  return null
}

export default function SchoolProjects() {
  return (
    <div className="page-container">
      <h1 className="page-title" style={{ marginBottom: '28px' }}>School Projects</h1>

      {schoolProjects.map((project) => (
        <div key={project.id} className="card">
          <div className={styles.header}>
            <div>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.meta}>{project.course} · {project.semester}</p>
            </div>
            {project.labReport && (
              <a className={styles.reportBtn} href={project.labReport} target="_blank" rel="noreferrer">
                View Report ↗
              </a>
            )}
          </div>

          <p className={styles.summary}>{project.summary}</p>

          <div className={styles.results}>
            <p className={styles.resultsLabel}>Key Results</p>
            <ul className="results-list">
              {project.results.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>

          {project.charts.length > 0 && (
            <div className={styles.charts}>
              {project.charts.map((chart, i) => (
                <ChartRenderer key={i} chart={chart} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
