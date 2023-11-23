import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

function Recentpractice() {
  return (
    <div>
        <Navbar/>
        <div style={{paddingTop:"20px"}}>
            <h3 style={{textAlign:"center"}}>Your Recent Practice</h3>
        </div>
        <div className='row'>
            <div className='col-lg-1 d-lg-block d-none'></div>
            <div className='col-lg-10 '>
            <div className='view_recent   mt-2'>
                <div>
                    <p className='m-0'>JAVA LAB <i class="fa-solid fa-arrow-right"></i> Right Angle Triangle Pattern</p>
                    <p className='my-1'><b> Right Angle Triangle Pattern Set - 1</b></p>
                    <p className='m-0'>Attempted on: Nov 15, 2023, 2:42:42 PM</p>
                </div>
                <div className='my-auto'>
                    <button className='resume_btn'>Resume Test</button>
                </div>
            </div>
            <div className='view_recent  mt-2 mb-3'>
                <div>
                    <p className='m-0'>JAVA LAB <i class="fa-solid fa-arrow-right"></i> Basic Number Programs</p>
                    <p className='my-1'><b>Basic Number Programs Set - 1</b></p>
                    <p className='m-0'>Attempted on: Nov 15, 2023, 2:42:42 PM</p>
                </div>
                <div className='my-auto'>
                    <button className='resume_btn'>Resume Test</button>
                </div>
            </div>
            
           
            </div>
            <div className='col-lg-1'></div>
           
           
        </div>
        <Footer/>
    </div>
  )
}

export default Recentpractice