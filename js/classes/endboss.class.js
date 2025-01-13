class Endboss extends MovableObject {

    width = 400;
    height = 400;
    offset = {
        top: 50,
        right: 30,
        bottom: 20,
        left: 30
    }
    offsetY = 0;
    y = 40;
    speed = 1;
    attack = false;
    hadFirstContact = false;
    direction = 'left';

    IMAGES_SPAWNING = [
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G5.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G6.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G7.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G8.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G9.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G10.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G11.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/2_alert/G12.png',
    ]

    IMAGES_WALKING = [
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G1.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G2.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G3.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G4.png',
    ]

    IMAGES_HURT = [
        'img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/4_hurt/G23.png',
    ]

    IMAGES_DEAD = [
        'img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G24.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G25.png',
        'img_pollo_locco/img/4_enemie_boss_chicken/5_dead/G26.png',
    ]

    endboss_join_sound = new Audio('audio/evil-laugh-45966.mp3');
    hurt_sound = new Audio('audio/hit-by-a-wood-230542.mp3');


    /**
     * Creates an instance of the Endboss.
     * Loads all necessary images and initializes the Endboss's position and speed.
     */
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_SPAWNING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 4000;
        this.speed = 5; // Adjust speed by multiplying base speed
        this.animation();
    }

    /**
     * Manages the Endboss's animation, including spawning, movement, and interactions.
     */
    animation() {
        let i = 0;
        let spawningFinished = false;
        let animationInterval = setInterval(() => {
            if (world.gameEnd) {
                clearInterval(animationInterval);
                return;
            }
            if (!spawningFinished && this.hadFirstContact) {
                if (i < this.IMAGES_SPAWNING.length * 3) {
                    this.playAnimation(this.IMAGES_SPAWNING);
                    if (i === 0 && soundOn) {
                        this.endboss_join_sound.play();
                    }
                    i++;
                } else {
                    spawningFinished = true;
                }
            } else if (this.hadFirstContact) {
                this.endbossMove();
            }
            this.handleDeath();
            this.handleHurt();
            if (world.character.x > 3500 && !this.hadFirstContact) {
                i = 0;
                this.hadFirstContact = true;
            }
        }, 100);
    }

    /**
     * Moves the Endboss back and forth between specified boundaries.
     */
    endbossMove() {
        this.playAnimation(this.IMAGES_WALKING);

        if (this.direction === 'left') {
            if (this.x > 2500) {
                this.moveLeft();
            } else {
                this.direction = 'right';
                this.otherDirection = true;
            }
        } else if (this.direction === 'right') {
            if (this.x < 4500) {
                this.moveOtherDirection();
            } else {
                this.direction = 'left';
                this.otherDirection = false;
            }
        }
    }

    /**
     * Moves the Endboss to the right.
     */
    moveOtherDirection() {
        this.x += this.speed;
        this.otherDirection = true;
    }

    /**
     * Handles the Endboss's death, including animation and game state changes.
     */
    handleDeath() {
        if (this.isDeath() && !this.active) {
            this.playAnimation(this.IMAGES_DEAD);
            this.active = false;
            this.speed = 0;
            world.gameEnd = true;
        }
    }

    /**
     * Handles the Endboss's hurt state, including animation and movement adjustments.
     */
    handleHurt() {
        if (this.isHurt()) {
            this.handleHurtMovement();
            this.playAnimation(this.IMAGES_HURT);
        }
    }

    /**
     * Manages the Endboss's movement while hurt.
     */
    handleHurtMovement() {
        this.moveLeft();
        this.direction = 'left';
        this.otherDirection = false;
        this.speed += 1;
    }
}