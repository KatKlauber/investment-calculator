const UserInput = ({handleChangeData, investmentData}) => {
  
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={investmentData.initialInvestment}
            onChange={(event) => handleChangeData('initialInvestment', event.target.value)}/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={investmentData.annualInvestment}
            onChange={(event) => handleChangeData('annualInvestment', event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={investmentData.expectedReturn}
            onChange={(event) => handleChangeData('expectedReturn', event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={investmentData.duration}
            onChange={(event) => handleChangeData('duration', event.target.value)}
          />
        </p>
      </div>
    </div>
  );
};

export default UserInput;