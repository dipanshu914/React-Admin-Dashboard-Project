import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineCharts from "../../components/LineChart";

const Line = () => {

    return (
        <Box m="20px">
            <Header
                title="Line Chart"
                subtitle="Simple Line Charts" />

            <Box
                sx={{
                    width: `calc(100% - 5vw)`,
                    overflowX: 'auto',
                    height: "70vh"
                }}
            >
                <LineCharts />
            </Box>
        </Box >
    )
}

export default Line;