document.addEventListener('DOMContentLoaded', function() {
    const countryLinks = document.querySelectorAll('.country-menu a');
    const selectedFlag = document.getElementById('selected-flag');
    const selectedCountry = document.getElementById('selected-country');

    // --- Product Data (moved to higher scope) ---
    const products = [
        {
            image: 'images/Camera.jpg',
            title: 'Canon Camera EOS 2000, Black 10x zoom',
            price: 998.00,
            oldPrice: 1128.00,
            rating: 4,
            ratingText: '7.5',
            orders: 154,
            shipping: 'Free Shipping',
            description: 'High quality DSLR camera for professional photography.',
            size: 'N/A',
            color: 'Black',
            material: 'Plastic',
            seller: 'Tech Emporium LLC'
        },
        {
            image: 'images/Mobile.jpg',
            title: 'GoPro HERO6 4K Action Camera - Black',
            price: 998.00,
            oldPrice: 1128.00,
            rating: 4,
            ratingText: '7.5',
            orders: 154,
            shipping: 'Free Shipping',
            description: 'Capture your adventures in stunning 4K resolution.',
            size: 'Compact',
            color: 'Black',
            material: 'Durable Plastic',
            seller: 'Adventure Gear Co.'
        },
        {
            image: 'images/smart-phones.jpg',
            title: 'Samsung Galaxy S21 Ultra',
            price: 998.00,
            oldPrice: 1128.00,
            rating: 4,
            ratingText: '7.5',
            orders: 154,
            shipping: 'Free Shipping',
            description: 'Latest smartphone with advanced features and camera.',
            size: '6.8 inches',
            color: 'Phantom Black',
            material: 'Glass & Aluminum',
            seller: 'Mobile Solutions Inc.'
        },
        {
            image: 'images/laptop.jpg',
            title: 'Dell XPS 13 Laptop',
            price: 998.00,
            oldPrice: 1128.00,
            rating: 4,
            ratingText: '7.5',
            orders: 154,
            shipping: 'Free Shipping',
            description: 'Ultra-portable laptop with high performance.',
            size: '13.4 inches',
            color: 'Platinum Silver',
            material: 'Aluminum',
            seller: 'Dell Official Store'
        },
        {
            image: 'images/watch.jpg',
            title: 'Apple Watch Series 6',
            price: 998.00,
            oldPrice: 1128.00,
            rating: 4,
            ratingText: '7.5',
            orders: 154,
            shipping: 'Free Shipping',
            description: 'Smartwatch with fitness tracking and notifications.',
            size: '44mm',
            color: 'Space Gray',
            material: 'Aluminum',
            seller: 'Apple Authorized'
        },
        {
            image: 'images/Headphone.jpg',
            title: 'Sony WH-1000XM4 Headphones',
            price: 998.00,
            oldPrice: 1128.00,
            rating: 4,
            ratingText: '7.5',
            orders: 154,
            shipping: 'Free Shipping',
            description: 'Noise-cancelling headphones for immersive sound.',
            size: 'Over-ear',
            color: 'Black',
            material: 'Plastic & Leather',
            seller: 'Audio Pro'
        },
        {
            image: 'images/coffee-maker.jpg',
            title: 'Deluxe Coffee Maker',
            price: 120.00,
            oldPrice: 150.00,
            rating: 4,
            ratingText: '8.2',
            orders: 89,
            shipping: 'Free Shipping',
            description: 'Brew the perfect cup with this deluxe coffee maker.',
            size: 'Standard',
            color: 'Silver',
            material: 'Stainless Steel',
            seller: 'Home Kitchen Appliances'
        },
        {
            image: 'images/jacket.jpg',
            title: "Men's Winter Jacket",
            price: 85.00,
            oldPrice: 110.00,
            rating: 4,
            ratingText: '8.0',
            orders: 67,
            shipping: 'Free Shipping',
            description: 'Stay warm and stylish with this insulated winter jacket.',
            size: 'L',
            color: 'Navy Blue',
            material: 'Polyester',
            seller: 'Fashion Apparel Co.'
        },
        {
            image: 'images/kitchen-dishes.jpg',
            title: 'Ceramic Kitchen Dishes Set',
            price: 60.00,
            oldPrice: 80.00,
            rating: 4,
            ratingText: '7.8',
            orders: 120,
            shipping: 'Free Shipping',
            description: 'Elegant ceramic dishes for your kitchen and dining.',
            size: 'Set of 4',
            color: 'White',
            material: 'Ceramic',
            seller: 'Kitchen Essentials'
        },
        {
            image: 'images/kitchen-mixer.jpg',
            title: 'Stand Kitchen Mixer',
            price: 210.00,
            oldPrice: 250.00,
            rating: 4,
            ratingText: '8.5',
            orders: 45,
            shipping: 'Free Shipping',
            description: 'Powerful stand mixer for all your baking needs.',
            size: '5 Quart',
            color: 'Red',
            material: 'Stainless Steel & Plastic',
            seller: 'Bake Master'
        },
        {
            image: 'images/electric-kettle.jpg',
            title: 'Electric Kettle',
            price: 95.00,
            oldPrice: 120.00,
            rating: 4,
            ratingText: '8.1',
            orders: 73,
            shipping: 'Free Shipping',
            description: 'Boil water quickly and safely with this electric kettle.',
            size: '1.7 Liter',
            color: 'Silver',
            material: 'Stainless Steel',
            seller: 'Rapid Boil Co.'
        },
        {
            image: 'images/home-appliance.jpg',
            title: 'Home Appliance',
            price: 35.00,
            oldPrice: 50.00,
            rating: 4,
            ratingText: '7.9',
            orders: 58,
            shipping: 'Free Shipping',
            description: 'A versatile home appliance for daily use.',
            size: 'Varies',
            color: 'White',
            material: 'Plastic',
            seller: 'Smart Home Solutions'
        },
        {
            image: 'images/wallet.jpg',
            title: 'Leather Wallet',
            price: 45.00,
            oldPrice: 60.00,
            rating: 4,
            ratingText: '8.3',
            orders: 39,
            shipping: 'Free Shipping',
            description: 'Premium leather wallet with multiple compartments.',
            size: 'Standard',
            color: 'Brown',
            material: 'Leather',
            seller: 'Elegant Accessories'
        },
        {
            image: 'images/headphone2.jpg',
            title: 'Bluetooth Over-Ear Headphones',
            price: 35.00,
            oldPrice: 50.00,
            rating: 4,
            ratingText: '7.9',
            orders: 58,
            shipping: 'Free Shipping',
            description: 'Wireless headphones with deep bass and long battery life.',
            size: 'Over-ear',
            color: 'Blue',
            material: 'Plastic & Fabric',
            seller: 'Sound Immersion'
        },
        {
            image: 'images/Soft-chairs.jpg',
            title: 'Soft Chairs',
            price: 19.00,
            oldPrice: 25.00,
            rating: 3,
            ratingText: '6.5',
            orders: 200,
            shipping: 'Free Shipping',
            description: 'Comfortable soft chairs for your home.',
            size: 'Standard',
            color: 'Gray',
            material: 'Fabric & Wood',
            seller: 'Comfort Seating Co.'
        },
        {
            image: 'images/Sofa-&-chair.jpg',
            title: 'Sofa & Chair Set',
            price: 19.00,
            oldPrice: 25.00,
            rating: 3,
            ratingText: '7.0',
            orders: 180,
            shipping: 'Free Shipping',
            description: 'Stylish sofa and chair set for your living room.',
            size: '3+1',
            color: 'Beige',
            material: 'Fabric & Wood',
            seller: 'Living Room Furnishings'
        },
        {
            image: 'images/blenders.jpg',
            title: 'Kitchen Blenders',
            price: 39.00,
            oldPrice: 50.00,
            rating: 4,
            ratingText: '7.2',
            orders: 110,
            shipping: 'Free Shipping',
            description: 'High-power blenders for all your kitchen needs.',
            size: '1.5 Liter',
            color: 'White',
            material: 'Plastic & Stainless Steel',
            seller: 'Blend It Up'
        },
        {
            image: 'images/kettel.jpg',
            title: 'Stainless Steel Kettle',
            price: 25.00,
            oldPrice: 35.00,
            rating: 4,
            ratingText: '7.0',
            orders: 95,
            shipping: 'Free Shipping',
            description: 'Durable stainless steel kettle for everyday use.',
            size: '2 Liter',
            color: 'Silver',
            material: 'Stainless Steel',
            seller: 'Tea Time Co.'
        },
        {
            image: 'images/bag.jpg',
            title: 'Blue Backpack',
            price: 29.99,
            oldPrice: 35.00,
            rating: 4,
            ratingText: '8.5',
            orders: 200,
            shipping: 'Free Shipping',
            description: 'A stylish and durable blue backpack for everyday use, perfect for students and commuters.',
            size: 'Medium',
            color: 'Blue',
            material: 'Polyester',
            seller: 'Bag & Go'
        },
        {
            image: 'images/gray-shirt.jpg',
            title: 'T-shirts with multiple colors, for men and lady',
            price: 78.99,
            oldPrice: 85.00,
            rating: 4,
            ratingText: '8.9',
            orders: 150,
            shipping: 'Free Shipping',
            description: 'Comfortable and stylish T-shirts available in various colors for both men and women.',
            size: 'Medium',
            color: 'Blue',
            material: 'Cotton',
            seller: 'Artel Market'
        },
        {
            image: 'images/Sofa-&-chair.jpg',
            title: 'Table Lamp',
            price: 170.50,
            oldPrice: 190.00,
            rating: 4,
            ratingText: '9.1',
            orders: 90,
            shipping: 'Free Shipping',
            description: 'A modern and elegant table lamp to brighten up your living space.',
            size: 'Standard',
            color: 'Gray',
            material: 'Metal & Glass',
            seller: 'LightUp Designs'
        }
    ];
    let currentPage = 1;
    let productsPerPage = 9;
    let productView = 'list'; // 'list' or 'grid'

    countryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const country = this.dataset.country;
            const countryName = this.dataset.name;
            
            // Update the flag image in the button
            selectedFlag.src = `images/${country}.jpg`;
            selectedFlag.alt = countryName;
            
            // Update the text (optional)
            const textNode = selectedCountry.childNodes[0];
            textNode.nodeValue = 'Ship to ';
            
            // Close dropdown (optional)
            document.querySelector('.country-menu').style.display = 'none';
            
            // Reopen on mouse leave (optional)
            setTimeout(() => {
                document.querySelector('.country-menu').style.display = '';
            }, 100);
        });
    });

    // Category navigation handling
    const categorySelect = document.querySelector('.category-select');
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            const selectedValue = this.value;
            if (selectedValue === 'product-card') {
                window.location.href = 'product-card.html';
            } else if (selectedValue) {
                // Handle other category navigations
                window.location.href = `category/${selectedValue}.html`;
            }
        });
    }

    // Filter Section Toggle
    document.querySelectorAll('.filter-header').forEach(button => {
        button.addEventListener('click', function() {
            // Find the content div that follows this button
            const content = this.nextElementSibling;
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            content.classList.toggle('active');
        });
    });

    // Sidebar toggle functionality
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebarContent = document.querySelector('.sidebar-content');
    if (sidebarToggle && sidebarContent) {
        const toggleIcon = sidebarToggle.querySelector('i');
        sidebarToggle.addEventListener('click', function() {
            sidebarContent.classList.toggle('expanded');
            // Update icon
            if (sidebarContent.classList.contains('expanded')) {
                toggleIcon.classList.remove('fa-chevron-down');
                toggleIcon.classList.add('fa-chevron-up');
            } else {
                toggleIcon.classList.remove('fa-chevron-up');
                toggleIcon.classList.add('fa-chevron-down');
            }
        });
    }

    // Price Range Slider (Only execute if elements exist)
    const minSlider = document.getElementById('slider-min');
    const maxSlider = document.getElementById('slider-max');
    const minInput = document.getElementById('min-input');
    const maxInput = document.getElementById('max-input');

    if (minSlider && maxSlider && minInput && maxInput) {
        // Initialize input values
        minInput.value = minSlider.value;
        maxInput.value = maxSlider.value;

        // Update input when sliders change
        minSlider.addEventListener('input', (e) => {
            const value = Math.min(Number(e.target.value), Number(maxSlider.value) - 1);
            minSlider.value = value;
            minInput.value = value;
        });

        maxSlider.addEventListener('input', (e) => {
            const value = Math.max(Number(e.target.value), Number(minSlider.value) + 1);
            maxSlider.value = value;
            maxInput.value = value;
        });

        // Update sliders when inputs change
        minInput.addEventListener('change', (e) => {
            const value = Math.min(Number(e.target.value), Number(maxInput.value) - 1);
            minSlider.value = value;
            minInput.value = value;
        });

        maxInput.addEventListener('change', (e) => {
            const value = Math.max(Number(e.target.value), Number(minInput.value) + 1);
            maxSlider.value = value;
            maxInput.value = value;
        });
    }

    // --- Filter Tag Bar Logic ---
    const filterTagsBar = document.getElementById('filter-tags-bar');
    const filterInputs = document.querySelectorAll('.filter-list input[type="checkbox"], .filter-list input[type="radio"]');

    function getSelectedFilters() {
        const selected = [];
        filterInputs.forEach(input => {
            if ((input.type === 'checkbox' && input.checked) || (input.type === 'radio' && input.checked && input.value !== 'any')) {
                const label = input.closest('label');
                let text = '';
                if (label) {
                    text = label.textContent.trim();
                } else {
                    // For radio without label
                    text = input.value;
                }
                selected.push({
                    name: input.name,
                    value: input.value,
                    text,
                    input
                });
            }
        });
        return selected;
    }

    function renderFilterTags() {
        const selected = getSelectedFilters();
        if (!filterTagsBar) return; 
        filterTagsBar.innerHTML = '';
        selected.forEach(filter => {
            const tag = document.createElement('span');
            tag.className = 'filter-tag';
            tag.textContent = filter.text;
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-tag';
            removeBtn.innerHTML = '&times;';
            removeBtn.onclick = () => {
                filter.input.checked = false;
                filter.input.dispatchEvent(new Event('change', { bubbles: true }));
                renderFilterTags();
            };
            tag.appendChild(removeBtn);
            filterTagsBar.appendChild(tag);
        });
        if (selected.length > 0) {
            const clearBtn = document.createElement('button');
            clearBtn.className = 'clear-filters';
            clearBtn.textContent = 'Clear all filter';
            clearBtn.onclick = () => {
                filterInputs.forEach(input => {
                    if (input.type === 'checkbox') input.checked = false;
                    if (input.type === 'radio' && input.value !== 'any') input.checked = false;
                    if (input.type === 'radio' && input.value === 'any') input.checked = true;
                });
                filterInputs.forEach(input => {
                    input.dispatchEvent(new Event('change', { bubbles: true }));
                });
                renderFilterTags();
            };
            filterTagsBar.appendChild(clearBtn);
        }
    }

    if (filterTagsBar && filterInputs) { 
        filterInputs.forEach(input => {
            input.addEventListener('change', renderFilterTags);
        });
        renderFilterTags();
    }

    // --- Dynamic Product Listing and Pagination (Only on relevant pages) ---
    const productList = document.getElementById('product-list');
    const paginationBar = document.querySelector('.pagination-bar');

    if (productList) {
        // Add grid/list toggle event listeners
        const toolbar = document.querySelector('.product-toolbar');
        if (toolbar) {
            const gridBtn = toolbar.querySelector('button i.fa-th-large')?.parentElement;
            const listBtn = toolbar.querySelector('button i.fa-list')?.parentElement;
            
            if (gridBtn && listBtn) {
                gridBtn.addEventListener('click', function() {
                    productView = 'grid';
                    productList.classList.add('products-grid');
                    renderProducts();
                    gridBtn.style.background = '#fff';
                    gridBtn.style.border = '1px solid #0d6efd';
                    listBtn.style.background = '#f7fafd';
                    listBtn.style.border = '1px solid #e0e0e0';
                });
                listBtn.addEventListener('click', function() {
                    productView = 'list';
                    productList.classList.remove('products-grid');
                    renderProducts();
                    listBtn.style.background = '#fff';
                    listBtn.style.border = '1px solid #0d6efd';
                    gridBtn.style.background = '#f7fafd';
                    gridBtn.style.border = '1px solid #e0e0e0';
                });
            }
        }

        function renderProducts() {
            productList.innerHTML = '';
            const start = (currentPage - 1) * productsPerPage;
            const end = start + productsPerPage;
            const pageProducts = products.slice(start, end);
            if (productView === 'grid') {
                // Grid view: use product-card style
                pageProducts.forEach(product => {
                    const card = document.createElement('div');
                    card.className = 'product-card';
                    card.innerHTML = `
                        <div class="product-image-container">
                            <img src="${product.image}" alt="${product.title}">
                        </div>
                        <div class="product-info">
                            <div style="font-weight: 600; font-size: 16px; margin-bottom: 4px;">${product.title}</div>
                            <div class="price">$${product.price.toFixed(2)} <span style='color:#8B96A5; text-decoration:line-through; font-size:15px;'>$${product.oldPrice.toFixed(2)}</span></div>
                            <div style="margin: 6px 0 8px 0; font-size: 15px; color: #FF9017; display: flex; align-items: center; gap: 6px;">
                                <span>
                                    <i class='fas fa-star' style='color: #FF9017;'></i>
                                    <i class='fas fa-star' style='color: #FF9017;'></i>
                                    <i class='fas fa-star' style='color: #FF9017;'></i>
                                    <i class='fas fa-star' style='color: #FF9017;'></i>
                                    <i class='far fa-star' style='color: #FF9017;'></i>
                                </span>
                                <span style="color: #FF9017; font-weight: 500;">${product.ratingText}</span>
                            </div>
                            <div class="description">${product.description}</div>
                            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 10px;">
                                <a href="product-detail.html?index=${products.indexOf(product)}" style="color: #0d6efd; font-size: 14px; text-decoration: none;">View details</a>
                                <button class="add-to-cart-btn" data-product-index="${products.indexOf(product)}" style="background: none; border: none; cursor: pointer;"><i class="far fa-heart" style="font-size: 20px; color: #8B96A5;"></i></button>
                            </div>
                        </div>
                    `;
                    productList.appendChild(card);
                });
            } else {
                // List view: original style
                pageProducts.forEach(product => {
                    const card = document.createElement('div');
                    card.style.display = 'flex';
                    card.style.background = '#fff';
                    card.style.borderRadius = '8px';
                    card.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';
                    card.style.padding = '18px';
                    card.style.alignItems = 'flex-start';
                    card.style.position = 'relative';
                    card.style.marginBottom = '18px';
                    card.innerHTML = `
                        <img src="${product.image}" alt="${product.title}" style="width: 110px; height: 110px; object-fit: cover; border-radius: 8px; margin-right: 18px;">
                        <div style="flex: 1;">
                            <div style="font-weight: 600; font-size: 16px; margin-bottom: 4px;">${product.title}</div>
                            <div style="font-size: 22px; color: #222; font-weight: bold; display: inline-block; margin-right: 10px;">$${product.price.toFixed(2)}</div>
                            <span style="color: #8B96A5; text-decoration: line-through; font-size: 15px;">$${product.oldPrice.toFixed(2)}</span>
                            <div style="margin: 6px 0 8px 0; font-size: 15px; color: #FF9017; display: flex; align-items: center; gap: 6px;">
                                <span>
                                    <i class='fas fa-star' style='color: #FF9017;'></i>
                                    <i class='fas fa-star' style='color: #FF9017;'></i>
                                    <i class='fas fa-star' style='color: #FF9017;'></i>
                                    <i class='fas fa-star' style='color: #FF9017;'></i>
                                    <i class='far fa-star' style='color: #FF9017;'></i>
                                </span>
                                <span style="color: #FF9017; font-weight: 500;">${product.ratingText}</span>
                                <span style="color: #8B96A5; font-size: 14px;"> • ${product.orders} orders</span>
                                <span style="color: #00B517; font-size: 14px;"> • ${product.shipping}</span>
                            </div>
                            <div style="font-size: 14px; color: #505050; margin-bottom: 6px;">${product.description}</div>
                            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 10px;">
                                <a href="product-detail.html?index=${products.indexOf(product)}" style="color: #0d6efd; font-size: 14px; text-decoration: none;">View details</a>
                                <button class="add-to-cart-btn" data-product-index="${products.indexOf(product)}" style="background: none; border: none; cursor: pointer;"><i class="far fa-heart" style="font-size: 20px; color: #8B96A5;"></i></button>
                            </div>
                        </div>
                    `;
                    productList.appendChild(card);
                });
            }

            // Add event listeners for the new heart buttons
            document.querySelectorAll('.add-to-cart-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const productIndex = this.getAttribute('data-product-index');
                    addToCart(productIndex, this);
                });
            });
        }

        function addToCart(productIndex, buttonElement) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const product = products[productIndex];

            // Check if product already exists in cart
            const existingProductIndex = cart.findIndex(item => item.title === product.title);

            if (existingProductIndex > -1) {
                // If product exists, just update quantity or do nothing if it's a simple 'like'
                // For now, we'll just toggle the heart icon back if clicked again (unlike)
                cart.splice(existingProductIndex, 1); // Remove from cart
                buttonElement.querySelector('i').classList.remove('fas');
                buttonElement.querySelector('i').classList.add('far');
                buttonElement.querySelector('i').style.color = '#8B96A5';
            } else {
                // Add product to cart
                cart.push(product);
                buttonElement.querySelector('i').classList.remove('far');
                buttonElement.querySelector('i').classList.add('fas');
                buttonElement.querySelector('i').style.color = '#EB001B'; // Change to red to indicate added/liked
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            console.log('Cart updated:', cart);
        }

        function renderPagination() {
            if (!paginationBar) return;
            const totalPages = Math.ceil(products.length / productsPerPage);
            let html = `
                <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="font-size: 15px; color: #222;">Show</span>
                    <select id="show-count" style="padding: 4px 18px 4px 8px; border: 1px solid #e0e0e0; border-radius: 6px; font-size: 15px;">
                        <option value="10"\${productsPerPage==10?' selected':''}>10</option>
                        <option value="20"\${productsPerPage==20?' selected':''}>20</option>
                        <option value="50"\${productsPerPage==50?' selected':''}>50</option>
                    </select>
                </div>
                <div style="display: flex; align-items: center; gap: 2px;">
                    <button class="page-btn" data-page="prev" style="background: #f7fafd; border: 1px solid #e0e0e0; border-radius: 4px; padding: 4px 10px; cursor: pointer; color: #8B96A5;" \${currentPage===1?'disabled':''}>&lt;</button>
            `;
            for (let i = 1; i <= totalPages; i++) {
                html += `<button class="page-btn" data-page="${i}" style="background: ${i===currentPage?'#fff':'#f7fafd'}; border: 1px solid ${i===currentPage?'#0d6efd':'#e0e0e0'}; color: ${i===currentPage?'#0d6efd':'#222'}; border-radius: 4px; padding: 4px 10px; cursor: pointer; font-weight: ${i===currentPage?'500':'400'};">${i}</button>`;
            }
            html += `<button class="page-btn" data-page="next" style="background: #f7fafd; border: 1px solid #e0e0e0; border-radius: 4px; padding: 4px 10px; cursor: pointer; color: #8B96A5;" ${currentPage===totalPages?'disabled':''}>&gt;</button></div>`;
            paginationBar.innerHTML = html;

            // Add event listeners
            paginationBar.querySelectorAll('.page-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const page = this.getAttribute('data-page');
                    if (page === 'prev' && currentPage > 1) currentPage--;
                    else if (page === 'next' && currentPage < totalPages) currentPage++;
                    else if (!isNaN(Number(page))) currentPage = Number(page);
                    renderProducts();
                    renderPagination();
                });
            });
            const showCount = paginationBar.querySelector('#show-count');
            if (showCount) {
                showCount.addEventListener('change', function() {
                    productsPerPage = Number(this.value);
                    currentPage = 1;
                    renderProducts();
                    renderPagination();
                });
            }
        }

        renderProducts();
        renderPagination();
    }

    // Log for debugging
    console.log('Script loaded and initialized');

    // --- Universal Product Click Handler (for both list and grid items) ---
    document.querySelectorAll('.deal-item, .product-item').forEach(item => {
        item.addEventListener('click', function() {
            const productIndex = this.getAttribute('data-product-index');
            if (productIndex !== null) {
                window.location.href = `product-detail.html?index=${productIndex}`;
            }
        });
    });

    // --- Tab Switching Logic for product-detail.html ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabButtons.length > 0 && tabPanes.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons and panes
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));

                // Add active class to the clicked button
                this.classList.add('active');

                // Show the corresponding tab pane
                const targetTabId = this.dataset.tab;
                const targetTabPane = document.getElementById(targetTabId);
                if (targetTabPane) {
                    targetTabPane.classList.add('active');
                }
            });
        });
    }
});

// Function to change the main product image when a thumbnail is clicked
// This function needs to be in the global scope to be called from onclick attributes in HTML
function changeMainImage(thumbnail) {
    const mainImage = document.getElementById('mainProductImage');
    if (mainImage && thumbnail) {
        mainImage.src = thumbnail.src;
    }
}