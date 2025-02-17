import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataContacts } from "../../data/mockData.js"
import { tokens } from "../../theme.js";
import Header from "../../components/Header.jsx";

const Contacts = () => {
    const Theme = useTheme();
    const colors = tokens(Theme.palette.mode)

    const columns = [

        {
            field: "id", headerName: "ID",
            flex: 0.5,
        },
        {
            field: "registrarId", headerName: "RegistrarId",
            flex: 1,
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
            flex: 1,
        },
        {
            field: "phone",
            headerName: "Phone",
            flex: 1,
            // type: "number"
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "address",
            headerName: "Address",
            flex: 2,

        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
            headerAlign: 'right',
            align: 'right',
        },
        {
            field: "zipCode",
            headerName: "zipCode",
            flex: 1,
            type: "number"
        }
    ]

    return (
        <Box m="20px">
            <Header
                title="CONTACTS"
                subtitle="List of Contacts for Future Reference" />
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
                        // display: "flex",
                        // alignItems: "center",
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
                    "& .MuiDataGrid-toolbarContainer .MuiButtonBase-root": {
                        color: `${colors.grey[100]} !important`
                    },
                }}

            >
                <Box sx={{
                    flexGrow: "1",
                    overflowY: "auto",
                    m: "5px",
                }}>
                    <DataGrid
                        rows={mockDataContacts}
                        columns={columns}
                        slots={{ toolbar: GridToolbar }}
                    />
                </Box>
            </Box>
        </Box >
    )
}

export default Contacts;