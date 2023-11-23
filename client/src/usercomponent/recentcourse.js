import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

function Recentcourse() {
  return (
    <div>
        <Navbar/>
        <div style={{paddingTop:"20px"}}>
            <h3 style={{textAlign:"center"}}>Your Recent Courses</h3>
        </div>
        <div className='row'>
            <div className='col-lg-1'></div>
            <div className='col-lg-10'>
            <div className='view_recent px-5 py-2 mt-2'>
                <div>
                    <p className='my-1'><b>Java Beginner</b></p>
                    <p className='m-0'>Attempted on: Nov 15, 2023, 2:42:42 PM</p>
                </div>
                <div className='my-auto'>
                    <button className='view_btn'>Open</button>
                </div>
            </div>
            <div className='view_recent px-5 py-2 mt-2'>
                <div>
                    <p className='my-1'><b>Data Structure Beginner</b></p>
                    <p className='m-0'>Attempted on: Nov 15, 2023, 2:42:42 PM</p>
                </div>
                <div className='my-auto'>
                    <button className='view_btn'>Open</button>
                </div>
            </div>
            <div className='view_recent px-5 py-2 mt-2'>
                <div>
                    <p className='my-1'><b>Java Advanced</b></p>
                    <p className='m-0'>Attempted on: Nov 15, 2023, 2:42:42 PM</p>
                </div>
                <div className='my-auto'>
                    <button className='view_btn'>Open</button>
                </div>
            </div>
            <div className='view_recent px-5 py-2 mt-2 mb-3'>
                <div>
                    <p className='my-1'><b>JAVA OOPS</b></p>
                    <p className='m-0'>Attempted on: Nov 15, 2023, 2:42:42 PM</p>
                </div>
                <div className='my-auto'>
                    <button className='view_btn'>Open</button>
                </div>
            </div>
            <div className='view_recent px-5 py-2 mt-2 mb-3'>
                <div>
                    <p className='my-1'><b>Data Structure Advanced</b></p>
                    <p className='m-0'>Attempted on: Nov 15, 2023, 2:42:42 PM</p>
                </div>
                <div className='my-auto'>
                    <button className='view_btn'>Open</button>
                </div>
            </div>
            </div>
            <div className='col-lg-1'></div>
           
           
        </div>
        <Footer/>
      
    </div>
  )
}

export default Recentcourse
