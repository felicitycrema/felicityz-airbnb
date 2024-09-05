import React, { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@mui/icons-material/People';
import "./Search.css";

const Search = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
  
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
    <div className="search">
       <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
       <h2>
        Number of guests <PeopleIcon />
       </h2>
       <input min={0} defaultValue={2} type="number" />
       <button>Search AirBnB</button>
    </div>
  );
};

export default Search;