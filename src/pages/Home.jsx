import { useState } from "react";
import Deploy from "@/components/home-make/Deploy";
import Mint from "@/components/home-make/Mint";
import Transfer from "@/components/home-make/Transfer";
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// const navList = [
//   { label: "Deploy", tabIndex: "1" },
//   { label: "Mint", tabIndex: "2" },
//   { label: "Transfer", tabIndex: "3" },
// ]


const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  borderRadius: "20px",
  padding: "6px",
  display: "inline-flex",
  border: "1px solid rgba(33,42,54,1)",
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: "100%",
  },
  '& .MuiTabs-indicatorSpan': {
    height: "100%",
    width: '100%',
    backgroundColor: '#0CAF60',
    borderRadius: "15px"
  },

});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    transition: "color 0.3s ease-in-out",
    marginRight: theme.spacing(1),
    color: 'rgba(164,168,171,1)',
    zIndex: 10,
    '&.Mui-selected': {
      color: '#fff',
    },
    '&:hover': {
      color: '#fff',
    },
  }),
);

const Home = () => {
  const [currentTab, setCurrentTab] = useState(0);

  //切换
  const handleSwitchTab = (_, newValue) => {
    setCurrentTab(newValue);
  }


  return (
    <div className="max-w-[87.5rem] mx-auto p-10 box-border">
      <Box>
        <StyledTabs
          value={currentTab}
          onChange={handleSwitchTab}
          aria-label="styled tabs example"
        >
          <StyledTab label="Deploy" />
          <StyledTab label="Mint" />
          <StyledTab label="Transfer" />
        </StyledTabs>
        <Box sx={{ p: 3 }} />
      </Box>
      <div>
        {currentTab === 0 && <Deploy />}
        {currentTab === 1 && <Mint />}
        {currentTab === 2 && <Transfer />}
      </div>
    </div>
  )
}

export default Home;
