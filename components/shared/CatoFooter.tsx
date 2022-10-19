/* eslint @next/next/no-img-element: 0 */
import { ReactElement } from 'react';

export default function BAFooter() : ReactElement {
  return (
    <footer id="footer">
      <div id="footer-content">
        <div id="footer-branding">
          <img src="assets/images/footer-logo.png" alt="" />
          <img src="assets/images/footer-title.png" alt="" />
        </div>
        <div style={{ height: '7px' }} />
        <div id="footer-info">
          <div className="footer-info-section" style={{ width: '25%' }}>
            <ul>
              <a href="#"><li>Commissions</li></a>
            </ul>
          </div>
          <div className="footer-info-section" style={{ width: '25%' }}>
            <ul>
              <a href="https://www.patreon.com/tigerteo"><li>Patreon</li></a>
              <a href="https://www.twitter.com/_tigerteo"><li>Twitter</li></a>
            </ul>
          </div>
          {/* <div className="footer-info-section" style={{ width: '35%' }}></div> */}
          <div className="footer-info-section" style={{ width: '35%' }}>
            <ul>
              <li>Thanks for visiting!</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="footer-bar" />
    </footer>
  );
}
