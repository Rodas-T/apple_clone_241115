import React,{Component} from 'react'
import FirstToThirdSectionLink from './FirstToThirdSectionLink'

class FirstToThirdSection extends Component {
	render(){
		return (
			<div>
				<section className="first-hightlight-wrapper">
					<div className="container">										
						<FirstToThirdSectionLink 
							new="New"
							device="iPad Pro"
							learnMoreLinkUrl="#" 
							learnMore="Learn more >"							
							orderLinkUrl="#" 
							order="Order >"
							ipad="iPad Pro available starting 3.25"
							magic="Magic Keyboard coming in May"
						/>
					</div>
				</section>
			</div>
		)
	}
}

export default FirstToThirdSection