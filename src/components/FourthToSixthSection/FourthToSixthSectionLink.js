import React, { Component } from 'react'

class FourthToSixthSectionLink extends Component {
  render() {
    return (
        <div className='fromFourthToSixth'>
            <section className={this.props.myClassName4}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                                {this.props.title && (
                                    <div className="title-wraper">
                                     {/* iPhone 11  */}
                                        {this.props.title}
                                    </div> 
                                )}                                    
                                {this.props.description4 && (
                                    <div className="description-wraper">
                                    {/* Just the right amount of everything. */}
                                    {this.props.description4}
                                    </div>
                                )}
                                <div>
                               {this.props.price && (
                                    <div className="price-wrapper">
                                        {/* // From $18.70/mo. or $499 with trade‑in.<sup>1</sup> */}
                                        {this.props.price}{this.props.sup1 && <sup>{this.props.sup1}</sup>}
                                        {/* {this.props.sup1 && <sup>{this.props.sup1}</sup>}                                    */}
                                    </div>

                                )}
                                </div>
                              
                  
                               {(this.props.linkOne4 || this.props.linkTwo4) && (
                                    <div className="links-wrapper">
                                        <ul>
                                            {this.props.linkOne4 && 
                                            (<li>
                                            {/* Learn more */}                                            
                                                <a href="">{this.props.linkOne4}</a>
                                            </li>)}
                                            {this.props.linkTwo4 && 
                                            (<li>
                                            {/* Apply now */}
                                                <a href="">{this.props.linkTwo4}</a>
                                            </li>)}
                                        </ul> 
                                    </div>
                                )}     
                            </div>
                        </div>
                        <div className="right-side-wrapper col-sm-12 col-md-6">
                            <div className="right-side-container">
                                {this.props.rightTitle4 && (
                                    <div className={`title-wrapper ${this.props.white}`}>
                                    {/* Get the latest CDC response to COVID-19.  */}
                                            {this.props.rightTitle4}
                                    </div> 
                                )} 

                                {this.props.watchThePSA && (                      
                                    <div className={`links-wrapper ${this.props.white}`}>
                                        <ul>
                                                {/* Watch the PSA */}
                                            <li><a href="">{this.props.watchThePSA}</a></li>
                                        </ul> 
                                    </div>
                                )}
                            </div>
                        </div>					
                    </div>
                </div> 
            </section>

            <section className={this.props.myClassName5}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                                {this.props.logoPlc && (
                                    <div className="top-logo-wrapper">
                                        <div className="logo-wrapper">
                                            {/* <img src={appleTv} /> */}
                                            <img src={this.props.logoPlc} alt={this.props.logoAlt}/>
                                        </div>
                                    </div>
                                )}                     
                                                
                                {this.props.bankerLogo && (
                                    <div className="tvshow-logo-wraper">
                                        {/* <img src={banker} /> */}
                                        <img 
                                            src={this.props.bankerLogo}
                                            alt={this.props.bankerAlt}
                                        />
                                    </div>
                                )} 
                                {this.props.watchNow && (
                                    <div className="watch-more-wrapper">
                                        {/* Watch now on the Apple TV App */}
                                        <a href="#">{this.props.watchNow}</a>
                                    </div>
                                )}                                
                                               
                            </div>
                        </div>
                        <div className="right-side-wrapper col-sm-12 col-md-6">
                            <div className="right-side-container">
                                {this.props.watchLogo5 && (
                                    <div className="top-logo-wrapper">
                                        <div className="logo-wrapper">
                                            {/* <img src={watch} /> */}
                                            <img 
                                                src={this.props.watchLogo5}
                                                alt={this.props.watchAlt}
                                            />
                                        </div>
                                    </div>
                                )} 
                                <div className="description-wraper">                           
                                        {/* With the Always-On Retina display.<br/>
                                        You’ve never seen a watch like this. */}
                                        {this.props.rightDescription}                                
                                </div>                               
                                    {(this.props.linkOne4 || this.props.rightLinkTwo5) && (  
                                        <div className={`links-wrapper ${this.props.blue}`}>
                                            <ul>
                                                {/* <li><a href="">Learn more</a></li>
                                                <li><a href="">Buy</a></li> */}                                                                                   
                                                {this.props.linkOne4 && (<li><a href="#">{this.props.linkOne4}</a></li>)}                                        
                                                {this.props.rightLinkTwo5 && (<li><a href="#">{this.props.rightLinkTwo5}</a></li>)}   
                                                                
                                            </ul> 
                                        </div>                                    
                                    )}
                              
                            </div>
                        </div>					
                    </div>
                </div> 
            </section>

            <section className={this.props.myClassName6}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                                {this.props.logoPlc6 && (
                                    <div className="top-logo-wrapper">
                                        <div className="logo-wrapper">
                                            {/* <img src={arcade} /> */}
                                            <img src={this.props.logoPlc6} alt={this.props.logoAlt}/>
                                        </div>
                                    </div>
                                )}

                                {this.props.whiteDescription && (
                                    <div className={`description-wraper ${this.props.white}`}>
                                        {/* Agent 8 is a small hero on a big mission. */}
                                        {this.props.whiteDescription}
                                    </div>
                                )}                               
                                 
                                {(this.props.linkOne || this.props.linkTwo) && (
                                    <div className={`links-wrapper ${this.props.white}`}>
                                        <ul>
                                            <li>
                                            {/* Play now */}                                            
                                                <a href="">{this.props.linkOne}<sup>{this.props.sup2}</sup></a>
                                            </li>
                                            <li>
                                            {/* Learn about Apple Arcade */}
                                                <a href="">{this.props.linkTwo}</a>
                                            </li>
                                        </ul> 
                                    </div>
                                )}        
                            </div>
                        </div>
                        <div className="right-side-wrapper col-sm-12 col-md-6">
                            <div className="right-side-container">
                                {this.props.title6 && (
                                    <div className="title-wraper">
                                      {/* Apple Card Monthly Installments  */}
                                      {this.props.title6}
                                    </div>
                                )}
                                {this.props.description6 && (
                                    <div className="description-wraper">
                                     {/* Pay for your next iPhone over time, interest-free with Apple Card. */}
                                     {this.props.description6}
                                    </div>
                                )}
                                <div>
                                {(this.props.linkOne4 || this.props.linkTwo4) && (
                                    <div className="links-wrapper">
                                        <ul>
                                            {this.props.linkOne4 && (<li>
                                                {/* Learn more */}                                            
                                                <a href="">{this.props.linkOne4}</a>
                                            </li>)
                                            }
                                            {this.props.linkTwo4 && (<li>
                                                {/* Apply now */}
                                                <a href="">{this.props.linkTwo4}</a>
                                            </li>)
                                            }
                                        </ul> 
                                    </div>
                                )}  
                                </div>                        
                            </div>
                        </div>					
                    </div>
                </div> 
            </section>
        </div>
    )
  }
}
export default FourthToSixthSectionLink
// import React, { Component } from 'react';

// class FourthToSixthSectionLink extends Component {
//   render() {
//     return (
//       <div>
//         {/* Section 4 */}
//         <section className={this.props.myClassName4}>
//           <div className="container-fluid">
//             <div className="row">
//               <div className="left-side-wrapper col-sm-12 col-md-6">
//                 <div className="left-side-container">
//                   {this.props.title && <div className="title-wrapper">{this.props.title}</div>}
//                   {this.props.description4 && (
//                     <div className="description-wrapper">{this.props.description4}</div>
//                   )}
//                   {this.props.price && (
//                     <div className="price-wrapper">
//                       {this.props.price} {this.props.sup1 && <sup>{this.props.sup1}</sup>}
//                     </div>
//                   )}
//                   {(this.props.linkOne4 || this.props.linkTwo4) && (
//                     <div className="links-wrapper">
//                       <ul>
//                         {this.props.linkOne4 && <li><a href="#">{this.props.linkOne4}</a></li>}
//                         {this.props.linkTwo4 && <li><a href="#">{this.props.linkTwo4}</a></li>}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               </div>
//               {/* Right side */}
//               <div className="right-side-wrapper col-sm-12 col-md-6">
//                 <div className="right-side-container">
//                   {this.props.rightTitle4 && (
//                     <div className={`title-wrapper ${this.props.white}`}>{this.props.rightTitle4}</div>
//                   )}
//                   {this.props.watchThePSA && (
//                     <div className={`links-wrapper ${this.props.white}`}>
//                       <ul><li><a href="#">{this.props.watchThePSA}</a></li></ul>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Section 5 */}
//         <section className={this.props.myClassName5}>
//           <div className="container-fluid">
//             <div className="row">
//               <div className="left-side-wrapper col-sm-12 col-md-6">
//                 <div className="left-side-container">
//                   {this.props.logoPlc && (
//                     <div className="top-logo-wrapper">
//                       <img src={this.props.logoPlc} alt={this.props.logoAlt} />
//                     </div>
//                   )}
//                   {this.props.bankerLogo && (
//                     <div className="tvshow-logo-wrapper">
//                       <img src={this.props.bankerLogo} alt={this.props.bankerAlt} />
//                     </div>
//                   )}
//                   {this.props.watchNow && (
//                     <div className="watch-more-wrapper"><a href="#">{this.props.watchNow}</a></div>
//                   )}
//                 </div>
//               </div>
//               <div className="right-side-wrapper col-sm-12 col-md-6">
//                 <div className="right-side-container">
//                   {this.props.watchLogo5 && (
//                     <div className="top-logo-wrapper">
//                       <img src={this.props.watchLogo5} alt={this.props.watchAlt} />
//                     </div>
//                   )}
//                   {this.props.rightDescription && (
//                     <div className="description-wrapper">{this.props.rightDescription}</div>
//                   )}
//                   {(this.props.linkOne4 || this.props.rightLinkTwo5) && (
//                     <div className={`links-wrapper ${this.props.blue}`}>
//                       <ul>
//                         {this.props.linkOne4 && <li><a href="#">{this.props.linkOne4}</a></li>}
//                         {this.props.rightLinkTwo5 && <li><a href="#">{this.props.rightLinkTwo5}</a></li>}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Section 6 */}
//         <section className={this.props.myClassName6}>
//           <div className="container-fluid">
//             <div className="row">
//               <div className="left-side-wrapper col-sm-12 col-md-6">
//                 <div className="left-side-container">
//                   {this.props.logoPlc6 && (
//                     <div className="top-logo-wrapper">
//                       <img src={this.props.logoPlc6} alt={this.props.logoAlt} />
//                     </div>
//                   )}
//                   {this.props.whiteDescription && (
//                     <div className={`description-wrapper ${this.props.white}`}>{this.props.whiteDescription}</div>
//                   )}
//                   {(this.props.linkOne || this.props.linkTwo) && (
//                     <div className="links-wrapper">
//                       <ul>
//                         <li><a href="#">{this.props.linkOne}{this.props.sup2 && <sup>{this.props.sup2}</sup>}</a></li>
//                         <li><a href="#">{this.props.linkTwo}</a></li>
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <div className="right-side-wrapper col-sm-12 col-md-6">
//                 <div className="right-side-container">
//                   {this.props.title6 && <div className="title-wrapper">{this.props.title6}</div>}
//                   {this.props.description6 && (
//                     <div className="description-wrapper">{this.props.description6}</div>
//                   )}
//                   {(this.props.linkOne4 || this.props.linkTwo4) && (
//                     <div className="links-wrapper">
//                       <ul>
//                         {this.props.linkOne4 && <li><a href="#">{this.props.linkOne4}</a></li>}
//                         {this.props.linkTwo4 && <li><a href="#">{this.props.linkTwo4}</a></li>}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }

// export default FourthToSixthSectionLink;
