import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import footerStyles from "./footer.module.css"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [showFailure, setShowFailure] = useState(false)

  const _handleChange = e => {
    setEmail(e.target.value)
  }

  const _handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowSuccess(false)
    setShowFailure(false)
    setMessage("")
    const result = await addToMailchimp(email)
    console.log(result)
    setIsSubmitting(false)
    setMessage(result.msg)
    if (result.result === "success") {
      setShowSuccess(true)
      setEmail("")
    } else if (result.result === "error") {
      setShowFailure(true)
    }
  }

  return (
    <footer>
      <h2 className={footerStyles.mailChimpTitle}>Sign up for newsletter</h2>
      <form
        className={footerStyles.mailChimpForm}
        onSubmit={e => email && _handleSubmit(e)}
      >
        <input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={e => _handleChange(e)}
          value={email}
          className={footerStyles.mailChimpInput}
        />
        <button
          type="submit"
          className={footerStyles.mailChimpSubmit}
          disabled={isSubmitting || !email}
        >
          Submit
        </button>
      </form>
      {showSuccess ? (
        <div className={footerStyles.footerSuccessMessage}>{message}</div>
      ) : null}
      {showFailure ? (
        <div
          className={footerStyles.footerErrorMessage}
          dangerouslySetInnerHTML={{ __html: message }}
        ></div>
      ) : null}
    </footer>
  )
}

export default Footer
