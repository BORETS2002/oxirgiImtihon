import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import URL from "../API/URL";
const Search = ({ setVideosApp, setSelectedVideosApp }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([{}]);
  const SearchValue = useRef();
  const [valueSeaarch, setvalueSeaarch] = useState();
  function HandalSearch(e) {
    e.preventDefault();
    setvalueSeaarch(SearchValue.current.value);
    videoSubmit(valueSeaarch);
  }

  async function videoSubmit(searchTerm) {
    const {
      data: { items: videos },
    } = await URL.get("search", {
      params: {
        part: "snippet",
        maxResults: 4,
        key: "AIzaSyArsupE9KozJ_cR5PSJKsN4BKSRtR7aJQM",
        q: searchTerm,
      },
    });
    setVideos(videos);
    setSelectedVideos(videos[0]);
  }
  setVideosApp(videos);
  setSelectedVideosApp(selectedVideos);

  return (
    <div>
      <form
        className='d-flex justify-content-start'
        onSubmit={(e) => HandalSearch(e)}
        style={{
          width: "100%",
          maxWidth: "700px",
        }}
      >
        <input
          type='text'
          style={{
            display: "block",
            width: "100%",

            padding: "11px 11px",
            marginLeft: "20px",
            border: "none",
            background: "#EBEBEB",
            borderTopLeftRadius: "22px",
            borderBottomLeftRadius: "22px",
            color: "#30384C",
            marginRight: "auto",
            outline: "none",
          }}
          sx={{
            marginLeft: { xs: "8px", sm: "50px" },
          }}
          ref={SearchValue}
          placeholder='Search…'
        />

        <button
          className='buttonSubmit'
          type='submit'
          style={{
            border: "none",
            background: "#EBEBEB",
            borderEndEndRadius: "22px",
            borderStartEndRadius: "22px",
            outline: "none",
          }}
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default Search;
