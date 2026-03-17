document.addEventListener("DOMContentLoaded", function() {
    const carouselImages = [
        "icons/brands/airlive.gif",
        "icons/brands/alfa.gif",
        "icons/brands/AMP.jpg",
        "icons/brands/Amphenol.jpg",
        "icons/brands/andrew.jpg",
        "icons/brands/BELDEN.jpg",
        "icons/brands/cisco.gif",
        "icons/brands/datatronix.png",
        "icons/brands/D-Link.jpg",
        "icons/brands/Dahua.jpg",
        "icons/brands/dixon.jpg",
        "icons/brands/fibrefab.png",
        "icons/brands/lanpro.jpg",
        "icons/brands/lcom.jpg",
        "icons/brands/mikrotik.png",
        "icons/brands/panduit.jpg",
        "icons/brands/satra.jpg",
        "icons/brands/siemon.gif",
        "icons/brands/tp-link.jpg",
        "icons/brands/trendnet.jpg",
        "icons/brands/ubiquiti.png"
    ];

    let currentImageIndex = 0;
    const carouselImageElement = document.getElementById("brands-carousel");
    const carouselMobileElement = document.getElementById("brands-carousel-mobile");

    if (carouselImageElement || carouselMobileElement) {
        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
            
            // Update desktop carousel
            if (carouselImageElement) {
                carouselImageElement.style.opacity = 0;
                setTimeout(() => {
                    carouselImageElement.src = carouselImages[currentImageIndex];
                    carouselImageElement.style.opacity = 1;
                }, 500);
            }
            
            // Update mobile carousel
            if (carouselMobileElement) {
                carouselMobileElement.style.opacity = 0;
                setTimeout(() => {
                    carouselMobileElement.src = carouselImages[currentImageIndex];
                    carouselMobileElement.style.opacity = 1;
                }, 500);
            }
        }, 2000);
    }

    // Main product image carousel
    const mainCarouselImages = [
        "imagenes/caja.png",
        "imagenes/bandeja.png",
        "imagenes/accesorios.png"
    ];

    let currentMainImageIndex = 0;
    const mainCarouselImageElement = document.getElementById("img_main");

    if (mainCarouselImageElement) {
        setInterval(() => {
            currentMainImageIndex = (currentMainImageIndex + 1) % mainCarouselImages.length;
            mainCarouselImageElement.style.opacity = 0;
            setTimeout(() => {
                mainCarouselImageElement.src = mainCarouselImages[currentMainImageIndex];
                mainCarouselImageElement.style.opacity = 1;
            }, 500);
        }, 2500);
    }
});
