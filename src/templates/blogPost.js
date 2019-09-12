import React from "react"
import {graphql} from 'gatsby'

const Template = ({data, pageContext}) => {
  console.log(pageContext)
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
        }}>
      </div>
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