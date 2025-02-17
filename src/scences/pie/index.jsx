import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {

    return (
        <Box m="20px">
            <Header
                title="Pie Chart"
                subtitle="Simple Pie Charts" />

            <Box
                sx={{
                    width: `calc(100% - 5vw)`,
                    overflowX: 'auto',
                    height: "70vh"
                }}
            >
                <PieChart />
            </Box>
        </Box >
    )
}

export default Pie;