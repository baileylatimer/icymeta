import React from 'react';
import { StaticQuery, graphql,  useStaticQuery, Link } from 'gatsby'

class Footer2 extends React.Component {


  render(){

    return (

      <footer class="border radius-lg padding-lg">
        <div class="flex">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a class="margin-left-sm" href="https://www.gatsbyjs.org">Gatsby</a>
      </div>

  <div class="flex">
    <Link to={`/terms-of-use`}>
      Terms of use |
    </Link>
    <Link to={`/terms-of-use`}>
      &nbsp;Terms of sale |
    </Link>
    <Link to={`/terms-of-use`}>
      &nbsp;Privacy policy
    </Link>
  </div>


    </footer>
    );

  }

}


export default Footer2;
