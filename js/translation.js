// ============================================
// SISTEMA DE TRADUCCIÓN COMPLETO
// ============================================

class TranslationSystem {
    constructor() {
        this.currentLanguage = localStorage.getItem('selectedLanguage') || 'es';
        this.translations = {
            es: {
                // Navegación principal
                'nav-home': 'Inicio',
                'nav-products': 'Productos',
                'nav-brands': 'Marcas',
                'nav-contact': 'Contacto',
                'nav-search': 'Buscar',
                'nav-language': 'Idioma',
                'nav-currency': 'Moneda',
                'nav-dark-mode': 'Alternar modo oscuro',
                
                // Selector de idioma
                'lang-spanish': 'Español',
                'lang-english': 'English',
                
                // Selector de moneda
                'currency-pen': 'PEN - Soles',
                'currency-usd': 'USD - Dólares',
                'currency-eur': 'EUR - Euros',
                
                // Menú móvil
                'mobile-menu-close': 'Cerrar menú',
                'mobile-menu-open': 'Abrir menú móvil',
                'mobile-menu-lists': 'Lista de Precios',
                'mobile-menu-full-list': 'Lista Completa',
                'mobile-menu-access-point': 'Access Point',
                'mobile-menu-switch-small': 'Switch Small Business',
                'mobile-menu-switch-catalyst': 'Switch Catalyst',
                'mobile-menu-meraki': 'Cisco Meraki',
                'mobile-menu-nexus': 'Cisco Nexus',
                'mobile-menu-routers': 'Routers',
                'mobile-menu-phones': 'Teléfonos Cisco',
                'mobile-menu-transceiver': 'Módulo/Transceiver de Fibra',
                'mobile-menu-accessories': 'Accesorios',
                'mobile-menu-switch-industrial': 'Switch Industrial',
                
                // Overlay de búsqueda
                'search-placeholder': 'Buscar productos, marcas o códigos...',
                'search-button': 'Buscar',
                'search-clear': 'Limpiar',
                'search-close': 'Cerrar búsqueda',
                
                // Navegación de marca
                'menu-fiber-cables': 'Cables de Fibra',
                'menu-patch-cords': 'Patch cords /pigtails',
                'menu-tray': 'Bandeja',
                'menu-splices': 'Mufas',
                
                // Breadcrumb
                'breadcrumb-home': 'Inicio',
                'breadcrumb-datatronix': 'Datatronix',
                'breadcrumb-tray-network': 'Bandeja de Red',
                'breadcrumb-product-title': 'Bandeja rackeable de fibra optica — Datatronix — Código CPPR1-01-X1-UL',
                
                // Sidebar de marcas
                'sidebar-brands-title': 'Nuestras Marcas',
                'sidebar-more-brands': 'Ver más marcas',
                'sidebar-less-brands': 'Ver menos marcas',
                
                // Contenido principal
                'main-title': 'Bandeja para Fibra',
                'main-description': 'Bandeja para fibra Rackeable 1RU patch panel de fibra con bandeja Deslizable para 24 puertos SC hasta 48 hilos LC marca Datatronix CPPR1-02-X1-UL.',
                'zoom-badge': 'Zoom',
                'product-view': 'Vista del producto',
                'views-count': 'vistas',
                'high-resolution': 'Alta resolución',
                'zoom-available': 'Zoom disponible',
                
                // Panel de precio
                'in-stock': 'En stock disponible',
                'buy-now': 'Comprar ahora',
                
                // Pestañas
                'tab-product': 'Producto',
                'tab-images': 'Imágenes',
                'tab-downloads': 'Descargas',
                
                // Galería de imágenes
                'gallery-title': 'Galería de imágenes',
                'img-front': 'Vista frontal',
                'img-front-large': 'Vista frontal ampliada',
                'img-back': 'Vista posterior',
                'main-image-alt': 'Imagen principal del producto',
                
                // Descargas
                'downloads-title': 'Descargas disponibles',
                'download-datasheet': 'Ficha Técnica',
                'download-datasheet-desc': 'Especificaciones técnicas detalladas del producto',
                'download-manual': 'Manual de Usuario',
                'download-manual-desc': 'Guía completa de instalación y configuración',
                'download-specs': 'Especificaciones',
                'download-specs-desc': 'Especificaciones técnicas en detalle',
                'download-button': 'Descargar',
                
                // Secciones desplegables
                'dimensions': 'Dimensiones',
                'capacity': 'Capacidad',
                'adapter-compatibility': 'Compatibilidad de adaptadores',
                'cable-types': 'Tipo de cables soportados',
                'construction': 'Construcción',
                'cable-entries': 'Entradas de cable',
                'standards': 'Normativas',
                'view-details': 'Ver detalles',
                
                // Detalles de dimensiones
                'depth': 'Profundidad:',
                'width': 'Ancho:',
                'height': 'Altura:',
                'rack-units': 'Unidades de rack:',
                
                // Detalles de capacidad
                'max-capacity': 'Capacidad máxima:',
                'up-to-24-adapters': 'Hasta 24 adaptadores',
                'up-to-48-fibers': 'Hasta 48 fibras utilizando LC dúplex',
                
                // Compatibilidad
                'sc-simplex': 'SC simplex',
                'lc-duplex': 'LC dúplex',
                'e2000': 'E2000',
                
                // Tipos de cables
                'loose-tube': 'Cable loose tube (tubo holgado)',
                'tight-buffered': 'Cable tight buffered (buffer ajustado)',
                'armored-cable': 'Cable armado con cinta de acero',
                'pre-terminated': 'Cables preterminados',
                
                // Construcción
                'material-steel': 'Material: acero',
                'labeled-ports': 'Puertos etiquetados individualmente',
                'sliding-mechanism': 'Mecanismo deslizante para facilitar instalación y mantenimiento',
                
                // Entradas de cable
                'cable-entries-desc': 'Hasta 4 entradas de cable para diferentes tipos de fibra',
                
                // Normativas
                'rohs': 'RoHS',
                'reach': 'REACH',
                'svhc': 'SvHC',
                
                // Sidebar de lista de precios
                'price-list-title': 'Listas de Precios',
                'price-search-placeholder': 'Buscar marca...',
                'price-list-amp': 'Lista de precios AMP',
                'price-list-amphenol': 'Lista de precios Amphenol',
                'price-list-andrew': 'Lista de precios Andrew',
                'price-list-apc': 'Lista de precios APC',
                'price-list-cisco': 'Lista de precios CISCO',
                'price-list-datatronix': 'Lista de precios Datatronix',
                'price-list-dlink': 'Lista de precios D-Link',
                'price-list-dixon': 'Lista de precios Dixon',
                'price-list-energit': 'Lista de precios Energit',
                'price-list-fiber': 'Lista de precios Fibra',
                'price-list-hp': 'Lista de precios HP',
                'price-list-mikrotik': 'Lista de precios Mikrotik',
                'price-list-nexxt': 'Lista de precios Nexxt Solutions',
                'price-list-panduit': 'Lista de precios Panduit',
                'price-list-siemon': 'Lista de precios Siemon',
                'price-list-teldor': 'Lista de precios Teldor',
                'price-list-trendnet': 'Lista de precios TRENDnet',
                'price-list-ubiquiti': 'Lista de precios Ubiquiti',
                
                // Sección de productos relacionados
                'also-available': 'También Disponible en Stock',
                'view-product': 'Ver Producto',
                
                // Productos relacionados
                'product-1-title': 'TAPAS CIEGAS PLÁSTICAS SC SIMPLEX DATATRONIX',
                'product-1-desc': 'tapas ciegas plásticas para adaptadores SC simplex - LC dublex marca DATATRONIX',
                'product-2-title': 'TAPAS CIEGAS SC DUPLEX DATATRONIX',
                'product-2-desc': 'Tapas ciegas SC duplex plásticas para adaptadores SC duplex marca DATATRONIX',
                'product-3-title': 'SPOOL ORDENAMIENTO DE FIBRA DATATRONIX',
                'product-3-desc': 'Spool rojo de ordenamiento de fibra óptica marca DATATRONIX',
                'product-4-title': 'BANDEJA DE FUSIÓN DATATRONIX',
                'product-4-desc': 'Bandeja de fusión de fibra óptica roja para bandeja DATATRONIX',
                'product-5-title': 'DROP FTTH 1 HILO DATATRONIX',
                'product-5-desc': 'Bobina de 2,000 metros de cable drop Monomodo FTTH de 1 hilo 9/125 um marca DATATRONIX',
                'product-6-title': 'DROP FTTH 2 HILOS DATATRONIX',
                'product-6-desc': 'Bobina de 2,000 metros de Cable DROP Monomodo FTTH de 2 hilos 9/125 um con chaqueta CMR azul marca DATATRONIX',
                'product-7-title': 'CONECTOR ÓPTICO SC DATATRONIX',
                'product-7-desc': 'Conector óptico SC monomodo para fibra óptica marca DATATRONIX',
                'product-8-title': 'CABLE PATCH CORD SC DATATRONIX',
                'product-8-desc': 'Cable patch cord fibra óptica SC-SC monomodo 3 metros marca DATATRONIX',
                
                // Footer
                'footer-description': 'Líderes en redes con 15+ años.',
                'footer-products': 'Productos',
                'footer-equipment': 'Equipamiento',
                'footer-services': 'Servicios',
                'footer-contact': 'Contacto',
                'footer-switches': 'Switches',
                'footer-routers': 'Routers',
                'footer-access-points': 'Access Points',
                'footer-fiber-optic': 'Fibra Óptica',
                'footer-technical-support': 'Soporte Técnico',
                'footer-installation': 'Instalación',
                'footer-consulting': 'Consultoría',
                'footer-maintenance': 'Mantenimiento',
                'footer-connected': 'Conectados',
                'footer-newsletter-desc': 'Recibe ofertas exclusivas.',
                'footer-email-placeholder': 'tu@email.com',
                'footer-subscribe': 'Suscribir',
                'footer-copyright': 'DS3 Comunicaciones. Todos los derechos reservados.',
                'footer-privacy': 'Política de Privacidad',
                'footer-terms': 'Términos',
                'footer-email': 'Email',
                'footer-media-converters': 'Media Converters',
                'mobile-menu-access-points': 'Access points',
                
                // Lista de precios
                'price-list-title': 'Lista de Precios',
                'price-list-description': 'Productos de fibra óptica de alta calidad - Cables, acopladores, pigtail, patch cords y más',
                'category-cable-monomodo': 'CABLE MONOMODO',
                'category-cable-multimodo-om3': 'CABLE MULTIMODO OM3',
                'category-cable-multimodo-om4': 'CABLE MULTIMODO OM4',
                'category-bandeja-fo': 'BANDEJA FO',
                'category-cajas-riel-din': 'CAJAS RIEL DIN',
                'category-acopladores-monomodo': 'ACOPLADORES MONOMODO',
                'category-acopladores-multimodo': 'ACOPLADORES MULTIMODO',
                'category-pigtail-monomodo': 'PIGTAIL MONOMODO',
                'category-pigtail-multimodo': 'PIGTAIL MULTIMODO',
                'category-patch-cord-monomodo': 'PATCH CORD MONOMODO',
                'category-patch-cord-multimodo': 'PATCH CORD MULTIMODO',
                'category-cable-drop-ftth': 'CABLE DROP FTTH',
                'category-mufa-fo': 'MUFA FO',
                'category-acopladores-multimodo': 'ACOPLADORES MULTIMODO',
                'mobile-menu-categories': 'Categorías',
                'nav-home': 'Inicio',
                'button-quote': 'Cotizar',
                'button-request-quote': 'Solicitar Cotización',
                
                // Productos - Títulos y descripciones
                'product-fc-lt-91-12': 'FC-LT-91-12',
                'desc-fc-lt-91-12': 'Metros de cable de fibra óptica Monomodo (9/125um) de 12 hilos con armadura dieléctrica para ductos, int/ext, chaqueta LSZH, marca DATATRONIX',
                'product-fc-lt-91-24': 'FC-LT-91-24',
                'desc-fc-lt-91-24': 'Metros de cable de fibra óptica Monomodo (9/125um) de 24 hilos con armadura dieléctrica para ductos, int/ext, chaqueta LSZH, marca DATATRONIX',
                'product-fc-lt-31-06': 'FC-LT-31-06',
                'desc-fc-lt-31-06': 'Metros de cable de fibra óptica Multimodo OM3 de 06 hilos, chaqueta LSZH, para ductos, marca DATATRONIX',
                'product-fc-lt-41-06': 'FC-LT-41-06',
                'desc-fc-lt-41-06': 'Metros de cable de fibra óptica Multimodo OM4 de 06 hilos con armadura dieléctrica para ductos, int/ext, chaqueta LSZH, marca DATATRONIX',
                'product-cppr1-02-x1-ul': 'CPPR1-02-X1-UL',
                'desc-cppr1-02-x1-ul': 'Bandeja Rackeable 1RU Deslizable para 24 puertos LC-SC, Incluye 01 bandeja de fusion 24 hilos, 02 prensas estopas, 04 tuercas enjauladas y cintillos (sin acopladores), marca DATATRONIX',
                'product-din-fb-sc-12-ul': 'DIN-FB-SC-12-UL',
                'desc-din-fb-sc-12-ul': 'Cajita montaje DIN-RAIL para 6 adaptadores SC Duplex, vacío, (sin acopladores), marca DATATRONIX',
                'product-dem1-48': 'DEM1-48',
                'desc-dem1-48': 'Mufa de fibra óptica tipo horizontal para 48 hilos, sello hermetico IP68, marca DATATRONIX',
                'product-cad-02-9-2-25': 'CAD-02-9-2/25',
                'desc-cad-02-9-2-25': 'Acoplador Monomodo SC duplex, azul, marca DATATRONIX'
            },
            en: {
                // Navegación principal
                'nav-home': 'Home',
                'nav-products': 'Products',
                'nav-brands': 'Brands',
                'nav-contact': 'Contact',
                'nav-search': 'Search',
                'nav-language': 'Language',
                'nav-currency': 'Currency',
                'nav-dark-mode': 'Toggle dark mode',
                
                // Selector de idioma
                'lang-spanish': 'Español',
                'lang-english': 'English',
                
                // Selector de moneda
                'currency-pen': 'PEN - Soles',
                'currency-usd': 'USD - Dollars',
                'currency-eur': 'EUR - Euros',
                
                // Menú móvil
                'mobile-menu-close': 'Close menu',
                'mobile-menu-open': 'Open mobile menu',
                'mobile-menu-lists': 'Price Lists',
                'mobile-menu-full-list': 'Complete List',
                'mobile-menu-access-point': 'Access Point',
                'mobile-menu-switch-small': 'Switch Small Business',
                'mobile-menu-switch-catalyst': 'Switch Catalyst',
                'mobile-menu-meraki': 'Cisco Meraki',
                'mobile-menu-nexus': 'Cisco Nexus',
                'mobile-menu-routers': 'Routers',
                'mobile-menu-phones': 'Cisco Phones',
                'mobile-menu-transceiver': 'Fiber Module/Transceiver',
                'mobile-menu-accessories': 'Accessories',
                'mobile-menu-switch-industrial': 'Switch Industrial',
                
                // Overlay de búsqueda
                'search-placeholder': 'Search products, brands or codes...',
                'search-button': 'Search',
                'search-clear': 'Clear',
                'search-close': 'Close search',
                
                // Navegación de marca
                'menu-fiber-cables': 'Fiber Cables',
                'menu-patch-cords': 'Patch cords /pigtails',
                'menu-tray': 'Tray',
                'menu-splices': 'Splices',
                
                // Breadcrumb
                'breadcrumb-home': 'Home',
                'breadcrumb-datatronix': 'Datatronix',
                'breadcrumb-tray-network': 'Network Tray',
                'breadcrumb-product-title': 'Rackmount fiber optic tray — Datatronix — Code CPPR1-01-X1-UL',
                
                // Sidebar de marcas
                'sidebar-brands-title': 'Our Brands',
                'sidebar-more-brands': 'View more brands',
                'sidebar-less-brands': 'View less brands',
                
                // Contenido principal
                'main-title': 'Fiber Tray',
                'main-description': 'Rackmount fiber tray 1RU patch panel fiber with sliding tray for 24 SC ports up to 48 LC fibers brand Datatronix CPPR1-02-X1-UL.',
                'zoom-badge': 'Zoom',
                'product-view': 'Product view',
                'views-count': 'views',
                'high-resolution': 'High resolution',
                'zoom-available': 'Zoom available',
                
                // Panel de precio
                'in-stock': 'In stock available',
                'buy-now': 'Buy now',
                
                // Pestañas
                'tab-product': 'Product',
                'tab-images': 'Images',
                'tab-downloads': 'Downloads',
                
                // Galería de imágenes
                'gallery-title': 'Image Gallery',
                'img-front': 'Front view',
                'img-front-large': 'Front view enlarged',
                'img-back': 'Rear view',
                'main-image-alt': 'Main product image',
                
                // Descargas
                'downloads-title': 'Available Downloads',
                'download-datasheet': 'Datasheet',
                'download-datasheet-desc': 'Detailed technical specifications',
                'download-manual': 'User Manual',
                'download-manual-desc': 'Complete installation and configuration guide',
                'download-specs': 'Specifications',
                'download-specs-desc': 'Detailed technical specifications',
                'download-button': 'Download',
                
                // Secciones desplegables
                'dimensions': 'Dimensions',
                'capacity': 'Capacity',
                'adapter-compatibility': 'Adapter Compatibility',
                'cable-types': 'Supported Cable Types',
                'construction': 'Construction',
                'cable-entries': 'Cable Entries',
                'standards': 'Standards',
                'view-details': 'View details',
                
                // Detalles de dimensiones
                'depth': 'Depth:',
                'width': 'Width:',
                'height': 'Height:',
                'rack-units': 'Rack units:',
                
                // Detalles de capacidad
                'max-capacity': 'Maximum capacity:',
                'up-to-24-adapters': 'Up to 24 adapters',
                'up-to-48-fibers': 'Up to 48 fibers using LC duplex',
                
                // Compatibilidad
                'sc-simplex': 'SC simplex',
                'lc-duplex': 'LC duplex',
                'e2000': 'E2000',
                
                // Tipos de cables
                'loose-tube': 'Loose tube cable',
                'tight-buffered': 'Tight buffered cable',
                'armored-cable': 'Armored cable with steel tape',
                'pre-terminated': 'Pre-terminated cables',
                
                // Construcción
                'material-steel': 'Material: steel',
                'labeled-ports': 'Individually labeled ports',
                'sliding-mechanism': 'Sliding mechanism for easy installation and maintenance',
                
                // Entradas de cable
                'cable-entries-desc': 'Up to 4 cable entries for different fiber types',
                
                // Normativas
                'rohs': 'RoHS',
                'reach': 'REACH',
                'svhc': 'SvHC',
                
                // Sidebar de lista de precios
                'price-list-title': 'Price Lists',
                'price-search-placeholder': 'Search brand...',
                'price-list-amp': 'AMP Price List',
                'price-list-amphenol': 'Amphenol Price List',
                'price-list-andrew': 'Andrew Price List',
                'price-list-apc': 'APC Price List',
                'price-list-cisco': 'CISCO Price List',
                'price-list-datatronix': 'Datatronix Price List',
                'price-list-dlink': 'D-Link Price List',
                'price-list-dixon': 'Dixon Price List',
                'price-list-energit': 'Energit Price List',
                'price-list-fiber': 'Fiber Price List',
                'price-list-hp': 'HP Price List',
                'price-list-mikrotik': 'Mikrotik Price List',
                'price-list-nexxt': 'Nexxt Solutions Price List',
                'price-list-panduit': 'Panduit Price List',
                'price-list-siemon': 'Siemon Price List',
                'price-list-teldor': 'Teldor Price List',
                'price-list-trendnet': 'TRENDnet Price List',
                'price-list-ubiquiti': 'Ubiquiti Price List',
                
                // Sección de productos relacionados
                'also-available': 'Also Available in Stock',
                'view-product': 'View Product',
                
                // Productos relacionados
                'product-1-title': 'PLASTIC BLANK CAPS SC SIMPLEX DATATRONIX',
                'product-1-desc': 'plastic blind caps for SC simplex - LC dublex adapters DATATRONIX brand',
                'product-2-title': 'SC DUPLEX BLANK CAPS DATATRONIX',
                'product-2-desc': 'SC duplex plastic blind caps for SC duplex adapters DATATRONIX brand',
                'product-3-title': 'FIBER MANAGEMENT SPOOL DATATRONIX',
                'product-3-desc': 'Red fiber optic management spool DATATRONIX brand',
                'product-4-title': 'FUSION TRAY DATATRONIX',
                'product-4-desc': 'Red fiber optic fusion tray for tray DATATRONIX brand',
                'product-5-title': 'FTTH DROP 1 STRAND DATATRONIX',
                'product-5-desc': '2,000 meter coil of FTTH single-mode DROP cable 1 strand 9/125 um DATATRONIX brand',
                'product-6-title': 'FTTH DROP 2 STRANDS DATATRONIX',
                'product-6-desc': '2,000 meter coil of FTTH single-mode DROP cable 2 strands 9/125 um with blue CMR jacket DATATRONIX brand',
                'product-7-title': 'SC OPTICAL CONNECTOR DATATRONIX',
                'product-7-desc': 'SC single-mode optical connector for fiber optic DATATRONIX brand',
                'product-8-title': 'SC PATCH CORD CABLE DATATRONIX',
                'product-8-desc': 'SC-SC single-mode fiber optic patch cord cable 3 meters DATATRONIX brand',
                
                // Footer
                'footer-description': 'Network leaders with 15+ years of experience.',
                'footer-products': 'Products',
                'footer-equipment': 'Equipment',
                'footer-services': 'Services',
                'footer-contact': 'Contact',
                'footer-switches': 'Switches',
                'footer-routers': 'Routers',
                'footer-access-points': 'Access Points',
                'footer-fiber-optic': 'Fiber Optic',
                'footer-technical-support': 'Technical Support',
                'footer-installation': 'Installation',
                'footer-consulting': 'Consulting',
                'footer-maintenance': 'Maintenance',
                'footer-connected': 'Connected',
                'footer-newsletter-desc': 'Receive exclusive offers.',
                'footer-email-placeholder': 'your@email.com',
                'footer-subscribe': 'Subscribe',
                'footer-copyright': 'DS3 Comunicaciones. All rights reserved.',
                'footer-privacy': 'Privacy Policy',
                'footer-terms': 'Terms',
                'footer-support': 'Technical Support',
                'footer-business-hours': 'Mon-Fri 9:00-18:00',
                'footer-email': 'Email',
                'footer-media-converters': 'Media Converters',
                'mobile-menu-access-points': 'Access points',
                
                // Lista de precios
                'price-list-title': 'Price List',
                'price-list-description': 'High quality fiber optic products - Cables, couplers, pigtail, patch cords and more',
                'category-cable-monomodo': 'SINGLE MODE CABLE',
                'category-cable-multimodo-om3': 'MULTIMODE OM3 CABLE',
                'category-cable-multimodo-om4': 'MULTIMODE OM4 CABLE',
                'category-bandeja-fo': 'FO TRAY',
                'category-cajas-riel-din': 'DIN RAIL BOXES',
                'category-acopladores-monomodo': 'SINGLE MODE COUPLERS',
                'category-acopladores-multimodo': 'MULTIMODE COUPLERS',
                'category-pigtail-monomodo': 'SINGLE MODE PIGTAIL',
                'category-pigtail-multimodo': 'MULTIMODE PIGTAIL',
                'category-patch-cord-monomodo': 'SINGLE MODE PATCH CORD',
                'category-patch-cord-multimodo': 'MULTIMODE PATCH CORD',
                'category-cable-drop-ftth': 'FTTH DROP CABLE',
                'category-mufa-fo': 'FO MUFA',
                'category-acopladores-multimodo': 'MULTIMODE COUPLERS',
                'mobile-menu-categories': 'Categories',
                'nav-home': 'Home',
                'button-quote': 'Quote',
                'button-request-quote': 'Request Quote',
                
                // Productos - Títulos y descripciones
                'product-fc-lt-91-12': 'FC-LT-91-12',
                'desc-fc-lt-91-12': 'Meters of Single mode fiber optic cable (9/125um) 12 fibers with dielectric armor for ducts, indoor/outdoor, LSZH jacket, DATATRONIX brand',
                'product-fc-lt-91-24': 'FC-LT-91-24',
                'desc-fc-lt-91-24': 'Meters of Single mode fiber optic cable (9/125um) 24 fibers with dielectric armor for ducts, indoor/outdoor, LSZH jacket, DATATRONIX brand',
                'product-fc-lt-31-06': 'FC-LT-31-06',
                'desc-fc-lt-31-06': 'Meters of Multimode OM3 fiber optic cable 06 fibers, LSZH jacket, for ducts, DATATRONIX brand',
                'product-fc-lt-41-06': 'FC-LT-41-06',
                'desc-fc-lt-41-06': 'Meters of Multimode OM4 fiber optic cable 06 fibers with dielectric armor for ducts, indoor/outdoor, LSZH jacket, DATATRONIX brand',
                'product-cppr1-02-x1-ul': 'CPPR1-02-X1-UL',
                'desc-cppr1-02-x1-ul': '1RU Rackable Sliding Tray for 24 LC-SC ports, Includes 01 24-fiber fusion tray, 02 cable glands, 04 cage nuts and ties (without couplers), DATATRONIX brand',
                'product-din-fb-sc-12-ul': 'DIN-FB-SC-12-UL',
                'desc-din-fb-sc-12-ul': 'DIN-RAIL mounting box for 6 SC Duplex adapters, empty, (without couplers), DATATRONIX brand',
                'product-dem1-48': 'DEM1-48',
                'desc-dem1-48': 'Horizontal fiber optic splice closure for 48 fibers, hermetic seal IP68, DATATRONIX brand',
                'product-cad-02-9-2-25': 'CAD-02-9-2/25',
                'desc-cad-02-9-2-25': 'Single mode SC duplex coupler, blue, DATATRONIX brand'
            }
        };
        
        this.init();
    }
    
    init() {
        // Apply saved language on load
        this.applyLanguage(this.currentLanguage);
        
        // Update language button display
        this.updateLanguageButton();
        
        // Add change listener for language preference
        window.addEventListener('storage', (e) => {
            if (e.key === 'selectedLanguage') {
                this.currentLanguage = e.newValue || 'es';
                this.applyLanguage(this.currentLanguage);
                this.updateLanguageButton();
            }
        });
    }
    
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('selectedLanguage', lang);
            this.applyLanguage(lang);
            this.updateLanguageButton();
            
            // Update HTML lang attribute
            document.documentElement.lang = lang;
            
            console.log(`Language changed to: ${lang}`);
        }
    }
    
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    
    applyLanguage(lang) {
        const translations = this.translations[lang];
        
        // Translate all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
        
        // Translate aria-labels with data-translate-aria attribute
        document.querySelectorAll('[data-translate-aria]').forEach(element => {
            const key = element.getAttribute('data-translate-aria');
            if (translations[key]) {
                element.setAttribute('aria-label', translations[key]);
            }
        });
        
        // Translate title elements
        document.querySelectorAll('[data-translate-title]').forEach(element => {
            const key = element.getAttribute('data-translate-title');
            if (translations[key]) {
                element.setAttribute('title', translations[key]);
            }
        });
        
        // Translate placeholder attributes
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[key]) {
                element.setAttribute('placeholder', translations[key]);
            }
        });
        
        // Update page title if it has data-translate attribute
        const titleElement = document.querySelector('title[data-translate]');
        if (titleElement) {
            const key = titleElement.getAttribute('data-translate');
            if (translations[key]) {
                titleElement.textContent = translations[key];
            }
        }
    }
    
    updateLanguageButton() {
        const languageButton = document.getElementById('current-language');
        if (languageButton) {
            languageButton.textContent = this.currentLanguage.toUpperCase();
        }
    }
    
    // Get translation for a specific key
    translate(key) {
        return this.translations[this.currentLanguage][key] || key;
    }
    
    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Global functions for language and currency switching
function changeLanguage(language) {
    if (window.translationSystem) {
        window.translationSystem.setLanguage(language);
    }
}

function changeCurrency(currency) {
    if (window.currencySystem) {
        window.currencySystem.setCurrency(currency);
    }
}

// Initialize the translation system when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        window.translationSystem = new TranslationSystem();
        console.log('Translation system initialized');
        console.log('Current language:', window.translationSystem.getCurrentLanguage());
    }, 100);
});
