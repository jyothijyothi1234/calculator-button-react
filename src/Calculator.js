import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handler = (e) => {
    setInput(e.target.value);
  };
  
  return (
    <Grid container xs={12}>
      <Grid container item xs={12} sx={{ justifyContent: "center" }}>
        <h1>Calculator</h1>
      </Grid>

      <Grid container item xs={12} sx={{ justifyContent: "center" }}>
        <Grid
          item
          xs={3}
          sx={{
            height: "90px",
            width: "70px",
            border: "5px solid black",
            borderRadius: "10px",
          }}
        >
          <input
            type="text"
            style={{ height: "74px", width: "365px", fontSize: "40px" }}
            value={input}
            onChange={handler}
          />
          
        </Grid>
      </Grid>

      <Grid container item xs={12} sx={{ justifyContent: "center" }}>
        <Grid
          item
          xs={3}
          sx={{
            height: "500px",
            width: "70px",
            border: "5px solid black",
            borderRadius: "10px",
            bgcolor:"lightskyblue"
          }}
        >
          <Grid
            item
            xs={4}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              variant="contained"
              sx={{
                height: "60px",
                marginTop: "40px",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "200px",
                width: "60px",
                fontSize: "20px",
                bgcolor:"pink"
              }}
              onClick={() => setInput(input + "1")}
            >
              1
            </Button>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                marginTop: "40px",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "200px",
                width: "60px",
                fontSize: "20px",
                bgcolor:"pink"
              }}
              onClick={() => setInput(input + "2")}
            >
              2
            </Button>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                marginTop: "40px",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "200px",
                width: "60px",
                fontSize: "20px",
                bgcolor:"pink"
              }}
              onClick={() => setInput(input + "3")}
            >
              3
            </Button>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                marginTop: "40px",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "200px",
                width: "60px",
                fontSize: "30px",
                bgcolor:"lightgreen"
              }}
              onClick={() => setInput(input + "+")}
            >
              +
            </Button>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              variant="contained"
              sx={{
                height: "60px",
                marginTop: "35px",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "200px",
                width: "60px",
                fontSize: "20px",
                bgcolor:"pink"
              }}
              onClick={() => setInput(input + "4")}
            >
              4
            </Button>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                marginTop: "35px",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "200px",
                width: "60px",
                fontSize: "20px",
                bgcolor:"pink"
              }}
              onClick={() => setInput(input + "5")}
            >
              5
            </Button>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                marginTop: "35px",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "200px",
                width: "60px",
                fontSize: "20px",
                bgcolor:"pink"
              }}
              onClick={() => setInput(input + "6")}
            >
              6
            </Button>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                marginTop: "35px",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "200px",
                width: "60px",
                fontSize: "40px",
                bgcolor:"grey"
              }}
              onClick={() => setInput(input + "-")}
            >
              -
            </Button>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              variant="contained"
              sx={{
                height: "60px",
                marginTop: "35px",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "200px",
                width: "60px",
                fontSize: "20px",
                bgcolor:"pink"
              }}
              onClick={() => setInput(input + "7")}
            >
              7
            </Button>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                marginTop: "35px",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "200px",
                width: "60px",
                fontSize: "20px",
                bgcolor:"pink"
              }}
              onClick={() => setInput(input + "8")}
            >
              8
            </Button>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                marginTop: "35px",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "200px",
                width: "60px",
                fontSize: "20px",
                bgcolor:"pink"
              }}
              onClick={() => setInput(input + "9")}
            >
              9
            </Button>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                marginTop: "35px",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "200px",
                width: "60px",
                fontSize: "20px",
                bgcolor:"green"
              }}
              onClick={() => setInput(input + "*")}
            >
              x
            </Button>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              variant="contained"
              sx={{
                height: "60px",
                marginTop: "35px",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "200px",
                width: "60px",
                fontSize: "20px",
                bgcolor:"red"
              }}
              onClick={() => setInput("")}
            >
              c
            </Button>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                marginTop: "35px",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "200px",
                width: "60px",
                fontSize: "20px",
                bgcolor:"pink"
              }}
              onClick={() => setInput(input + "0")}
            >
              0
            </Button>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                marginTop: "35px",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "200px",
                width: "60px",
                fontSize: "20px",
                bgcolor:"orange"
              }}
              onClick={() => setInput(input + "/")}
            >
              /
            </Button>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                marginTop: "35px",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "200px",
                width: "60px",
                fontSize: "25px",
                bgcolor:"vilot"
              }}
              onClick={() => {
                try {
                  setInput(eval(input));
                } catch {
                  setInput("ERROR");
                }
              }}
            >
              =
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
