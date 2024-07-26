import "./Form.css";
import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" />
        <label htmlFor="message">Message:</label>
        <textarea rows="6" id="message" name="message" placeholder="Type your message here" required />
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
