import React, { useState, useEffect } from "react";

import axios from "axios";
import Loading from "./components/Loading";
import { Grid } from "@material-ui/core";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    axios
      .get("https://api.collectapi.com/corona/countriesData", {
        headers: {
          "content-type": "application/json",
          authorization: `apikey ${process.env.REACT_APP_SOME_VARIABLE}`,
        },
      })
      .then((res) => {
        setLoading(false);
        console.log(res.data.result);
        setData(res.data.result);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Grid container direction="column" justify="center" alignItems="center">
        <h2>Covid19 Daily Report</h2>
        {loading ? <Loading /> : <Table data={data} />}
      </Grid>
    </div>
  );
}

export default App;
