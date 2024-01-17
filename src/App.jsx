import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import ResultTable from "./components/ResultTable.jsx";
import { useState } from 'react';

let initialInvestmentData = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
};

function App() {
  
  const [investmentData, setInvestmentData] = useState(initialInvestmentData);
  
  const initialInvestmentIsValid = investmentData.initialInvestment > 0;
  const durationIsValid = investmentData.duration > 0;
  const inputIsValid = initialInvestmentIsValid && durationIsValid;
  
  function handleChangeData(inputIdentifier, newValue) {
    setInvestmentData((prevData) => {
      return {
        ...prevData,
        [inputIdentifier]: +newValue
      };
    });
  };
  
  return (
    <>
      <Header />
      <UserInput handleChangeData={handleChangeData} investmentData={investmentData}/>
      {
        inputIsValid ? (
          <ResultTable userInput={investmentData}/>
        ) : <p className="center">{`Please enter a${!initialInvestmentIsValid ? 'n initial investment' : ' duration'} greater than 0.`}</p>
      }
    </>
  )
}

export default App
