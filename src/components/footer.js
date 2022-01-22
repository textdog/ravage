import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import footerStyles from "./footer.module.css"
import ArrowRight from "../images/arrow-right.svg"

const Footer = () => {

  const [email, setEmail]                 = useState("");
  const [isSubmitting, setIsSubmitting]   = useState(false);
  const [message, setMessage]             = useState("");
  const [showSuccess, setShowSuccess]     = useState(false);
  const [showFailure, setShowFailure]     = useState(false);

  const _handleChange = (e) => {
    setEmail(e.target.value);
  }

  const _handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    setShowFailure(false);
    setMessage("");
    const result = await addToMailchimp(email);
    console.log(result);
    setIsSubmitting(false);
    setMessage(result.msg);
    if (result.result === "success") {
      setShowSuccess(true);
      setEmail("");
    } else if (result.result === "error") {
      setShowFailure(true);
    }
  }

  return (
    <footer>
      <form className={footerStyles.mailChimpForm}>
        <input
          type="email"
          name="email"
          placeholder="Sign up for email address"
          onChange={(e) => _handleChange(e)}
          value={email}
          className={footerStyles.mailChimpInput}
        />
        <img onClick={(e) => email && _handleSubmit(e)} className={[footerStyles.mailChimpSubmit, isSubmitting || !email ? footerStyles.mailChimpDisabled : ''].join(' ')} src={ArrowRight} />
      </form>
      {showSuccess ? <div className={footerStyles.footerSuccessMessage} >{message}</div> : null}
      {showFailure ? <div className={footerStyles.footerErrorMessage} dangerouslySetInnerHTML={{__html: message}}></div> : null}
    </footer>
  )
}

export default Footer
