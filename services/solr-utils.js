


function SolrService(server, collection) {
	this.server = server;
	this.collection = collection;

	this.querySolr = function(query, callback) {
		console.log(query.toSolrQueryString());
		
		$.ajax({
		  'url': this.server+"/solr/"+this.collection+"/select",
		  'data': query.toSolrParams(),
		  'dataType': 'jsonp',
		  'jsonp': 'json.wrf',		  
		  'success': function(data) { 
				console.log(data);
				var transformed = {
					numFound: data.response.numFound,
					maxScore: data.response.maxScore,
					start: data.response.start,
					numReturned: data.response.docs.length
								
				}
				transformed.documents = _.map(data.response.docs, function(doc,i) {
				
					var hl = "...";
					_.each(data.highlighting[doc.id].original_text, function(item) {
						hl += item+"...";
					});
				
					return {
						id: doc.id,
						title: doc.title,
						date: doc.solr_update_date,
						datasource: doc.data_source,
						highlights: hl
						
					}
				
				});
				console.log("results: " + transformed);
				callback(transformed);
		  }
		});
		
		
		
		/*
		return { numFound: 10,
			documents: [
				{id:"document 1", date:"Jan-1-2015", datasource:"CNN News", highlights:"...Echo Park kitsch pop-up cornhole sartorial Schlitz. Fap jean shorts pop-up hella, drinking vinegar hoodie artisan dreamcatcher Truffaut four dollar toast taxidermy..."},
				{id:"document 2", date:"Jan-1-2015", datasource:"CNN News", highlights:"...Echo Park kitsch pop-up cornhole sartorial Schlitz. Fap jean shorts pop-up hella, drinking vinegar hoodie artisan dreamcatcher Truffaut four dollar toast taxidermy..."},
				{id:"document 3", date:"Jan-1-2015", datasource:"CNN News", highlights:"...Echo Park kitsch pop-up cornhole sartorial Schlitz. Fap jean shorts pop-up hella, drinking vinegar hoodie artisan dreamcatcher Truffaut four dollar toast taxidermy..."},
				{id:"document 4", date:"Jan-1-2015", datasource:"CNN News", highlights:"...Echo Park kitsch pop-up cornhole sartorial Schlitz. Fap jean shorts pop-up hella, drinking vinegar hoodie artisan dreamcatcher Truffaut four dollar toast taxidermy..."},
				{id:"document 5", date:"Jan-1-2015", datasource:"CNN News", highlights:"...Echo Park kitsch pop-up cornhole sartorial Schlitz. Fap jean shorts pop-up hella, drinking vinegar hoodie artisan dreamcatcher Truffaut four dollar toast taxidermy..."},
				{id:"document 6", date:"Jan-1-2015", datasource:"CNN News", highlights:"...Echo Park kitsch pop-up cornhole sartorial Schlitz. Fap jean shorts pop-up hella, drinking vinegar hoodie artisan dreamcatcher Truffaut four dollar toast taxidermy..."}
			]
		};
		*/
	}


}