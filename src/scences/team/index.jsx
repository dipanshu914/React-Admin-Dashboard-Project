import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { mockDataTeam } from "../../data/mockData.js"


import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from "../../components/Header.jsx";
import { tokens } from "../../theme";



const Team = () => {
    const Theme = useTheme();
    const colors = tokens(Theme.palette.mode)

    const columns = [

        {
            field: "id", headerName: "ID",
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: 'left',
            align: 'left',
        },
        {
            field: "phone",
            headerName: "Phone",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "access",
            headerName: "Access Level",
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width="85%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        // alignItems="center"
                        borderRight="4px"
                        sx={{
                            backgroundColor:
                                access === "admin"
                                    ? colors.greenAccent[600]
                                    : colors.greenAccent[700]
                        }}
                    >
                        {access === "admin" &&
                            <AdminPanelSettingsOutlinedIcon />}
                        {access === "manager" &&
                            <SecurityOutlinedIcon />}
                        {access === "user" &&
                            <LockOpenOutlinedIcon />}
                        <Typography
                            color={colors.grey[100]}
                            sx={{ ml: "5px" }}>
                            {access}
                        </Typography>
                    </Box>
                )
            },
        }
    ]

    return (
        <Box m="20px">
            <Header title="Team" subtitle="Managing the Team Members" />
            <Box
                m="40px 0 0 0"
                height="65vh"
                maxWidth="80vw"
                display="flex"
                flexDirection="column"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                        display: "flex",
                        alignItems: "center",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },

                }}

            >
                <Box sx={{
                    flexGrow: "1",
                    overflowY: "auto",
                    m: "5px",
                }}>
                    <DataGrid
                        rows={mockDataTeam}
                        columns={columns}

                    />
                </Box>
            </Box>
        </Box >
    )
}

export default Team;