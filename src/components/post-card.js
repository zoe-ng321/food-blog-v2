import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const PostCard = ({ data }) => (
  <article className="post-card">
    {data.frontmatter.featuredImage ? 
      (
        <Link to={data.frontmatter.slug}>
          <GatsbyImage
            image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.frontmatter.title + ' - Featured image'}
            className="featured-image" />
        </Link>
      ) : ""
    }
    <div class="post-content">
      <h2 className="title"><Link to={data.frontmatter.slug}>{data.frontmatter.title}</Link></h2>
      <p className="meta"><time>{data.frontmatter.date}</time></p>
    </div>
  </article>
)

export default PostCard