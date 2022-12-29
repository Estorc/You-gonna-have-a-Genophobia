module.exports = {
		
    name: 'OTF_Arm2',
	id: 1104,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.begin = 0;
			_this.timer = 0;
			_this.originx = _this.pos.x;
			_this.originy = _this.pos.y;
			
		}
		
		_this.timer += 0.1;
		_this.scale.x = Math.sin(_this.timer)/32+1+1/32
		_this.scale.y = Math.sin(_this.timer)/32+1+1/32
		
	},
};