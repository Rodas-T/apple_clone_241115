import React, { Component } from 'react'
import { Link } from 'react-router-dom';
 class FooterLink extends Component {
  render() {
    const elements = this.props.link || [];
    return (  
      <div>
        <ul>
          {elements.map((value, index) => {
            return (
              <li key={index}>
                <a href="#">{value}</a>
              </li>
              )
            })}
        </ul>
        </div>       
                         
            // <div className="my-apple-wrapper"> 
            //     More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
            // </div>
            // <div className="copyright-wrapper row">
            //     <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
            //         Copyright &copy; 2020 Apple Inc. All rights reserved.
            //     </div>
               
            //             <li><a href={this.props.footerLinkLinkUrl}>{this.props.footerLinkLinkUrlName}</a></li>                        
                   
            //     <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
            //         {/* <div className="flag-wrapper"><img src={sixteen}/></div> <div className="footer-country-name">United States</div>  */}
            //     </div>
            // </div>  
    )
  }
}
export default FooterLink;


// import React, { useState, useEffect } from 'react';
// import '../../commonResource/css';

// const FooterLink = ({ link = [] }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleToggle = (index) => {
//     // Toggle the dropdown for the clicked item, close others
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const handleClickOutside = (event) => {
//     if (!event.target.closest('.footer-link')) {
//       setOpenIndex(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="footer-link">
//       <ul>
//         {link.map((value, index) => (
//           <li key={index} onClick={() => handleToggle(index)} className="footer-item">
//             <a href="#" className="footer-link-item">{value}</a>
//             {/* Toggle the dropdown content */}
//             {openIndex === index && (
//               <div className="dropdown-content">
//                 <p>Dropdown content for {value}</p>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FooterLink;
