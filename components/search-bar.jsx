var app = app || {};


app.SearchBar = React.createClass({
	

	componentDidMount: function () {
		
	},

	handleClickEvent: function (event) {
	
		event.preventDefault();
		var query = new Query();
		query.keywords = this.refs.searchbarInput.getDOMNode().value
		this.props.onSearch(query);
		
		
	},
	
	
	render: function () {
		
		return (
			<form onsubmit={this.handleClickEvent}>
				<div className="input-group">
					<input id="searchbar-input"
						type="search"
						className="form-control"
						ref="searchbarInput"
						placeholder="Enter keywords..."
						autoFocus={true}
					/>		
					<span className="input-group-btn">
						<button type="submit" onClick={this.handleClickEvent} id="searchbar-btn" className="btn btn-primary">Search <span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
					</span>
				</div>
			</form>
		);
	}
});
	
