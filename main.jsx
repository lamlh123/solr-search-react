
var app = app || {};

(function () {
	
	app.cache = {
		query: new Query(),
		selected: [],
		firstLoad: true
	
	}

	var docSolrSvc = new SolrService(Settings.SOLR_SERVER_URL, Settings.SOLR_DOCUMENT_COLLECTION);
	var SearchBar = app.SearchBar;
	var Results = app.Results;
	var LeftPane = app.LeftPane;
	var PreviewPane = app.PreviewPane;

	var SearchApp = React.createClass({
		getInitialState: function () {
			return {
				results: {numFound: -1, documents:[]}
				
			};
		},

		componentDidMount: function () {
			//this.setState({results:{numFound: 0, documents:[]}, query: new Query()});
			/*
			var setState = this.setState;
			var router = Router({
				'/': setState.bind(this, {results: []}),
			});
			router.init('/');
			*/
		},

		handleSearchEvent: function (query) {
			$("#load-spinner-page").show();
			if (app.cache.firstLoad) {
				$("body").css("background","#F8F8F8");
				app.cache.firstLoad = false;
			}
			var _self = this;
			app.cache.query = query;
			docSolrSvc.querySolr(query, function(solrResults) {
				_self.setState({query: query, results: solrResults});
				$("#load-spinner-page").hide();
			});
			
		},

		

		render: function () {
			return (
				<div>
					<div className="header">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-2">
									<h1><a className="page-title" href="/index.html">Search</a> <small>by React</small></h1>
								</div>
								<div className="col-md-8">
									<div className="header-content">
										<SearchBar id="search-bar"
											onSearch={this.handleSearchEvent}
											query={app.query}
										/>
									</div>
									
								</div>
								<div className="col-mid-2">

								</div>

							</div>
						</div>
					</div>
					<div className="container-fluid page-content">

						<div className="row">
							<div className="col-md-2 left-pane">
								<LeftPane id="leftPane"/>
							</div>
							<div className="col-md-10 main-content-pane">
								<div className="row content-header">
									<div className="col-md-6 content-header-left">
										<If test={this.state.results.numFound >= 0}>
											<div className="results-header"><p style={{fontSize:'1.15em'}}>Found {this.state.results.numFound} item(s)</p></div>
										</If>
									</div>
									<div className="col-md-6 content-header-right">

									</div>
								</div>
								<div className="row">
									<div className="col-md-6 results-list">
										<If test={this.state.results != null}>
											<Results id="results"
												results={this.state.results}
											/>
										</If>
									</div>
									<div className="col-md-6 preview-pane">
										<PreviewPane id="previewPane" />
									</div>

								</div>
								
								
							</div>
							

						</div>

					</div>
					<div className="content-area">
						
					</div>
					
				</div>
			)
		}
	});

	React.render(<SearchApp/>, document.getElementById('application'));
})();