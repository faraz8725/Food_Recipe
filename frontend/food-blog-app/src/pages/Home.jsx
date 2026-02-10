import React from 'react';
import foodRecipe from '../assets/myphoto.jpg'
export default function Home(){
  return (
    <>

    <section className='home'>
      <div className='left'>
        <h1>Food Recipe</h1>
        <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ratione ullam vitae laudantium praesentium perferendis aliquid at debitis quae incidunt qui, est iure quaerat veritatis, nemo delectus, autem officia quidem?</h5>
        <button>Share your recipe</button>
      </div>
      <div className='right'>
        <img src={foodRecipe}width="320px" height="300px"></img>
      </div>
    </section>
    <div className='bg'>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fill-opacity="1" d="M0,128L30,106.7C60,85,120,43,180,21.3C240,0,300,0,360,5.3C420,11,480,21,540,26.7C600,32,660,32,720,69.3C780,107,840,181,900,197.3C960,213,1020,171,1080,160C1140,149,1200,171,1260,170.7C1320,171,1380,149,1410,138.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
    </div>

    </>
  )
}