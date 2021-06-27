import login_out from './common/dataimage/login_out.jpg'
import webpage from './common/dataimage/webpage.jpg'
import sport from './common/dataimage/sport.png'
import seminar from './common/dataimage/seminar.png'
const projects = [
  {
    id: 1,
    title: 'portfolio-webpage',
    stack: 'Node.js, ExpressJS, React, MongoDB',
    img: webpage,
    desc: `Portfolio webpage is one of the best way to introduce myself in internet environment.So this project focus on the way how I can present about me with the efficient and simple method
           like introduction video and career & project page. This project include differnt backend and frontend technique. For example video upload built-in function, like & dislike function, comment function 
           frontend libraries React with ant-design tool `,
    completion : 'done',
    link : 'https://github.com/deutschkihun/portfolio-webpage-MERN-stack'
  },
  {
    id: 2,
    title : 'sport DB application',
    stack: 'Javascript,React,Redux',
    img: sport,
    desc : `online shop application with frontend engineering (Javascript, React and Redux). It contains product listing, 
            favorite marking, adding on basket, ordering and search engine.  `,
    completion : 'done',
    link : 'https://sportdbapplication.netlify.app/'
    },
    {
      id: 3,
      title : 'project seminar: object detection in steel industry',
      stack: 'tensorflow, tensorflow obeject detection API, OpenCV',
      img: seminar,
      desc : `digit detection on Ladle(metallurgy) by using Object detection neural network Faster R-CNN, corporation with FZI,IOR and Dillinger Huette `,
      completion : 'done',
      link : 'https://drive.google.com/drive/u/0/folders/1hN4a45Bf4Kmi2Qo3M4aMJNym2l_lSqka'
      },
   {
    id: 4,
    title: 'Login-out system',
    stack: 'Node.js, ExpressJS, React, MongoDB',
    img: login_out,
    desc: `Boilerplate is a base application so that it can be used any advanced application or projects. This project aims to make a boilerplate for login and out.
           Because login and out system is needed almost every webpage or system. So this project include basic priciple of login and out system, authentication, authorization,
           token, cookie,session. Expectation after this project is that novice feel comfortable how to make login and out system`,
    completion : 'done',
    link : 'https://github.com/deutschkihun/login-out-system'
  },
];
export default projects; 