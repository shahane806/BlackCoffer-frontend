import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard";
import { fetchDataRoute } from "./Api/apiRoutes";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
function App() {
  let data1 = [];
  const dispatch = useDispatch();
  const [data2, setData2] = useState(null);

  useEffect(() => {
    for (let i = 0; i < 1; i++) {
      data1 = fetchDataRoute();
      data1?.then((res) => {
        return setData2(res?.data?.data);
      });
     
    }

    data1?.then((res) => {
      return dispatch({
        type: "fetchData",
        payload: res?.data?.data,
      });
    });
   
  }, []);


  return (
    <div className="App">
       {
        data2!=null ?  <div>
      
        <div>
          <Navbar/>
        </div>
  
   
        <div>
          <Dashboard data={data2||[]} />
        </div>
     
    </div> : <div style={{display:"flex",justifyContent:"center",margin:"auto",marginTop:"200px",fontSize:"large"}}><CircularProgress/></div>
       }
    </div>
  );
}

export default App;
