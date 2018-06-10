import React from 'react';
import Helmet from 'react-helmet';
import BackIcon from 'react-icons/lib/fa/chevron-left';
import ForwardIcon from 'react-icons/lib/fa/chevron-right';

import Link from '../components/Link';
import Tags from '../components/Tags';

import '../css/blog-post.css';
import Comments from '../components/Comments/CommentList';

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;
  return (
    <div className="blog-post-container">
      <Helmet title={`The Food Blog - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <div>
          <h1 className="title">{post.frontmatter.title}</h1>
          <h2 className="date">{post.frontmatter.date}</h2>
          <div className="post-body">
            <div className="post-img">
              <img src={post.frontmatter.image} alt="" />
            </div>
            <div
              className="blog-post-content post-info"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
          <Tags list={post.frontmatter.tags || []} />
          <div className="navigation">
            {prev && (
              <Link className="link prev" to={prev.frontmatter.path}>
                <BackIcon size={16} className="icon" /> {prev.frontmatter.title}
              </Link>
            )}
            {next && (
              <Link className="link next" to={next.frontmatter.path}>
                {next.frontmatter.title}{' '}
                <ForwardIcon size={16} className="icon" />
              </Link>
            )}
          </div>
          <div className="comment-section">
            <h4 className="comment-header">Comments</h4>
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
        image
      }
    }
  }
`;
