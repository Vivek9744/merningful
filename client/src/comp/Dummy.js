import React, { useState,useEffect } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { useNavigate } from "react-router-dom";
// import { User } from "./App";
import { useContext } from "react";
import FileUploadComponent from './Fileupload';

import {User} from '../context/User'
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
  const {Img}=useContext(User)
  // console.log("vivek",Img);
  const [value, setValue] = useState(0);
  const [clubName, setClubName] = useState("");
  const [clubDescription, setClubDescription] = useState("");
  const [data, setData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChangeSlider = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };
  const handleFileSelect = (file) => {
    setSelectedFile(file); // Set the selected file in state
  };

  useEffect(() => {
    // console.log(Img.email);
    const fetchClubs = async () => {
      try {
        console.log(Img.email);
        const response = await axios.post("http://localhost:8003/showclub", {user: Img.email});
        setData(response.data); // Update state with fetched clubs
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching clubs:", error);
      }
    };
    fetchClubs();
  }, []);
  console.log("sv",selectedFile);
  console.log(data);
   // Hook for navigation
   const navigate = useNavigate();
  const handleBackToDashboard = () => {
    navigate("/dashboard"); // Navigate to /dashboard route when the back button is clicked
  };
  const handleCreateClub = async () => {
    console.log("Club Name:", clubName);
    console.log("Club Description:", clubDescription);
    console.log("Leader Email:", Img.email);
    console.log("Selected File:", selectedFile);

    try {
        // Upload the file
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("email", Img.email);
        const uploadResponse = await axios.post("http://localhost:8003/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("File uploaded:", uploadResponse.data);

        // Extract file information
        const { filename } = uploadResponse.data;

        // Create the club with the file information
        const createClubResponse = await axios.post("http://localhost:8003/createclub", {
            clubName: clubName,
            description: clubDescription,
            leader: Img.email,
            file: filename, // Assuming the file information is stored in the database under the field 'file'
        });
        console.log("Club created successfully:", createClubResponse.data);

        // Clear the form fields after successful club creation
        setClubName("");
        setClubDescription("");
    } catch (error) {
        console.error("Error creating club:", error);
    }
};

  return (
    <>
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
      {data.map((club, i) => (
        <Accordion key={i}>
          <AccordionDetails>
            <Typography>
              <strong>Club Name:</strong> {club.clubName}<br />
              <strong>Description:</strong> {club.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
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
              <FileUploadComponent onFileSelect={handleFileSelect} />

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
    <Button variant="contained" color="primary" onClick={handleBackToDashboard}>
          Back to Dashboard
        </Button>
    </>
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
