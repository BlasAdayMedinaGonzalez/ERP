import {Bar} from 'react-chartjs-2';
import {useState} from 'react'
import Chart from 'chart.js/auto'

const scores =[5,4,3];


const Grafica = ({employees}) => {


  const employee_names = employees.data.map(employee => employee.first_name);
  const employee_notas = employees.data.map(employee => employee.rendimiento);

      const data = {
        labels: employee_names,
        datasets:[{
          label: 'Mayor Rendimiento Empleados',
          data: employee_notas,
          backgroundColor: ["blue", "red", "purple", "yellow", "green"]
        }]
        
    }
    const options = {
        responsive: true
    }
  

  return (
    <>
    <Bar data={data} height={100} width={500} options={options} />
    </>
    
    
  )
}

export default Grafica