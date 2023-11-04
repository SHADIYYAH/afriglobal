import DataTable from "react-data-table-component";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

// import { Doughnut } from "react-chartjs-2";
// ChartJS.register(ArcElement, Tooltip, Legend);
import { ResponsiveContainer, BarChart, Bar, Tooltip, XAxis } from "recharts";
const Main = () => {
  const dataChart = {
    labels: ["Paid", "	Unpaid", "	All Policies", "Qoutes Required"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const customStyles = {
    rows: {
      style: {
        minHeight: "55px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
  };

  const columns = [
    {
      name: "Customer_Name",
      selector: (row) => row.Customer_Name,
    },
    {
      name: "Policy_Start_Date",
      selector: (row) => row.Policy_Start_Date,
    },
    {
      name: "Policy_End_Date",
      selector: (row) => row.Policy_End_Date,
    },
    {
      name: "Payment_Status",
      selector: (row) => row.Payment_Status,
    },
    {
      name: "Created_At",
      selector: (row) => row.Created_At,
    },
  ];

  const data = [
    {
      id: 1,
      Customer_Name: "Halimah",
      Policy_Start_Date: new Date(),
      Policy_End_Date: new Date(),
      Payment_Status: "Pending",
      Created_At: new Date(),
    },
    {
      id: 2,
      Customer_Name: "Shadiyyah",
      Policy_Start_Date: new Date(),
      Policy_End_Date: new Date(),
      Payment_Status: "Pending",
      Created_At: new Date(),
    },
    {
      id: 3,
      Customer_Name: "Ola",
      Policy_Start_Date: new Date(),
      Policy_End_Date: new Date(),
      Payment_Status: "Pending",
      Created_At: new Date(),
    },
    {
      id: 4,
      Customer_Name: "Rosh",
      Policy_Start_Date: new Date(),
      Policy_End_Date: new Date(),
      Payment_Status: "Pending",
      Created_At: new Date(),
    },
    {
      id: 5,
      Customer_Name: "Wale",
      Policy_Start_Date: new Date(),
      Policy_End_Date: new Date(),
      Payment_Status: "Pending",
      Created_At: new Date(),
    },
    {
      id: 6,
      Customer_Name: "Faruq",
      Policy_Start_Date: new Date(),
      Policy_End_Date: new Date(),
      Payment_Status: "Pending",
      Created_At: new Date(),
    },
    {
      id: 7,
      Customer_Name: "Zayd",
      Policy_Start_Date: new Date(),
      Policy_End_Date: new Date(),
      Payment_Status: "Pending",
      Created_At: new Date(),
    },
    {
      id: 8,
      Customer_Name: "Taiwo",
      Policy_Start_Date: new Date(),
      Policy_End_Date: new Date(),
      Payment_Status: "Pending",
      Created_At: new Date(),
    },
    {
      id: 9,
      Customer_Name: "Nike",
      Policy_Start_Date: new Date(),
      Policy_End_Date: new Date(),
      Payment_Status: "Pending",
      Created_At: new Date(),
    },
    {
      id: 10,
      Customer_Name: "Ali",
      Policy_Start_Date: new Date(),
      Policy_End_Date: new Date(),
      Payment_Status: "Pending",
      Created_At: new Date(),
    },
  ];
  return (
    <div>
      <div>
        <ResponsiveContainer width="50%" aspect={3}>
          <BarChart data={dataChart} width={400} height={400}>
            {/* <XAxis dataKey/> */}
            <Tooltip />
            <Bar />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="my-[4rem] hover:bg-[#d7ecfb] ">
          <DataTable className="bg-red-700" columns={columns} data={data} customStyles={customStyles} />
        </div>
    </div>
  );
};

export default Main;
