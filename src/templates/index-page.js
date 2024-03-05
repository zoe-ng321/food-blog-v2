import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { RiArrowRightSLine } from "react-icons/ri"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"

export const pageQuery = graphql`query HomeQuery($id: String!) {
  markdownRemark(id: {eq: $id}) {
    id
    html
    frontmatter {
      title
      tagline
      featuredImage {
        childImageSharp {
          gatsbyImageData(
            width: 480
            height: 380
            quality: 80
            breakpoints: [960, 1440]
            layout: CONSTRAINED
          )
        }
      }
      cta {
        ctaText
        ctaLink
      }
    }
  }
}`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.gatsbyImageData : ""
	return (
      <Layout>
    <SEO/>
    <div className="home-banner grids col-1 sm-2">
      <div>
        <h1 class="title">{frontmatter.title}</h1>
        <p class="tagline">{frontmatter.tagline}</p>
        <div className="description" dangerouslySetInnerHTML={{__html: html}}/>
        <Link to={frontmatter.cta.ctaLink} className="button">{frontmatter.cta.ctaText}<span class="icon -right"><RiArrowRightSLine/></span></Link>
      </div>
      <div>
        {Image ? (
          <GatsbyImage
            image={Image}
            alt={frontmatter.title + ' - Featured image'}
            className="featured-image" />
        ) : ""}
      </div>
    </div>
    <BlogListHome/>
      </Layout>
    );
}

export default HomePage
