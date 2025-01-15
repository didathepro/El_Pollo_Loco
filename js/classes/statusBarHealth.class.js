class StatusBarLife extends DrawableObject {

    percentage = 100;
    IMAGES_LIFEBAR = [
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',   
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',   
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',  
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',  
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',  
        'img_pollo_locco/img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',   
    ];

    
    constructor() {
        super();
        this.loadImages(this.IMAGES_LIFEBAR);
        this.x = 30;       // X-coordinate position on the screen
        this.y = 0;        // Y-coordinate position on the screen
        this.width = 220;  // Width of the life bar
        this.height = 65;  // Height of the life bar
        this.setPercentage(100); // Start with full health
    }

    /**
     * Sets the life bar to a specific health percentage.
     * Updates the displayed image based on the current health percentage.
     * @param {number} percentage - The health percentage to set.
     */
    setPercentage(percentage) {
        this.percentage = percentage; // Update the health percentage
        let path = this.IMAGES_LIFEBAR[this.resolveImageIndex()]; // Get the appropriate image path
        this.img = this.imageCache[path]; // Update the image to the appropriate life bar image
    }
}
