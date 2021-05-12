import React,{Component} from 'react';

class Header extends Component
{
    render()
    {
        const styles={
            header:{
                background:'#78ccff',
                textAlign:'center'
            },
            logo:{
                color:'red'
            }
        }
        return(
            <header style={styles.header}>
                <div style={styles.logo}>Logo</div>
                <input type="Text"/>
            </header>
        )
    }
}

export default Header;