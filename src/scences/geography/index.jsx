import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoCharts";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";


const Geography = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box m="20px">
            <Header
                title="Geography Chart"
                subtitle="Simple Geography Charts" />

            <Box
                sx={{
                    width: `80vw`,
                    overflowX: 'auto',
                    height: "70vh",
                    border: `1px solid ${colors.grey[100]}`,
                    borderRadius: "4px"
                }}
            >
                <GeoChart />
            </Box>
        </Box >
    )
}

export default Geography;