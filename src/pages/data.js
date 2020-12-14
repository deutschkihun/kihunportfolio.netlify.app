import andrena from './common/dataimage/andrena.jpg'
import login_out from './common/dataimage/login_out.jpg'
import moiveapp from './common/dataimage/movieapp.jpg'
import webpage from './common/dataimage/webpage.jpg'
import youtubeclone from './common/dataimage/youtubeclone.jpg'
import awsdocker from './common/dataimage/awsdocker.jpg'
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
    title: 'youtube clone coding',
    stack: 'Node.js, ExpressJS, React, MongoDB',
    img: youtubeclone,
    desc:  `Clone coding is one of the best practical project that beginner can improve their programming skill.So this project aims to make a youtube interface and 
            video upload backend system as similar as possible.For example subscrition,like&dislike,comment functionalities .
            Expectation after this prject is that novice can have a chance to learn frontend & backend framework together`,
    completion : 'done',
    link : 'https://github.com/deutschkihun/YoutubeClone-MERN-stack'
  },

   {
    id: 3,
    title: 'TMDb movie application',
    stack: 'Node.js, ExpressJS, React',
    img: moiveapp,
    desc: `The Movie Database(TMDb) is one of the popular movie database that use can access to get movie information. This webpage is editable by user. This website provide API key that 
            everyone can get source from TMDb. This project aims to make a own movie introduction webpage by using TMDb API key. Expectation after this project is that novice have diverse 
            experience how to use external API key to make a web application` ,
    completion : 'done',
    link : 'https://github.com/deutschkihun/MovieApp-MERN-stack'
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

  {
    id: 5,
    title : 'Deployment with Docker & AWS (frontend)',
    stack: 'AWS Elasticbeanstalk, docker, travis CI ',
    img: awsdocker,
    desc : `Docker enables users to separate your applications from your infrastructure so you can deliver software quickly. With Docker, users can manage their infrastructure 
            in the same ways users manage their applications. This project aim how user can implement docker system with AWS cloud (Elastic Beanstalk) to deploy their own service in internet environment.
            Also this project shows how to deploy and hosting frotend application with docker and AWS Elasticbeanstalk`,
    completion : 'done',
    link : 'https://github.com/deutschkihun/simple-docker-app'
  },
  {
    id: 6,
    title : 'Deployment with Docker & AWS (fullstack) ',
    stack: 'Elastic Beanstalk, docker, travis CI ',
    img: awsdocker,
    desc : `Docker enables users to separate your applications from your infrastructure so you can deliver software quickly. With Docker, users can manage their infrastructure 
            in the same ways users manage their applications. This project aim how user can implement docker system with AWS cloud (Elastic Beanstalk) to deploy their own service in internet environment.
            Also this project shows how to deploy and hosting fullstack application with docker and AWS Elasticbeanstalk`,
    completion : 'done',
    link : 'https://github.com/deutschkihun/complex-docker-app'
  },
  {
    id: 7,
    title : 'scurm project wih andrena objects',
    stack: 'Spring boot, Typescript',
    img: andrena,
    desc : `Andrena objects is a IT-compnay in Karlsruhe. They're mainly doing agile software engineering for many differnt field of customer. They offered scrum project for student in Okt.2020 
            In this project student had to build a sudoku web application for their virtual customer. student had to fulfilled the expectation of product owner and scrum master. This project aims to learn
            Test driven development, Refactoring,UI tests and front & backend system functionality.`,
    completion : 'done',
    link : 'https://drive.google.com/file/d/1e9xVoGmGm_URno6UVj0ZIlp8h6Rf6wUE/view?usp=sharing'
  },
  {
  id: 8,
  title : 'sport DB application',
  stack: 'Javascript,React,Redux',
  img: sport,
  desc : `online shop application with frontend engineering (Javascript, React and Redux). It contains product listing, 
          favorite marking, adding on basket, ordering and search engine.  `,
  completion : 'done',
  link : 'https://github.com/deutschkihun/SportDB_Application'
  },
  {
  id: 9,
  title : 'seminar: object detection in steel industry',
  stack: 'python3.7,numpy,pandas tensorflow1.15.4, openCV4.4.0',
  img: seminar,
  desc : `University seminar about object detection with deep learing in steel industry.`,
  completion : 'In progress',
  link : 'https://drive.google.com/drive/u/0/folders/1hN4a45Bf4Kmi2Qo3M4aMJNym2l_lSqka'
  },
];
export default projects; 