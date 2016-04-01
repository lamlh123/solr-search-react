var app = app || {};

app.Results = React.createClass({
	

	componentDidMount: function () {
		
	},

	
	render: function () {
		var tdLabelStyle = {
			width: '150px'
			
		}
		return (
			<div id="results-list">
				
				{this.props.results.documents.map(function (item) {
					return (
						<div key={item.id} className="result-item">
							<table>
								<tr style={{marginTop:'5px'}}><td style={tdLabelStyle}><b>Title:</b></td><td>{item.title}</td></tr>
								<tr style={{marginTop:'5px'}}><td style={tdLabelStyle}><b>Date:</b></td><td>{item.date}</td></tr>
								<tr style={{marginTop:'5px'}}><td style={tdLabelStyle}><b>Source:</b></td><td>{item.datasource}</td></tr>
							</table>
							<div className="hl" dangerouslySetInnerHTML={{__html: item.highlights}}></div>
						
						</div>
					
					)
				
				},this)}			
			
			</div>
		);
	}
});