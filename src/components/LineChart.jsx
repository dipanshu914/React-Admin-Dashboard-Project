import { ResponsiveLine } from '@nivo/line'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
// import { mockLineData as data } from '../data/mockData'
import { LineChart } from '@mui/x-charts/LineChart';

const LineCharts = ({ isDashboard = false }) => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (

        <LineChart
            sx={{
                width: '100%',
                height: '100%'
            }}
            series={[
                { data: japanData, label: 'Japan', color: '#fdb462' },
                { data: franceData, label: 'France' },
                { data: usData, label: 'US' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
        />

    )
}

// Line Chart data

const japanData = [101, 75, 36, 216, 35, 236, 88, 232, 281, 1, 34, 14];
const franceData = [212, 190, 270, 216, 9, 175, 33, 189, 97, 87, 299, 251];
const usData = [191, 136, 91, 190, 211, 152, 189, 152, 9, 187, 149, 25];
const xLabels = [
    "plane",
    "helicopter",
    "boat",
    "train",
    "subway",
    "bus",
    "car",
    "moto",
    "bicycle",
    "horse",
    "skateboard",
    "others",
];

export default LineCharts
