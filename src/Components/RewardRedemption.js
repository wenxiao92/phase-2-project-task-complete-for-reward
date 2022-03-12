import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
  });

const RewardRedemption = ({wallet, allReward}) => {
const classes = useStyles();

const displayRewards = allReward.map((eachReward) => {return(
  <StyledTableRow>
  <StyledTableCell component="th" scope="row" align="center">
  {eachReward.reward}
</StyledTableCell>
<StyledTableCell align="center">{eachReward.cost}</StyledTableCell>
<StyledTableCell align="left">{eachReward.status ? "Redeemed" : "Click to Redeem"}</StyledTableCell>
</StyledTableRow>
)
})

  return (
      <div>
    <h1 align="center">Redemption Page </h1>
    <h3 align="center">Current Count: {wallet}</h3>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Reward</StyledTableCell>
            <StyledTableCell align="center">Cost</StyledTableCell>
            <StyledTableCell align="left">Redeem</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayRewards}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
};
  

export default RewardRedemption