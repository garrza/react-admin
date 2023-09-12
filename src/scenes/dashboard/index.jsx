import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mock-data";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box sx={{ m: "20px"}}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard!"/>
        </Box>
        <Box>
            <Button
            sx={{
                backgroundColor: colors.blue[300], 
                color: colors.black[900], 
                fontWeight: "bold", 
                p: "10px 20px"
            }}
            >
                <DownloadOutlinedIcon sx={{ mr: "10px"}}/>
                Download Reports
            </Button>
        </Box>

        {/* GRID & CHARTS */}
        <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoFlow="140px"
        gap="20px">
            {/* ROW 1 */}
            <Box gridColumn="span 3" backgroundColor={colors.black[900]} display="flex" alignItems="center" justifyContent="center">
                <StatBox 
                title="12,300"
                subtitle="Vinland population limit"
                progress=".75"
                increase="+20%"
                icon={
                    <EmailIcon sx={{colro: colors.blue[500], fontSize: "26px"}}/>
                }
                />
            </Box>
        </Box>
        
    </Box>
}

export default Dashboard;