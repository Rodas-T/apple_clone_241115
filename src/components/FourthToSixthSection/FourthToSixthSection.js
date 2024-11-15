import React,{Component} from 'react'
import FourthToSixthSectionLink from './FourthToSixthSectionLink'

import appletv from '../../commonResource/images/icons/apple-tv-logo.png'
import banker from '../../commonResource/images/home/banker.png'
import watch from '../../commonResource/images/home/watch-lg.jpg'
import watchLogo5 from '../../commonResource/images/icons/watch-series5-logo.png'

import arcade from '../../commonResource/images/icons/arcade.png'


class FourthToSixthSection extends Component {
  render(){
		return (
			<div>								
				<FourthToSixthSectionLink
					myClassName4 = "fourth-heghlight-wrapper"
					white = "white"
					title = "iPhone 11"
					description4 = "Just the right amount of everything."
					price = "From $18.70/mo. or $499 with trade‑in."
					sup1 = "1"
					linkOne4 = "Learn more >"
					linkTwo4 = "Apply now >"
					rightTitle4 = "Get the latest CDC response to COVID-19."
					watchThePSA = "Watch the PSA >"

					
					myClassName5 = "fifth-heghlight-wrapper"
					logoPlc = {appletv}
					logoAlt = "Apple TV Logo"
					bankerLogo = {banker}
					bankerAlt = "The Banker Logo"
					watchNow = "Watch now on the Apple TV App"
					watchLogo5 = {watchLogo5}
					watchAlt = "Apple Watch Logo"
					rightDescription = "With the Always-On Retina display You’ve never seen a watch like this."				
					linkOne4 = "Learn more >"
					rightLinkTwo5 = "Buy >"   
					// white = {white}

					
					myClassName6 = "sixth-heghlight-wrapper"				
					logoPlc6 = {arcade}				
					whiteDescription = "Agent 8 is a small hero on a big mission."
					linkOne = "Play now "
					sup2 = "2"
					linkTwo = "Learn about Apple Arcade"	
					title6 = "Apple Card Monthly Installments"		
					description6 = "Pay for your next iPhone over time, interest-free with Apple Card."
					linkOne4 = "Learn more >"		
					linkTwo4 = "Apply now >"
				/>				
			</div>
		)
	}
}

export default FourthToSixthSection 