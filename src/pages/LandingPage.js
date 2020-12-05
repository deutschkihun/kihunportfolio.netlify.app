import React from 'react'
import { FaCode } from "react-icons/fa";
import profile from './common/profile.png'
import {Avatar} from 'antd';
import {GithubFilled,LinkedinFilled,MailFilled} from '@ant-design/icons';
import MainImage from './common/MainImage.jpg'
import '../index.css';


function LandingPage() {

    return (
        <div>
        {/*Main Image*/}
                 <div style={   {background: `linear-gradient(to bottom, rgba(0,0,0,0)39%, rgba(0,0,0,0)41%, rgba(0,0,0,0.65) 100% ),
                                url('${MainImage}'), #1c1c1c`,
                                height: '700px',
                                backgroundSize: '100%, cover',
                                backgroundPosition: 'center, center',
                                width: '100%',
                                position: 'relative'}}>

                    <div style={{padding: '3rem',marginLeft:'3rem'}}>
                    <img src={profile} alt="profile"/>
                    </div>

                    <div style={{position:'absolute',maxWidth:'1000px',bottom:'5rem',marginLeft:'11rem',
                    fontFamily:"Comic Sans MS, Comic Sans, cursive",color:'white'}}>
                        <h1 style={{color:'white',fontSize:'3rem',lineHeight:'8px'}}>Kihun Kim</h1>
                        <p style={{fontSize:'1.5rem'}}>Coding Enthusiast</p>
                            <a href="https://github.com/deutschkihun" rel="noopener noreferrer" target="_blank">
                            <Avatar
                                style={{color:'skyblue',backgroundColor:'transparent'}}  
                                icon={<GithubFilled />}
                            /></a>

                            <a href="https://www.linkedin.com/in/kihun-kim-b35b73174/" rel="noopener noreferrer" target="_blank">
                            <Avatar
                                style={{color:'skyblue',backgroundColor:'transparent'}}  
                                icon={<LinkedinFilled />}
                            /></a>

                            <a href="mailto:deutschkihun@gmail.com">
                            <Avatar
                                style={{color:'skyblue',backgroundColor:'transparent'}}  
                                icon={<MailFilled />}
                            /></a>
                    </div>
                </div>  
                
                <div>
                      {/* life motto*/}
                <br/>
                <br/>
                <br/>
                
                <div>
                    <p style={{display:'flex',justifyContent:'center',fontSize:'2rem', fontFamily:'Comic Sans MS, Comic Sans, cursive'}}>
                        Hey there, Thank your for visiting my webpage. I appreciate it a lot !! 
                    </p>
                </div>



                <br/>
                <br/>
                <br/>

                <div>
                    <p style={{display:'flex',justifyContent:'center',fontSize:'2rem', fontFamily:'Comic Sans MS, Comic Sans, cursive'}}>
                        <FaCode style={{ fontSize: '3rem' }}/> &nbsp; Life motto &nbsp; <FaCode style={{ fontSize: '3rem' }}/>
                    </p>
                    <span style={{display:'flex',justifyContent:'center',fontSize:'2rem', fontFamily:'Comic Sans MS, Comic Sans, cursive'}}>
                      No pain no gain.... keep going !! you're doing well </span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>

                </div>
            </div>
    )
}


export default LandingPage
