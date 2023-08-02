import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import "./Dashboard.css"
import { getProjects, getUsers } from "../FetchData";
const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [projects, setProjects] = useState([]);

    const statisticsData = [
        { label: "Users", value: users.length },
        { label: "Projects", value: projects.length },
      ];

  
    const fetchUserData = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };
  
    const userChartData = {
      labels: ["Users","Projects"],
      datasets: [
        {
          label: "Number of Users",
          data: [users.length, projects.length],
          backgroundColor: "rgba(54, 162, 235, 0.5)",
        },
      ],
    };




    useEffect(() => {
        fetchJobData();
        fetchUserData();
      }, []);
    
      const fetchJobData = async () => {
        const projectsData = await getProjects();
        setProjects(projectsData);
      };
    
      const jobChartData = {
        labels: ["Projects"],
        datasets: [
          {
            label: "Number of Projects",
            data: [projects.length],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      };
    Chart.register(CategoryScale);

  return (
    <div className="dashboard">
      <div className="statistics">
        <h2>Statistics</h2>
        <ul className="statistics-list">
          {statisticsData.map((stat) => (
            <li key={stat.label} className="statistics-item">
              {stat.label}: {stat.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="statistics">
        <h2>Statistics</h2>
        <ul className="statistics-list">
          {statisticsData.map((stat) => (
            <li key={stat.label} className="statistics-item">
              {stat.label}: {stat.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="chart-container">
      
        <Bar data={userChartData} />
      </div>

      <div className="chart-container">
        <Bar data={jobChartData} />
      </div>

    </div>
  );
};

export default Dashboard;
