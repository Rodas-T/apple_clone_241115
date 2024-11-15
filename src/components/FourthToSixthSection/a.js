import React, { Component } from 'react';

class FourthToSixthSectionLink extends Component {
  render() {
    return (
      <div>
        {/* Section 4 */}
        <section className={this.props.myClassName4}>
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  {this.props.title && <div className="title-wrapper">{this.props.title}</div>}
                  {this.props.description4 && (
                    <div className="description-wrapper">{this.props.description4}</div>
                  )}
                  {this.props.price && (
                    <div className="price-wrapper">
                      {this.props.price} {this.props.sup1 && <sup>{this.props.sup1}</sup>}
                    </div>
                  )}
                  {(this.props.linkOne4 || this.props.linkTwo4) && (
                    <div className="links-wrapper">
                      <ul>
                        {this.props.linkOne4 && <li><a href="#">{this.props.linkOne4}</a></li>}
                        {this.props.linkTwo4 && <li><a href="#">{this.props.linkTwo4}</a></li>}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              {/* Right side */}
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  {this.props.rightTitle4 && (
                    <div className={`title-wrapper ${this.props.white}`}>{this.props.rightTitle4}</div>
                  )}
                  {this.props.watchThePSA && (
                    <div className={`links-wrapper ${this.props.white}`}>
                      <ul><li><a href="#">{this.props.watchThePSA}</a></li></ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className={this.props.myClassName5}>
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  {this.props.logoPlc && (
                    <div className="top-logo-wrapper">
                      <img src={this.props.logoPlc} alt={this.props.logoAlt} />
                    </div>
                  )}
                  {this.props.bankerLogo && (
                    <div className="tvshow-logo-wrapper">
                      <img src={this.props.bankerLogo} alt={this.props.bankerAlt} />
                    </div>
                  )}
                  {this.props.watchNow && (
                    <div className="watch-more-wrapper"><a href="#">{this.props.watchNow}</a></div>
                  )}
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  {this.props.watchLogo5 && (
                    <div className="top-logo-wrapper">
                      <img src={this.props.watchLogo5} alt={this.props.watchAlt} />
                    </div>
                  )}
                  {this.props.rightDescription && (
                    <div className="description-wrapper">{this.props.rightDescription}</div>
                  )}
                  {(this.props.linkOne4 || this.props.rightLinkTwo5) && (
                    <div className={`links-wrapper ${this.props.blue}`}>
                      <ul>
                        {this.props.linkOne4 && <li><a href="#">{this.props.linkOne4}</a></li>}
                        {this.props.rightLinkTwo5 && <li><a href="#">{this.props.rightLinkTwo5}</a></li>}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className={this.props.myClassName6}>
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  {this.props.logoPlc6 && (
                    <div className="top-logo-wrapper">
                      <img src={this.props.logoPlc6} alt={this.props.logoAlt} />
                    </div>
                  )}
                  {this.props.whiteDescription && (
                    <div className={`description-wrapper ${this.props.white}`}>{this.props.whiteDescription}</div>
                  )}
                  {(this.props.linkOne || this.props.linkTwo) && (
                    <div className="links-wrapper">
                      <ul>
                        <li><a href="#">{this.props.linkOne}{this.props.sup2 && <sup>{this.props.sup2}</sup>}</a></li>
                        <li><a href="#">{this.props.linkTwo}</a></li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  {this.props.title6 && <div className="title-wrapper">{this.props.title6}</div>}
                  {this.props.description6 && (
                    <div className="description-wrapper">{this.props.description6}</div>
                  )}
                  {(this.props.linkOne4 || this.props.linkTwo4) && (
                    <div className="links-wrapper">
                      <ul>
                        {this.props.linkOne4 && <li><a href="#">{this.props.linkOne4}</a></li>}
                        {this.props.linkTwo4 && <li><a href="#">{this.props.linkTwo4}</a></li>}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FourthToSixthSectionLink;
