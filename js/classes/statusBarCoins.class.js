class StatusBarCoin extends DrawableObject {
    percentage = 0;
    IMAGES_COINBAR = [
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img_pollo_locco/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES_COINBAR);
        this.x = 30;
        this.y = 50;
        this.width = 220;
        this.height = 65;
        this.setPercentage(0);
    }

    /**
     * Updates the status bar percentage and corresponding image.
     * @param {number} percentage - The new percentage value (0 to 100).
     */
    setPercentage(percentage) {
        this.percentage = percentage * 20; // Converts percentage to index range (0 to 5)
        let path = this.IMAGES_COINBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}
