import React from 'react';
import Link from 'gatsby-link';
import TagIcon from 'react-icons/lib/fa/tag';

import '../css/tags.css';

export default function Tags({ list = [] }) {
  return (
    <ul className="tags">
      {list.map(tag =>
        <li key={tag}>
          <Link to={`/tags/${tag}`} className="tag">
            <TagIcon size={15} className="icon white" />
            {tag}
          </Link>
        </li>
      )}
    </ul>
  );
}
