var app = app || {};

app.LeftPane = React.createClass({
	

	componentDidMount: function () {
		
	},

	
	render: function () {
		return (

			<div className="left-pane-content">
				<form>
					 <fieldset>
						  <legend>Order By:</legend>
						  <div className="btn-group" role="group" >
							  <button type="button" className="btn btn-default">Desc</button>
							  <button type="button" className="btn btn-default">Asc</button>
							  <button type="button" className="btn btn-default">Relevance</button>
							</div>							  
					 </fieldset>
					 <br/><br/>
					 <fieldset>
						  <legend>Date Filters:</legend>
						  <div className="filter-group">
						  	<b>Date of Information:</b>
						  	<div className="filter-group">
						  		<span>01/05/2015 to 02/08/2015 </span>
						  	</div>
						  </div>

						  <div className="filter-group">
						  	<b>Dates Found:</b>
						  	<div className="filter-group">
						  		<span>All times </span>
						  	</div>
						  </div>

						  <div className="filter-group">
						  	<b>Date of Publication:</b>
						  	<div className="filter-group">
						  		<span>All times </span>
						  	</div>
						  </div>
						  								  
					 </fieldset>
					 <br/><br/>
					 <fieldset>
						  <legend>Location Filters:</legend>
						  <div className="filter-group">
						  		<div>United States > Virginia > Fairfax</div>
						  		<div>United States > Maryland > Rockville</div>
						  </div>

					 </fieldset>

					 <br/><br/>
					 <fieldset>
						  <legend>Datasource Filters:</legend>
						  <div className="filter-group">
						  		<div>CNN News</div>
						  		<div>BBC News</div>
						  		<div>Google News</div>
						  </div>

					 </fieldset>
				</form>
			</div>
		);
	}
});