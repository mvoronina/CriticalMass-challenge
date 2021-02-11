import React from "react";
import { render } from "react-dom";
import roster from "./data/roster.js";
import * as styles from "./styles";
import HockeyCard from "./HockeyCard.js";


class App extends React.Component{
constructor(props)
{
  super(props);
  this.state ={
    player: null,
    players: roster
  };

}
handleRowClick(player) {
  this.setState({player});
}
  render(){
    return(
      <div>
      <h2>Calgary Flames Score Card</h2>
      <HockeyCard player={this.state.player} />
      <table style={styles.tableStyles}>
        <thead style={styles.headerStyles}>
          <tr>
            <th>Name</th>
            <th>Games Played</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Points</th>
          </tr>
        </thead>
        <tfoot style={styles.footerStyles}>
            <tr>
              <td>Totals: </td>
              <td>{roster.reduce((totalCount, player)=> totalCount+player.games,0)}</td>
              <td>{roster.reduce((totalCount, player)=> totalCount+player.goals,0)}</td>
              <td>{roster.reduce((totalCount, player)=> totalCount+player.assists,0)}</td>
              <td>{roster.reduce((totalCount, player)=> totalCount+player.points,0)}</td>
            </tr>
        </tfoot>
        <tbody style={styles.bodyStyles}>
          {this.state.players.map((player, index) => {
            const { name,link,games, goals, assists, points } = player;
            return (
              
              <tr  onClick={() => this.handleRowClick(player)} key={index} >
                <td><a href ={link}>{name}</a></td>
                <td>{games}</td>
                <td>{goals}</td>
                <td>{assists}</td>
                <td>{points}</td>
                
              </tr>
              
            );
          })}
        </tbody>
      </table>
    </div>
    )
  }
 
}

render(<App />, document.getElementById("root"));
