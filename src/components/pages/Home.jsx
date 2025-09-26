import React from 'react'
import Gallery from '../Gallery'


function Home() {
  return (
    <>
    <div className='subtitle'>
          <h1>Home</h1>  
          <p>Logistics shipping consultancy services. We help business move goods smarter 
and more efficiently. </p>    
      
            <h2>Our Work Gallery</h2>
            <p>Take a look at some examples of our logistics and transportation projects:</p>
            <Gallery />
            
            <h2>Consulting</h2>
            <p>We provide expert consulting services to help businesses optimize their operations, improve efficiency, and achieve their goals. Our team of experienced consultants works closely with clients to understand their unique challenges and develop tailored solutions that drive success. Whether you need help with strategy development, process improvement, or change management, we have the expertise to deliver results. Contact us today to learn how we can help your business thrive!</p>
      </div>    
   </> 
  )
}

export default Home