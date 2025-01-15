class DrawableObject {
    width = 100;
    height = 150;
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    offsetY = 0;
    x = 100;
    y = 95;
    img;
    imageCache = {};
    currentImage = 0;
    percentage = 100; // Default percentage for resolveImageIndex

    /**
     * Loads an image from the specified path.
     * 
     * @param {string} path - The path to the image file.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Draws the image on the canvas.
     * 
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw on.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Loads multiple images from an array of paths and caches them.
     * 
     * @param {string[]} array - An array of image paths.
     */
    loadImages(array) {
        array.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * Determines the appropriate image index based on the current health percentage.
     * @returns {number} - The index of the image to display.
     */
    resolveImageIndex() {
        if (this.percentage === 100) return 5;
        if (this.percentage > 79) return 4;
        if (this.percentage > 59) return 3;
        if (this.percentage > 39) return 2;
        if (this.percentage > 19) return 1;
        return 0;
    }
}
