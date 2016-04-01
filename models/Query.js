;


function Query() {
		
	this.keywords = "*:*";
		
	this.toSolrQueryString = function() {
		if (!_.isEmpty(this.keywords)) {
			return "q="+this.keywords+"&wt=json";
		}
		else {
			return "q=*:*&wt=json";
		}
	};
	
	this.toSolrParams = function() {
		return {'q': this.keywords, 'wt':'json', 'hl': 'true', 'hl.fl': 'original_text', 'rows': '20', 'hl.snippets': '3'};
	}

};