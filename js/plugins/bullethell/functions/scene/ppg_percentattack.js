module.exports = {
		
    name: 'PPG Ultimate',
	id: 1,


load (thisTurn, _this, skillParam) {
	
	let bgImage = "ppg_attackbg";
	
	if (skillParam > 0 ) {
	
		_this.ppg_attackPaternID = skillParam;
	
	}
	
	if ($tempAniSpeed == 0) {
		$tempAniSpeed = ConfigManager["battleAniSpeed"]
	}
	ConfigManager["battleAniSpeed"] = 0
		
		// Do the actions
		if (_this.ppg_action == 0) {
			
			_this.active = true;
			ppg_currentSubject = null;
			
			_this.soulDirection = 8;
			_this.plshot_timer = 2;
			_this.PlayerCollisionX1 = 10;
			_this.PlayerCollisionX2 = 24;
			_this.PlayerCollisionY1 = 37;
			_this.PlayerCollisionY2 = 52;
			$gameSwitches.setValue(514, false);
			
			AudioManager.playSe({name: 'ppg_noise', pan: 0, pitch: 100, volume: 100});
			
			_this.objects = [];
			_this.BHBitmap = new Bitmap(1280 + _this.bhmaxwidth,720 + _this.bhmaxheight);
			
			params = [2, bgImage, 0, 0, 0, 0, 100, 100, 255, 0]
			
			let point = Game_Interpreter.prototype.picturePoint.call(null, params);
			// prettier-ignore
			$gameScreen.showPicture(
				params[0], params[1], params[2], point.x, point.y,
				params[6], params[7], params[8], params[9]
			);
			
			
			_this.ppg_action = 1;
			_this.showPictureBellow = 1;
			const subject = thisTurn._subject;
			const action = subject.currentAction();

				
			//_______________ ATTACK PATERN _____________________________

					args = {};
					args.posx = 0;args.posy = 0;args.offsetx = 0;args.offsety = 0;args.width = 0;args.height = 0;args.speed = 0;args.direction = 0;args.directioniscircle = "false";args.sprite = "null";args.candie = "true";args.canbetouched = "false";args.isPlayerShot = "false";args.isBonus = "false";
					
					args.name = "ppg_atk";
					args.hp = 3000;
					args.action = 130 + _this.ppg_attackPaternID;
					args.deathaction = 130;
					
					_this.createBHObject(args)


			//___________________________________________________________	

		}
		
		
		var lastx = $gameVariables.value(83);
		var lasty = $gameVariables.value(84);
		
		_this.playerCanShot = 1;
		
		if (_this.ppg_attackPaternID == 2) {
			_this.playerTypeOfShot = 0;
		} else {
			_this.playerTypeOfShot = 1;
		}
		
		let gravModifier = 1;
		if (_this.soulOnPlatform != 0) {
			$gameVariables.setValue(83, $gameVariables.value(83)+_this.soulOnPlatform);
		}
		
		if (_this.isBlueSoul) {
			
			_this.soulGravity -= 0.25*gravModifier;
		}
		
		$gameVariables.setValue(97, $gameVariables.value(97)-1)
		
		if ($gameVariables.value(97) < 0) {
			
			$gameVariables.setValue(97, 0)
			
		}
		

			
			if ((Input.isPressed("up") || Input.isPressed("ok")) && _this.isBlueSoul && ((_this.soulJumpPower > 0 && _this.soulHasJump) || ((_this.soulJumpPower == 0 && Math.abs(_this.soulGravity) < 0.5) && !_this.soulHasJump))) {
				
				_this.soulHasJump = 1;
				
				_this.soulJumpPower = (_this.soulJumpPower == 0) ? 3 : _this.soulJumpPower;
				
				_this.soulJumpPower += 0.5*gravModifier;
				if (_this.soulJumpPower > 10*gravModifier) {
					
					_this.soulJumpPower = 10*gravModifier;
					
				}
			}
				
		if (Input.isPressed("up") && !_this.isBlueSoul) {
			
				if (Input.isPressed("shift")) {
					
					$gameVariables.setValue(84, $gameVariables.value(84)-2)
					
				} else {
					
					$gameVariables.setValue(84, $gameVariables.value(84)-5)
					
				}
				
		}
		
		if (!Input.isPressed("up") && !Input.isPressed("ok")) {
			
			_this.soulHasJump = 0;
			
		}

		if (Input.isPressed("down") && !_this.isBlueSoul) {
			
			if (Input.isPressed("shift")) {
				
				$gameVariables.setValue(84, $gameVariables.value(84)+2)
				
			} else {
				
				$gameVariables.setValue(84, $gameVariables.value(84)+5)
				
			}
			
		}
		
		if (Input.isPressed("left")) {
			
			if (Input.isPressed("shift")) {
				
				$gameVariables.setValue(83, $gameVariables.value(83)-2)
				
			} else {
				
				$gameVariables.setValue(83, $gameVariables.value(83)-5)
				
			}
			
		}

		if (Input.isPressed("right")) {
			
			if (Input.isPressed("shift")) {
				
				$gameVariables.setValue(83, $gameVariables.value(83)+2)
				
			} else {
				
				$gameVariables.setValue(83, $gameVariables.value(83)+5)
				
			}
			
		}
		
		
		if (_this.isBlueSoul) {
			$gameVariables.setValue(84, $gameVariables.value(84) - _this.soulGravity - _this.soulJumpPower);
		}
		
		
		if ($gameVariables.value(83) < 452-9) {
			
			$gameVariables.setValue(83,452-9);
			
		}
		
		if ($gameVariables.value(83) > 1280-452-27) {
			
			$gameVariables.setValue(83,1280-452-27);
			
		}
		
		if ($gameVariables.value(84) < 84-29-5) {
			
			$gameVariables.setValue(84,84-29-5);
			if (_this.isBlueSoul) {
				
				_this.soulGravity = 0;
				_this.soulJumpPower = 0;
				
			}
			
		}
		
		if ($gameVariables.value(84) > 720-260-47-5) {
			
			$gameVariables.setValue(84,720-260-47-5);
			
			if (_this.isBlueSoul) {
				
				_this.soulGravity = 0;
				_this.soulJumpPower = 0;
				
			}
			
		}
		
		
		if ($gameSwitches.value(517) == true) {
			
			AudioManager.playSe({name: 'Damage4', pan: 0, pitch: 150, volume: 90});
			$gameScreen.startFlash([255, 255, 255, 221], 20);
			$gameSwitches.setValue(517, false);
			
		}
		
		
		
		
		if ($gameSwitches.value(514) == true) {
			
			playerIsHit(1)
			
		}
		
		
		if (lastx != $gameVariables.value(83) || lasty != $gameVariables.value(84)) {
			
			_this.playerHasMove = 1;
			
		} else {
			
			_this.playerHasMove = 0;
			
		}
		
		if (_this.ppg_stop || _this.objects[0].hp <= 80 || _this.ppg_attackPaternID == 3) {
			
			$gameVariables.setValue(83,1280/2-47-5)
			$gameVariables.setValue(84,-9000-47-5)
			_this.playerCanShot = 0;
			
		}
		
		
		if (_this.ppg_stop) {
			_this.PlayerCollisionX1 = 0;
			_this.PlayerCollisionX2 = 0;
			_this.PlayerCollisionY1 = 0;
			_this.PlayerCollisionY2 = 0;
			$gameVariables.setValue(83, -50);
			$gameScreen.erasePicture(2);
			$gameScreen.erasePicture(4);
			_this.clearSpinningAttack();
			AudioManager.playSe({name: 'ppg_noise', pan: 0, pitch: 100, volume: 100});
			_this.ppg_action = 0;
			
			
			const subject = thisTurn._subject;
			const action = subject.currentAction();
			const targets = action.makeTargets();
			action.ppgDamage = _this.damageValue;
			
			
			_BattleManager_processTurn.call(thisTurn);
			
			
			_this.damageValue = null;
			$gameScreen.erasePicture(3);
			_this.objects = [];
			ConfigManager["battleAniSpeed"] = $tempAniSpeed;
			$tempAniSpeed = 0;
			_this.ppg_stop = 0;
		}
}
}