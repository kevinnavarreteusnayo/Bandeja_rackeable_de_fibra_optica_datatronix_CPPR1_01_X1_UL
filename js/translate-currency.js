// Sistema de traducción y cambio de moneda
class TranslateCurrency {
    constructor() {
        this.currentLang = 'es'; // español por defecto
        this.currentCurrency = 'PEN'; // soles peruanos por defecto
        this.exchangeRates = {
            'PEN': 3.75,  // 1 USD = 3.75 PEN
            'EUR': 0.92   // 1 USD = 0.92 EUR
        };
        
        // Textos para traducción
        this.translations = {
            en: {
                addToCart: 'Add to Cart',
                buyNow: 'Buy Now',
                inStock: 'In Stock',
                specifications: 'Technical Specifications',
                installationGuide: 'Installation Guide',
                download: 'Download',
                dimensions: 'Dimensions',
                capacity: 'Capacity',
                compatibility: 'Compatibility',
                materials: 'Materials',
                weight: 'Weight',
                operatingTemperature: 'Operating Temperature',
                storageTemperature: 'Storage Temperature',
                viewDetails: 'View Details',
                currency: 'USD',
                available: 'Available',
                price: 'Price',
                description: 'Description',
                features: 'Features',
                technicalData: 'Technical Data',
                warranty: 'Warranty',
                contact: 'Contact',
                search: 'Search',
                menu: 'Menu',
                home: 'Home',
                products: 'Products',
                about: 'About',
                language: 'Language',
                currencyLabel: 'Currency'
            },
            es: {
                addToCart: 'Añadir al carrito',
                buyNow: 'Comprar ahora',
                inStock: 'En stock disponible',
                specifications: 'Especificaciones técnicas',
                installationGuide: 'Guía de instalación',
                download: 'Descargar',
                dimensions: 'Dimensiones',
                capacity: 'Capacidad',
                compatibility: 'Compatibilidad',
                materials: 'Materiales',
                weight: 'Peso',
                operatingTemperature: 'Temperatura de operación',
                storageTemperature: 'Temperatura de almacenamiento',
                viewDetails: 'Ver detalles',
                currency: 'PEN',
                available: 'Disponible',
                price: 'Precio',
                description: 'Descripción',
                features: 'Características',
                technicalData: 'Datos técnicos',
                warranty: 'Garantía',
                contact: 'Contacto',
                search: 'Buscar',
                menu: 'Menú',
                home: 'Inicio',
                products: 'Productos',
                about: 'Acerca de',
                language: 'Idioma',
                currencyLabel: 'Moneda'
            }
        };
        
        this.init();
    }
    
    init() {
        // Ya no creamos selectores flotantes, están en la navbar
        this.translatePage();
        this.updatePrices(); // Actualizar precios al iniciar
        this.updateCurrencyButton(); // Actualizar botón de moneda al iniciar
        
        // Crear botón flotante de WhatsApp
        this.createToggleButton();
    }
    
    createToggleButton() {
        const toggle = document.createElement('button');
        // Reemplazar globo terráqueo por logo de WhatsApp color clásico
        toggle.innerHTML = '<i class="fab fa-whatsapp" style="color: #25D366; font-size: 20px;"></i>';
        toggle.className = 'fixed bottom-4 right-4 z-50 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors border border-gray-300';
        toggle.title = 'Contactar por WhatsApp';
        // AGREGAR AQUÍ EL LINK DE WHATSAPP: Reemplaza el número abajo
        toggle.onclick = () => {
            // Ejemplo: window.open('https://wa.me/51994428965?text=Hola,%20me%20gustaría%20información%20sobre%20sus%20productos', '_blank');
            // DESCOMENTAR LA LÍNEA ANTERIOR Y REEMPLAZAR EL NÚMERO DE TELÉFONO
        };
        document.body.appendChild(toggle);
    }
    
    setLanguage(lang) {
        this.currentLang = lang;
        this.translatePage();
        this.updateNavbarStyles();
    }
    
    setCurrency(currency) {
        this.currentCurrency = currency;
        this.updatePrices();
        this.updateNavbarStyles();
        this.updateCurrencyButton();
    }
    
    updateNavbarStyles() {
        // Actualizar estilos de los selectores en la navbar
        const langButtons = document.querySelectorAll('[onclick*="setLanguage"]');
        const currButtons = document.querySelectorAll('[onclick*="setCurrency"]');
        
        langButtons.forEach(btn => {
            btn.classList.remove('bg-blue-100');
            if (btn.onclick.includes(`'${this.currentLang}'`)) {
                btn.classList.add('bg-blue-100');
            }
        });
        
        currButtons.forEach(btn => {
            btn.classList.remove('bg-blue-100');
            if (btn.onclick.includes(`'${this.currentCurrency}'`)) {
                btn.classList.add('bg-blue-100');
            }
        });
    }
    
    updateCurrencyButton() {
        // Actualizar el texto del botón de moneda en la navbar
        // Buscar específicamente el botón de moneda (el segundo grupo)
        const currencyGroups = document.querySelectorAll('.relative.group');
        if (currencyGroups.length >= 2) {
            const currencyGroup = currencyGroups[1]; // El segundo grupo es el de moneda
            const currencyButton = currencyGroup.querySelector('button .text-xs');
            if (currencyButton && currencyButton.textContent.match(/^(USD|PEN|EUR)$/)) {
                currencyButton.textContent = this.currentCurrency;
            }
        }
    }
    
    translatePage() {
        // Traducir elementos comunes
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (this.translations[this.currentLang][key]) {
                element.textContent = this.translations[this.currentLang][key];
            }
        });
    }
    
    updatePrices() {
        // Actualizar todos los precios en la página
        const priceElements = document.querySelectorAll('[data-price]');
        priceElements.forEach(element => {
            const basePrice = parseFloat(element.getAttribute('data-price'));
            let convertedPrice;
            let currencySymbol;
            
            if (this.currentCurrency === 'PEN') {
                convertedPrice = basePrice * this.exchangeRates['PEN'];
                currencySymbol = 'S/.';
            } else if (this.currentCurrency === 'EUR') {
                convertedPrice = basePrice * this.exchangeRates['EUR'];
                currencySymbol = '€';
            } else {
                convertedPrice = basePrice;
                currencySymbol = '$';
            }
            
            // Actualizar el elemento del precio directamente
            element.textContent = currencySymbol + convertedPrice.toFixed(2);
            
            // Buscar y actualizar el elemento de la moneda
            const priceContainer = element.closest('.price-container');
            if (priceContainer) {
                const currencyElement = priceContainer.querySelector('.price-currency');
                if (currencyElement) {
                    currencyElement.textContent = this.currentCurrency;
                }
            }
        });
    }
    
    // Función para cerrar selectores (ya no necesaria)
    closeSelectors() {
        // Los selectores ahora están en la navbar, no hay flotantes que cerrar
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        window.translateCurrency = new TranslateCurrency();
        
        // Actualizar estilos iniciales de la navbar
        if (window.translateCurrency) {
            window.translateCurrency.updateNavbarStyles();
        }
    }, 500);
});
