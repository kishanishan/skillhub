import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

function Programing() {
  return (
    <div>
        <Navbar/>
        
        <div className='row'>
            <div className='col-lg-1'></div>
            <div className='col-lg-10 mb-3'>
            <div className='view_recent1  mt-4'>
                <div>
                    <p className='m-0 pb-3 ' style={{fontSize:"19px", fontWeight:"500"}} >Accurancy of Java_Programing</p>
                   
                </div>
                <div className='view_recent2'>
                    <div >
                    <p className='m-0'><b>Other</b></p>
                 <span>Question Solved: 32  Currently Solved: 7</span>
                    </div>
                    <div>
                        <input type='range' className='form-control range-input' value="50"  id='range'/>
                    </div>
                 
                </div>
            </div>
           
            </div>
            <div className='col-lg-1'></div>
           
           
        </div>
        <Footer/>
    </div>
  )
}

export default Programing