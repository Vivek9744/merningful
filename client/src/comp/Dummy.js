import React, { useState } from "react";
import {
  Slider,
  Tab,
  Tabs,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { TextField, Button, List, ListItem, ListItemText } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

function ClubManagement() {
  const [value, setValue] = useState(0);
  const [clubName, setClubName] = useState("");
  const [clubDescription, setClubDescription] = useState("");
  const handleChangeSlider = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };
  const handleCreateClub = () => {
    // Logic to create the club
    console.log("Club Name:", clubName);
    console.log("Club Description:", clubDescription);
  };
  return (
    <div className="container mx-auto text-center mt-10" style={{ background: "#f5f5f5", minHeight: "100vh" }}>
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 italic text-white p-3 rounded-lg shadow-lg text-center font-bold text-4xl">
        CLUBS
      </div>
      <div className="w-2/3 mx-auto">
        <Slider
          value={value}
          onChange={handleChangeSlider}
          aria-label="Club Management Slider"
          marks={[
            { value: 0, label: "Join Club" },
            { value: 1, label: "Create Club" },
            { value: 2, label: "Manage Club" },
          ]}
          step={1}
          min={0}
          max={2}
        />
      </div>
      <Box mt={4}>
        <Tabs value={value} onChange={handleChangeTabs} centered>
          <Tab
            label={<Typography sx={{ color: "#007bff" }}>Join Club</Typography>}
          />
          <Tab
            label={
              <Typography sx={{ color: "#007bff" }}>Create Club</Typography>
            }
          />
          <Tab
            label={
              <Typography sx={{ color: "#007bff" }}>Manage Club</Typography>
            }
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Accordion>
            <AccordionDetails>
              <Typography>Content related to joining a club...</Typography>
            </AccordionDetails>
          </Accordion>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Create Club Section</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ width: "100%" }}>
              <TextField
                fullWidth
                label="Club Name"
                variant="outlined"
                value={clubName}
                onChange={(e) => setClubName(e.target.value)}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Description"
                multiline
                rows={4}
                variant="outlined"
                value={clubDescription}
                onChange={(e) => setClubDescription(e.target.value)}
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleCreateClub}
              >
                Create Club
              </Button>
            </div>
          </AccordionDetails>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Accordion>
            <AccordionDetails>
              <Typography>Content related to managing a club...</Typography>
            </AccordionDetails>
          </Accordion>
        </TabPanel>
      </Box>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`club-management-tabpanel-${index}`}
      aria-labelledby={`club-management-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default ClubManagement;
