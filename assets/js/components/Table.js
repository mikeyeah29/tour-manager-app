function Table(container, headings, data){
	this.container = container;
	this.headings = headings;
	this.data = data;
}	

Table.prototype.update = function(data) {
	this.data = data;
	this.render();
};

Table.prototype.render = function() {
	var self = this;
	this.container.empty();
	this.element = $(`
		<table class="table">
			<tr>
				${this.headings.map(function(heading){
					return `
						<th>${heading.display}</th>
					`;
				}).join('')}
				<th></th>
			</tr>
			${this.data.map(function(row){

				console.log(row);

				return `
					<tr>
						${self.headings.map(function(heading){
							return `<td>${ row[heading.property] }</td>`;
						}).join('')}
						<td>
							<div class="btn btn-danger btn-delete" data-id="${row.id}">Delete</div>
						</td>
					</tr>
				`;
			}).join('')}
		</table>
	`);
	this.container.append(this.element);
}