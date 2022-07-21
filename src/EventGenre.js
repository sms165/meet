import React, {useEffect, useState} from 'react';
import {
     ResponsiveContainer, PieChart, Pie,  Tooltip, Cell
  } from 'recharts';


 
const EventGenre = ({events}) => {
    const colors = ['#F72F35', '#ff9a00', '#8cff32','#00c5ff', '#ff00a7' ]
    const [data, setData] = useState([]);
    useEffect(() => {
    const getData= () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    
        const data = genres.map((genre)=>{
            const value = events.filter(({summary}) => summary.includes(genre)).length;
            return {name: genre, value};
        })
        return data;
    
      };
      setData(() => getData());
    }, [events]);

   
  return (
   
    <ResponsiveContainer height={400}>
         <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({name, percent }) => {if (percent > 0) {
                return `${name} ${(percent * 100).toFixed(0)}%`;
              }
            }}
         >
          {
      data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]}/>
      ))
    }
    <Tooltip filterNull={false} />
          </Pie>
        </PieChart>
        </ResponsiveContainer>
   
  );
}
export default EventGenre;