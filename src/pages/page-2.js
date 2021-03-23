import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Write a Post" />
    <h1>Write a Post</h1>
    <p>Speak your mind...</p>
    <hr/>
    <input
      id="post-header"
      placeholder="Header..."
    />
    <br/><br/>
    <textarea
      id="post-body"
      style={{
        width: "100%",
        fontSize: "18pt"
      }}
      placeholder="Speak your mind..."
    >
    </textarea>
    <br/><br/>
    <button
      className="join-btn"
    >Submit</button>
  </Layout>
)

export default SecondPage
