import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/seo";
import "./index.css";

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <div className='home'>
      <h1>Hello Ishan</h1>
      <p>Welcome your awesome Blog</p>
      <div>
        <div
          style={{
            maxWidth: `340px`,
            margin: '0 auto',
          }}
        >
             <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
        </div>
      </div>
      <Link to='/siteposts/'>View all posts</Link>
    </div>
  </Layout>
);

export default IndexPage;