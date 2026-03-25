import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts'
import { semesters } from '../data/gpaData'
import styles from './GPAChart.module.css'

const chartData = semesters.map((s) => ({
  semester: s.semester,
  myGPA: s.gpa,
  classAvg: s.avgGpa,
  courses: s.courses,
}))

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null

  const entry = semesters.find((s) => s.semester === label)

  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipTitle}>{label}</p>
      <div className={styles.tooltipGpas}>
        <span className={styles.myGpa}>My GPA: {payload[0]?.value?.toFixed(2)}</span>
        <span className={styles.avgGpa}>Class Avg: {payload[1]?.value?.toFixed(2)}</span>
      </div>
      {entry && (
        <ul className={styles.courseList}>
          {entry.courses.map((c) => (
            <li key={c.code} className={styles.courseItem}>
              <span className={styles.courseCode}>{c.code}</span>
              <span className={styles.courseName}>{c.name}</span>
              <span className={styles.courseGrade}>{c.grade}</span>
              <span className={styles.courseAvg}>avg {c.classAvg.toFixed(3)}</span>
              <p className={styles.courseDesc}>{c.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function GPAChart() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.chartTitle}>Semester GPA vs. Class Averages</h3>
      <p className={styles.chartSubtitle}>
        Hover over a data point to see grades and course details for that semester.
      </p>
      <ResponsiveContainer width="100%" height={320}>
        <ComposedChart data={chartData} margin={{ top: 10, right: 16, left: -16, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis
            dataKey="semester"
            tick={{ fontSize: 12, fill: 'var(--text-muted)' }}
            tickLine={false}
            axisLine={{ stroke: 'var(--border)' }}
          />
          <YAxis
            domain={[2.4, 4.0]}
            tick={{ fontSize: 12, fill: 'var(--text-muted)' }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => v.toFixed(1)}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: '0.85rem', paddingTop: '12px', color: 'var(--text-muted)' }}
          />
          <ReferenceLine y={4.0} stroke="var(--border)" strokeDasharray="4 2" />
          <ReferenceLine y={3.0} stroke="#fca5a5" strokeDasharray="5 3" strokeWidth={1} label={{ value: '3.0', position: 'left', fill: '#fca5a5', fontSize: 11, fontWeight: 600 }} />
          <Line
            type="monotone"
            dataKey="myGPA"
            name="My GPA"
            stroke="var(--accent)"
            strokeWidth={2.5}
            dot={{ r: 5, fill: 'var(--accent)', strokeWidth: 0 }}
            activeDot={{ r: 7 }}
          />
          <Line
            type="monotone"
            dataKey="classAvg"
            name="Class Average"
            stroke="#9ca3af"
            strokeWidth={2}
            strokeDasharray="5 3"
            dot={{ r: 4, fill: '#9ca3af', strokeWidth: 0 }}
            activeDot={{ r: 6 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
