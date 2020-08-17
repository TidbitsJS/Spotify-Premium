import React from 'react'
import 'App.css'
import { premiumFamily, prePaidFamily, 
         premiumIndividual, premiumPrepaid,
         premiumStudent, premiumDuo } from 'components/CardData'
import Slideshow from 'components/Slider';
import FreeContext from 'components/FreeContext';
import Cards from 'components/Cards';

const App = () => {
  return (
    <div className="App">
      <div className="header"><h1>Try Premium free for 1 month</h1></div>
      <Slideshow />
      <FreeContext />
      <Cards cardData={premiumFamily} />
      <Cards cardData={prePaidFamily} />
      <Cards cardData={premiumIndividual} />
      <Cards cardData={premiumPrepaid} />
      <Cards cardData={premiumStudent} />
      <Cards cardData={premiumDuo} />
    </div>
  );
}

export default App;
