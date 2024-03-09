import { useState, useEffect } from "react";

import Info from "./Info";
import Map from "./Map";
import Header from "./Header";

const Data = () => {
  const [clientsData, setClientsData] = useState([]);
  const [latitude, setLatitude] = useState(51.505);
  const [longitude, setLongitude] = useState(-0.09);

  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    const response = await fetch(`https://ipapi.co/${searchTerm}/json/`);
    const data = await response.json();
    if (data.latitude != undefined && data.longitude != undefined) {
      setClientsData(data);
      setLatitude(data.latitude);
      setLongitude(data.longitude);
      setSearchTerm("");
      setErrorMsg("");
    } else {
      // console.log(data.reason);
      setErrorMsg(data.reason);
    }
  };

  useEffect(() => {
    fetch(`https://ipapi.co/json/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setClientsData(data);
        setLatitude(data.latitude);
        setLongitude(data.longitude);
      });
  }, []);

  return (
    <main className="max-w-[1440px] m-auto ">
      <Header
        onSearch={handleChange}
        searchValue={searchTerm}
        onClick={handleSearch}
        onKeyDown={onKeyDown}
      />
      <div className="w-full h-[70vh] flex-wrap relative flex flex-col items-center">
        {errorMsg?.length > 0 ? (
          <div className="flex justify-between items-center md:gap-5 md:flex-row absolute z-10 w-[90%] md:w-[80%] bg-white p-6 rounded-xl  -translate-y-[40%] md:-translate-y-[50%]">
            <p className="text-red-700 text-xl">{errorMsg}</p>
          </div>
        ) : (
          <Info infoData={clientsData} />
        )}
        <Map mapCentre={[latitude, longitude]} />
      </div>
    </main>
  );
};

export default Data;
