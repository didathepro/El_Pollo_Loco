class StatusBarEndboss extends DrawableObject {
    percentage = 100;
    IMAGES_LIFEBAR = [
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue0.png',
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue20.png',
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue40.png',
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue60.png',
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue80.png',
        'img_pollo_locco/img/7_statusbars/2_statusbar_endboss/blue/blue100.png',
    ];


    constructor() {
        super();
        this.loadImages(this.IMAGES_LIFEBAR);
        this.x = 460;
        this.y = 6;
        this.width = 220;
        this.height = 65;
        this.setPercentage(100);
    }

    /**
     * Updates the status bar based on the current health percentage.
     * @param {number} percentage - The new health percentage (0 to 100).
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_LIFEBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}
