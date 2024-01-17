import { calculateInvestmentResults, formatter } from '../util/investment.js';

const ResultTable = ({userInput}) => {
  
  const resultsData = calculateInvestmentResults(userInput);
  // const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
  
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData, index) => {
          const totalInterest = yearData.valueEndOfYear - (yearData.annualInvestment * yearData.year) - userInput.initialInvestment;
          const totalInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvested)}</td>
            </tr>
          );
        })}
      </tbody>
      
    
    </table>
  );
};

export default ResultTable;