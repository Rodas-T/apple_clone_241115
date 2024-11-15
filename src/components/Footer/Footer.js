// import React,{Component} from 'react'
// import sixteen from '../../commonResource/images/icons/16.png'
// import FooterLink from './FooterLink'
// import { Link } from 'react-router-dom';
// class Footer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       toggledSections: {} // Track toggled sections here
//     };
//   }

//   toggleSection = (sectionName) => {
//     this.setState((prevState) => ({
//       toggledSections: {
//         ...prevState.toggledSections,
//         [sectionName]: !prevState.toggledSections[sectionName]
//       }
//     }));
//   };

//   render(){
//     const { toggledSections } = this.state;
//     const isMobile = window.innerWidth <= 768;
//     return (   
//       <div className="footer-wrapper">
//           <div className="container"> 
//               <div className="upper-text-container">
//                   <p>1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in good condition. Additional trade‑in values require purchase of a new iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with Citizens One or Apple Card Monthly Installments and iPhone activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and shipping not included. Additional Apple Card Monthly Installments terms are in the <a href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf" target="_blank" rel="noreferrer"> Customer Agreement</a>. Additional iPhone Payments terms are <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/"> here</a>.</p>
//                   <p>2. Subscription required.<br/><br/>
//                   Magic Keyboard sold separately.<br/><br/>
//                   Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other <a href="https://www.apple.com/promo/"></a>terms <br/><br/> apply.</p>
//               </div>
//               <div className="footer-links-wrapper row"> 
//                   <div className="links-wrapper-1 col-sm-12 col-md">
//                       {/* <h3>Shop and Learn</h3>
//                       <FooterLink
//                         link={[
//                           "Mac",
//                           "iPad",
//                           "iPhone",
//                           "watch",
//                           "TV",
//                           "Music",
//                           "AirPods",
//                           "HomePod",
//                           "ipad touch",
//                           "Accessories",
//                           "Gift Cards"
//                         ]}                                
//                       /> */}
//                   <h3 onClick={() => this.toggleSection("shopAndLearn")}>Shop and Learn</h3>
//               {(isMobile && toggledSections.shopAndLearn) || !isMobile ? (
//                 <FooterLink
//                   link={[
//                     "Mac",
//                     "iPad",
//                     "iPhone",
//                     "Watch",
//                     "TV",
//                     "Music",
//                     "AirPods",
//                     "HomePod",
//                     "iPod touch",
//                     "Accessories",
//                     "Gift Cards"
//                   ]}
//                 />
//               ) : null}
//             </div>
//                   {/* </div>  */}
//                   <div className="links-wrapper-2 col-sm-12 col-md">
//                       <h3>Services</h3>
//                       <FooterLink
//                         link={[
//                           "Apple Music",
//                           "Apple TV+",
//                           "Apple Arcade",
//                           "Apple Card",   
//                           "iCloud"                                 
//                         ]} 
//                       />
                      
//                       <h3>Account</h3>
//                       <FooterLink
//                         link={[
//                           "Manage Your Apple ID",
//                           "Apple Store Account",
//                           "iCloud.com"                                                                    
//                         ]} 
//                       />
                          
//                   </div> 
//                   <div className="links-wrapper-3 col-sm-12 col-md">
//                       <h3>Apple Store</h3>
//                       <FooterLink
//                         link={[
//                           "Find a Store",
//                           "Genius Bar",
//                           "Today at Apple",
//                           "Apple Camp",
//                           "Field Trip",
//                           "Apple Store App",
//                           "Refurbished and Clearance",
//                           "Apple Trade In",
//                           "Order Status",
//                           "Shopping Help"
//                         ]}                                
//                       />
                      
//                   </div>  
//                   <div className="links-wrapper-4 col-sm-12 col-md">
//                       <h3>For Business</h3>
//                       <FooterLink
//                         link={[
//                           "Apple and Business",
//                           "Shop for Business",                                                                                                      
//                         ]} 
//                       />

//                       <h3>For Education</h3>
//                       <FooterLink
//                         link={[
//                           "Apple and Education",
//                           "Shop for College"                                                                                                      
//                         ]} 
//                       />
                      
//                       <h3>For Healthcare</h3>
//                       <FooterLink
//                         link={[
//                           "Manage Your Apple ID",
//                           "Apple Store Account",
//                           "iCloud.com"                                                                                                      
//                         ]} 
//                       />
                      
//                       <h3>For Government</h3>
//                       <FooterLink
//                       link={[
//                           "Apple and Government",
//                           "Shop for Government"                                                                                                      
//                         ]} 
//                       />
                      
//                   </div>                            
//               </div>
//               <div className="my-apple-wrapper"> 
//                   More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
//               </div>
//               <div className="copyright-wrapper row">
//                   <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
//                       Copyright &copy; 2020 Apple Inc. All rights reserved.
//                   </div>
//                   <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
//                       <ul>
//                           <FooterLink footerLinkLinkUrl="/a" footerLinkLinkUrlName="Privacy Policy"/>
//                           <FooterLink footerLinkLinkUrl="/a" footerLinkLinkUrlName="Terms of Use"/>
//                           <FooterLink footerLinkLinkUrl="/a" footerLinkLinkUrlName="Sales and Refunds"/>
//                           <FooterLink footerLinkLinkUrl="/a" footerLinkLinkUrlName="Legal"/>
//                           <FooterLink footerLinkLinkUrl="/a" footerLinkLinkUrlName="Site Map"/>
//                       </ul>
//                   </div>
//                   <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
//                       <div className="flag-wrapper"><img src={sixteen}/></div> <div className="footer-country-name">United States</div> 
//                   </div>
//               </div>
//           </div>
//       </div>            
//     )
//   }
// }

// export default Footer

// // import FooterLink from './FooterLink';
// // import sixteen from '../../commonResource/images/icons/16.png';

// // class Footer extends Component {
// //   render() {
// //     return (
// //       <div className="footer-wrapper">
// //         <div className="container">
// //           <div className="upper-text-container">
// //             <p>1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing...</p>
// //             <p>2. Subscription required.<br/><br/>Magic Keyboard sold separately...</p>
// //           </div>

// //           <div className="footer-links-wrapper row">
// //             <div className="links-wrapper-1 col-sm-12 col-md">
// //               <h3>Shop and Learn</h3>
// //               <ul>
// //                 {["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "AirPods", "HomePod", "iPod touch", "Accessories", "Gift Cards"].map((name) => (
// //                   <FooterLink key={name} linkUrl="/a" linkName={name} />
// //                 ))}
// //               </ul>
// //             </div>

// //             {/* Repeat similar blocks for other sections like Services, Account, etc. */}
// //             <div className="links-wrapper-2 col-sm-12 col-md">
// //               <h3>Services</h3>
// //               <ul>
// //                 {["Apple Music", "Apple TV+", "Apple Arcade", "Apple Card", "iCloud"].map((name) => (
// //                   <FooterLink key={name} linkUrl="/a" linkName={name} />
// //                 ))}
// //               </ul>
// //               <h3>Account</h3>
// //               <ul>
// //                 {["Manage Your Apple ID", "Apple Store Account", "iCloud.com"].map((name) => (
// //                   <FooterLink key={name} linkUrl="/a" linkName={name} />
// //                 ))}
// //               </ul>
// //             </div>
// //             <div className="links-wrapper-2 col-sm-12 col-md">
// //                 <h3>Apple Store</h3>
// //                 <ul>
// //                     {["Find a Store", "Genius Bar", "Today at Apple","Apple Camp "," Field Trip","Apple Store App "," Refurbished and Clearance"," Financing","Apple Trade In ","Order Status "," Shopping Help"].map((name) => (
// //                     <FooterLink key={name} linkUrl="/a" linkName={name} />
// //                     ))}
// //                 </ul>
// //             </div>
// //             <div className="links-wrapper-4 col-sm-12 col-md">
// //                 <h3>For Status</h3>
// //                 <ul>
// //                     {["Order Status", "Shop for Shop"].map((name) => (
// //                     <FooterLink key={name} linkUrl="/a" linkName={name} />
// //                     ))}
// //                 </ul>
// //                 <h3>For Shop</h3>
// //                 <ul>
// //                     {["Apple and Shop", "Shop for College"].map((name) => (
// //                     <FooterLink key={name} linkUrl="/a" linkName={name} />
// //                     ))}
// //                 </ul>
// //                 <h3>For Healthcare</h3>
// //                 <ul>
// //                     {["Manage Your Apple ID", "Apple Store Shop", "iCloud.com"].map((name) => (
// //                     <FooterLink key={name} linkUrl="/a" linkName={name} />
// //                     ))}
// //                 </ul>              
// //             </div>

// //             {/* Add more sections as needed */}
// //           </div>
          

// //           <div className="my-apple-wrapper">
// //             More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
// //           </div>

// //           <div className="copyright-wrapper row">
// //             <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
// //               Copyright &copy; 2020 Apple Inc. All rights reserved.
// //             </div>
// //             <div className="footer-links-terms col-sm-12 order-3 col-lg-6 order-lg-2">
// //               <ul>
// //                 {["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"].map((name) => (
// //                   <FooterLink key={name} linkUrl="/a" linkName={name} />
// //                 ))}
// //               </ul>
// //             </div>
// //             <div className="footer-country col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
// //               <div className="flag-wrapper"><img src={sixteen} alt="Country flag" /></div>
// //               <div className="footer-country-name">United States</div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default Footer;
import React, { Component } from 'react';
import sixteen from '../../commonResource/images/icons/16.png';
import FooterLink from './FooterLink';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: null // Track the currently active (expanded) section
    };
  }

  toggleSection = (sectionName) => {
    this.setState((prevState) => ({
      activeSection: prevState.activeSection === sectionName ? null : sectionName
    }));
  };

  render() {
    const { activeSection } = this.state;
    const isMobile = window.innerWidth <= 768;

    return (
      <div className="footer-wrapper">
        <div className="container">
          <div className="upper-text-container">
            <p>1. Trade In: Trade‑in values vary... <a href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf" target="_blank" rel="noreferrer">Customer Agreement</a>.</p>
            <p>2. Subscription required... <a href="https://www.apple.com/promo/"></a>terms apply.</p>
          </div>
          <div className="footer-links-wrapper row">
            {/* Shop and Learn Section */}
            <div className="links-wrapper-1 col-sm-12 col-md">
              <h3 onClick={() => this.toggleSection("shopAndLearn")}>Shop and Learn</h3>
              {(isMobile && activeSection === "shopAndLearn") || !isMobile ? (
                <FooterLink
                  link={[
                    "Mac", "iPad", "iPhone", "Watch", "TV", "Music", "AirPods", "HomePod", "iPod touch", "Accessories", "Gift Cards"
                  ]}
                />
              ) : null}
            </div>

            {/* Services Section */}
            <div className="links-wrapper-2 col-sm-12 col-md">
              <h3 onClick={() => this.toggleSection("services")}>Services</h3>
              {(isMobile && activeSection === "services") || !isMobile ? (
                <FooterLink link={["Apple Music", "Apple TV+", "Apple Arcade", "Apple Card", "iCloud"]} />
              ) : null}
              
              <h3 onClick={() => this.toggleSection("account")}>Account</h3>
              {(isMobile && activeSection === "account") || !isMobile ? (
                <FooterLink link={["Manage Your Apple ID", "Apple Store Account", "iCloud.com"]} />
              ) : null}
            </div>

            {/* Apple Store Section */}
            <div className="links-wrapper-3 col-sm-12 col-md">
              <h3 onClick={() => this.toggleSection("appleStore")}>Apple Store</h3>
              {(isMobile && activeSection === "appleStore") || !isMobile ? (
                <FooterLink
                  link={[
                    "Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Field Trip", "Apple Store App", "Refurbished and Clearance", "Apple Trade In", "Order Status", "Shopping Help"
                  ]}
                />
              ) : null}
            </div>

            {/* Additional Sections */}
            <div className="links-wrapper-4 col-sm-12 col-md">
              <h3 onClick={() => this.toggleSection("business")}>For Business</h3>
              {(isMobile && activeSection === "business") || !isMobile ? (
                <FooterLink link={["Apple and Business", "Shop for Business"]} />
              ) : null}

              <h3 onClick={() => this.toggleSection("education")}>For Education</h3>
              {(isMobile && activeSection === "education") || !isMobile ? (
                <FooterLink link={["Apple and Education", "Shop for College"]} />
              ) : null}
              
              <h3 onClick={() => this.toggleSection("healthcare")}>For Healthcare</h3>
              {(isMobile && activeSection === "healthcare") || !isMobile ? (
                <FooterLink link={["Apple and Healthcare", "Health Records on iPhone"]} />
              ) : null}

              <h3 onClick={() => this.toggleSection("government")}>For Government</h3>
              {(isMobile && activeSection === "government") || !isMobile ? (
                <FooterLink link={["Apple and Government", "Shop for Government"]} />
              ) : null}
            </div>
          </div>

          {/* Additional footer content */}
          <div className="my-apple-wrapper">
            More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </div>
          <div className="copyright-wrapper row">
            <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
              Copyright &copy; 2020 Apple Inc. All rights reserved.
            </div>
            <div className="footer-links-terms col-sm-12 order-3 col-lg-6 order-lg-2">
              <ul>
                <FooterLink footerLinkLinkUrl="/a" footerLinkLinkUrlName="Privacy Policy" />
                <FooterLink footerLinkLinkUrl="/a" footerLinkLinkUrlName="Terms of Use" />
                <FooterLink footerLinkLinkUrl="/a" footerLinkLinkUrlName="Sales and Refunds" />
                <FooterLink footerLinkLinkUrl="/a" footerLinkLinkUrlName="Legal" />
                <FooterLink footerLinkLinkUrl="/a" footerLinkLinkUrlName="Site Map" />
              </ul>
            </div>
            <div className="footer-country col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
              <div className="flag-wrapper"><img src={sixteen} alt="Country flag" /></div>
              <div className="footer-country-name">United States</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

