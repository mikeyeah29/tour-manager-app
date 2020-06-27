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
	this.element.find('.gr-modal__yes').on('click', function(){
		if(self.yes){ self.yes(); }
	});
	this.element.find('.gr-modal__no').on('click', function(){
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
		<div class="gr-modal">
			<div class="gr-modal__inner">
				<p>${this.message}</p>
				<div class="tm-modal__btns">
					<div class="gr-btn gr-modal--action gr-modal__yes">Yes</div>
					<div class="gr-btn gr-modal--action gr-modal__no">No</div>
				</div>
			</div>
		</div>
	`);
	this.element.hide();
	this.btnEvents();
	this.container.append(this.element);
};