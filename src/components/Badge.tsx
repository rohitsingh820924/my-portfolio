import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import { TextField, Chip, Box } from "@mui/material";

const ChipInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [chips, setChips] = useState<string[]>([]);

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter" && inputValue.trim()) {
      setChips((prevChips) => [...prevChips, inputValue.trim()]);
      setInputValue(""); // Clear the input after adding the chip
    }
  };

  const handleDelete = (chipToDelete: string): void => {
    setChips((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  return (
    <Box>
      <TextField
        label="Type here"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        fullWidth
      />
      <Box mt={2}>
        {chips.map((chip, index) => (
          <Chip
            key={index}
            label={chip}
            onDelete={() => handleDelete(chip)}
            sx={{ marginRight: 1, marginBottom: 1 }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ChipInput;
