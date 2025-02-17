import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {

    return (
        <Box m="20px">
            <Header
                title="Bar Chart"
                subtitle="Simple Bar Charts" />

            <Box
                sx={{
                    width: `calc(100% - 5vw)`,
                    overflowX: 'auto',
                    height: "70vh"
                }}
            >
                <BarChart />
            </Box>
        </Box >
    )
}

export default Bar;