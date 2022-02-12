import React, { useState } from 'react';
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";

const App = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    return (
        <div className="App">
            <div className="navbar">
                <div className="block glow">
                    <h1>ChartJs</h1>
                </div>
            </div>
            <div className="content">
                <div className="m-item item-1">
                    <BarChart chartData={userData} />
                </div>
                <div className="m-item item-2">
                    <LineChart chartData={userData} />
                </div>
                <div className="m-item item-3">
                    <PieChart chartData={userData} />
                </div>
            </div>
        </div>
    )
}

export default App