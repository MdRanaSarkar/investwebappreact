import React, { Component } from 'react';
// import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import PortfolioHistory from "../components/portfolio/PortfolioHistory"
import FundsHistory from "../components/portfolio/FundsHistory"
// import SetTradeHistory from "../components/profile/SetTradeHistory";
// import SetFundsHistory from "../components/profile/SetFundsHistory";
import { currencyFormat } from "../redux/utility";
import Grid from "@material-ui/core/Grid";
import { PieChart } from 'react-minimal-pie-chart';
//add
import { getQuote } from "../redux/actions/iexAction";
import { addFunds } from "../redux/actions/fundsAction";
import { connect } from "react-redux";
import { getTrades} from "../redux/actions/tradeAction";
import './portfolio.css'
class Protfolio extends Component {
    state = {
        tradeHistIsClicked: false,
        fundsHistIsClicked: false,
        fundInputIsClicked: false,
      };

      
    
    render() {
        // const {multi, quote, isAuthenticated, funds, classes } = this.props;
        const { tradeData, classes,quote,funds, } = this.props;
        const { options } = this.state;

        const ab=tradeData.map((elem)=>{
          return {
            title: elem.transaction,
            value:currencyFormat(elem.quantity, 0),
          } 
        })
        return (
            <div style={{marginLeft:50, backgroundColor:"#383737"}}>
                  {this.props.multi !== null ? (
          <Paper
            elevation={0}
            style={{
              height: "95vh",
              overflowY: "scroll",
              marginLeft: 20,
              marginRight: 20,
              backgroundColor:"#e6e6e6"
            }}
          >
               <div className="row">
                 
                 <div className="col">
                   
            <h1 style={{textAlign: "center"}}>Protfolio Here </h1>
          

            <Grid item style={{ height:"100%", overflow: "auto",marginLeft:"30px", paddingBottom:"50px"}}>
              <PortfolioHistory />
            </Grid>
            </div>
            
          

           <div className="Frow">
             <div className="col">
             <h1 style={{ paddingLeft:"50px" }}>Fund History</h1>
             <Grid item style={{ height: 350, overflow: "auto",paddingLeft:"50px"}}>
              <FundsHistory />
            </Grid>
            </div>
            <div className="col" id="picharid">
            <PieChart data={[
        { title: 'BUY', value: 20, color: '#E38627' },
        { title: 'SELL', value: 30, color: '#C13C37' },
        { title: 'DEPOSIT', value: 20, color: '#6A2135' },
      ]}
       style={{height:"250px"}}
  sectorBorderColor="white"
  title="Pie Chart"
/>
</div>
</div>
            </div>
   </Paper>
        ) : (
          <br />
        )}
            </div>
        );
    }
}





const mapStateToProps = state => {
  return {
    tradeData: state.tradeReducer.tradeData,
    quote: state.iexReducer.quote,
    funds: state.fundsReducer.funds
  };
};

const mapDispatchToProps = {
  getTrades,
  addFunds
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Protfolio);

