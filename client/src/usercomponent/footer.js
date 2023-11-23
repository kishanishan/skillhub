import React from 'react'

function Footer() {
  return (
    <div className='footer_item' style={{ color:"#fff"}}>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-3 col-md-6 col-12 p-0'>
                    <div className='mt-4 text-center'>
                        <img src='./images/skillhub logo.png' className='img-fluid'alt='img' style={{height:"80px",borderRadius:"10px" }}/>
                    </div>
                    <div className='text-center mt-3'>
                        <p>Leading Assesment Provided in India</p>
                    </div>
                    <div className='text-center mb-4'>
                    <i class="fa-brands fa-facebook-f social_icon"></i>
                    <i class="fa-brands fa-instagram social_icon"></i>
                    <i class="fa-brands fa-twitter social_icon"></i>
                    <i class="fa-brands fa-linkedin-in social_icon"></i>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <div className='mt-4'>
                        <h3>Company</h3>
                        <div className='mt-4'>
                            <h6> <i class="fa-solid fa-chevron-right mr-3"></i> About Us</h6>
                            <h6> <i class="fa-solid fa-chevron-right mr-3"></i> Services</h6>
                            <h6> <i class="fa-solid fa-chevron-right mr-3"></i> Terms and Conditions</h6>
                            <h6> <i class="fa-solid fa-chevron-right mr-3"></i> Contact Us</h6>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                <div className='mt-4 usefull'>
                        <h3>Usefull Links</h3>
                        <div className='mt-4'>
                            <h6> <i class="fa-solid fa-chevron-right mr-3"></i> Assessments</h6>
                            <h6> <i class="fa-solid fa-chevron-right mr-3"></i> Courses</h6>
                     
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12 '>
                    <div className='mt-4'>
                        <p><i class="fa-regular fa-copyright"></i> 2023 SkillHub</p>
                        <p>A Product of Skillhub Education PVT LTD</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer