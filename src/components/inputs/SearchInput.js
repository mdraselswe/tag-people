import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const useStyles = makeStyles(theme => ({
    inputRoot: {
      '& label.Mui-focused': {
        color: '#079D43',
        fontWeight: 600,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#A0E4BE',
      },
      '& .MuiInput-underline.Mui-error:after': {
        borderBottomColor: '#f44336',
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: '#D7D7DD',
      },
      '&:hover .MuiInput-underline:before': {
        borderBottomColor: '#A0E4BE',
      },
      '& .MuiInputLabel-shrink': {
        color: '#079D43',
        fontWeight: 600,
      },
  
      '& .MuiInputBase-root': {
        color: '#333333',
      },
  
      // When variant is outlined
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#D7D7DD',
        },
        '&:hover fieldset': {
          borderColor: '#D7D7DD',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#D7D7DD',
          borderWidth: '1px',
        },
      },
      '& .MuiOutlinedInput-input': {
        padding: 14,
      },
      '& .MuiInputLabel-outlined': {
        transform: 'translate(14px, 15px) scale(1)',
      },
      '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
        transform: 'translate(14px, -6px) scale(.75)',
      },
  
      // When Multiline Input
      '& .MuiOutlinedInput-multiline': {
        padding: 5,
      },
  
      // Helper Text
      '& .MuiFormHelperText-contained': {
        margin: '8px 0 0',
      },
    },
  }));

const SearchInput = () => {
  const classes = useStyles();

  return (
    <TextField
      id="outlined-search"
      label="Search"
      type="search"
      variant="outlined"
      classes={{ root: classes.inputRoot }}
      InputProps={{
        endAdornment: <SearchIcon />
      }}
    />
  );
};

export default SearchInput;
