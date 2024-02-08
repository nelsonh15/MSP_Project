import React, { useState } from 'react';
import { Box, Card, CardContent, CardActionArea, Typography } from '@mui/material'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const shape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={-5} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <text x={cx} y={cy} dy={15} textAnchor="middle" fill={fill}>
        {payload.value} tickets
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
        {`${payload.name}`}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const DashboardPieChart = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Calculate the total value
  const total = data.reduce((acc, item) => acc + item.value, 0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ width: '100%', height: '400px', padding: '30px' }}>
      <Box>
        <Card sx={{ width: 485, height: 465, boxShadow: 3 }}>
          <CardActionArea>
            <CardContent sx={{ backgroundColor: '#668eff', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '2rem' }}>
              <Typography sx={{ color: 'white' }} component="div">
                Unresolved Tickets by Priority
              </Typography>
            </CardContent>

            <CardContent sx={{ width: '31rem', height: '27rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    activeIndex={activeIndex}
                    activeShape={shape}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={110}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                  />
                </PieChart>
              </ResponsiveContainer>
              <Typography sx={{ position: 'absolute', bottom: 10, right: 10, color: 'black' }} component="div">
                {total} total tickets
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
};

export default DashboardPieChart;