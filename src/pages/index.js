import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Ethica" />
      <br/>
      <p
        style={{
          fontFamily: "Gabriela, sans-serif",
          fontSize: "22pt",
          fontWeight: "bold",
          color: "#666",
          lineHeight: "1.4",
        }}
      >
        Thoughts on Computing Ethics.
      </p>
      <br/>
      <Link 
        to="/page-2/"
      >
        <button
          id="join-btn"
          style={{
            fontFamily: "Gabriela, sans-serif"
          }}
        >
          Write a Post
        </button>
      </Link>
      &nbsp;&nbsp;
      <Link 
        to="https://airtable.com/shrYonv1BROnD6Yc9"
        target="_blank"
        rel="noreferrer"
      >
        <button
          id="join-btn"
          style={{
            fontFamily: "Gabriela, sans-serif"
          }}
        >
          Join Alto
        </button>
      </Link>
      <br/><br/>
      <hr/>
      <br/>
      <h1>Posts</h1>
      {/*<p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>*/}
    </Layout>
  )
}

export default IndexPage
