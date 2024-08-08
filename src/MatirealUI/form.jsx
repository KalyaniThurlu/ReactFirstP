
import React from "react";
import { TextField, Button, ButtonGroup, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import NavigationIcon from "@mui/icons-material/Navigation";

export function Exform() {
    return (
        <div className="container-fluid" style={{ padding: '2rem' }}>
            <TextField 
                label="Outlined" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
            />
            <ButtonGroup size="small" aria-label="small button group">
                <Button color="secondary">Button 1</Button>
                <Button color="info">Button 2</Button>
                <Button color="primary">Button 3</Button>
            </ButtonGroup>
            <ButtonGroup color="secondary" aria-label="medium button group" style={{ marginTop: '1rem' }}>
                <Button>Button A</Button>
                <Button>Button B</Button>
                <Button>Button C</Button>
            </ButtonGroup>
            <div style={{ marginTop: '1rem' }}>
                <Fab size="small" color="info" aria-label="edit" style={{ marginRight: "0.5rem" }}>
                    <EditIcon />
                </Fab>
                <Fab size="medium" color="secondary" aria-label="edit" style={{ marginRight: '0.5rem' }}>
                    <EditIcon />
                </Fab>
                <Fab color="secondary" aria-label="add" style={{ marginLeft: '0.5rem' }}>
                    <AddIcon />
                </Fab>
                <Fab variant="extended" color="primary" style={{ marginTop: '1rem' }}>
                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                </Fab>
            </div>
        </div>
    );
}
