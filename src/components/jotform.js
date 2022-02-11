import React from 'react'
const Jotform = ({ src , ...props }) => (
  <div className='video'>

    <iframe
      id="JotFormIFrame-211507253422041"
      title="1-800-HELL"
      onload="window.parent.scrollTo(0,0)"
      allowtransparency="true"
      allowfullscreen="true"
      allow="geolocation; microphone; camera"
      src="https://form.jotform.com/211507253422041"
      frameborder="0"
      width="600"
      height="600"
    >
    </iframe>



  </div>
)
export default Jotform
