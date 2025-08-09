// --- بيانات الأصناف بمضاعفة اللغات ---
const menuData = [];

// --- أرقام الواتساب (محدثة) ---
const WHATSAPP_ORDER_NUMBER = "+966508813919"; // رقم الطلبات
const WHATSAPP_INQUIRY_NUMBER = "+966557109752"; // رقم الاستفسارات

// --- QR Code configuration ---
const QR_MENU_LINK = "https://your-restaurant-website.com/menu"; // استبدل هذا بالرابط الفعلي لقائمة مطعمك عند النشر

// عناصر DOM
const menuContainer = document.getElementById(\'menu-container\');
const categoryFilter = document.getElementById(\'category-filter\');
const searchInput = document.getElementById(\'search-input\');
const cartIcon = document.getElementById(\'cart-icon\');
const cartSidebar = document.getElementById(\'cart-sidebar\');
const closeCartBtn = document.getElementById(\'close-cart-btn\');
const sidebarOverlay = document.getElementById(\'sidebar-overlay\');
const cartItemsContainer = document.getElementById(\'cart-items\');
const cartCounter = document.getElementById(\'cart-counter\');
const cartTotal = document.getElementById(\'cart-total\');
const checkoutBtn = document.getElementById(\'checkout-btn\');
const productModal = document.getElementById(\'product-modal\');
const modalImg = document.getElementById(\'modal-img\');
const modalName = document.getElementById(\'modal-name\');
const modalDesc = document.getElementById(\'modal-desc\');
const modalPrice = document.getElementById(\'modal-price\');
const modalRating = document.querySelector(\'.modal-rating\');
const modalRatingCount = document.getElementById(\'modal-rating-count\');
const modalAddToCartBtn = document.getElementById(\'modal-add-to-cart-btn\');
const modalNotesInput = document.getElementById(\'modal-notes-input\');
const toastContainer = document.getElementById(\'toast-container\');
const clearCartBtn = document.getElementById(\'clear-cart-btn\');
const whatsappInquiryBtn = document.getElementById(\'whatsapp-inquiry\');
const htmlElement = document.documentElement;
const languageButtons = document.querySelectorAll(\'.language-btn\');
const qrMenuBtn = document.getElementById(\'qr-menu-btn\');
const qrMenuModal = document.getElementById(\'qr-menu-modal\');
const qrCodeContainer = document.getElementById(\'qrcode-container\');
const qrModalCloseBtn = document.getElementById(\'close-qr-modal-btn\');
const qrLinkInfo = document.querySelector(\'.qr-link-info\');
const emptyCartMessage = document.querySelector(\'.empty-cart-message\');

// --- عناصر الصوت ---
const addToCartSound = document.getElementById(\'add-to-cart-sound\');
const removeFromCartSound = document.getElementById(\'remove-from-cart-sound\');
const checkoutSuccessSound = document.getElementById(\'checkout-success-sound\');
const clearCartSound = document.getElementById(\'clear-cart-sound\');

let currentLanguage = \'ar\'; // اللغة الحالية، افتراضيًا العربية
let cart = []; // مصفوفة لتخزين عناصر السلة
let debounceTimer; // لتأخير البحث

// --- دوال الأمان: التحقق وتطهير المدخلات ---

/**
 * تطهر المدخلات عن طريق استبدال الأحرف الخطرة بـ HTML entities
 * وتمنع استدعاءات JavaScript المباشرة.
 * @param {string} input - النص المراد تطهيره.
 * @returns {string} - النص المطهر أو قيمة خاصة إذا كان غير آمن.
 */
function sanitizeInput(input) {
    if (typeof input !== \'string\') {
        return input; // إذا لم يكن نصًا، اتركه كما هو
    }

    const dangerousChars = /[<>&`"\']/g;
    if (dangerousChars.test(input)) {
        // تطهير الأحرف الخطرة
        return input.replace(dangerousChars, (match) => {
            switch (match) {
                case \'<\': return \'&lt;\';
                case \'>\': return \'&gt;\';
                case \'&\': return \'&amp;\';
                case \'"\': return \'&quot;\';
                case "\'": return \'&#x27;\';
                case \'`\': return \'&#x60;\';
                default: return match;
            }
        });
    }

    // منع استدعاءات JavaScript مباشرة (مثال بسيط)
    if (input.toLowerCase().startsWith(\'javascript:\')) {
        return \'invalid_input_script\'; // قيمة خاصة لرفض المدخلات
    }

    return input; // إذا كان النص آمنًا، ارجعه كما هو
}

// --- دالة لتشغيل الأصوات ---
function playSound(audioElement) {
    if (audioElement) {
        audioElement.currentTime = 0; // إعادة تشغيل الصوت من البداية
        audioElement.play().catch(error => {
            console.warn("Audio playback failed:", error);
        });
    }
}

// --- وظيفة لتبديل اللغة ---
function switchLanguage(lang) {
    currentLanguage = lang;
    htmlElement.setAttribute(\'lang\', lang);
    htmlElement.setAttribute(\'dir\', lang === \'ar\' ? \'rtl\' : \'ltr\');
    updateUITexts();
    displayMenuItems(); // إعادة عرض الأصناف لترجمة أسمائها وفئاتها
    updateCart(); // لتحديث النصوص في السلة
}

// --- وظيفة لتحديث نصوص واجهة المستخدم ---
function updateUITexts() {
    const uniqueCategories = [...new Set(menuData.map(item => item.category))];
    const filterOptionsData = [
        { value: \'all\', ar: \'الكل\', en: \'All\' },
        ...uniqueCategories.map(cat => ({
            value: cat,
            ar: cat,
            en: translateCategory(cat)
        }))
    ];

    categoryFilter.innerHTML = \'\';
    filterOptionsData.forEach(option => {
        const opt = document.createElement(\'option\');
        opt.value = option.value;
        opt.textContent = currentLanguage === \'ar\' ? option.ar : option.en;
        categoryFilter.appendChild(opt);
    });

    const cartHeader = cartSidebar.querySelector(\'.cart-header h3\');
    if (cartHeader) cartHeader.textContent = currentLanguage === \'ar\' ? \'سلة الطلبات\' : \'Your Cart\';

    if (clearCartBtn) clearCartBtn.textContent = currentLanguage === \'ar\' ? \'حذف الكل\' : \'Clear All\';

    const orderTypeTitle = cartSidebar.querySelector(\'.order-type-selection h4\');
    if (orderTypeTitle) orderTypeTitle.textContent = currentLanguage === \'ar\' ? \'اختر نوع الطلب:\' : \'Choose Order Type:\';

    const radioLabels = cartSidebar.querySelectorAll(\'.radio-label span\');
    radioLabels.forEach(label => {
        const input = label.parentElement.querySelector(\'input[name="orderType"]\');
        if (input) {
            if (input.id === \'orderTypeTable\') {
                label.textContent = currentLanguage === \'ar\' ? \'على الطاولة\' : \'On the Table\';
            } else if (input.id === \'orderTypePickup\') {
                label.textContent = currentLanguage === \'ar\' ? \'استلام من الفرع\' : \'Pickup from Branch\';
            }
        }
    });

    const totalLabel = cartSidebar.querySelector(\'.total span:first-child\');
    if (totalLabel) totalLabel.textContent = currentLanguage === \'ar\' ? \'الإجمالي:\' : \'Total:\';

    if (checkoutBtn) checkoutBtn.textContent = currentLanguage === \'ar\' ? \'إتمام الطلب عبر واتساب\' : \'Checkout via WhatsApp\';

    const modalNotesTitle = productModal.querySelector(\'.modal-notes h4\');
    if (modalNotesTitle) modalNotesTitle.textContent = currentLanguage === \'ar\' ? \'ملاحظات خاصة بالطلب:\' : \'Special Notes for Order:\';
    modalNotesInput.placeholder = currentLanguage === \'ar\' ? \'مثال: بدون بصل، زيادة شطة...\' : \'Example: No onions, extra chili...\';
    if (modalAddToCartBtn) modalAddToCartBtn.textContent = currentLanguage === \'ar\' ? \'إضافة إلى السلة\' : \'Add to Cart\';

    searchInput.placeholder = currentLanguage === \'ar\' ? \'ابحث عن طبق...\' : \'Search for a dish...\';
    if (whatsappInquiryBtn) whatsappInquiryBtn.title = currentLanguage === \'ar\' ? \'استفسارات عبر واتساب\' : \'Inquiries via WhatsApp\';

    if (qrMenuModal) {
        qrMenuModal.querySelector(\'h2\').textContent = currentLanguage === \'ar\' ? \'مسح القائمة\' : \'Scan Menu\';
        qrMenuModal.querySelector(\'.qr-instructions\').textContent = currentLanguage === \'ar\'
            ? \'امسح الرمز لطلب أو استعراض قائمة مطعم ميراتا.\'
            : \'Scan the code to order or view Mirata Restaurant menu.\';
    }
    emptyCartMessage.textContent = currentLanguage === \'ar\' ? \'سلتك فارغة.\' : \'Your cart is empty.\';

}

// --- وظيفة لإنشاء نجوم التقييم ---
function renderStars(rating, element, countElement = null) {
    element.innerHTML = \'\';
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement(\'i\');
        star.classList.add(\'fas\', \'fa-star\');
        if (i <= rating) {
            star.classList.add(\'filled\');
        }
        element.appendChild(star);
    }
    if (countElement) {
        const itemId = parseInt(modalAddToCartBtn.dataset.id); // يجب أن يكون الزر داخل المودال
        const itemData = menuData.find(data => data.id === itemId);
        if (itemData) {
            countElement.textContent = `(${itemData.ratingCount})`;
        }
    }
}

// --- تحديث شكل النجوم لجميع العناصر المعروضة ---
function updateAllRatings() {
    document.querySelectorAll(\'.menu-item\').forEach(itemElement => {
        const ratingValue = parseInt(itemElement.dataset.rating) || 0;
        const ratingContainer = itemElement.querySelector(\'.rating\');
        if (ratingContainer) {
            renderStars(ratingValue, ratingContainer);
        }
    });

    // إذا كان المودال مفتوحًا، قم بتحديث نجومه أيضًا
    if (productModal.style.display === \'flex\') {
        const itemId = parseInt(modalAddToCartBtn.dataset.id);
        const itemData = menuData.find(data => data.id === itemId);
        if (itemData) {
            renderStars(itemData.rating, modalRating, modalRatingCount);
        }
    }
}

// --- وظيفة لإنشاء عناصر المنيو ديناميكيًا ---
function createMenuItemElement(item) {
    const menuItemDiv = document.createElement(\'div\');
    menuItemDiv.classList.add(\'menu-item\');
    menuItemDiv.setAttribute(\'data-id\', item.id);
    menuItemDiv.setAttribute(\'data-category\', item.category);
    menuItemDiv.setAttribute(\'data-rating\', item.rating);

    const categoryBadge = document.createElement(\'div\');
    categoryBadge.classList.add(\'menu-item-category-badge\');
    categoryBadge.textContent = currentLanguage === \'ar\' ? item.category : translateCategory(item.category);

    const img = document.createElement(\'img\');
    img.src = item.image;
    img.alt = currentLanguage === \'ar\' ? item.name_ar : item.name_en;
    img.title = currentLanguage === \'ar\' ? item.name_ar : item.name_en;
    img.loading = \'lazy\'; // التحميل البطيء للصور

    const itemContent = document.createElement(\'div\');
    itemContent.classList.add(\'menu-item-content\');
    itemContent.innerHTML = `
        <h3>${currentLanguage === \'ar\' ? item.name_ar : item.name_en}</h3>
        <p class="price">${item.price.toFixed(2)} ${currentLanguage === \'ar\' ? \'ريال\' : \'SAR\'}</p>
        <div class="rating">
            <!-- Stars will be rendered by JS -->
        </div>
        <button class="add-to-cart-btn" data-id="${item.id}">${currentLanguage === \'ar\' ? \'إضافة إلى السلة\' : \'Add to Cart\'}</button>
    `;

    menuItemDiv.appendChild(categoryBadge);
    menuItemDiv.appendChild(img);
    menuItemDiv.appendChild(itemContent);

    const addToCartBtn = menuItemDiv.querySelector(\'.add-to-cart-btn\');
    addToCartBtn.addEventListener(\'click\', (event) => {
        event.stopPropagation(); // منع الحدث من الوصول إلى عنصر المنيو
        addToCart(item.id);
        showToast(`${currentLanguage === \'ar\' ? item.name_ar : item.name_en} ${currentLanguage === \'ar\' ? \'أضيف إلى سلتك!\' : \'added to your cart!\'}`, \'success\');
        playSound(addToCartSound);
    });

    menuItemDiv.addEventListener(\'click\', () => {
        openProductModal(item);
    });

    return menuItemDiv;
}

// --- وظيفة لعرض عناصر المنيو ---
function displayMenuItems(filter = \'all\', searchTerm = \'\') {
    menuContainer.innerHTML = \'\'; // مسح العناصر الموجودة
    const filteredItems = menuData.filter(item => {
        const matchesCategory = filter === \'all\' || item.category === filter;
        const matchesSearch = currentLanguage === \'ar\'
            ? item.name_ar.toLowerCase().includes(searchTerm.toLowerCase())
            : item.name_en.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `<p class="no-items-message">${currentLanguage === \'ar\' ? \'لا توجد أصناف مطابقة لمعايير البحث.\' : \'No items matching your search criteria.\'}</p>`;
    } else {
        filteredItems.forEach(item => {
            menuContainer.appendChild(createMenuItemElement(item));
        });
    }
    updateAllRatings(); // تحديث النجوم بعد عرض العناصر
}

// --- وظيفة لترجمة الفئات (إذا كانت الفئات نفسها باللغة العربية في البيانات) ---
function translateCategory(category) {
    // هذه دالة وهمية، في تطبيق حقيقي ستحتاج إلى خريطة ترجمة أو API
    switch (category) {
        case \'مشاوي\': return \'Grills\';
        case \'شوربات\': return \'Soups\';
        case \'مقبلات\': return \'Appetizers\';
        case \'برياني\': return \'Biryani\';
        case \'مشروبات\': return \'Drinks\';
        default: return category;
    }
}

// --- وظائف السلة ---

function addToCart(itemId, notes = \'\') {
    const item = menuData.find(i => i.id === itemId);
    if (item) {
        const existingCartItemIndex = cart.findIndex(cartItem => cartItem.id === itemId && cartItem.notes === notes);
        if (existingCartItemIndex > -1) {
            cart[existingCartItemIndex].quantity++;
        } else {
            cart.push({ ...item, quantity: 1, notes: notes });
        }
        updateCart();
        playSound(addToCartSound);
    }
}

function removeFromCart(itemId, notes = \'\') {
    const itemIndex = cart.findIndex(cartItem => cartItem.id === itemId && cartItem.notes === notes);
    if (itemIndex > -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity--;
        } else {
            cart.splice(itemIndex, 1);
        }
        updateCart();
        playSound(removeFromCartSound);
    }
}

function clearCart() {
    cart = [];
    updateCart();
    playSound(clearCartSound);
    showToast(currentLanguage === \'ar\' ? \'تم مسح السلة بنجاح!\' : \'Cart cleared successfully!\', \'info\');
}

function updateCart() {
    cartItemsContainer.innerHTML = \'\';
    let total = 0;
    if (cart.length === 0) {
        emptyCartMessage.style.display = \'block\';
        cartItemsContainer.style.display = \'none\';
    } else {
        emptyCartMessage.style.display = \'none\';
        cartItemsContainer.style.display = \'block\';
        cart.forEach(item => {
            const cartItemDiv = document.createElement(\'div\');
            cartItemDiv.classList.add(\'cart-item\');
            cartItemDiv.innerHTML = `
                <img src="${item.image}" alt="${currentLanguage === \'ar\' ? item.name_ar : item.name_en}">
                <div class="cart-item-details">
                    <h4>${currentLanguage === \'ar\' ? item.name_ar : item.name_en}</h4>
                    <p>${item.price.toFixed(2)} ${currentLanguage === \'ar\' ? \'ريال\' : \'SAR\'}</p>
                    ${item.notes ? `<p class="cart-item-notes">${currentLanguage === \'ar\' ? \'ملاحظات:\' : \'Notes:\'} ${sanitizeInput(item.notes)}</p>` : \'\'}
                </div>
                <div class="cart-item-quantity-controls">
                    <button class="quantity-decrease" data-id="${item.id}" data-notes="${sanitizeInput(item.notes)}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-increase" data-id="${item.id}" data-notes="${sanitizeInput(item.notes)}">+</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
            total += item.price * item.quantity;
        });
    }

    cartTotal.textContent = `${total.toFixed(2)} ${currentLanguage === \'ar\' ? \'ريال\' : \'SAR\'}`;
    cartCounter.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    // إضافة المستمعين للأحداث بعد تحديث العناصر
    document.querySelectorAll(\'.quantity-decrease\').forEach(button => {
        button.onclick = (e) => {
            const id = parseInt(e.target.dataset.id);
            const notes = e.target.dataset.notes;
            removeFromCart(id, notes);
        };
    });

    document.querySelectorAll(\'.quantity-increase\').forEach(button => {
        button.onclick = (e) => {
            const id = parseInt(e.target.dataset.id);
            const notes = e.target.dataset.notes;
            addToCart(id, notes);
        };
    });

    // تحديث حالة زر مسح السلة
    if (clearCartBtn) {
        clearCartBtn.disabled = cart.length === 0;
    }
    // تحديث حالة زر إتمام الطلب
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
    }
}

function checkout() {
    if (cart.length === 0) {
        showToast(currentLanguage === \'ar\' ? \'سلتك فارغة لا يمكن إتمام الطلب!\' : \'Your cart is empty, cannot checkout!\', \'error\');
        return;
    }

    const orderType = document.querySelector(\'input[name="orderType"]:checked\').value;
    let message = currentLanguage === \'ar\' ? \'مرحباً، أود طلب الآتي:\n\n\' : \'Hello, I would like to order the following:\n\n\';
    let total = 0;

    cart.forEach(item => {
        message += `${currentLanguage === \'ar\' ? item.name_ar : item.name_en} - ${item.quantity} x ${item.price.toFixed(2)} ${currentLanguage === \'ar\' ? \'ريال\' : \'SAR\'}`;
        if (item.notes) {
            message += ` (${currentLanguage === \'ar\' ? \'ملاحظات:\' : \'Notes:\'} ${sanitizeInput(item.notes)})`;
        }
        message += \'\n\';
        total += item.price * item.quantity;
    });

    message += `\n${currentLanguage === \'ar\' ? \'الإجمالي:\' : \'Total:\'} ${total.toFixed(2)} ${currentLanguage === \'ar\' ? \'ريال\' : \'SAR\'}\n`;
    message += `\n${currentLanguage === \'ar\' ? \'نوع الطلب:\' : \'Order Type:\'} ${currentLanguage === \'ar\' ? (orderType === \'table\' ? \'على الطاولة\' : \'استلام من الفرع\') : (orderType === \'table\' ? \'On the Table\' : \'Pickup from Branch\')}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, \'_blank\');

    playSound(checkoutSuccessSound);
    clearCart(); // مسح السلة بعد إتمام الطلب
    hideCartSidebar(); // إخفاء السلة
    showToast(currentLanguage === \'ar\' ? \'تم إرسال طلبك بنجاح عبر واتساب!\' : \'Your order has been sent successfully via WhatsApp!\', \'success\');
}

// --- وظائف المودال (نافذة تفاصيل المنتج) ---
function openProductModal(item) {
    modalImg.src = item.image;
    modalImg.alt = currentLanguage === \'ar\' ? item.name_ar : item.name_en;
    modalName.textContent = currentLanguage === \'ar\' ? item.name_ar : item.name_en;
    modalDesc.textContent = currentLanguage === \'ar\' ? item.description_ar : item.description_en;
    modalPrice.textContent = `${item.price.toFixed(2)} ${currentLanguage === \'ar\' ? \'ريال\' : \'SAR\'}`;
    renderStars(item.rating, modalRating, modalRatingCount);
    modalAddToCartBtn.dataset.id = item.id; // تخزين ID العنصر في زر الإضافة للسلة
    modalNotesInput.value = \'\'; // مسح أي ملاحظات سابقة
    productModal.style.display = \'flex\';
    document.body.classList.add(\'modal-open\'); // لمنع التمرير في الخلفية
}

function closeProductModal() {
    productModal.style.display = \'none\';
    document.body.classList.remove(\'modal-open\');
}

// --- وظائف السايدبار (سلة الطلبات) ---
function showCartSidebar() {
    cartSidebar.classList.add(\'open\');
    sidebarOverlay.classList.add(\'open\');
    document.body.classList.add(\'modal-open\'); // لمنع التمرير في الخلفية
}

function hideCartSidebar() {
    cartSidebar.classList.remove(\'open\');
    sidebarOverlay.classList.remove(\'open\');
    document.body.classList.remove(\'modal-open\');
}

// --- وظائف الـ Toast (الإشعارات المنبثقة) ---
function showToast(message, type = \'info\') {
    const toast = document.createElement(\'div\');
    toast.classList.add(\'toast\', type);
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add(\'show\');
    }, 10);

    setTimeout(() => {
        toast.classList.remove(\'show\');
        toast.addEventListener(\'transitionend\', () => toast.remove());
    }, 3000);
}

// --- وظائف QR Code ---
function generateQRCode(text, elementId) {
    const qrCodeElement = document.getElementById(elementId);
    qrCodeElement.innerHTML = \'\'; // مسح أي QR سابق
    new QRCode(qrCodeElement, {
        text: text,
        width: 256,
        height: 256,
        colorDark: \'#000000\',
        colorLight: \'#ffffff\',
        correctLevel: QRCode.CorrectLevel.H
    });
}

function openQrMenuModal() {
    generateQRCode(QR_MENU_LINK, \'qrcode-container\');
    qrMenuModal.style.display = \'flex\';
    document.body.classList.add(\'modal-open\');
    qrLinkInfo.textContent = QR_MENU_LINK; // عرض الرابط تحت الـ QR
}

function closeQrMenuModal() {
    qrMenuModal.style.display = \'none\';
    document.body.classList.remove(\'modal-open\');
}

// --- المستمعون للأحداث ---
document.addEventListener(\'DOMContentLoaded\', () => {
    displayMenuItems(); // عرض جميع الأصناف عند تحميل الصفحة
    updateCart(); // تحديث السلة عند التحميل
    updateUITexts(); // تحديث نصوص الواجهة
    updateAllRatings(); // تحديث النجوم عند التحميل

    // المستمع لزر فتح السلة
    if (cartIcon) {
        cartIcon.addEventListener(\'click\', showCartSidebar);
    }

    // المستمع لزر إغلاق السلة والـ overlay
    if (closeCartBtn) {
        closeCartBtn.addEventListener(\'click\', hideCartSidebar);
    }
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener(\'click\', hideCartSidebar);
    }

    // المستمع لزر إتمام الطلب
    if (checkoutBtn) {
        checkoutBtn.addEventListener(\'click\', checkout);
    }

    // المستمع لزر مسح السلة
    if (clearCartBtn) {
        clearCartBtn.addEventListener(\'click\', clearCart);
    }

    // المستمع لزر إغلاق مودال المنتج
    if (productModal) {
        productModal.querySelector(\'.close-button\').addEventListener(\'click\', closeProductModal);
        // إغلاق المودال عند النقر خارج المحتوى
        productModal.addEventListener(\'click\', (event) => {
            if (event.target === productModal) {
                closeProductModal();
            }
        });
    }

    // المستمع لزر إضافة للسلة داخل المودال
    if (modalAddToCartBtn) {
        modalAddToCartBtn.addEventListener(\'click\', (event) => {
            const itemId = parseInt(event.target.dataset.id);
            const notes = modalNotesInput.value.trim();
            addToCart(itemId, notes);
            showToast(`${currentLanguage === \'ar\' ? menuData.find(item => item.id === itemId).name_ar : menuData.find(item => item.id === itemId).name_en} ${currentLanguage === \'ar\' ? \'أضيف إلى سلتك!\' : \'added to your cart!\'}`, \'success\');
            closeProductModal();
        });
    }

    // المستمع لتغيير الفئة
    if (categoryFilter) {
        categoryFilter.addEventListener(\'change\', (event) => {
            displayMenuItems(event.target.value, searchInput.value);
        });
    }

    // المستمع للبحث
    if (searchInput) {
        searchInput.addEventListener(\'input\', (event) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                displayMenuItems(categoryFilter.value, event.target.value);
            }, 300); // تأخير 300 ملي ثانية
        });
    }

    // المستمع لأزرار اللغة
    languageButtons.forEach(button => {
        button.addEventListener(\'click\', (event) => {
            switchLanguage(event.target.dataset.lang);
        });
    });

    // المستمع لزر واتساب للاستفسارات
    if (whatsappInquiryBtn) {
        whatsappInquiryBtn.addEventListener(\'click\', () => {
            const message = currentLanguage === \'ar\' ? \'مرحباً، لدي استفسار بخصوص مطعم ميراتا.\' : \'Hello, I have an inquiry regarding Mirata Restaurant.\';
            const whatsappUrl = `https://wa.me/${WHATSAPP_INQUIRY_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, \'_blank\');
        });
    }

    // المستمع لزر QR Code
    if (qrMenuBtn) {
        qrMenuBtn.addEventListener(\'click\', openQrMenuModal);
    }

    // المستمع لزر إغلاق مودال QR Code
    if (qrModalCloseBtn) {
        qrModalCloseBtn.addEventListener(\'click\', closeQrMenuModal);
    }
    if (qrMenuModal) {
        qrMenuModal.addEventListener(\'click\', (event) => {
            if (event.target === qrMenuModal) {
                closeQrMenuModal();
            }
        });
    }

});

// تهيئة أولية عند التحميل
updateUITexts();
displayMenuItems();
updateAllRatings();
updateCart();

