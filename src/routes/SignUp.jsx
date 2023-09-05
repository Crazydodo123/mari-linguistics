const SignUp = () => {
   return (
    <div>
      <h2 className="subtitle form">Registration Form</h2>
      <form id="sign-up-form">
        <div>
          <div className="input-section">
            <p className="subsection-header">Name *</p>
            <div className="input-subsection">
              <div className="input-field">
                <input type="text" id="first-name" className="text-input"></input>
                <label htmlFor="first-name" className="input-label">First Name</label>
              </div>
              <div className="input-field">
                <input type="text" id="last-name" className="text-input"></input>
                <label htmlFor="last-name" className="input-label">Last Name</label>
              </div>
            </div>
          </div>
          <div className="input-section">
            <div className="input-subsection">
              <div className="input-field">
                <p className="subsection-header">Student ID *</p>
                <input type="text" id="first-name" className="text-input"></input>
              </div>
              <div className="input-field">
                <p className="subsection-header">Email</p>
                <input type="text" id="last-name" className="text-input"></input>
              </div>
            </div>
          </div>
          <div className="input-section">
            <div className="input-subsection">
              <div className="input-field">
                <p className="subsection-header">Program *</p>
                <input type="text" id="first-name" className="text-input"></input>
              </div>
              <div className="input-field">
                <p className="subsection-header">Year *</p>
                <input type="text" id="last-name" className="text-input"></input>
              </div>
            </div>
          </div>
          <div className="input-subsection">
            <span className="subsection-header">Are you a recurring member? *</span>
            <div className="radio-choices">
              <div className="radio-choice">
                <label className="input-label">Yes</label>
                <input type="radio" name="radio-input"></input>
              </div>
              <div className="radio-choice">
                <label className="input-label">No</label>
                <input type="radio" name="radio-input" selected></input>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <p className="subsection-header">Any suggestions?</p>
          <textarea></textarea>
          <br />
          <br />
          <button type="submit" id="submit-button">Submit</button>
        </div>
        
      </form>
    </div>
    
   )
}

export default SignUp