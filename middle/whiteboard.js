angular.module('assessmentApp').factory('Whiteboard', function() {

var whiteboard = [
  	{
		"title": "Transform", 
		"id": "transform", 
		"questions": {
			"qOne": "Do you feel confident in how your company creates content?",   			
			"qTwo": "Does your company use different types of content (PPT, video, PDF, testimonials)?",   			
			"qThree": "Do your sales users effectively combine different sets and types of content in in-person meetings?"
		}, 
		"description": {
			"paragraph": [
				{"para_id": "From your answers, it sounds like you might face the same challenge as top companies across the globe: the challenge of transforming the thoughts and ideas that represent their company and products into words and images. That means you'll have to use a mix of different assets to show your company's full value for prospects (e.g., sell sheets, PowerPoints, videos and brochures)."}, 
				{"para_id": "For sales reps, that challenge might be presenting different types of content seamlessly or when you've got a huge content library, finding that content in the first place."}, 
				{"para_id": "We invite you to take a brief moment to watch the video below to find out how you can clone your best sales reps, and read a brief report on how Thermo Fisher, a lab equipment provider with a massive content library, uses SalesKit to help recapture the value lost in transformation."}, 
				{"para_id": "Want to learn how you can recapture that value at your own company? Download our demo app today or schedule a demo tailored for you and your company."}
			]
		}
  	}, 
  	{
  		"title": "Relevance", 
  		"id": "relevance", 
  		"questions": {
  			"qOne": "Are you confident that your sales users are using the newest and most up-to-date assets?",   			
  			"qTwo": "Has your sales team ever used the wrong content in front of a customer?",   			
  			"qThree": "Is your team spending more than 3 hours a week making sure they have the right content?"
  		}, 
  		"description": {
			"paragraph": [
				{"para_id": "Companies like yours equip their salespeople with a lot of great content. The challenge that even Fortune-ranked companies face is finding the most relevant content for each of their prospects."}, 
				{"para_id": "To fill your sales reps with confidence, they need to know that they have the most up-to-date content before having a sales meeting and that the right information is easily accessible at the right time."}, 
				{"para_id": "We invite you to take a brief moment to watch the video below to learn how you can clone your best sales reps, and read a brief report on how PepsiCo, one of the world's largest consumer packaged good companies in the world, uses SalesKit to empower their reps with the most relevant content.Want to find out how you can make your own sales reps confident with the most relevant content? Download our demo app today or schedule a tailored demo for you and your company."}, 
				{"para_id": "Want to find out how you can make your own sales reps confident with the most relevant content? Download our demo app today or schedule a tailored demo for you and your company."}
			]
  		}
  	}, 
  	{
  		"title": "Discovery", 
  		"id": "discovery", 
  		"questions": {
  			"qOne": "Is it easy for the sales user to know the most compelling content for a wide variety of customer needs?",   			
  			"qTwo": "Do your customers feel like they're having a dynamic and customized conversation when a sales reps meets with them?",   			
  			"qThree": "Are the marketing team and content creators struggling to create a cohesive message to present to a user?"
  		}, 
  		"description": {
			"paragraph": [
				{"para_id": "The challenges your company might face is a set of very unique customers with potentially very different needs. With many customer needs and a potentially overwhelming amount of sales collateral, your customers and your sales reps might find it difficult to discover the right content at that moment."}, 
				{"para_id": "By guiding a customer through the sales journey with content specific to their needs, your sales reps can focus on connecting with that customer instead of trying to guess at what might be relevant while preparing for a meeting."}, 
				{"para_id": "We invite you to learn about Interactive Content, a SalesKit premium feature that empowers your sales reps to tell a story, not read a lecture."}, 
				{"para_id": "Want to find out how your sales reps can discover the best content for any meeting? Download our demo app today or schedule a tailored demo for you and your company."}
			]
		}
  	}, 
  	{
  		"title": "Execution", 
  		"id": "execution", 
  		"questions": {
  			"qOne": "Are new sales reps overwhelmed with getting up to speed quickly on all of your offerings?",   			
  			"qTwo": "Are your top sales reps asking for new (or better) tools for them to sell effectively?",   			
  			"qThree": "Are you confident that every sales rep is sharing a consistent message to your customer and prospect base?"
  		}, 
  		"description": {
			"paragraph": [
				{"para_id": "From your answers, it sounds like your company has faced the challenge of delivering your message to your customers. At your level, consider now the tools you need to deliver a consistent message that communicates your company's full value."}, 
				{"para_id": "With the right tools, including presentation tools and content access tools, your sales reps can go beyond giving a presentation and can start making real connections with their customers."}, 
				{"para_id": "We invite you to take a brief moment to learn about SalesKit's Custom Themes, a premium feature that gives sales reps a beatiful customized interface so they can deliver the perfect selling experience."}, 
				{"para_id": "Want to find out how SalesKit can help your sales reps execute in the last mile? Download our demo app today or schedule a tailored demo for you and your company."}
			]
		}
  	}
  ]

return whiteboard;  
    
});