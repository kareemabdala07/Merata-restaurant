// --- بيانات الأصناف بمضاعفة اللغات ---
const menuData = [
    {
        id: 1,
        name_ar: "مشكل مشوي وسط",
        name_en: "Mixed Grill Medium",
        price: 55.00,
        category: "مشاوي",
        image: "images/مشكل_مشوي.jpg",
        description_ar: "توليفة فاخرة من أفضل المشويات لدينا: كباب لحم، كباب دجاج، دجاج تكا، وروبيان تندوري.",
        description_en: "A luxurious blend of our finest grills: Beef Kebab, Chicken Kebab, Tikka Chicken, and Tandoori Shrimp.",
        rating: 3,
        ratingCount: 15
    },
    {
        id: 2,
        name_ar: "كباب لحم",
        name_en: "Mutton Kebab",
        price: 37.00,
        category: "مشاوي",
        image: "images/كباب_لحم.jpg",
        description_ar: "أسياخ كباب لحم طازجة ومشوية على الفحم.",
        description_en: "Fresh Mutton kebab skewers grilled over charcoal.",
        rating: 4,
        ratingCount: 22
    },
    {
        id: 3,
        name_ar: "كباب دجاج",
        name_en: "Chicken Kebab",
        price: 34.00,
        category: "مشاوي",
        image: "images/كباب_دجاج.jpg",
        description_ar: "أسياخ كباب دجاج طرية ومشوية بعناية.",
        description_en: "Tender chicken kebab skewers carefully grilled.",
        rating: 3,
        ratingCount: 18
    },
    {
        id: 4,
        name_ar: "دجاج تكا",
        name_en: "Tikka Chicken",
        price: 34.00,
        category: "مشاوي",
        image: "images/دجاج_تكا.jpg",
        description_ar: "قطع دجاج متبلة بتوابل التكا الهندية ومشوية على الفحم.",
        description_en: "Chicken pieces marinated with Indian Tikka spices and grilled over charcoal.",
        rating: 5,
        ratingCount: 30
    },
    {
        id: 5,
        name_ar: "روبيان تندوري",
        name_en: "Prawns Tandoori ",
        price: 44.00,
        category: "مشاوي",
        image: "images/روبيان_تندوري.jpg",
        description_ar: "روبيان طازج متبت بتوابل التندوري ومشوي حتى الكمال.",
        description_en: "Fresh Prawns marinated with Tandoori spices and grilled to perfection.",
        rating: 4,
        ratingCount: 10
    },
    {
        id: 6,
        name_ar: "شوربة كريمة بالدجاج",
        name_en: " Chicken Soup",
        price: 16.00,
        category: "شوربات",
        image: "images/كريمة_بالدجاج.jpg",
        description_ar: "شوربة دجاج كريمية غنية، محضرة يومياً.",
        description_en: "Rish chicken soup, prepared daily.",
        rating: 2,
        ratingCount: 8
    },
    {
        id: 7,
        name_ar: "متبل",
        name_en: "Mutabbal",
        price: 11.00,
        category: "مقبلات",
        image: "images/متبل.jpg",
        description_ar: "متبل باذنجان مشوي بالفرن مع الطحينة.",
        description_en: "Grilled eggplant mutabbal with tahini.",
        rating: 3,
        ratingCount: 20
    },
    {
        id: 8,
        name_ar: "سلطة خضراء",
        name_en: "Green Salad",
        price: 11.00,
        category: "مقبلات",
        image: "images/سلطة_خضراء.jpg",
        description_ar: "مزيج منعش من الخضروات الطازجة مع صلصة منزلية.",
        description_en: "A refreshing mix of fresh vegetables with homemade dressing.",
        rating: 4,
        ratingCount: 17
    },
    {
        id: 9,
        name_ar: "فتوش",
        name_en: "Fattoush",
        price: 15.00,
        category: "مقبلات",
        image: "images/فتوش.jpg",
        description_ar: "سلطة فتوش لبنانية تقليدية مع الخبز المقرمش.",
        description_en: "Traditional Lebanese fattoush salad with crispy bread.",
        rating: 5,
        ratingCount: 25
    },
    {
        id: 10,
        name_ar: "تبولة",
        name_en: "Taboulah",
        price: 14.00,
        category: "مقبلات",
        image: "images/تبولة.jpg",
        description_ar: "سلطة تبولة شهية بالبقدونس والبرغل.",
        description_en: "Delicious Taboulah salad with parsley and bulgur.",
        rating: 4,
        ratingCount: 19
    },
    {
        id: 11,
        name_ar: "برياني سادة",
        name_en: "Plain Biryani",
        price: 16.00,
        category: "برياني",
        image: "images/برياني_سادة.jpg",
        description_ar: "أرز بسمتي مطهو ببهارات البرياني العطرية.",
        description_en: "Basmati rice cooked with aromatic biryani spices.",
        rating: 3,
        ratingCount: 28
    },
    {
        id: 12,
        name_ar: "برياني لحم",
        name_en: "Mutton Biryani",
        price: 37.00,
        category: "برياني",
        image: "images/برياني_لحم.jpg",
        description_ar: "قطع لحم طرية مطهوة مع أرز البرياني الفاخر.",
        description_en: "Tender Mutton pieces cooked with premium biryani rice.",
        rating: 4,
        ratingCount: 35
    },
    {
        id: 13,
        name_ar: "برتقال",
        name_en: "Orange Juice",
        price: 14.00,
        category: "مشروبات",
        image: "images/برتقال.jpg",
        description_ar: "عصير برتقال طازج.",
        description_en: "Fresh orange juice.",
        rating: 5,
        ratingCount: 40
    },
    {
        id: 17,
        name_ar: "ليمون بالنعناع",
        name_en: "Mint Lemonade",
        price: 15.00,
        category: "مشروبات",
        image: "images/ليمون_بالنعناع.jpg",
        description_ar: "مشروب منعش من الليمون الطازج والنعناع.",
        description_en: "Refreshing drink made with fresh lemon and mint.",
        rating: 4,
        ratingCount: 32
    }
];

// --- أرقام الواتساب (محدثة) ---
const WHATSAPP_ORDER_NUMBER = "+966508813919"; // رقم الطلبات
const WHATSAPP_INQUIRY_NUMBER = "+966557109752"; // رقم الاستفسارات

// --- QR Code configuration ---
const QR_MENU_LINK = "https://your-restaurant-website.com/menu"; // استبدل هذا بالرابط الفعلي لقائمة مطعمك عند النشر

// عناصر DOM
const menuContainer = document.getElementById('menu-container');
const categoryFilter = document.getElementById('category-filter');
const searchInput = document.getElementById('search-input');
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart-btn');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartCounter = document.getElementById('cart-counter');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const productModal = document.getElementById('product-modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.getElementById('modal-price');
const modalRating = document.querySelector('.modal-rating');
const modalRatingCount = document.getElementById('modal-rating-count');
const modalAddToCartBtn = document.getElementById('modal-add-to-cart-btn');
const modalNotesInput = document.getElementById('modal-notes-input');
const toastContainer = document.getElementById('toast-container');
const clearCartBtn = document.getElementById('clear-cart-btn');
const whatsappInquiryBtn = document.getElementById('whatsapp-inquiry');
const htmlElement = document.documentElement;
const languageButtons = document.querySelectorAll('.language-btn');
const qrMenuBtn = document.getElementById('qr-menu-btn');
const qrMenuModal = document.getElementById('qr-menu-modal');
const qrCodeContainer = document.getElementById('qrcode-container');
const qrModalCloseBtn = document.getElementById('close-qr-modal-btn');
const qrLinkInfo = document.querySelector('.qr-link-info');
const emptyCartMessage = document.querySelector('.empty-cart-message');

// --- عناصر الصوت ---
const addToCartSound = document.getElementById('add-to-cart-sound');
const removeFromCartSound = document.getElementById('remove-from-cart-sound');
const checkoutSuccessSound = document.getElementById('checkout-success-sound');
const clearCartSound = document.getElementById('clear-cart-sound');

let currentLanguage = 'ar'; // اللغة الحالية، افتراضيًا العربية
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
    if (typeof input !== 'string') {
        return input; // إذا لم يكن نصًا، اتركه كما هو
    }

    const dangerousChars = /[<>&`"']/g;
    if (dangerousChars.test(input)) {
        // تطهير الأحرف الخطرة
        return input.replace(dangerousChars, (match) => {
            switch (match) {
                case '<': return '&lt;';
                case '>': return '&gt;';
                case '&': return '&amp;';
                case '"': return '&quot;';
                case "'": return '&#x27;';
                case '`': return '&#x60;';
                default: return match;
            }
        });
    }

    // منع استدعاءات JavaScript مباشرة (مثال بسيط)
    if (input.toLowerCase().startsWith('javascript:')) {
        return 'invalid_input_script'; // قيمة خاصة لرفض المدخلات
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
    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    updateUITexts();
    displayMenuItems(); // إعادة عرض الأصناف لترجمة أسمائها وفئاتها
    updateCart(); // لتحديث النصوص في السلة
}

// --- وظيفة لتحديث نصوص واجهة المستخدم ---
function updateUITexts() {
    const uniqueCategories = [...new Set(menuData.map(item => item.category))];
    const filterOptionsData = [
        { value: 'all', ar: 'الكل', en: 'All' },
        ...uniqueCategories.map(cat => ({
            value: cat,
            ar: cat,
            en: translateCategory(cat)
        }))
    ];

    categoryFilter.innerHTML = '';
    filterOptionsData.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.textContent = currentLanguage === 'ar' ? option.ar : option.en;
        categoryFilter.appendChild(opt);
    });

    const cartHeader = cartSidebar.querySelector('.cart-header h3');
    if (cartHeader) cartHeader.textContent = currentLanguage === 'ar' ? 'سلة الطلبات' : 'Your Cart';

    if (clearCartBtn) clearCartBtn.textContent = currentLanguage === 'ar' ? 'حذف الكل' : 'Clear All';

    const orderTypeTitle = cartSidebar.querySelector('.order-type-selection h4');
    if (orderTypeTitle) orderTypeTitle.textContent = currentLanguage === 'ar' ? 'اختر نوع الطلب:' : 'Choose Order Type:';

    const radioLabels = cartSidebar.querySelectorAll('.radio-label span');
    radioLabels.forEach(label => {
        const input = label.parentElement.querySelector('input[name="orderType"]');
        if (input) {
            if (input.id === 'orderTypeTable') {
                label.textContent = currentLanguage === 'ar' ? 'على الطاولة' : 'On the Table';
            } else if (input.id === 'orderTypePickup') {
                label.textContent = currentLanguage === 'ar' ? 'استلام من الفرع' : 'Pickup from Branch';
            }
        }
    });

    const totalLabel = cartSidebar.querySelector('.total span:first-child');
    if (totalLabel) totalLabel.textContent = currentLanguage === 'ar' ? 'الإجمالي:' : 'Total:';

    if (checkoutBtn) checkoutBtn.textContent = currentLanguage === 'ar' ? 'إتمام الطلب عبر واتساب' : 'Checkout via WhatsApp';

    const modalNotesTitle = productModal.querySelector('.modal-notes h4');
    if (modalNotesTitle) modalNotesTitle.textContent = currentLanguage === 'ar' ? 'ملاحظات خاصة بالطلب:' : 'Special Notes for Order:';
    modalNotesInput.placeholder = currentLanguage === 'ar' ? 'مثال: بدون بصل، زيادة شطة...' : 'Example: No onions, extra chili...';
    if (modalAddToCartBtn) modalAddToCartBtn.textContent = currentLanguage === 'ar' ? 'إضافة إلى السلة' : 'Add to Cart';

    searchInput.placeholder = currentLanguage === 'ar' ? 'ابحث عن طبق...' : 'Search for a dish...';
    if (whatsappInquiryBtn) whatsappInquiryBtn.title = currentLanguage === 'ar' ? 'استفسارات عبر واتساب' : 'Inquiries via WhatsApp';

    if (qrMenuModal) {
        qrMenuModal.querySelector('h2').textContent = currentLanguage === 'ar' ? 'مسح القائمة' : 'Scan Menu';
        qrMenuModal.querySelector('.qr-instructions').textContent = currentLanguage === 'ar'
            ? 'امسح الرمز لطلب أو استعراض قائمة مطعم ميراتا.'
            : 'Scan the code to order or view Mirata Restaurant menu.';
    }
    emptyCartMessage.textContent = currentLanguage === 'ar' ? 'سلتك فارغة.' : 'Your cart is empty.';

}

// --- وظيفة لإنشاء نجوم التقييم ---
function renderStars(rating, element, countElement = null) {
    element.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('i');
        star.classList.add('fas', 'fa-star');
        if (i <= rating) {
            star.classList.add('filled');
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
    document.querySelectorAll('.menu-item').forEach(itemElement => {
        const ratingValue = parseInt(itemElement.dataset.rating) || 0;
        const ratingContainer = itemElement.querySelector('.rating');
        if (ratingContainer) {
            renderStars(ratingValue, ratingContainer);
        }
    });

    // إذا كان المودال مفتوحًا، قم بتحديث نجومه أيضًا
    if (productModal.style.display === 'flex') {
        const itemId = parseInt(modalAddToCartBtn.dataset.id);
        const itemData = menuData.find(data => data.id === itemId);
        if (itemData) {
            renderStars(itemData.rating, modalRating, modalRatingCount);
        }
    }
}

// --- وظيفة لإنشاء عناصر المنيو ديناميكيًا ---
function createMenuItemElement(item) {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('menu-item');
    menuItemDiv.setAttribute('data-id', item.id);
    menuItemDiv.setAttribute('data-category', item.category);
    menuItemDiv.setAttribute('data-rating', item.rating);

    const categoryBadge = document.createElement('div');
    categoryBadge.classList.add('menu-item-category-badge');
    categoryBadge.textContent = currentLanguage === 'ar' ? item.category : translateCategory(item.category);

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = currentLanguage === 'ar' ? item.name_ar : item.name_en;
    img.title = currentLanguage === 'ar' ? item.name_ar : item.name_en;
    img.loading = 'lazy'; // التحميل البطيء للصور

    const itemContent = document.createElement('div');
    itemContent.classList.add('menu-item-content');
    itemContent.innerHTML = `
        <h3>${currentLanguage === 'ar' ? item.name_ar : item.name_en}</h3>
        <p class="price">${item.price.toFixed(2)} ${currentLanguage === 'ar' ? 'ريال' : 'SAR'}</p>
        <div class="rating">
            <!-- Stars will be rendered by JS -->
        </div>
        <button class="add-to-cart-btn" data-id="${item.id}">${currentLanguage === 'ar' ? 'إضافة إلى السلة' : 'Add to Cart'}</button>
    `;

    menuItemDiv.appendChild(categoryBadge);
    menuItemDiv.appendChild(img);
    menuItemDiv.appendChild(itemContent);

    const addToCartBtn = menuItemDiv.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // منع الحدث من الوصول إلى عنصر المنيو
        addToCart(item.id);
        showToast(`${currentLanguage === 'ar' ? item.name_ar : item.name_en} ${currentLanguage === 'ar' ? 'أضيف إلى سلتك!' : 'added to your cart!'}`, 'success');
        playSound(addToCartSound);
    });

    menuItemDiv.addEventListener('click', () => { // لم يعد هناك حاجة لـ event.stopPropagation هنا
        openProductModal(item.id);
    });

    return menuItemDiv;
}

// --- وظيفة لعرض جميع عناصر المنيو ---
function displayMenuItems() {
    menuContainer.innerHTML = '';
    const filteredItems = menuData.filter(item => {
        const searchTermRaw = searchInput.value;
        const sanitizedSearchTerm = sanitizeInput(searchTermRaw);

        if (sanitizedSearchTerm === 'invalid_input_script') {
            // لا تعرض شيئًا إذا كان مصطلح البحث غير صالح
            return false;
        }

        const finalSearchTerm = sanitizedSearchTerm.toLowerCase();
        const selectedCategory = categoryFilter.value;

        const itemName = currentLanguage === 'ar' ? item.name_ar.toLowerCase() : item.name_en.toLowerCase();
        const itemCategory = item.category;

        const matchesSearch = itemName.includes(finalSearchTerm);
        const matchesCategory = selectedCategory === 'all' || itemCategory === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    filteredItems.forEach(item => {
        const menuItemElement = createMenuItemElement(item);
        menuContainer.appendChild(menuItemElement);
    });
    updateAllRatings(); // تحديث النجوم بعد عرض العناصر
}

// --- ترجمة الفئات ---
function translateCategory(category) {
    const categories = {
        "مشاوي": "Grills",
        "مشروبات": "Drinks",
        "شوربات": "Soups",
        "مقبلات": "Appetizers",
        "برياني": "Biryani"
    };
    return categories[category] || category;
}

// --- فلترة الأصناف (البحث والفئات) ---
function filterAndSearchItems() {
    const searchTermRaw = searchInput.value;
    const sanitizedSearchTerm = sanitizeInput(searchTermRaw);

    if (sanitizedSearchTerm === 'invalid_input_script') {
        showToast(currentLanguage === 'ar' ? 'مصطلح بحث غير صالح (نص برمجي).' : 'Invalid search term (script).', 'warning');
        searchInput.value = ''; // مسح الحقل
        displayMenuItems(); // إعادة عرض الكل
        return;
    }

    // تمرير مصطلح البحث المطهر إلى displayMenuItems
    displayMenuItems();
}

// --- وظيفة لإنشاء QR Code ---
function generateQrCode(text, elementId) {
    if (!text) return;
    const qrCodeElement = document.getElementById(elementId);
    if (!qrCodeElement) return;

    // مسح أي QR code سابق
    qrCodeElement.innerHTML = '';

    const qrcode = new QRCode(qrCodeElement, {
        text: text,
        width: 180,
        height: 180,
        colorDark : "#2c3e50", // لون القطع الداكنة (أسود داكن)
        colorLight : "#ecf0f1", // لون الخلفية (أبيض مائل للرمادي)
        correctLevel : QRCode.CorrectLevel.H // مستوى تصحيح الخطأ
    });
}

// --- وظيفة لفتح أو إغلاق مودال QR Menu ---
function toggleQrMenuModal(isOpen) {
    if (isOpen) {
        qrMenuModal.style.display = 'flex';
        sidebarOverlay.classList.add('active');
        qrLinkInfo.textContent = QR_MENU_LINK; // عرض الرابط
        generateQrCode(QR_MENU_LINK, 'qrcode-container');
    } else {
        qrMenuModal.style.display = 'none';
        sidebarOverlay.classList.remove('active');
    }
}

// --- وظيفة لفتح أو إغلاق السلة الجانبية ---
function toggleCartSidebar(isOpen) {
    if (isOpen) {
        cartSidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
    } else {
        cartSidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    }
}

// --- وظيفة لإغلاق المودال (عامة) ---
function closeModal() {
    productModal.style.display = 'none';
    qrMenuModal.style.display = 'none';
    sidebarOverlay.classList.remove('active');
}

// --- وظيفة لفتح مودال تفاصيل المنتج ---
function openProductModal(itemId) {
    const item = menuData.find(item => item.id === itemId);
    if (!item) return;

    modalImg.src = item.image;
    modalImg.alt = currentLanguage === 'ar' ? item.name_ar : item.name_en;
    modalName.textContent = currentLanguage === 'ar' ? item.name_ar : item.name_en;
    modalDesc.textContent = currentLanguage === 'ar' ? item.description_ar : item.description_en;
    modalPrice.textContent = `${item.price.toFixed(2)} ${currentLanguage === 'ar' ? 'ريال' : 'SAR'}`;

    // تعيين معرف العنصر وزر الإضافة للسلة
    modalAddToCartBtn.dataset.id = item.id;
    // عند فتح المودال، يتم تعيين البيانات الخاصة به لـ renderStars
    modalAddToCartBtn.onclick = () => { // إعادة تعيين الوظيفة لمنع التكرار
        const notes = modalNotesInput.value.trim();
        addToCart(item.id, notes);
        showToast(`${currentLanguage === 'ar' ? item.name_ar : item.name_en} ${currentLanguage === 'ar' ? 'أضيف إلى سلتك!' : 'added to your cart!'}`, 'success');
        playSound(addToCartSound);
        closeModal(); // إغلاق المودال بعد الإضافة
    };

    renderStars(item.rating, modalRating, modalRatingCount); // تحديث النجوم عند الفتح

    productModal.style.display = 'flex';
    sidebarOverlay.classList.add('active');
}

// --- وظيفة لعرض رسائل التأكيد (Toast messages) ---
function showToast(message, type = 'info') {
    const toastMessage = document.createElement('div');
    toastMessage.classList.add('toast-message', type);
    toastMessage.textContent = message;
    toastContainer.appendChild(toastMessage);

    setTimeout(() => {
        toastMessage.remove();
    }, 4000); // 4 ثوانٍ
}

// --- وظائف السلة ---

// دالة إضافة منتج للسلة (مع الملاحظات)
function addToCart(itemId, notes = '') {
    const itemToAdd = menuData.find(item => item.id === itemId);
    const existingItemIndex = cart.findIndex(item => item.id === itemId);

    if (!itemToAdd) return;

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity++;
        // إذا كان هناك ملاحظات جديدة، قم بتحديثها فقط إذا كانت مختلفة أو جديدة
        if (notes && notes !== cart[existingItemIndex].notes) {
            cart[existingItemIndex].notes = notes;
        } else if (!notes && cart[existingItemIndex].notes) {
            // إذا لم يتم تقديم ملاحظات جديدة، احتفظ بالملاحظات القديمة
        } else if (notes && !cart[existingItemIndex].notes) {
             cart[existingItemIndex].notes = notes;
        }
    } else {
        cart.push({ ...itemToAdd, quantity: 1, notes: sanitizeInput(notes) }); // تطهير الملاحظات
    }
    updateCart();
}

// دالة تحديث كمية المنتج في السلة
function updateQuantity(itemId, action) {
    const cartItemIndex = cart.findIndex(item => item.id === itemId);
    if (cartItemIndex === -1) return;

    if (action === 'add') {
        cart[cartItemIndex].quantity++;
    } else if (action === 'remove') {
        cart[cartItemIndex].quantity--;
        if (cart[cartItemIndex].quantity <= 0) {
            cart.splice(cartItemIndex, 1);
            playSound(removeFromCartSound);
        }
    }
    updateCart();
}

// دالة إزالة منتج من السلة
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
    showToast(currentLanguage === 'ar' ? 'تم حذف المنتج من سلتك.' : 'Item removed from your cart.', 'warning');
    playSound(removeFromCartSound);
}

// دالة مسح السلة بالكامل
function clearCart() {
    cart = [];
    updateCart();
    showToast(currentLanguage === 'ar' ? 'تم تفريغ السلة.' : 'Cart cleared.', 'info');
    playSound(clearCartSound);
}

// دالة تحديث عرض السلة
function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        // عرض رسالة السلة الفارغة
        emptyCartMessage.style.display = 'block';
        cartItemsContainer.appendChild(emptyCartMessage);
    } else {
        emptyCartMessage.style.display = 'none'; // إخفاء رسالة السلة الفارغة
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            // تم تطبيق sanitizeInput على عرض الملاحظات لضمان الأمان
            const sanitizedNotes = item.notes ? sanitizeInput(item.notes) : '';
            const notesHtml = sanitizedNotes ? `<p class="item-notes">ملاحظات: ${sanitizedNotes}</p>` : '';

            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${currentLanguage === 'ar' ? item.name_ar : item.name_en}" loading="lazy">
                <div class="cart-item-info">
                    <h4>${currentLanguage === 'ar' ? item.name_ar : item.name_en}</h4>
                    ${notesHtml}
                    <p class="item-price">${item.price.toFixed(2)} ${currentLanguage === 'ar' ? 'ريال' : 'SAR'}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" data-id="${item.id}">&times;</button>
            `;
            cartItemsContainer.appendChild(cartItemElement);
            total += item.price * item.quantity;
        });
    }
    cartTotal.textContent = `${total.toFixed(2)} ريال`;
    cartCounter.textContent = cart.length; // عرض عدد الأصناف الفريدة في السلة

    // إضافة مستمعي الأحداث للأزرار الجديدة (تحديث الكمية، إزالة)
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = parseInt(btn.dataset.id);
            removeFromCart(itemId);
        });
    });

    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = parseInt(btn.dataset.id);
            if (btn.classList.contains('plus')) {
                updateQuantity(itemId, 'add');
            } else if (btn.classList.contains('minus')) {
                updateQuantity(itemId, 'remove');
            }
        });
    });
}

// --- دالة إتمام الطلب ---
function checkout() {
    if (cart.length === 0) {
        showToast(currentLanguage === 'ar' ? 'السلة فارغة، لا يمكن إتمام الطلب.' : 'Cart is empty, cannot checkout.', 'warning');
        return;
    }

    const orderType = document.querySelector('input[name="orderType"]:checked').value;
    let message = `*طلب جديد من مطعم ميراتا*\n\n`;
    message += `*نوع الطلب:* ${orderType === 'table' ? 'على الطاولة' : 'استلام من الفرع'}\n\n`;
    message += `*العناصر:\n`;

    cart.forEach(item => {
        const sanitizedNotes = item.notes ? sanitizeInput(item.notes) : 'لا توجد ملاحظات';
        message += `- ${item.name_ar} (x${item.quantity}) - ${item.price.toFixed(2)} ريال\n`;
        if (sanitizedNotes !== 'لا توجد ملاحظات') {
            message += `  ملاحظات: ${sanitizedNotes}\n`;
        }
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    message += `\n*الإجمالي:* ${total.toFixed(2)} ريال\n`;

    // إضافة رابط لتطبيق المنيو (اختياري)
    message += `\n--- \nيمكن عرض المنيو من هنا: ${QR_MENU_LINK}\n---`;

    // تهيئة رابط الواتساب
    const whatsappUrl = `https://wa.me/${WHATSAPP_ORDER_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    playSound(checkoutSuccessSound);
    showToast(currentLanguage === 'ar' ? 'جاري فتح واتساب لإكمال الطلب.' : 'Opening WhatsApp to complete your order.', 'info');

    // اختياري: تفريغ السلة بعد محاولة إتمام الطلب
    // clearCart();
}

// --- تهيئة التطبيق ---
function initializeApp() {
    // تحميل عناصر المنيو عند تحميل الصفحة
    displayMenuItems();
    // تحديث نصوص الواجهة بناءً على اللغة الافتراضية
    updateUITexts();

    // إعدادات أزرار تبديل اللغة
    languageButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            languageButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            switchLanguage(lang);
        });
    });

    // إضافة مستمعي الأحداث للأزرار الأساسية
    cartIcon.addEventListener('click', () => toggleCartSidebar(true));
    closeCartBtn.addEventListener('click', () => toggleCartSidebar(false));
    sidebarOverlay.addEventListener('click', () => {
        toggleCartSidebar(false);
        closeModal(); // إغلاق أي مودال مفتوح أيضًا
    });
    checkoutBtn.addEventListener('click', checkout);
    clearCartBtn.addEventListener('click', clearCart);

    // البحث
    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(filterAndSearchItems, 300); // تأخير 300ms لتجنب البحث السريع جدًا
    });

    // فلتر الفئات
    categoryFilter.addEventListener('change', displayMenuItems);

    // إغلاق المودال (منتج)
    const closeModalBtn = document.getElementById('close-modal-btn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            closeModal();
            // تأكد من أن السلة تختفي إذا تم إغلاق المودال عبر زر الإغلاق هذا
            if (cartSidebar.classList.contains('active')) {
                 sidebarOverlay.classList.add('active'); // أبقي الـ overlay لتغطية السلة
            } else {
                 sidebarOverlay.classList.remove('active');
            }
        });
    }

    // إغلاق مودال QR Menu
    if (qrModalCloseBtn) {
        qrModalCloseBtn.addEventListener('click', () => toggleQrMenuModal(false));
    }

    // فتح مودال QR Menu
    if (qrMenuBtn) {
        qrMenuBtn.addEventListener('click', () => toggleQrMenuModal(true));
    }


    // ربط زر الاستفسارات بالواتساب
    whatsappInquiryBtn.href = `https://wa.me/${WHATSAPP_INQUIRY_NUMBER.replace(/\+/g, '')}`;
    // يمكنك إضافة نص افتراضي للاستفسار إذا أردت
    // whatsappInquiryBtn.href = `https://wa.me/${WHATSAPP_INQUIRY_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent('مرحباً، لدي استفسار بخصوص قائمة المطعم.')}`;

    // تحديث السلة عند تحميل الصفحة
    updateCart();
}

// تشغيل الدالة الرئيسية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initializeApp);