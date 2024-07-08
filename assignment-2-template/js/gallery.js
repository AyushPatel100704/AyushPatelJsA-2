// Define Image class to encapsulate image data
class ImageItem {
    constructor(url, largeUrl, alt, info) {
        this.url = url;
        this.largeUrl = largeUrl;
        this.alt = alt;
        this.info = info;
    }
}

// Array of ImageItem objects
const imageData = [
    new ImageItem("images/flowers-purple-small.jpg", "images/flowers-purple-large.jpg", "Purple Flowers", "Catchy Purple flowers in a garden, adding a touch of elegance."),
    new ImageItem("images/flowers-red-small.jpg", "images/flowers-red-large.jpg", "Red Flowers", "Vibrant red flowers standing out against lush green leaves."),
    new ImageItem("images/flowers-white-small.jpg", "images/flowers-white-large.jpg", "White Flowers", "Gorgeous White flowers blooming gracefully during the spring season."),
    new ImageItem("images/flowers-yellow-small.jpg", "images/flowers-yellow-large.jpg", "Yellow Flowers", "Bright yellow flowers basking in the sunlight, radiating warmth."),
    new ImageItem("images/flowers-pink-small.jpg", "images/flowers-pink-large.jpg", "Pink Flowers", "Soft pink flowers scattered across a serene meadow, a picture of tranquility.")
 
];


document.addEventListener("DOMContentLoaded", function() {
    const thumbnailsContainer = document.getElementById("thumbnails");
    const featuredImage = document.getElementById("featured");
    const figcaption = document.getElementById("caption");

    // Function to build thumbnail list
    function buildThumbnailList() {
        imageData.forEach(image => {
            const li = document.createElement("li");
            const img = document.createElement("img");
            img.src = image.url;
            img.alt = image.alt;
            img.width = 240;
            img.height = 160;
            img.dataset.large = image.largeUrl;
            img.dataset.info = image.info;

            li.appendChild(img);
            thumbnailsContainer.appendChild(li);

            // Event listener for thumbnail hover (to display tooltip)
            img.addEventListener("mouseover", function() {
                this.title = image.info; // Tooltip shows full description
            });

            // Event listener for thumbnail click
            img.addEventListener("click", function() {
                // Reset active class for all thumbnails
                thumbnailsContainer.querySelectorAll("li").forEach(item => {
                    item.classList.remove("active");
                });

                // Set active class for clicked thumbnail
                li.classList.add("active");

                // Update featured image and caption with title and info
                featuredImage.src = this.dataset.large;
                featuredImage.alt = this.alt;
                figcaption.textContent = `${this.alt} - ${image.info}`;
            });
        });
    }

    // Call function to build thumbnail list on page load
    buildThumbnailList();
});
