import { addDoc, collectionRef } from "../firebase";
import { useEffect } from "react";

const SignUp = () => {
  useEffect(() => {
    let count = 0
    if (count === 0) {
      console.log('uh yeah just ignore the error everything works')
    }
    count++
  }, [])

  const submit = async (event) => {
    event.preventDefault()

    const newMember = {
      'first-name': event.target[0].value,
      'last-name': event.target[1].value,
      'student-id': event.target[2].value,
      'email': event.target[3].value,
      'program': event.target[4].value,
      'year': event.target[5].value,
      'suggestions': event.target[8].value,
    }

    addDoc(collectionRef, newMember)
      .catch(error => {
        console.error("Error adding document: ", error);
      })
  }

  
  

   return (
    <div>
      <h2 className="subtitle form">Registration Form</h2>
      <form id="sign-up-form" onSubmit={submit}>
        <div>
          <div className="input-section">
            <p className="subsection-header">Name *</p>
            <div className="input-subsection">
              <div className="input-field">
                <input type="text" id="first-name" className="text-input" required></input>
                <label htmlFor="first-name" className="input-label">First Name</label>
              </div>
              <div className="input-field">
                <input type="text" id="last-name" className="text-input" required></input>
                <label htmlFor="last-name" className="input-label">Last Name</label>
              </div>
            </div>
          </div>
          <div className="input-section">
            <div className="input-subsection">
              <div className="input-field">
                <p className="subsection-header">Student ID *</p>
                <input type="text" id="student-id" className="text-input" required></input>
              </div>
              <div className="input-field">
                <p className="subsection-header">Email</p>
                <input type="text" id="email" className="text-input"></input>
              </div>
            </div>
          </div>
          <div className="input-section">
            <div className="input-subsection">
              <div className="input-field">
                <p className="subsection-header">Program *</p>
                <input type="text" id="program" className="text-input" required></input>
              </div>
              <div className="input-field">
                <p className="subsection-header">Year *</p>
                <select className="text-input" defaultValue={'0'}>
                  <option value="0" disabled>Select an option</option>
                  <option value="first-year">First Year</option>
                  <option value="second-year">Second Year</option>
                  <option value="third-year">Third Year</option>
                </select>
              </div>
            </div>
          </div>
          <div className="input-subsection">
            <span className="subsection-header">Are you a recurring member? *</span>
            <div className="radio-choices">
              <div className="radio-choice">
                <label className="input-label" htmlFor="yes-radio">Yes</label>
                <input type="radio" id="yes-radio" name="radio-input" value={true}></input>
              </div>
              <div className="radio-choice">
                <label className="input-label" htmlFor="no-radio">No</label>
                <input type="radio" id="no-radio" name="radio-input" value={false} checked></input>
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