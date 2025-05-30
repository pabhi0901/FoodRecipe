import { useNavigate } from "react-router-dom";
import "../index.css";
import landingImage from "../stickers/LandingImage.png";

const LandingPage = () => {
  let navigate = useNavigate()
  return (<>
    <div className="LandingDisplay">

      <div className="LandingContent">
        <h1 className="Hometitle">
          Discover, Create, and Share <span>Delicious Recipes</span> with us.. <spam className="emoji">☺️</spam> 
        </h1>

        <h3 className="HomePara">
          Explore the world of mouthwatering recipes,
          create your own culinary masterpieces, and share them with a
          passionate foodie community. Let the flavors tell your story!
        </h3>

        <div className="btns">
        <button onClick={()=>{navigate('/createRecipes')}}>Create Recipe</button>
        <button onClick={()=>{navigate('/recipes')}}>Go to Recipes</button>
        </div>

      </div>

      <div className="LandingImage">
        <img src={landingImage} alt="" />
      </div>
    
    
    </div>

    
    
    </>
  );
};

export default LandingPage;
