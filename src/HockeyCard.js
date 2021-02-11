import React from "react";

import * as styles from "./styles";
//{this.props.name.substring(0,this.props.name.indexOf(','))}

class HockeyCard extends React.Component{
constructor(props)
{
  super(props);
  this.state ={};
}
    render(){
        console.log("this is props", this.props)
        if(!this.props.player){
            console.log("no props")
            return null;
        }
        else {
        return(
            console.log("this is props in return", this.props),
    <div style={styles.cardStyles} >
    <div style={styles.textStyles}>{this.props.player.name.substring(0,this.props.player.name.indexOf(','))}</div>
    <br/>
    <div style={styles.numberStyles} >{this.props.player.number}</div>
    <br/>
    <img style={styles.imageStyles} src={this.props.player.image} />
    </div>
   
        )}
    }
}
export default HockeyCard;