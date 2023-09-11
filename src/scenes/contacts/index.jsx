import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mock-data";
import Header from "../../components/header";
import { useTheme } from "@mui/material";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
        field: "id", 
        headerName: "ID",
        flex: "0.5",
        },
        {
        field: "registrarId", 
        headerName: "Registar ID", 
        },
        {
        field: "age", 
        headerName: "Age", 
        type: "number", 
        headerAlign: "left"
        },
        { 
        field: "phone", 
        headerName: "Phone Number", 
        flex: 1
        },
        { 
        field: "email", 
        headerName: "Email", 
        flex: 1
        },
        { 
        field: "address", 
        headerName: "Address", 
        flex: 1
        },
        { 
        field: "city", 
        headerName: "City", 
        flex: 1
        },
        { 
        field: "zipCode", 
        headerName: "Zip Code", 
        flex: 1
        },
    ]

    return (
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List Of Contacts" />
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
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.black[100]} !important`,
                }
            }
            }>
                <DataGrid 
                // Data usually data goes into rows section in datagrid
                rows={mockDataContacts}
                columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Contacts;