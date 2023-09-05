import braille from '../assets/braille.png'
import { addDoc, contestRef } from '../firebase'

const Contest = () => {
  const submit = async (event) => {
    event.preventDefault()
    const participation = localStorage.getItem("participation")
    if (participation) {
      alert('You already participated!')
      location.reload()
      return null
    }

    const answer = {
      'answer': event.target[0].value,
      'student-id': event.target[1].value,
    }

    if (answer.answer.toLowerCase() === 'kimono') {
      alert('Congratulations, you entered the correct answer! Come back later to our stand to see if you won a prize!')
    } else {
      alert('Sorry, you did not enter the correct answer. Join us next Tuesday during AP to see how this problem is solved.')
    }

    addDoc(contestRef, answer)
      .then(() => {
        console.log('test')
        localStorage.setItem("participation", "true")
        location.reload()
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      })
  }
  return (
    <div id="contest">
      <h2 className="subtitle" id="socials-title">Solve This Problem and Have a Chance to Win a 20$ Amazon Gift Card!</h2>
      <img src={braille} id="braille" />
      <p className='parag big'>What is the correct answer for f? (one chance only)</p>
      <form id="contest-form" className='contest' onSubmit={submit}>
        <div className="input-section">
          <div className="input-subsection">
            <div className="input-field">
              <input type="text" id="first-name" className="text-input" required></input>
              <label htmlFor="first-name" className="input-label">Answer</label>
            </div>
            <div className="input-field">
              <input type="text" id="last-name" className="text-input" required></input>
              <label htmlFor="last-name" className="input-label">Student Number</label>
            </div>
          </div>
        </div>
      </form>
      <button type="submit" id="submit-button" form='contest-form'>
        Submit
      </button>
    </div>
  )
}

export default Contest