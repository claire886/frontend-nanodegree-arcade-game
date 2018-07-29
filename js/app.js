// Enemies our player must avoid
var Enemy = function(x, y, dtMultiplier) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // initialize the beginning position and dt multiplier
    //  by passing in arugment x, y, dtMultiplier
    this.x = x;
    this.y = y;
    this.dtMultiplier = dtMultiplier;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x >= 500) {
        this.x = 0;
    }
    this.x += dt * this.dtMultiplier;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
}

Player.prototype.update = function() {
    this.currentX = this.x;
    this.currentY = this.y;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Move player according to keyCode from 'keyup' eventListener.
// Don't let player would move off screen.
Player.prototype.handleInput = function(move) {
    switch (move) {
        case 'left':
            if (this.x > -2) {
                this.x -= 101;
            }
            break;
        case 'up':
            if (this.y > -7) {
                this.y -= 83;
            }
            break;
        case 'right':
            if (this.x < 402) {
                this.x += 101;
            }
            break;
        case 'down':
            if (this.y < 408) {
                this.y += 83;
            }
    }    
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const allEnemies = [new Enemy(0, 62, 130), new Enemy(0, 145, 150), new Enemy(0, 228, 100)];
const player = new Player(200, 325);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
