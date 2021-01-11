import React from 'react'
import Nav from './navbarBeforeLogin'
function Home() {
    return (
        <div>
            <Nav></Nav>
            <div id='lib_intro'>
            {/* <div className='container' > */}
                <div className='jumbotron' id='intro-jumbo'>
                <h1>Central City Library</h1>
                <br></br>
                    <p>
                    The Biggest Library among the tristates of Gotham, Metropolis, Central City. Here you can find thousands of
                    books written by the finest across the world and also bookd from various publications. It's a public Library
                    that is being maintained by the government with the taxes you people pay, so follow the rules to make sure not 
                    to get banned. There are 3 main rules: <b><ol><br></br>
                                                           <li> Take care of the Books you take.</li>
                                                           <li> Return the Books with out fail.</li>
                                                           <li> Maintain absolute silence in the Library. </li> 
                                                           </ol></b>
                    </p>
                    
                    </div>
                    
                {/* </div> */}
                </div>
            
        </div>
    )
}

export default Home
