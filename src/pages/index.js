import React from 'react';
import GatsbyLink from 'gatsby-link';

import Link from '../components/Link';
import Tags from '../components/Tags';

import '../css/index.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
      {posts
        .filter((post) => post.node.frontmatter.title.length > 0)
        .map(({ node: post }, index) => {
          return (
            <div
              className={`blog-post-preview ${
                index % 2 !== 0 ? 'inverse' : ''
              }`}
              key={post.id}
            >
              <div className="post-info">
                <h1 className="title">
                  <GatsbyLink to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </GatsbyLink>
                </h1>
                <div className="meta">
                  <div className="tags">
                    <Tags list={post.frontmatter.tags} />
                  </div>
                  <h4 className="date">{post.frontmatter.date}</h4>
                </div>
                <p className="excerpt">{post.excerpt}</p>
                <div>
                  <Link to={post.frontmatter.path} className="see-more">
                    Read more
                  </Link>
                </div>
              </div>
              <div className="post-img">
                <img src={post.frontmatter.image} alt="image" />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            image
          }
        }
      }
    }
  }
`;
