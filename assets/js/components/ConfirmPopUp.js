function ConfirmPopUp(container, message){
	this.container = container;
	this.message = message;
	this.show = false;
	this.yes = null;
	this.no = function(){
		if(this.element){ 
			this.show = false;
			this.element.hide() 
		}
	};
}

ConfirmPopUp.prototype.btnEvents = function(first_argument) {
	var self = this;
	this.element.find('.tm-modal__yes').on('click', function(){
		if(self.yes){ self.yes(); }
	});
	this.element.find('.tm-modal__no').on('click', function(){
		self.no();
		this.yes = null;
	});
};

ConfirmPopUp.prototype.open = function(yesFunc) {
	this.element.show();
	this.yes = yesFunc;
};

ConfirmPopUp.prototype.close = function(yesFunc) {
	this.element.hide();
};

ConfirmPopUp.prototype.render = function() {
	this.container.empty();
	this.element = $(`
		<div class="tm-modal">
			<div class="tm-modal__inner">
				<p>${this.message}</p>
				<div class="tm-modal__btns">
					<div class="btn btn-primary tm-modal__yes">Yes</div>
					<div class="btn btn-primary tm-modal__no">No</div>
				</div>
			</div>
		</div>
	`);
	this.element.hide();
	this.btnEvents();
	this.container.append(this.element);
};