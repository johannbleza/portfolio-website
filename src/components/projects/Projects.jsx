import React from 'react'
import './projects.css'
import img1 from './../../assets/project1.png'

const data = [
  {
    id: 1,
    image: img1,
    title: "React Porfolio Website",
    info: "A responsive porfolio website made from HTML, CSS & React.js",
    github: 'https://github.com/johannbleza/portfolio-website',
    demo: 'https://portfolio-website-gray-ten.vercel.app/'
  },
  {
    id: 2,
    image: img1,
    title: "MERN E-Commerce Website",
    info: "A fully functional E-Commerce Application using MongoDB, Express.js, React.js and Node.js",
    github: 'https://github.com/johannbleza/portfolio-website',
    demo: 'https://portfolio-website-gray-ten.vercel.app/'
  },
  {
    id: 3,
    image: img1,
    title: "E-Commerce REST API",
    info: "A Node.js E-Commerce App REST API with MongoDB",
    github: 'https://github.com/johannbleza/portfolio-website',
    demo: 'https://portfolio-website-gray-ten.vercel.app/'
  }
]


const Projects = () => {
  return (
    <section id='projects' className='text-center'>
        <h5 className='mt-2'>My Recent Work</h5>
        <h1 className='mb-4'>Portfolio</h1>

        <div className="container-fluid">
          <div className="row d-flex justify-content-center ">
            {
              data.map(({id,image,title,info,github,demo}) =>{
                return(
                  <div key={id} className="col-11 col-lg-3 porfolio-card p-3 m-2">
                    <img src={image} alt="" className='img-fluid porfolio-img' />
                    <div className='m-4'>
                      <h3>{title}</h3>
                      <p className='paragraph mt-3 card-paragraph'>{info}</p>
                    </div>
                    <div className='d-flex justify-content-center'>
                      <a href={github} target='_blank' className='button'>Github</a>
                      <a href={demo} target='_blank' className='button button-primary'>Live Demo</a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
    </section>
  )
}

export default Projects