import React from "react"
import {graphql, Link} from 'gatsby'

const Template = ({data, pageContext}) => {
  // console.log(pageContext)
  const {next, prev} = pageContext

  const {markdownRemark} = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <div>
      <h1 style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'avenir'
    }} >{title}</h1>
      <div className='blogpost'
        dangerouslySetInnerHTML={{__html: html}}
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'avenir'
        }}
      />
      {next && 
        <Link to={next.frontmatter.path} style={{margin: 5, fontFamily: 'avenir'}}>
          Next
        </Link>
      }
      {prev && 
        <Link to={prev.frontmatter.path} style={{margin: 5, fontFamily: 'avenir'}}>
          Prev
        </Link>
      }
    </div>
  )
}

export const query = graphql `
  query($pathSlug: String!){
    markdownRemark(frontmatter: {path: {eq: $pathSlug} }){
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template