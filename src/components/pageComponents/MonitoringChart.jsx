import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell} from 'recharts';

const colors = ['#ff0000', '#228B22', '#4B0082', '#FFD700', '#87CEEB', '#1E90FF', '#FFB6C1', '#FFA500'];

const MonitoringChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Percentage" fill="#8884d8" name="Percentage">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default MonitoringChart;
