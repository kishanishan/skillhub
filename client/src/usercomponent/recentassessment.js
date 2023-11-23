import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

function Recentassessment() {
  return (
    <div>
        <Navbar/>
        <div style={{paddingTop:"20px"}}>
            <h3 style={{textAlign:"center"}}>Your Recent Assessments</h3>
        </div>
        <div className='row'>
            <div className='col-lg-1'></div>
            <div className='col-lg-10'>
            <div className='view_recent   mt-2'>
                <div>
                    <p className='m-0'>Category: Java MCQ Topicwise</p>
                    <p className='my-1'><b>Strings</b></p>
                    <p className='m-0'>Attempted on: Nov 15, 2023, 2:42:42 PM</p>
                </div>
                <div className='my-auto'>
                    <button className='resume_btn'>Resume Test</button>
                </div>
            </div>
            <div className='view_recent  mt-2'>
                <div>
                    <p className='m-0'>Category: Java Mock Test</p>
                    <p className='my-1'><b>Mock test 1</b></p>
                    <p className='m-0'>Attempted on: Nov 15, 2023, 2:42:42 PM</p>
                </div>
                <div className='my-auto'>
                    <button className='resume_btn'>Resume Test</button>
                </div>
            </div>
            <div className='view_recent  mt-2'>
                <div>
                    <p className='m-0'>Category: Java MCQ Topicwise</p>
                    <p className='my-1'><b>Control Statement</b></p>
                    <p className='m-0'>Attempted on: Nov 15, 2023, 2:42:42 PM</p>
                </div>
                <div className='my-auto'>
                    <button className='view_btn'>View Result</button>
                </div>
            </div>
            <div className='view_recent  mt-2 mb-3'>
                <div>
                    <p className='m-0'>Category: Java Mock Tests</p>
                    <p className='my-1'><b>Mock Test 1</b></p>
                    <p className='m-0'>Attempted on: Nov 15, 2023, 2:42:42 PM</p>
                </div>
                <div className='my-auto'>
                    <button className='view_btn'>View Result</button>
                </div>
            </div>
            </div>
            <div className='col-lg-1'></div>
           
           
        </div>
        <Footer/>
    </div>
  )
}

export default Recentassessment