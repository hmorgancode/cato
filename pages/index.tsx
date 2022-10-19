/* eslint @next/next/no-img-element: 0 */
import { ReactElement } from 'react';
import type { NextPage } from 'next';

import CatoHead from '../components/shared/CatoHead';
import CatoHeader from '../components/shared/CatoHeader';
import CatoFooter from '../components/shared/CatoFooter';
import CatoMain from '../components/shared/CatoMain';

const HomePage: NextPage = () => {
  return (
    <>
      <CatoHead title="Teo - Commissions" />
      <CatoHeader />
      <CatoMain>
        <Commissions />
      </CatoMain>
      <CatoFooter />
      <style jsx>{`
        .test-div {
          width: 300px;
          height: 300px;
          background-color: #FF2222;
        }
      `}
      </style>
    </>
  );
};

function Commissions() : ReactElement {
  return (
    <div id="content">
      <div id="container">
        <div style={{ height: '15px' }} />
        <div className="section-header"><p>standard commissions</p></div>
        <div id="standard-comms">
          {/* <!-- Sketch --> */}
          <div className="single-standard-comm">
            <div className="single-comm-image">
              <img src="images/sketch-comm.png" alt="" />
            </div>
            <div className="single-comm-container">
              <div className="single-comm-label single-comm-header"><p>sketch</p></div>
              <div className="single-comm-price-flex">
                <div className="single-comm-label single-comm-price single-comm-price-large">
                  <p className="price-title">Base Price</p>
                  <p className="price-large">$70</p>
                </div>
                <div style={{ height: '11px' }} />
                <div className="single-comm-label single-comm-price">
                  <p className="price-title">Add Color</p>
                  <p className="price-small">$25</p>
                </div>
                <div style={{ height: '11px' }} />
                <div className="single-comm-label single-comm-price">
                  <p className="price-title">Add Character</p>
                  <p className="price-small">$30</p>
                </div>
                <div style={{ height: '11px' }} />
                <div className="single-comm-label single-comm-price">
                  <p className="price-title">Add Color Character</p>
                  <p className="price-small">$40</p>
                </div>
                <div style={{ height: '11px' }} />
                <div className="single-comm-label single-comm-price">
                  <p className="price-title">Add Extras</p>
                  <p className="price-small">$25</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Full Color --> */}
          <div className="single-standard-comm">
            <div className="single-comm-image">
                <img src="images/fullcolor-comm.png" alt="" />
            </div>
            <div className="single-comm-container">
              <div className="single-comm-label single-comm-header"><p>full color</p></div>
              <div className="single-comm-price-flex">
                <div className="single-comm-label single-comm-price single-comm-price-large">
                  <p className="price-title">Base Price</p>
                  <p className="price-large">$150</p>
                </div>
                <div style={{ height: '11px' }} />
                <div className="single-comm-label single-comm-price">
                  <p className="price-title">Add Character</p>
                  <p className="price-small">$75</p>
                </div>
                <div style={{ height: '11px' }} />
                <div className="single-comm-label single-comm-price">
                  <p className="price-title">Add Backdrop</p>
                  <p className="price-small">$75</p>
                </div>
                <div style={{ height: '11px' }} />
                <div className="single-comm-label single-comm-price">
                  <p className="price-title">Add Extras</p>
                  <p className="price-small">$40</p>
                </div>
              </div>  
            </div>
          </div>                
          
          {/* <!-- Scene --> */}
          <div className="single-standard-comm">
            <div className="single-comm-image">
              <img src="images/scene-comm.png" alt="" />
            </div>
            <div className="single-comm-container">
              <div className="single-comm-label single-comm-header"><p>scene</p></div>
              <div className="single-comm-price-flex">
                <div className="single-comm-label single-comm-price single-comm-price-large">
                  <p className="price-title">Base Price</p>
                  <p className="price-large">$350</p>
                </div>
                <div style={{ height: '11px' }} />
                <div className="single-comm-label single-comm-price">
                  <p className="price-title">Add Character</p>
                  <p className="price-small">$75</p>
                </div>
                <div style={{ height: '11px' }} />
                <div className="single-comm-label single-comm-price">
                  <p className="price-title">Add Extras</p>
                  <p className="price-small">$60</p>
                </div>
              </div>  
            </div>
          </div>
        </div>
        <div className="section-header"><p>other commissions</p></div>
        <div style={{ height: '15px' }} />
        <div className="other-commissions-row">
          {/* <!-- Ref Sheet --> */}
          <div className="single-other-comm">
            <div className="single-other-comm-container">
              <div className="single-other-comm-image">
                  <img src="/images/refsheet-comm.png" alt="" />
              </div>
              <div className="single-other-comm-info">
                <div className="single-comm-label single-comm-header">
                  <p>reference sheet</p>
                </div>
                <div style={{ height: '11px' }} />
                <div className="single-comm-label single-comm-price">
                  <p className="price-title">Base Price</p>
                  <p className="price-small">$175</p>
                </div>
                <div style={{ height: '11px' }} />
                <div className="single-comm-label single-comm-price">
                  <p className="price-title">Add Body</p>
                  <p className="price-small">$50</p>
                </div>
                <div style={{ height: '11px' }} />
                <div className="single-comm-label single-comm-price">
                  <p className="price-title">Add Headshot/Prop</p>
                  <p className="price-small">$20</p>
                </div>
                <div style={{ height: '11px' }} />
                <div className="single-comm-label single-comm-price">
                  <p className="price-title">Add Outfit</p>
                  <p className="price-small">$30 per body</p>
                </div>
              </div>
            </div>
          </div>
            
          {/* <!-- Icon --> */}
          <div className="single-other-comm">
            <div className="single-other-comm-container">
              <div className="single-other-comm-image">
                  <img src="/images/icon-comm.png" alt="" />
              </div>
              <div className="single-other-comm-info">
                <div className="single-comm-label single-comm-header">
                    <p>icon</p>
                </div>
                <div style={{ height: '11px' }} />
                <div className="single-comm-label single-comm-price">
                    <p className="price-title">Base Price</p>
                    <p className="price-small">$50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Stickers --> */}
        <div className="other-commissions-row">
          <div className="single-other-comm">
            <div className="single-other-comm-container">
              <div className="single-other-comm-image">
                <img src="/images/stickers-comm.png" alt="" />
              </div>
              <div className="single-other-comm-info">
                <div className="single-comm-label single-comm-header">
                  <p>stickers</p>
                </div>
                <div style={{ height: '11px' }} />
                <div className="single-comm-label single-comm-price">
                  <p className="price-title">Base Price</p>
                  <p className="price-small">$25 each</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: '10px' }} />
        <div id="gfx-work">
          <p>Looking for my Graphic or Web Design work? Please PM me!</p>
        </div>
        <div style={{ height: '15px' }} />
        <div className="section-header"><p>tos</p></div>
        <div style={{ height: '15px' }} />
        <div id="tos">
          <h1>General</h1>
          <p>
            You accept all terms and conditions before I begin your work.
            Any attempt to work with me will be taken as approval of the following terms.
            I reserve the exclusive right to make individual exceptions to all conditions
            listed below without warning or question.
          </p>
          <p>All parties involved are expected to keep professional attitudes during the entire process.</p>
          <p>
            Failure to adhere to the terms listed here will result in immediate termination of the contract,
            up to a partial refund of the paid amount at my discretion.
          </p>
          <h1>Will Not Draw</h1>
          <p>The following content are not available in any commissions:</p>
          <ul>
              <li>1) Explicitly sexual or suggestive content</li>
              <li>2) Specific species, such as equines and similar</li>
          </ul>
          <h1>Payment</h1>
          <p>
            All prices are tax-inclusive. All prices are fee-inclusive.
            All payments are made through PayPal, through invoices. Half-payment is due at time of
            initial sketch and work will not continue until at least half of the total amount due
            is received. Full payment is required upon work completion. Final deliverables are not
            sent until the full payment is received. All work is fully non-refundable, during any
            stage of the creation process.
          </p>
          <h1>Content Rights and Usage Policy</h1>
          <p>
            All created content is jointly owned by you and myself.
            I retain the following rights, including but not limited to:
          </p>
          <ul>
              <li>1) Personal usage of the content</li>
              <li>2) Commercial usage of the content</li>
              <li>3) Derivative or editing of the content</li>
              <li>4) Title of creator of the content</li>
          </ul>
          <p>You retain the following rights, including but not limited to:</p>
          <ul>
              <li>1) Personal usage of the content</li>
              <li>2) Commercial usage of the content</li>
              <li>3) Derivative or editing of the content</li>
          </ul>
        </div>
        <div style={{ height: '25px' }} />
      </div>
    </div>
  );
}

export default HomePage;

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
