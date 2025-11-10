export default function UserInput({ onChanging, userInput }) {

  return (
    <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input 
                type="number" 
                required 
                value={userInput.initialInvestment}
                onChange={(event) => onChanging('initialInvestment',event.target.value)}></input>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" 
                required
                value={userInput.annualInvestment}
                onChange={(event) => onChanging('annualInvestment',event.target.value)}></input>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required 
                value={userInput.expectedReturn}
                onChange={(event) => onChanging('expectedReturn',event.target.value)}></input>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required 
                value={userInput.duration}
                onChange={(event) => onChanging('duration',event.target.value)}></input>
            </p>
        </div>
    </section>
  );
}