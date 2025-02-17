import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme"
import Header from "../../components/Header"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataInvoices } from "../../data/mockData.js"


// Invoices
const Invoices = () => {
    const Theme = useTheme()
    const colors = tokens(Theme.palette.mode)

    const columns = [
        {
            field: "id",
            headerName: "ID",
        },
        {
            field: "name",
            headerName: "Name",
            cellClassName: "name-column--cell",
            flex: 1
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1
        },

        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => {
                <Typography colors={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>
            }
        },
        {
            field: "phone",
            headerName: "Phone No.",
            flex: 1
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1
        }
    ]

    return (
        <Box m="20px">
            <Header
                title="INVOICES"
                subtitle="List of Invoice Balances"
            />
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
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    }
                }}
            >
                <Box sx={{
                    flexGrow: "1",
                    overflowY: "auto",
                    m: "5px",
                }}>
                    <DataGrid
                        rows={mockDataInvoices}
                        columns={columns}
                        checkboxSelection
                    />
                </Box>
            </Box>
        </Box >
    )

}

export default Invoices