export const statisticsData = [
    { label: "Users", value: 100 },
    { label: "Orders", value: 200 },
    { label: "Revenue", value: 5000 },
  ];
  
  export const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Users",
        data: [12, 19, 3, 5, 2, 3, 15],
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };
  
  export const barChartData = {
    labels: ["Developer", "Data Analyst", "DevOps", "Marketing Manager"],
    datasets: [
      {
        label: "Jobs",
        data: [50, 30, 25, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  