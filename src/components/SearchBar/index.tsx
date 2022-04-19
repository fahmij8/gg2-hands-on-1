import { useDispatch } from "react-redux";
import { setSearchQuery } from "store/search-slice";
import { useState, useEffect } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

function SearchBar() {
    const [inputQuery, setInputQuery] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const debouncedQuery = setTimeout(() => {
            dispatch(setSearchQuery(inputQuery));
        }, 500);
        return () => clearTimeout(debouncedQuery);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputQuery]);

    return (
        <>
            <TextField
                data-testid="search-field"
                id="outlined-basic"
                label="Type your search here"
                variant="outlined"
                value={inputQuery}
                sx={{
                    marginBottom: "1rem",
                }}
                onChange={(event) => setInputQuery(event.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <svg
                                style={{
                                    width: "24px",
                                    height: "24px",
                                }}
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill="#333"
                                    d="M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896
								c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519
								c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461
								s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z"
                                ></path>
                            </svg>
                        </InputAdornment>
                    ),
                }}
            />
        </>
    );
}

export default SearchBar;
