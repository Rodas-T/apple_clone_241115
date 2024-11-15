import React, { Component } from 'react'

 class FirstToThirdSectionLink extends Component {
  render() {
    const{classN, device}=this.props
    return (
        <div>
            <section className={classN}>
                <div className="container">
                    <div className="new-alert">
                    {/* New */}
                        {this.props.new}
                    </div>                  

                    <div className="title-wraper bold black">
                        {/* iPad Pro  */}
                        {device}
                    </div> 

                    <div className="description-wrapper">
                    {/* Pro cameras. Pro display. Pro performance. */}
                        {this.props.description}
                    </div> 

                    <div className="price-wrapper grey">
                        {/* From $24.95/mo. or $599 with trade‑in. */}
                        {this.props.price}
                    </div>                  
                  
                    <div className="links-wrapper">
                        <ul>
                            <li><a href={this.props.learnMoreLinkUrl}>{this.props.learnMore}</a></li>
                            <li><a href={this.props.learnMoreLinkUrl}>{this.props.order}</a></li>
                        </ul> 
                    </div>           
                </div>
            </section>
           
        </div>
    )
  }
}
export default FirstToThirdSectionLink