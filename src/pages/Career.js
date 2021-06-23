import React from 'react'
import {Button} from 'antd'
import {FaQuoteRight } from 'react-icons/fa';
import '../main.css'
import profile from './common/profile.png'
import udacity from './common/udacity.JPG'
import dmtech from './common/dmtech.png'
import mintcolleg from './common/mintcolleg.png'
import frontend from './common/frontend.jpg'
import backend from './common/backend.png'
import tensorflow from './common/tensorflow.png'
import docker from './common/docker.png'
import vayu from './common/vayu.png'
function CareerPage() {
    return (
        <div>
            <main>
            <div>
                <br/>
                <br/> 
                <br/>
                <br/>
                <br/> 
            </div>
                <div className="main-container">




                    <article className="box-one">
                        <div className="img-container">
                            <img src={profile} alt="profile" className='person-img'/>
                            <span className='quote-icon'>
                                <FaQuoteRight />
                            </span>
                        </div>

                        <h4 className='author'>Kihun Kim</h4>
                        <p className='job'>Student / Full stack developer / Coding Enthusiast</p>
                        <p className='info'>
                        Hello Kihun is here, I'm studying industrial engineering at KIT. I like programming especially frontend & fullstack development
                        I'm currently working at vayu-software gmbH as a software engineer. I use typescript, javascript, jQuery, HTML, CSS and React to 
                        to develop low-code data platform and internal data pipieline. Furthermore I'm responsible for local marketplace as a project manager.
                        </p>
                    </article>



                    <div className=" box-two">
                        <a href="https://drive.google.com/file/d/1R3M3-u1jtfyPZcjciQl9LbeAz2mBGtrA/view?usp=sharing"  rel="noopener noreferrer" target="_blank">
                            <Button>Download CV</Button>
                        </a>
                        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <a href="mailto:deutschkihun@gmail.com">
                            <Button>Contact</Button>  
                         </a>
                    </div>

                    <div className=" box-three">ACADEMIC BACKGROUND</div>
               
                    <div className=" box-four-1">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Logo_KIT.svg/2000px-Logo_KIT.svg.png"
                         width='250' height='130'alt="kit"/>  
                    </div>
                    <div className=" box-four-2">
                            <img src={udacity} width='500' height='130'alt="kit"/>  
                    </div>
                    <div className=" box-five-1">
                        <p style={{display:'inline-flex'}}>Education</p>
                        <ul style={{textAlign:'left'}}>
                            <li>Major :Industrial Engineering</li>
                            <li>Bachelor of science</li>
                            <li>From Oct. 2017 to present</li>
                            <li>Advance field : mathemathical optimization & computer science</li>
                        </ul>
                    </div>
                    <div className=" box-five-2">
                        <p style={{display:'inline-flex'}}>Nanodegree</p>
                        <ul style={{textAlign:'left'}}>
                            <li>Data Analyst nanodegree program</li>
                           <li>Degree for data wrangling and visualization</li>
                           <li>Real world data science projects with Python</li>
                            <li><a href="https://drive.google.com/file/d/1bSGPpEvvfNC6ZjTMYVsgNm9azys5aT6N/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                            <Button>See Certificate</Button>
                        </a></li>
                        </ul>
                    </div>
                    
                    <div className=" box-six">WORKING EXPERIENCE</div>
                    <div className=" box-seven-1">
                         <p style={{display:'inline-flex'}}>Internship : Software engineer</p>
                        <ul style={{textAlign:'left'}}>
                            <li>low-code platform frontend development</li>
                            <li>Data pipeline frontend development</li>
                            <li>leading software development project (online e-commerce platform)</li>
                            <li>Stack: Typescript, HTML, CSS, JQuery, React</li>
                            <li><a href="https://drive.google.com/file/d/1H3jcP7kNafsagchGjUGtFMp-aMFs6IkU/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                            <Button>See Certificate</Button>
                        </a></li>
                        </ul>
                    </div>
                    <div className=" box-seven-2">
                        <p style={{display:'inline-flex'}}>Working Student</p>
                        <ul style={{textAlign:'left'}}>
                            <li>Purchase receipt data management</li>
                            <li>Database controlling and error reporting by MYSQL</li>
                            <li>Stack : MySQL</li>
                            <li><a href="https://drive.google.com/file/d/1hcUIODMNDrFPiHijQib1IXmngAGTFtWB/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                            <Button>Employment reference</Button>
                        </a></li>
                        </ul>
                    </div>
                    <div className=" box-seven-3">
                        <p style={{display:'inline-flex'}}>Math Tutor</p>
                        <ul style={{textAlign:'left'}}>
                            <li>Tutoring math to 1.semester student</li>
                            <li>Explanation of exercise</li>
                            <li><a href="https://drive.google.com/file/d/10wy637QRz0jTBr2QOn4LOPpaR5FTH-Uk/view" rel="noopener noreferrer" target="_blank">
                            <Button>Employment reference</Button>
                        </a></li>
                        </ul>
                    </div>
                    
                    <div className=" box-eight-1">
                            <img src={vayu} width='210' height='130'alt="vayu"/>  
                    </div>
                    <div className=" box-eight-2">
                            <img src={dmtech}
                         width='200'  height='130'alt="dmtech"/>  
                    </div>
                    <div className=" box-eight-3">
                            <img src={mintcolleg}
                         width='250' height='200'alt="mintcolleg"/>  
                    </div>
                    <div className=" box-nine">PROGRAMMING SKILLS </div>
                    <div className=" box-ten-1">
                        <img src={frontend}
                         width='300' height='130'alt="kit"/>  
                    </div>
                    <div className=" box-ten-2">
                        <img src={backend}
                         width='300' height='130'alt="kit"/>  
                    </div>
                    <div className=" box-ten-3">
                        <img src={docker} width='280' height='130'alt="kit"/> 
                    </div>
                    <div className=" box-ten-4">
                        <img src={tensorflow} width='300' height='150'alt="kit"/>  
                    </div>

                    <div className=" box-eleven-1">
                        <p style={{display:'inline-flex'}}>Frontend</p>
                        <ul style={{textAlign:'left'}}>
                            <li>Skill level : intermediate </li>
                            <li>Typescript / Javascript / React</li>
                            <li>HTML / CSs / jQuery</li>
                        </ul>
                    </div>
                    <div className=" box-eleven-2">
                        <p style={{display:'inline-flex'}}>Backend</p>
                        <ul style={{textAlign:'left'}}>
                            <li>Skill level : beginner to intermediate </li>
                            <li>node.js</li>
                            <li>express.js</li>
                        </ul>
                    </div>
                    <div className=" box-eleven-3">
                    <p style={{display:'inline-flex'}}>CI/CD</p>
                        <ul style={{textAlign:'left'}}>
                            <li>Skill level : beginner</li>
                            <li>Docker / Docker-compose</li>
                            <li>Travis-CI</li>
                        </ul>
                    </div>

                    <div className=" box-eleven-4">
                        <p style={{display:'inline-flex'}}>Tensorflow developer certificate</p>
                        <ul style={{textAlign:'left'}}>
                            <li>Skill level : beginner</li>
                            <li>image classfication & object detection</li>
                            <li>issued by Tensorflow team and Google</li>
                            <li><a href="https://drive.google.com/file/d/1gI0IZuz2WZL8H7CxLOFDwApnyEwgpRkE/view?usp=sharing"  rel="noopener noreferrer" target="_blank">
                            <Button>See certificate</Button>
                        </a></li>
                        </ul>
                    </div>


                </div>
             <div>
                <br/>
                <br/> 
                <br/>
                <br/>
                <br/> 
            </div>

            </main>
        </div>
    )
}

export default CareerPage
