// Write your JS code here
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    frstName: '',
    lastName: '',
    showError1: false,
    showError2: false,
    isFormSubmitted: false,
  }

  validateLast = () => {
    const {lastName} = this.state 

    return lastName !== ''
  }

  onBlurLast = () => {
    const isValidLast = this.validateLast() 

    this.setState({showError2: !isValidLast})
  }

  onChangeLast = event => {
    this.setState({lastName: event.target.value})
  } 

  validateFrst = () => {
    const {frstName} = this.state 

    return frstName !== ''
  }

  onBlurFrst = () => {
    const isValidFrst = this.validateFrst() 

    this.setState({showError2: !isValidFrst})
  }

  onChangeFrst = event => {
    this.setState({frstName: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFrst = this.validateFrst()
    const isValidLast =  this.validateLast() 

    if (isValidFrst && isValidLast) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showError1: !isValidFrst,
        showError2: !isValidLast,
        isFormSubmitted: false,
      })
    }
  }

  
  renderForm = () => { 
    const {showError1, showError2, frstName, lastName} = this.state
    return (
    <div>
      <h1>Registration</h1>
      <div>
        <form onSubmit={this.onSubmitForm}>
          <label htmlFor="firstname">FIRST NAME</label>
          <input
            type="text"
            id="firstname"
            value={frstName}
            placeholder="First name"
            onChange={this.onChangeFrst}
            onBlur={this.onBlurFrst}
          /> 
          {showError1 && <p>Required</p>}
          <label htmlFor="lastname">LAST NAME</label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            placeholder="Last name"
            onChange={this.onChangeLast}
            onBlur={this.onBlurLast}
          />
          {showError2 && <p>Required</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    )
  }

  nxtPage = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      frstName: '',
      lastName: '',
    }))
  }

  renderSuccess = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button type="button" onClick={this.nxtPage}>
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div>{isFormSubmitted ? this.renderSuccess() : this.renderForm()}</div>
    )
  }
}

export default RegistrationForm
