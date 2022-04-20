import React from 'react'
import { Link } from 'gatsby'


import { useStaticQuery, graphql } from "gatsby"
import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import Img from "~/components/pic"
import Image from "../components/pic"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "cover_gosun.jpg"}) {
        childImageSharp {
          fluid {
          ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


return (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section class="project-page padding-y-xl flex flex-column items-center">
      <div class="hero">
        <h1 class="text-xxxxl color-contrast-higher text-uppercase text-center font-display">Baguette Boyz</h1>
      </div>
      <div class="flex container">
        <svg width="178" height="666" viewBox="0 0 178 666" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M139.674 8.61064L129.306 13.1099C134.588 20.5436 141.239 32.2809 144.956 40.1058L155.715 35.4108C151.607 27.586 144.565 15.653 139.674 8.61064ZM161.192 0.785767L150.824 5.28507C156.302 12.5231 162.757 23.6735 167.061 32.0853L177.429 27.3903C173.908 20.1523 166.279 8.02377 161.192 0.785767ZM32.4732 102.314C25.8221 118.55 14.6716 139.09 2.34746 155.523L18.9753 162.565C29.9301 146.72 40.6893 126.571 47.9273 108.769C56.1435 88.62 62.9902 59.6679 65.5333 47.5394C66.5114 43.4313 67.8808 37.5627 69.2501 33.259L51.8398 29.7378C49.1011 52.2343 41.0806 81.9688 32.4732 102.314ZM128.915 94.8799C136.935 115.616 146.13 142.22 151.02 161.978L168.43 156.501C163.149 138.699 152.781 108.769 144.956 89.4025C136.544 68.8622 124.024 41.8664 116.395 27.586L100.55 32.8678C108.961 47.5394 121.09 74.7308 128.915 94.8799Z" fill="#DFDFDF"/>
        <path d="M138.696 205.654L128.328 210.154C133.61 217.392 140.261 229.325 143.978 237.15L154.541 232.455C150.629 224.434 143.586 212.697 138.696 205.654ZM160.019 197.83L149.846 202.133C155.324 209.567 161.779 220.522 166.083 229.129L176.451 224.434C172.734 217.196 165.3 204.872 160.019 197.83ZM67.6852 212.697L48.9055 209.176C48.5142 214.262 47.5361 219.739 45.9711 224.63C43.6237 232.259 40.2981 242.236 34.8207 252.017C28.1695 263.95 14.0848 284.099 0 294.076L15.4541 303.465C27.7783 293.293 42.0587 273.34 49.8836 258.081C55.361 247.322 59.6647 235.389 62.7946 226.586C64.164 222.478 66.1202 217.196 67.6852 212.697ZM43.2324 246.344L41.0806 261.602C55.7522 261.602 139.674 261.602 147.694 261.602C152.194 261.602 159.823 261.602 166.083 261.993V245.17C160.41 246.148 152.585 246.344 147.694 246.344C139.674 246.344 56.1435 246.344 43.2324 246.344ZM115.026 254.56H98.3978C97.4197 308.747 75.3144 336.134 55.1654 351.197C50.8617 354.718 44.7974 358.239 39.32 360.391L55.9478 371.737C90.9642 349.436 113.265 314.811 115.026 254.56Z" fill="#DFDFDF"/>
        <path d="M84.5086 397.517L70.0326 402.408C74.1407 411.015 83.1393 435.859 85.2911 444.858L99.7671 439.576C97.4197 431.164 87.8342 405.342 84.5086 397.517ZM155.324 408.472L138.5 402.995C135.37 428.035 125.394 453.074 111.504 470.093C95.4635 490.047 70.4239 504.914 47.9273 511.565L60.8384 524.672C82.5524 516.456 106.418 501.197 124.611 478.309C138.5 460.703 147.108 439.576 152.194 418.058C152.976 415.515 153.954 412.385 155.324 408.472ZM38.9287 407.299L24.4527 412.776C28.3652 419.623 38.9287 446.814 42.0587 456.987L56.7303 451.509C53.2091 441.141 42.8412 415.515 38.9287 407.299Z" fill="#DFDFDF"/>
        <path d="M55.7522 641.785C55.7522 649.023 55.5566 658.804 54.5785 665.064H73.5538C72.7713 658.609 72.3801 648.045 72.3801 641.785C72.3801 632.591 72.1845 558.45 72.1845 528.129C72.1845 522.065 72.7713 513.653 73.5538 507.589H54.3829C55.361 513.849 55.7522 522.456 55.7522 528.129C55.7522 544.366 55.7522 630.831 55.7522 641.785ZM68.6633 559.037V576.252C89.986 582.903 126.567 596.792 148.868 608.725L155.715 592.097C134.001 581.534 94.4853 566.471 68.6633 559.037Z" fill="#DFDFDF"/>
        </svg>
        <div class="border radius-lg grid width-100% margin-left-md margin-top-md">
          <div class="col-2 border-right flex items-center justify-center">
            <h2 class="text-xxxl vertical text-nowrap">114 days</h2>
          </div>
          <div class="col-2 border-right">

          </div>
          <div class="col-8 border-left flex items-end">
            <a class="btn btn--primary btn--lg" href="openseas.io" target="_blank">Shop on Openseas</a>
          </div>
        </div>
      </div>
      <div class="border radius-lg padding-sm width-100% margin-top-md text-nowrap overflow-hidden">
        <h4 class="scrolling-text">Alive & Well &nbsp; 良い &nbsp; Timeless &nbsp; タイムレス &nbsp; Contemporary &nbsp; モダン  &nbsp; Alive & Well &nbsp; 良い &nbsp; Timeless &nbsp; タイムレス &nbsp; Contemporary &nbsp; モダン</h4>
      </div>

      <div class="border radius-lg width-100% margin-top-md">
        <div class="grid border-bottom">
          <div class="flex justify-between col-4 items-center padding-sm">
            <svg width="124" height="55" viewBox="0 0 124 55" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_2542_3733)">
  <line x1="-47.6289" y1="80.4559" x2="16.9591" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
  <line x1="-35.835" y1="80.4559" x2="28.7531" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
  <line x1="-24.0411" y1="80.4559" x2="40.547" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
  <line x1="-12.2471" y1="80.4559" x2="52.341" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
  <line x1="-0.453165" y1="80.4559" x2="64.1349" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
  <line x1="11.3408" y1="80.4559" x2="75.9289" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
  <line x1="23.1347" y1="80.4559" x2="87.7228" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
  <line x1="34.9287" y1="80.4559" x2="99.5167" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
  <line x1="46.7226" y1="80.4559" x2="111.311" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
  <line x1="58.5166" y1="80.4559" x2="123.105" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
  <line x1="70.3105" y1="80.4559" x2="134.899" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
  <line x1="82.1045" y1="80.4559" x2="146.693" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
  <line x1="93.8984" y1="80.4559" x2="158.486" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
  <line x1="105.692" y1="80.4559" x2="170.28" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
  <line x1="117.486" y1="80.4559" x2="182.074" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
  </g>
  <defs>
  <clipPath id="clip0_2542_3733">
  <rect width="124" height="54" fill="white" transform="translate(0 0.5)"/>
  </clipPath>
  </defs>
            </svg>
            <h2 class="text-xxxl">001</h2>
            <svg width="124" height="55" viewBox="0 0 124 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2542_3733)">
              <line x1="-47.6289" y1="80.4559" x2="16.9591" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
              <line x1="-35.835" y1="80.4559" x2="28.7531" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
              <line x1="-24.0411" y1="80.4559" x2="40.547" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
              <line x1="-12.2471" y1="80.4559" x2="52.341" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
              <line x1="-0.453165" y1="80.4559" x2="64.1349" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
              <line x1="11.3408" y1="80.4559" x2="75.9289" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
              <line x1="23.1347" y1="80.4559" x2="87.7228" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
              <line x1="34.9287" y1="80.4559" x2="99.5167" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
              <line x1="46.7226" y1="80.4559" x2="111.311" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
              <line x1="58.5166" y1="80.4559" x2="123.105" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
              <line x1="70.3105" y1="80.4559" x2="134.899" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
              <line x1="82.1045" y1="80.4559" x2="146.693" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
              <line x1="93.8984" y1="80.4559" x2="158.486" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
              <line x1="105.692" y1="80.4559" x2="170.28" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
              <line x1="117.486" y1="80.4559" x2="182.074" y2="-17.5563" stroke="#DFDFDF" stroke-width="2"/>
              </g>
              <defs>
              <clipPath id="clip0_2542_3733">
              <rect width="124" height="54" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
              </defs>
            </svg>
          </div>
          <div class="border-left border-right col-4 flex justify-center padding-sm">
            <h2 class="text-xxxl">Pieces</h2>
          </div>
          <div class="col-4 flex justify-center padding-sm">
            <h2 class="text-xxxl">ピース</h2>
          </div>
        </div>
        <div class="grid border-bottom">
          <div class="col-3 border-right card">
            
          </div>
          <div class="col-3 border-right card">
            
          </div>
          <div class="col-3 border-right card">
          
          </div>
          <div class="col-3 border-right card">
          
          </div>
        </div>
      </div>
    </section>

<div class="snowflakes" aria-hidden="true">
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
</div>
  </>
)
}

