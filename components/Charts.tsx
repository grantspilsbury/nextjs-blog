'use client'

import { PieChart, Pie, Cell } from 'recharts'

const Charts = () => {
  const data1 = [
    {
      name: 'Group A',
      value: 400,
    },
    {
      name: 'Group B',
      value: 300,
    },
    {
      name: 'Group C',
      value: 500,
    },
    {
      name: 'Group D',
      value: 200,
    },
    {
      name: 'Group E',
      value: 278,
    },
    {
      name: 'Group F',
      value: 189,
    },
  ]

  return (
    <PieChart width={730} height={250}>
      <Pie data={data1} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
        {data1.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={['#8884d8', '#FA8072', '#AF69EE', '#3DED97', '#3AC7EB', '#F9A603'][index]}
          />
        ))}
      </Pie>
    </PieChart>
  )
}

export default Charts
