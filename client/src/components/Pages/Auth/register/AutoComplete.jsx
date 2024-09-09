/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Autocomplete, TextField, Chip } from "@mui/material";

const AutoComplete = ({
  options,
  selectedOptions,
  handleOptionsChange,
  label,
  placeholder,
  multiple,
}) => {
  return (
    <div className="">
      <Autocomplete
        multiple={multiple}
        id="autocomplete-tags"
        options={options}
        value={selectedOptions}
        onChange={handleOptionsChange}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={label}
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};

export default AutoComplete;
