function Menu(container, links, permissions){
	this.container = container;
	this.permissions = permissions;
	this.links = links;
	this.element = null;
}

Menu.prototype.render = function() {
	var self = this;
	this.container.empty();
	this.element = $(`
		<nav>
			<ul>
		        ${this.links.map(function(link){

		        	console.log(self.permissions, ' ', link.permissions);

		        	if(self.permissions === link.permissions || self.permissions === 'anyone'){
		        		return `
							<li class="nav-item">
					            <a class="nav-link active" href="${link.href}">${link.name}</a>
					        </li>
						`;
		        	}
				}).join('')}
	       	</ul>
       	</nav>
	`);
	this.container.append(this.element);
};