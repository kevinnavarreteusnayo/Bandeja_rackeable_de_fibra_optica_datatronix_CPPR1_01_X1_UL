// Translation and currency conversion system
class TranslateCurrency {
    constructor() {
        this.currentCurrency = 'PEN'; // Peruvian soles by default
        this.exchangeRates = {
            'PEN': 3.75,  // 1 USD = 3.75 PEN
            'EUR': 0.92   // 1 USD = 0.92 EUR
        };
        
        this.init();
    }
    
    init() {
        // We no longer create floating selectors, they are in the navbar
        this.updatePrices(); // Update prices on start
        this.updateCurrencyButton(); // Update currency button on start
        
        // Create floating WhatsApp button
        this.createToggleButton();
    }
    
    createToggleButton() {
        const toggle = document.createElement('button');
        // Replace globe with classic WhatsApp logo
        toggle.innerHTML = '<i class="fab fa-whatsapp" style="color: #25D366; font-size: 20px;"></i>';
        toggle.className = 'fixed bottom-4 right-4 z-50 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors border border-gray-300';
        toggle.title = 'Contact via WhatsApp';
        // ADD WHATSAPP LINK HERE: Replace the number below
        toggle.onclick = () => {
            // Example: window.open('https://wa.me/51994428965?text=Hola,%20me%20gustaría%20información%20sobre%20sus%20productos', '_blank');
            // UNCOMMENT THE PREVIOUS LINE AND REPLACE THE PHONE NUMBER
        };
        document.body.appendChild(toggle);
    }
    
    setCurrency(currency) {
        this.currentCurrency = currency;
        this.updatePrices();
        this.updateNavbarStyles();
        this.updateCurrencyButton();
    }
    
    updateNavbarStyles() {
        // Update navbar selector styles
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
        // Update currency button text in navbar
        // Search specifically for currency button (the second group)
        const currencyGroups = document.querySelectorAll('.relative.group');
        if (currencyGroups.length >= 2) {
            const currencyGroup = currencyGroups[1]; // The second group is the currency one
            const currencyButton = currencyGroup.querySelector('button .text-xs');
            if (currencyButton && currencyButton.textContent.match(/^(USD|PEN|EUR)$/)) {
                currencyButton.textContent = this.currentCurrency;
            }
        }
    }
    
    updatePrices() {
        // Update all prices on the page
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
            
            // Update price element directly
            element.textContent = currencySymbol + convertedPrice.toFixed(2);
            
            // Search and update currency element
            const priceContainer = element.closest('.price-container');
            if (priceContainer) {
                const currencyElement = priceContainer.querySelector('.price-currency');
                if (currencyElement) {
                    currencyElement.textContent = this.currentCurrency;
                }
            }
        });
    }
    
    // Function to close selectors (no longer needed)
    closeSelectors() {
        // Selectors are now in navbar, no floating ones to close
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        window.translateCurrency = new TranslateCurrency();
        
        // Maintain compatibility with main translation system
        if (window.translationSystem) {
            // If main system exists, use it for translations
            window.translateCurrency.setLanguage = function(lang) {
                window.translationSystem.setLanguage(lang);
            };
        }
        
        // Update initial navbar styles
        if (window.translateCurrency) {
            window.translateCurrency.updateNavbarStyles();
        }
    }, 500);
});
