// ============================================
// FUNCIONES DE INTERACTIVIDAD DEL SITIO
// ============================================

/**
 * Intercambia la imagen principal
 * @param {HTMLElement} element - Elemento de imagen a intercambiar
 */
let productImages = [];
let currentImageIndex = 0;

function toExchangeImage(element) {
  const mainImage = document.getElementById('img_main');
  if (!mainImage || !element) return;

  // Actualizar la imagen principal y mantener el índice
  const newSrc = element.src;
  mainImage.src = newSrc;

  // Actualizar currentImageIndex buscando en productImages
  const idx = productImages.findIndex(u => u === newSrc);
  currentImageIndex = idx >= 0 ? idx : 0;

  // Actualizar nombre de vista
  const viewNames = {
    'C9200L-24T-4G-E_front.jpg': 'Vista Frontal',
    'C9200L-24T-4G-E_front_large.jpg': 'Vista Frontal Ampliada',
    'C9200L-24T-4G-E_back.jpg': 'Vista Posterior'
  };
  const imageName = newSrc.split('/').pop();
  const currentView = document.getElementById('current-view');
  if (currentView) currentView.textContent = viewNames[imageName] || 'Vista del Producto';

  // Transición suave
  mainImage.style.transition = 'opacity 180ms ease';
  mainImage.style.opacity = '0.6';
  setTimeout(() => { mainImage.style.opacity = '1'; }, 180);
}

/**
 * Visualiza una imagen en pantalla completa
 * @param {string} imageSrc - URL de la imagen
 */
function viewImage(imageSrc) {
  // Crear modal mejorado si no existe
  if (!document.getElementById('image-modal')) {
    const modal = document.createElement('div');
    modal.id = 'image-modal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 hidden';
    modal.innerHTML = `
      <div class="relative max-w-6xl max-h-screen w-full px-6 py-6">
        <div class="modal-inner relative mx-auto bg-transparent max-h-[85vh] flex items-center justify-center">
          <img id="modal-image" src="" alt="Imagen ampliada" class="modal-img max-h-[75vh] max-w-[85%] object-contain select-none" />
        </div>
        <button id="modal-close" class="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors" aria-label="Cerrar imagen"><i class="fas fa-times"></i></button>
        <button id="modal-prev" class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors bg-black/30 rounded-full p-2" aria-label="Anterior"><i class="fas fa-chevron-left"></i></button>
        <button id="modal-next" class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors bg-black/30 rounded-full p-2" aria-label="Siguiente"><i class="fas fa-chevron-right"></i></button>
        <div class="absolute bottom-6 right-6 flex gap-2">
          <button id="zoom-out" class="px-3 py-2 bg-black/60 text-white rounded hover:bg-black/80 transition-colors text-sm font-medium">-</button>
          <button id="zoom-in" class="px-3 py-2 bg-black/60 text-white rounded hover:bg-black/80 transition-colors text-sm font-medium">+</button>
          <button id="zoom-reset" class="px-3 py-2 bg-black/60 text-white rounded hover:bg-black/80 transition-colors text-sm font-medium">Reset</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Attach event listeners after append
    document.getElementById('modal-close').addEventListener('click', closeImageModal);
    document.getElementById('modal-prev').addEventListener('click', previousImage);
    document.getElementById('modal-next').addEventListener('click', nextImage);
    document.getElementById('zoom-in').addEventListener('click', () => changeZoom(1.2));
    document.getElementById('zoom-out').addEventListener('click', () => changeZoom(1/1.2));
    document.getElementById('zoom-reset').addEventListener('click', resetZoom);

    // Wheel zoom & drag
    const img = document.getElementById('modal-image');
    let scale = 1, originX = 0, originY = 0, isPanning = false, startX = 0, startY = 0;

    function applyTransform() {
      // Solo aplicar transform si es necesario
      if (scale !== 1 || originX !== 0 || originY !== 0) {
        img.style.transform = `translate(${originX}px, ${originY}px) scale(${scale})`;
      } else {
        img.style.transform = 'none';
      }
    }

    function changeZoom(factor) { 
      scale = Math.min(6, Math.max(0.5, scale * factor)); 
      applyTransform(); 
    }
    
    function resetZoom() { 
      scale = 1; 
      originX = 0; 
      originY = 0; 
      applyTransform(); 
    }

    img.addEventListener('wheel', function(e) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 1/1.12 : 1.12;
      changeZoom(delta);
    });

    img.addEventListener('mousedown', function(e) {
      if (scale <= 1) return;
      e.preventDefault(); // Prevenir comportamiento por defecto
      isPanning = true; 
      startX = e.clientX - originX; 
      startY = e.clientY - originY;
      img.style.cursor = 'grabbing';
    });
    
    // Solo escuchar mousemove cuando el modal está visible
    function handleMouseMove(e) {
      if (!isPanning) return;
      e.preventDefault();
      originX = e.clientX - startX; 
      originY = e.clientY - startY; 
      applyTransform();
    }
    
    function handleMouseUp() {
      isPanning = false; 
      if (img) img.style.cursor = 'grab';
    }
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Limpiar eventos cuando se cierra el modal
    const originalCloseImageModal = closeImageModal;
    closeImageModal = function() {
      // Resetear variables
      scale = 1;
      originX = 0;
      originY = 0;
      isPanning = false;
      if (img) {
        img.style.transform = 'none';
        img.style.cursor = 'grab';
      }
      originalCloseImageModal();
    };
  }

  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const prevBtn = document.getElementById('modal-prev');
  const nextBtn = document.getElementById('modal-next');
  
  // set image and show
  modalImage.src = imageSrc;
  modal.classList.remove('hidden');
  
  // Mostrar/ocultar flechas según cantidad de imágenes
  if (productImages && productImages.length > 1) {
    prevBtn.style.display = 'flex';
    nextBtn.style.display = 'flex';
  } else {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  }
  
  // reset zoom/transform
  modalImage.style.transform = '';
  modalImage.style.cursor = 'grab';
  
  // set current index
  const idx = productImages.findIndex(u => u === imageSrc);
  currentImageIndex = idx >= 0 ? idx : 0;
}

/**
 * Cierra el modal de imagen
 */
function closeImageModal() {
  const modal = document.getElementById('image-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

/**
 * Navega a la imagen anterior
 */
function previousImage() {
  if (!productImages || productImages.length <= 1) return;
  currentImageIndex = (currentImageIndex - 1 + productImages.length) % productImages.length;
  const modalImage = document.getElementById('modal-image');
  if (modalImage) {
    modalImage.src = productImages[currentImageIndex];
    // Resetear zoom al cambiar de imagen
    resetZoom();
  }
}

/**
 * Navega a la siguiente imagen
 */
function nextImage() {
  if (!productImages || productImages.length <= 1) return;
  currentImageIndex = (currentImageIndex + 1) % productImages.length;
  const modalImage = document.getElementById('modal-image');
  if (modalImage) {
    modalImage.src = productImages[currentImageIndex];
    // Resetear zoom al cambiar de imagen
    resetZoom();
  }
}

// ============================================
// INICIALIZACIÓN Y EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Cerrar modal con ESC y navegación con flechas
  document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('image-modal');
    if (!modal || modal.classList.contains('hidden')) return;
    
    if (event.key === 'Escape') {
      closeImageModal();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      previousImage();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      nextImage();
    }
  });

  // Control de pestañas de productos e imágenes
  const productTab = document.getElementById('product-tab');
  const imagesTab = document.getElementById('images-tab');
  const downloadsTab = document.getElementById('downloads-tab');
  const informationSection = document.getElementById('information-section');
  const imagesSection = document.getElementById('images-section');
  const downloadsSection = document.getElementById('downloads-section');

  if (productTab && imagesTab && downloadsTab) {
    // Función auxiliar para actualizar estilos de botones
    function updateTabStyles(activeTab) {
      [productTab, imagesTab, downloadsTab].forEach(tab => {
        tab.classList.remove('bg-blue-600', 'text-white');
        tab.classList.add('bg-gray-100', 'text-gray-700');
      });
      activeTab.classList.add('bg-blue-600', 'text-white');
      activeTab.classList.remove('bg-gray-100', 'text-gray-700');
    }

    productTab.addEventListener('click', function() {
      if (informationSection) informationSection.classList.remove('hidden');
      if (imagesSection) imagesSection.classList.add('hidden');
      if (downloadsSection) downloadsSection.classList.add('hidden');
      updateTabStyles(productTab);
    });

    imagesTab.addEventListener('click', function() {
      if (informationSection) informationSection.classList.add('hidden');
      if (imagesSection) imagesSection.classList.remove('hidden');
      if (downloadsSection) downloadsSection.classList.add('hidden');
      updateTabStyles(imagesTab);
    });

    downloadsTab.addEventListener('click', function() {
      if (informationSection) informationSection.classList.add('hidden');
      if (imagesSection) imagesSection.classList.add('hidden');
      if (downloadsSection) downloadsSection.classList.remove('hidden');
      updateTabStyles(downloadsTab);
    });
  }

  // Animaciones de scroll
  const elements = document.querySelectorAll('[class*="fade-in"]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });

  // Smooth scroll para anclas internas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Toggle 'Ver más marcas' - muestra/oculta marcas adicionales
  const verMasBtn = document.getElementById('ver-mas-marcas');
  const moreBrands = document.getElementById('more-brands');
  if (verMasBtn && moreBrands) {
    verMasBtn.addEventListener('click', function(e) {
      e.preventDefault();
      moreBrands.classList.toggle('hidden');
      if (moreBrands.classList.contains('hidden')) {
        verMasBtn.innerHTML = '<i class="fas fa-ellipsis-h mr-2"></i>Ver más marcas';
      } else {
        verMasBtn.innerHTML = '<i class="fas fa-angle-up mr-2"></i>Ver menos marcas';
        // Asegurar que el usuario vea las marcas expandidas en pantallas pequeñas
        moreBrands.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // Back to top button functionality
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Ajustar año actual en el footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Fallback de logos: intenta PNG -> JPG -> GIF -> SVG y usa el primero que cargue
  (function applyBrandLogoFallback() {
    const brandImgs = document.querySelectorAll('img[src*="icons/brands/"]');
    if (!brandImgs || brandImgs.length === 0) return;

    brandImgs.forEach(img => {
      const original = img.getAttribute('src') || '';
      // base sin extensión
      const base = original.replace(/\.[^/.]+$/, '');
      const exts = ['.png', '.jpg', '.gif', '.svg'];
      // Prioridad: png, jpg, gif, svg
      const candidates = exts.map(e => base + e);

      let i = 0;
      (function tryNext() {
        if (i >= candidates.length) return;
        const testUrl = candidates[i];
        // Evitar reintentar la misma URL si ya está asignada
        if (img.src && img.src.endsWith(testUrl.split('/').pop())) {
          i++;
          tryNext();
          return;
        }

        const tester = new Image();
        let called = false;
        tester.onload = function() {
          if (called) return; called = true;
          img.src = testUrl;
        };
        tester.onerror = function() {
          if (called) return; called = true;
          i++; tryNext();
        };
        // pequeña protección por si el onerror no dispara rápidamente
        setTimeout(() => {
          if (!called) { called = true; i++; tryNext(); }
        }, 3000);
        tester.src = testUrl;
      })();
    });
  })();

  // Inicializar lista de imágenes del producto (miniaturas)
  (function collectProductImages(){
    const thumbContainer = document.querySelectorAll('.thumbnail-wrapper img');
    if (!thumbContainer || thumbContainer.length === 0) return;
    productImages = Array.from(thumbContainer).map(img => img.src);
    // Añadir la imagen principal al inicio si no está
    const main = document.getElementById('img_main');
    if (main && !productImages.includes(main.src)) productImages.unshift(main.src);
    // Establecer currentImageIndex en 0
    currentImageIndex = 0;
  })();
});

// ============================================
// UTILIDADES Y FUNCIONES AUXILIARES
// ============================================

/**
 * Copia texto al portapapeles
 * @param {string} text - Texto a copiar
 */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Texto copiado al portapapeles');
  });
}

/**
 * Genera un tooltip
 * @param {HTMLElement} element - Elemento para mostrar tooltip
 * @param {string} message - Mensaje del tooltip
 */
function showTooltip(element, message) {
  const tooltip = document.createElement('div');
  tooltip.className = 'absolute bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300';
  tooltip.textContent = message;
  element.appendChild(tooltip);
  
  setTimeout(() => {
    tooltip.classList.remove('opacity-0');
  }, 10);

  setTimeout(() => {
    tooltip.classList.add('opacity-0');
    setTimeout(() => tooltip.remove(), 300);
  }, 2000);
}

/**
 * Valida un email
 * @param {string} email - Email a validar
 * @returns {boolean}
 */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
