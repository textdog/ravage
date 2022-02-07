import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"

export default function Hell ({ data }) {
    return (
        <Layout>
        <div class="center">
            <h1>
               1-800-HELL 
            </h1>
        </div>
<div class="center">
      <h3>
      <p>Excuse me, did you say something? Did you try the thing you already did?</p>
		<p>This is customer service, but this isn't who you should call.</p>
		<p>There's only one way in, but the line's busy.</p>
		<p>Don't even get started with health insurance.</p>

		<p>You're running around in circles. You've been brought to your knees.</p>
		<p>You're banging your head on the wall. No one hears you, and no one ever will.</p>
		<p>You've lost all dignity.</p>
      </h3>

      <h4>
      <p>You know what a little slice of hell is? Screaming into the abyss of non-understanding. 
      Words go in one ear, out the other. You're getting billed every day, but no one can cancel your 
      service. Customer service, friends, mothers, fathers, lovers. They can all really suck sometimes.</p>

      <p>It's time to screammmmmmmmmmm. Call 1-800-HELL and bare your soul. You don't have to tell us twice, unless the recording doesn't work and you have to start all over again. Go ahead and try it!
      </p>
      </h4>


    <div class="link">
    <a href="javascript:void(
        window.open(
          'https://form.jotform.com/220327451781049',
          'blank',
          'scrollbars=yes,
          toolbar=no,
          width=700,
          height=500'
        )
      )
    ">
      CALL 1-800-HELL
    </a>
	</div>

</div>



        </Layout>
)
}

export const query = graphql`
    query {
            site {
                siteMetadata {
                    title
                }
            }
    }`
