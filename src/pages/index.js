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
      <div class="hero margin-top-lg">
        <h1 class="text-xxxxl color-contrast-higher  text-center font-display">Baguette Boyz</h1>
      </div>
      <div class="flex container">
        <svg class="hide show@lg" width="178" height="666" viewBox="0 0 178 666" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M139.674 8.61064L129.306 13.1099C134.588 20.5436 141.239 32.2809 144.956 40.1058L155.715 35.4108C151.607 27.586 144.565 15.653 139.674 8.61064ZM161.192 0.785767L150.824 5.28507C156.302 12.5231 162.757 23.6735 167.061 32.0853L177.429 27.3903C173.908 20.1523 166.279 8.02377 161.192 0.785767ZM32.4732 102.314C25.8221 118.55 14.6716 139.09 2.34746 155.523L18.9753 162.565C29.9301 146.72 40.6893 126.571 47.9273 108.769C56.1435 88.62 62.9902 59.6679 65.5333 47.5394C66.5114 43.4313 67.8808 37.5627 69.2501 33.259L51.8398 29.7378C49.1011 52.2343 41.0806 81.9688 32.4732 102.314ZM128.915 94.8799C136.935 115.616 146.13 142.22 151.02 161.978L168.43 156.501C163.149 138.699 152.781 108.769 144.956 89.4025C136.544 68.8622 124.024 41.8664 116.395 27.586L100.55 32.8678C108.961 47.5394 121.09 74.7308 128.915 94.8799Z" fill="#DFDFDF"/>
        <path d="M138.696 205.654L128.328 210.154C133.61 217.392 140.261 229.325 143.978 237.15L154.541 232.455C150.629 224.434 143.586 212.697 138.696 205.654ZM160.019 197.83L149.846 202.133C155.324 209.567 161.779 220.522 166.083 229.129L176.451 224.434C172.734 217.196 165.3 204.872 160.019 197.83ZM67.6852 212.697L48.9055 209.176C48.5142 214.262 47.5361 219.739 45.9711 224.63C43.6237 232.259 40.2981 242.236 34.8207 252.017C28.1695 263.95 14.0848 284.099 0 294.076L15.4541 303.465C27.7783 293.293 42.0587 273.34 49.8836 258.081C55.361 247.322 59.6647 235.389 62.7946 226.586C64.164 222.478 66.1202 217.196 67.6852 212.697ZM43.2324 246.344L41.0806 261.602C55.7522 261.602 139.674 261.602 147.694 261.602C152.194 261.602 159.823 261.602 166.083 261.993V245.17C160.41 246.148 152.585 246.344 147.694 246.344C139.674 246.344 56.1435 246.344 43.2324 246.344ZM115.026 254.56H98.3978C97.4197 308.747 75.3144 336.134 55.1654 351.197C50.8617 354.718 44.7974 358.239 39.32 360.391L55.9478 371.737C90.9642 349.436 113.265 314.811 115.026 254.56Z" fill="#DFDFDF"/>
        <path d="M84.5086 397.517L70.0326 402.408C74.1407 411.015 83.1393 435.859 85.2911 444.858L99.7671 439.576C97.4197 431.164 87.8342 405.342 84.5086 397.517ZM155.324 408.472L138.5 402.995C135.37 428.035 125.394 453.074 111.504 470.093C95.4635 490.047 70.4239 504.914 47.9273 511.565L60.8384 524.672C82.5524 516.456 106.418 501.197 124.611 478.309C138.5 460.703 147.108 439.576 152.194 418.058C152.976 415.515 153.954 412.385 155.324 408.472ZM38.9287 407.299L24.4527 412.776C28.3652 419.623 38.9287 446.814 42.0587 456.987L56.7303 451.509C53.2091 441.141 42.8412 415.515 38.9287 407.299Z" fill="#DFDFDF"/>
        <path d="M55.7522 641.785C55.7522 649.023 55.5566 658.804 54.5785 665.064H73.5538C72.7713 658.609 72.3801 648.045 72.3801 641.785C72.3801 632.591 72.1845 558.45 72.1845 528.129C72.1845 522.065 72.7713 513.653 73.5538 507.589H54.3829C55.361 513.849 55.7522 522.456 55.7522 528.129C55.7522 544.366 55.7522 630.831 55.7522 641.785ZM68.6633 559.037V576.252C89.986 582.903 126.567 596.792 148.868 608.725L155.715 592.097C134.001 581.534 94.4853 566.471 68.6633 559.037Z" fill="#DFDFDF"/>
        </svg>
        <div class="border radius-lg grid width-100% margin-left-md@lg margin-top-md">

          <div class="col-2 border-right">

          </div>
          <div class="col-10 border-left flex-column justify-between  height-100% width-100%">
            <div class="border-bottom flex items-center justify-center">
              <h2 class="text-nowrap">114 days</h2>
            </div>
            <div class="icebox">
              
            </div>
            <a class="btn btn--primary btn--lg" href="openseas.io" target="_blank">Shop on Openseas</a>
          </div>
        </div>
      </div>
      <div class="border radius-lg padding-sm container margin-top-md text-nowrap overflow-hidden">
        <h4 class="scrolling-text">Alive & Well &nbsp; 良い &nbsp; Timeless &nbsp; タイムレス &nbsp; Contemporary &nbsp; モダン  &nbsp; Alive & Well &nbsp; 良い &nbsp; Timeless &nbsp; タイムレス &nbsp; Contemporary &nbsp; モダン</h4>
      </div>

      <div class="border radius-lg container margin-top-md">
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
            <h2 class="">001</h2>
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
            <h2 class="">Pieces</h2>
          </div>
          <div class="col-4 flex justify-center padding-sm">
            <h2 class="">ピース</h2>
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
        <div class="grid border-top">
          <div class="col-6 padding-sm">
            <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate libero vitae feugiat diam leo. Venenatis sapien in malesuada.</p>
          </div>
          <div class="col-6">
            <a class="btn btn--primary btn--lg height-100%" href="openseas.io" target="_blank">See full collection</a>
          </div>
        </div>
      </div>

      <div class="border radius-lg container margin-top-md">
        <div class="grid border-bottom">
          <div class="flex justify-between col-4 items-center padding-sm border-right">
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
            <h2 class="">002</h2>
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
          <div class="col-8 flex justify-center padding-sm">
            <h2 class=" text-nowrap">Join the community</h2>
          </div>
        </div>
        <div class="grid border-bottom">
          <div class="col-12 border-right card">
            
          </div>
        </div>
        <div class="grid border-top">
          <div class="col-6">
            <a class="btn btn--subtle btn--lg height-100%" href="openseas.io" target="_blank">
            <svg class="margin-right-xs"  width="49" height="37" viewBox="0 0 49 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.134 3.23955C38.0747 1.83579 34.794 0.801558 31.3638 0.209211C31.3013 0.197779 31.2389 0.226348 31.2067 0.283489C30.7848 1.03392 30.3175 2.01292 29.9902 2.7824C26.3008 2.23007 22.6304 2.23007 19.0166 2.7824C18.6893 1.99581 18.205 1.03392 17.7811 0.283489C17.749 0.228255 17.6866 0.199685 17.6241 0.209211C14.1958 0.799665 10.9151 1.8339 7.85387 3.23955C7.82737 3.25098 7.80465 3.27004 7.78958 3.29479C1.56678 12.5915 -0.1379 21.6597 0.69836 30.6155C0.702144 30.6593 0.72674 30.7012 0.760796 30.7279C4.86642 33.7429 8.84341 35.5734 12.7466 36.7866C12.809 36.8057 12.8752 36.7828 12.915 36.7314C13.8383 35.4705 14.6613 34.1411 15.367 32.743C15.4086 32.6611 15.3688 32.564 15.2837 32.5316C13.9783 32.0364 12.7352 31.4326 11.5395 30.7469C11.4449 30.6917 11.4373 30.5564 11.5243 30.4917C11.7759 30.3031 12.0276 30.1069 12.2679 29.9088C12.3114 29.8727 12.372 29.865 12.4231 29.8879C20.2786 33.4744 28.7831 33.4744 36.5459 29.8879C36.597 29.8631 36.6576 29.8708 36.703 29.9069C36.9433 30.105 37.1949 30.3031 37.4484 30.4917C37.5354 30.5564 37.5298 30.6917 37.4352 30.7469C36.2394 31.4459 34.9964 32.0364 33.689 32.5297C33.6039 32.5621 33.5661 32.6611 33.6077 32.743C34.3285 34.1391 35.1515 35.4686 36.0578 36.7295C36.0956 36.7828 36.1637 36.8057 36.2262 36.7866C40.1483 35.5734 44.1252 33.7429 48.2309 30.7279C48.2668 30.7012 48.2895 30.6612 48.2933 30.6174C49.2942 20.2635 46.617 11.2697 41.1964 3.29668C41.1832 3.27004 41.1605 3.25098 41.134 3.23955ZM16.54 25.1624C14.175 25.1624 12.2263 22.9911 12.2263 20.3245C12.2263 17.6579 14.1372 15.4867 16.54 15.4867C18.9617 15.4867 20.8916 17.677 20.8538 20.3245C20.8538 22.9911 18.9428 25.1624 16.54 25.1624ZM32.4895 25.1624C30.1245 25.1624 28.1758 22.9911 28.1758 20.3245C28.1758 17.6579 30.0867 15.4867 32.4895 15.4867C34.9113 15.4867 36.8411 17.677 36.8033 20.3245C36.8033 22.9911 34.9113 25.1624 32.4895 25.1624Z" fill="white"/>
            </svg>
              Discord</a>
          </div>
          <div class="col-6 border-left">
            <a class="btn btn--subtle btn--lg height-100%" href="openseas.io" target="_blank">
            <svg class="margin-right-xs" width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1003 40.0001C33.2091 40.0001 43.1166 24.9935 43.1166 11.9838C43.1166 11.5619 43.1072 11.1307 43.0884 10.7088C45.0158 9.31501 46.679 7.5886 48 5.61069C46.205 6.40929 44.2993 6.93086 42.3478 7.15756C44.4026 5.92591 45.9411 3.99104 46.6781 1.71163C44.7451 2.85721 42.6312 3.66532 40.4269 4.10131C38.9417 2.52321 36.978 1.47832 34.8394 1.12819C32.7008 0.778063 30.5064 1.14219 28.5955 2.16428C26.6846 3.18638 25.1636 4.8095 24.2677 6.78271C23.3718 8.75593 23.1509 10.9693 23.6391 13.0807C19.725 12.8843 15.8959 11.8675 12.4 10.0963C8.90405 8.32508 5.81939 5.83896 3.34594 2.79913C2.0888 4.96658 1.70411 7.53138 2.27006 9.97227C2.83601 12.4132 4.31013 14.547 6.39281 15.9401C4.82926 15.8904 3.29995 15.4695 1.93125 14.7119V14.8338C1.92985 17.1084 2.7162 19.3133 4.15662 21.0736C5.59704 22.834 7.60265 24.0412 9.8325 24.4901C8.38411 24.8863 6.86396 24.9441 5.38969 24.6588C6.01891 26.615 7.24315 28.3259 8.89154 29.5528C10.5399 30.7796 12.5302 31.4613 14.5847 31.5026C11.0968 34.2423 6.78835 35.7283 2.35313 35.7213C1.56657 35.7201 0.780798 35.6719 0 35.5769C4.50571 38.4676 9.74706 40.0029 15.1003 40.0001Z" fill="white"/>
            </svg>
              Twitter</a>
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

