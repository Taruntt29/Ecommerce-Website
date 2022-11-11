import React, { Fragment } from "react";
import NavBar from "./NavBar";
import './Home.css'

function Home() {
  return (
    <Fragment>
      <NavBar />
      <div className='home-page'>
            <h1>Tours</h1>
            <div>
                <div className='show-box'>
                    <div> Sep 10</div>
                    <div>DETROIT, MI</div>
                    <div>DTE ENERGY MUSIC THEATRE</div>
                    <div><button>Buy Tickets</button></div>
                </div>
                <div className='show-box'>
                    <div> Sep 11</div>
                    <div>TORONTO,ON</div>
                    <div>BUDWEISER STAGE</div>
                    <div><button>Buy Tickets</button></div>
                </div>
                <div className='show-box'>
                    <div> Sep 12</div>
                    <div>BRISTOW, VA</div>
                    <div>JIGGY LUBE LIVE</div>
                    <div><button>Buy Tickets</button></div>
                </div>
                <div className='show-box'>
                    <div> Sep 13</div>
                    <div>PHOENIX, AZ</div>
                    <div>AK-CHIN PAVILION</div>
                    <div><button>Buy Tickets</button></div>
                </div>
                <div className='show-box'>
                    <div> Sep 14</div>
                    <div>LAS VEGAS, NV</div>
                    <div>AK-CHIN PAVILION</div>
                    <div><button>Buy Tickets</button></div>
                </div>
                <div className='show-box'>
                    <div> Sep 15</div>
                    <div>PHOENIX, AZ</div>
                    <div>AK-CHIN PAVILION</div>
                    <div><button>Buy Tickets</button></div>
                </div>
            </div>
        </div>
    </Fragment>
  );
}

export default Home;
