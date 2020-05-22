function MessageBox(container){
	this.container = container;
	this.state = 'error';
	this.messages = [];
	this.element = null;
}

MessageBox.prototype.setState = function(state) {
	this.state = state;
};

MessageBox.prototype.clear = function() {
	this.messages = [];
	this.render();
};

MessageBox.prototype.add = function(message) {
	// this.element.find('.message-box__list').append(`<p>${message}</p>`);
	this.messages.push(message);
};

MessageBox.prototype.show = function(state, messageArray) {
	this.clear();
	this.setState('error');
	for(var i=0;i<messageArray.length;i++){
		this.add(messageArray[i]);
	}
	this.render();
};

MessageBox.prototype.render = function() {
	this.container.empty();
	this.element = $(`
		<div class="message-box message-box--${this.state}">
			<div class="container">
				${this.messages.map(function(msg){
					return `<p>${msg}</p>`;
				}).join('')}
			</div>
		</div>
	`);
	this.container.append(this.element);
};