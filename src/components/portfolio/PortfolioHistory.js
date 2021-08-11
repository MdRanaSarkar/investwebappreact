import React from "react";
import { connect } from "react-redux";
import { getTrades, deleteTrade } from "../../redux/actions/tradeAction";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { currencyFormat } from "../../redux/utility";
import { getQuote } from "../../redux/actions/iexAction";
import { addFunds } from "../../redux/actions/fundsAction";
const styles = {
  root: {
    padding: 10,
    width: "auto",
    height: "auto",
    overflow: "auto"
  },
  row: {
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10
  }
};

class PortfolioHistory extends React.Component {



  state = {
    options: {
      dateStyle: "short",
      timeStyle: "short",
      hour12: false,
      transaction: "",
      quantity: ""
    }
  };

  componentDidMount() {
    this.props.getTrades();
  }




  // tradehistory = () => {
  //   this.setState({ transaction: "SELL" });
  //    const { quantity } = this.state;
  //    const {tradeData, quote, funds } = this.props;
  //    const transactionType = "SELL";
  //    const price = tradeData.price;
  //    const oldFund = funds[funds.length - 1].totalFund;
  //    const amount = price * tradeData.quantity;
  //    const totalFund = (oldFund + amount).toFixed(2);
  //    const fund = {
  //      transactionType,
  //      amount,
  //      totalFund
  //    };
  //    this.props.addFunds(fund);
  //   alert(fund);
  // };

  render() {
    const { tradeData, classes,quote,funds, } = this.props;
  
    const { options } = this.state;
    return (
      <div style={{ height: this.props.height }}>
        {tradeData === undefined ? (
          ""
        ) : (
          <table rules="groups">
            <thead>
              <tr>
                <th className={classes.row}>
                  <Typography variant="subtitle1">Symbol</Typography>
                </th>
                <th className={classes.row}>
                  <Typography variant="subtitle1">Company</Typography>
                </th>
                <th className={classes.row}>
                  <Typography variant="subtitle1">Transaction</Typography>
                </th>
                <th className={classes.row}>
                  <Typography variant="subtitle1">Quantity</Typography>
                </th>
                <th className={classes.row}>
                  <Typography variant="subtitle1">Price</Typography>
                </th>
                <th className={classes.row}>
                  <Typography variant="subtitle1">Total</Typography>
                </th>
                <th className={classes.row}>
                  <Typography variant="subtitle1">Date</Typography>
                </th>
                <th className={classes.row}>
                  <Typography variant="subtitle1">P/L</Typography>
                </th>
                {/* <th className={classes.row}>
                  <Typography variant="subtitle1">P/L(total)</Typography>
                </th> */}
                <th className={classes.row}>
                  <Typography variant="subtitle1">Delete</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {tradeData.map(data => (
                <tr key={data.id}>
                  <td className={classes.row}>{data.symbol}</td>
                  <td className={classes.row}>{data.company}</td>
                  <td className={classes.row}>{data.transaction}</td>
                  <td className={classes.row}>
                    {currencyFormat(data.quantity, 0)}
                  </td>
                  <td className={classes.row}>
                    {currencyFormat(data.price, 2)}
                  </td>
                  <td className={classes.row}>
                    {currencyFormat(data.price * data.quantity, 2)}
                  </td>
                  <td className={classes.row}>
                    {new Date(data.created_at).toLocaleString("en-US", options)}
                  </td>
                  <td className={classes.row}>
                  {Object.keys(quote).length !== 0 ? (
                        <span>
                        <span style={{ color: "green" }}>
                          {quote.latestPrice !== null
                            ? currencyFormat((-(quote.latestPrice-data.price)*data.quantity*1.05), 2)
                            : ""}
                        </span>
                      </span>
                        ) : (
                          ""
                        )}
                  </td>
                  {/* <td className={classes.row}>

                  {Object.keys(quote).length !== 0 ? (
                        <span>
                        <span style={{ color: "green" }}>
                          {quote.latestPrice !== null
                            ? currencyFormat(data.price * data.quantity-quote.latestPrice*data.quantity, 2)
                            : ""}
                        </span>
                      </span>
                        ) : (
                          ""
                        )}
                  </td> */}
                  <td className={classes.row}>
                     
           
                    <Button
                      onClick={this.props.deleteTrade.bind(this, data.id)}
                
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
  deleteTrade,
  addFunds
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PortfolioHistory));


