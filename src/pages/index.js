import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return <div>{data.site.siteMetadata.title}</div>;
};

export default Home;
