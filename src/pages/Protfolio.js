import React, { Component } from 'react';
// import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import PortfolioHistory from "../components/portfolio/PortfolioHistory"
import FundsHistory from "../components/portfolio/FundsHistory"
// import SetTradeHistory from "../components/profile/SetTradeHistory";
// import SetFundsHistory from "../components/profile/SetFundsHistory";
import { currencyFormat } from "../redux/utility";
import Grid from "@material-ui/core/Grid";
class Protfolio extends Component {
    state = {
        tradeHistIsClicked: false,
        fundsHistIsClicked: false,
        fundInputIsClicked: false,
      };
    
    render() {
        // const {multi, quote, isAuthenticated, funds, classes } = this.props;

        return (
            <div style={{marginLeft:50,}}>
                  {this.props.multi !== null ? (
          <Paper
            elevation={0}
            style={{
              height: "95vh",
              overflowY: "scroll",
              marginLeft: 20,
              marginRight: 20
            }}
          >
               
            
            <h1>Protfolio Here </h1>
          
<>
            <Grid item style={{ height: 350, overflow: "auto" }}>
              <PortfolioHistory />
            </Grid>
           
             <h1>Fund History</h1>
             <Grid item style={{ height: 350, overflow: "auto" }}>
              <FundsHistory />
            </Grid>
            </>
   </Paper>
        ) : (
          <br />
        )}
            </div>
        );
    }
}

export default Protfolio;