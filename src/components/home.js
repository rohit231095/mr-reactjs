import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div id='homeContainer'>
                <div id='navbar'>
                    <div id='navLogo'>seers</div>
                    <div id='navItemsContainer'>
                        <div className='navItems active'><i class="fi fi-home"></i>Home</div>
                        <div className='navItems'><i class="fi fi-persons"></i>Patients</div>
                        <div className='navItems'><i class="fi fi-calendar"></i>Appointments</div>
                        <div className='navItems'><i class="fi fi-hipchat"></i>Messages</div>
                    </div>
                    <div id='navCircleContainer'>
                        <div className='navCircle'></div>
                    </div>
                </div>
                <div id='homeBodyContainer'>
                    <div className='col'>
                        <div className='row'>
                            <div className='time'>09:14</div>
                            <div className='day'><span>Friday</span><br></br>June 7</div>
                        </div>
                        <div className='row'></div>
                    </div>
                    <div className='col'>
                        <div className='card'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;