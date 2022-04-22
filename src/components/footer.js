import React from 'react'
import { StaticQuery, graphql,  useStaticQuery, Link } from 'gatsby'

class Footer extends React.Component {
 
  
  return (
  

              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>

                {allShopifyPage.nodes.map(({  title, handle }) => (
            <Link to={`/page/${handle}/`}>
           {title}
            </Link>
          
        ))}
              </footer>
           
  )
}


export default Footer
