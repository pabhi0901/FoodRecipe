import '../index.css'
import healthyFood from '../stickers/healthy.png'
import fresh from '../stickers/fresh.png'
import hotPick from '../stickers/hotpick.png'
import one from '../stickers/one.png'
import vegetarian from '../stickers/vegetarian.png'

const LandingPage = () => {
  return (
    <div className='LandingDisplay'>
    
    <div className="headingText" id="headingTextCont">
        <div className='headingPreTitle'>No #1 People Choice for Food Recipe</div>
        <h1 className='FirstHead'>Delicious</h1>
        <h1 className='SecondName'>Discoveries</h1>
        <p>Discover recipes that bring seasonal goodness to your plate</p>

    </div>
    <img src={one} alt="" className='oneRankImg' id='rankOne' />
  <img src={healthyFood} alt="" className='stp' id='sticker1' />
  <img src={hotPick} alt="" className='hotPick' id='hotPck' />
  <img src={vegetarian} alt=""  className='vegImg' id='vegTag' />
  {/* <img src={fresh} alt="" /> */}
    </div>
  )
}

export default LandingPage
