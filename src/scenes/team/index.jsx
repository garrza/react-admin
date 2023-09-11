import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mock-data";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
        field: "id", 
        headerName: "ID"
        },
        {
        field: "name", 
        headerName: "Name", 
        flex: 1, 
        cellClassName: "name-column--cell"
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
        field: "access", 
        headerName: "Access Level", 
        flex: 1, 
        renderCell: ({ row: {access}}) => {
            return (
                <Box
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                    access === "admin"
                    ? colors.purple[600]
                    : colors.purple[700]
                }
                borderRadius="4px"
                >
                    { access === "admin" && <AdminPanelSettingsOutlinedIcon /> }
                    { access === "manager" && <SecurityOutlinedIcon /> }
                    { access === "user" && <LockOpenOutlinedIcon /> }
                    <Typography color={colors.black[100]} sx={{ ml: "5px"}}>
                        {access}
                    </Typography>
                </Box>
            );
        }
    },
    ]

    return (
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing Team members" />
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
            }
            }>
                <DataGrid 
                // Data usually data goes into rows section in datagrid
                rows={mockDataTeam}
                columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Team;