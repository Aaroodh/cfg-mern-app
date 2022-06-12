import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Courses", "Number Of Students"],
    ["Spoken English", 85],
    ["Para Nursing", 25],
    ["Tailoring", 29],
    ["Digital Marketing", 32],
    ["Teacher Training", 47],
];
export const data2 = [
    ["Men", "Women"],
    ["Spoken English", 85],
    ["Para Nursing", 25],
    ["Tailoring", 29],
    ["Digital Marketing", 32],
    ["Teacher Training", 47],
];

export const options1 = {
    title: "Deonar-Total No Of Students per Course",

};

export const options2 = {
    title: "Khar-Total No Of Students per Course",

};

export const options3 = {
    title: "Chembur-Total No Of Students per Course",

};

export const options4 = {
    title: "Nerul-Total No Of Students per Course",

};
export const options5 = {
    title: "Trombay-Total No Of Students per Course",

};
const Home = () => {
    return (<div><Chart
        chartType="PieChart"
        data={data}
        options={options1}
        width={"100%"}
        height={"400px"}
    /><hr></hr>
        <Chart
            chartType="PieChart"
            data={data}
            options={options2}
            width={"100%"}
            height={"400px"}
        /><hr></hr>
        <Chart
            chartType="PieChart"
            data={data}
            options={options3}
            width={"100%"}
            height={"400px"}
        /><hr></hr>
        <Chart
            chartType="PieChart"
            data={data}
            options={options4}
            width={"100%"}
            height={"400px"}
        /><hr></hr>
        <Chart
            chartType="PieChart"
            data={data}
            options={options4}
            width={"100%"}
            height={"400px"}
        /><hr></hr>
        <Chart
            chartType="PieChart"
            data={data}
            options={options5}
            width={"100%"}
            height={"400px"}
        /><hr></hr>
    </div>);
}

export default Home;