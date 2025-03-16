import React, { useState } from 'react';
import catscoming from '../assets/catscoming.jpg';
import RecipeItems from '../components/RecipeItems';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import InputForm from '../components/InputForm';

export default function Home() {
  const navigate=useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const addRecipe=()=>{
    let token=localStorage.getItem("token")
    if(token)
      navigate("/addRecipe")
    else{
      setIsOpen(true)
    }
  }

  return (
    <>
    <section className="home">
        <div className="left">
            <h1>Your Online Cookbook</h1>
            <h5>Welcome to Flavorful, your ultimate kitchen companion! Discover a world of mouthwatering recipes, 
              tailored to every taste and skill level. Whether you're a seasoned chef or a beginner, 
              our easy-to-follow instructions and personalized recommendations will inspire your next meal. 
              From quick weeknight dinners to elaborate feasts, we’ve got something for every occasion. 
              Unlock your culinary creativity, explore new ingredients, and elevate your cooking experience. 
              Get ready to turn every meal into a celebration—let’s cook something amazing together!
            </h5>
            <button onClick={addRecipe}>Share Your Recipe</button>
        </div>
        <div className="right">
            <img src={catscoming} alt="food recipe image" />
        </div>
    </section>
    <div className="bg">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180"><path fill="#0099ff" fillOpacity="0.2" d="M0,160L30,165.3C60,171,120,181,180,170.7C240,160,300,128,360,101.3C420,75,480,53,540,69.3C600,85,660,139,720,154.7C780,171,840,149,900,165.3C960,181,1020,235,1080,229.3C1140,224,1200,160,1260,128C1320,96,1380,96,1410,96L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
    </div>
    { (isOpen) && <Modal onClose={()=>setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)} /></Modal>}
    <div className="recipe">
      <h1>Available Recipes</h1>
      <RecipeItems />
    </div>
    </>
  )
}
