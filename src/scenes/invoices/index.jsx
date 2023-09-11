import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mock-data";
import Header from "../../components/header";

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
        field: "id", 
        headerName: "ID",
        },
        { 
        field: "name", 
        headerName: "Name", 
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
        renderCell: (params) => (
            <Typography color={colors.yellow[100]} fontWeight="bold">
                ${params.row.cost}
            </Typography>
        )

        },
        { 
        field: "phone", 
        headerName: "Phone Number", 
        flex: 1
        },
        { 
        field: "date", 
        headerName: "Date", 
        flex: 1
        },
    ]

    return (
        <Box m="20px">
            <Header title="INVOICES" subtitle="List Of Invoice Balances" />
            <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .name-column--cell": {
                    color: colors.yellow[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blue[700],
                    borderBottom: "none",
                },
                "& .MuiDataGrid-footerContainer": {
                    backgroundColor: colors.blue[700],
                    borderBottom: "none",
                },
                "& .MuiCheckbox-root": {
                    color: `${colors.blue[600]} !important`,
                }
            }
            }>
                <DataGrid 
                // Data usually data goes into rows section in datagrid
                checkboxSelection
                rows={mockDataInvoices}
                columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Invoices;