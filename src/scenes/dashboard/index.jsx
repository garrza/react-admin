import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mock-data";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Diversity3Icon from "@mui/icons-material/Diversity3";
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
        <Box>
            <Button
            sx={{
                backgroundColor: colors.blue[300], 
                color: colors.black[900], 
                fontWeight: "bold", 
                padding: "10px 20px"
            }}
            >
                <DownloadOutlinedIcon sx={{ mr: "10px"}}/>
                Download Reports
            </Button>
        </Box>
        </Box>

        {/* GRID & CHARTS */}
        <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoFlow="140px"
        gap="20px">
            {/* ROW 1 */}
            <Box 
            gridColumn="span 3" 
            backgroundColor={colors.purple[400]} 
            display="flex" alignItems="center" 
            justifyContent="center"
            borderRadius="10px">
                <StatBox 
                title="12,300"
                subtitle="Vinland population "
                progress=".75"
                increase="+20%"
                icon={
                    <Diversity3Icon sx={{color: colors.black[100], fontSize: "26px"}}/>
                }
                />
            </Box>
            <Box 
            gridColumn="span 3" 
            backgroundColor={colors.purple[400]} 
            display="flex" alignItems="center" 
            justifyContent="center"
            borderRadius="10px">
                <StatBox 
                title="431,230"
                subtitle="Drink revenue"
                progress=".34"
                increase="+34%"
                icon={
                    <PointOfSaleIcon sx={{color: colors.black[100], fontSize: "26px"}}/>
                }
                />
            </Box>
            <Box 
            gridColumn="span 3" 
            backgroundColor={colors.purple[400]} 
            display="flex" alignItems="center" 
            justifyContent="center">
                <StatBox 
                title="392,202"
                subtitle="New vikings"
                progress=".70"
                increase="+4%"
                icon={
                    <PersonAddIcon sx={{color: colors.black[100], fontSize: "26px"}}/>
                }
                />
            </Box>
            <Box 
            gridColumn="span 3" 
            backgroundColor={colors.purple[400]} 
            display="flex" alignItems="center" 
            justifyContent="center">
                <StatBox 
                title="1,332,202"
                subtitle="Horses ridden"
                progress=".600"
                increase="+10%"
                icon={
                    <TrafficIcon sx={{color: colors.black[100], fontSize: "26px"}}/>
                }
                />
            </Box>
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.purple[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
            padding="20px"
            borderRadius="10px"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.black[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.blue[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.blue[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.purple[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.purple[500]}`}
            colors={colors.black[100]}
            p="15px"
          >
            <Typography color={colors.black[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.purple[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.blue[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.black[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.black[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.blue[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.purple[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.yellow[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.purple[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.purple[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
};


export default Dashboard;