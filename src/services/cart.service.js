const CART_STORAGE_KEY = 'rus_skin_shopping_cart';

const CartService = {
    getCart: () => {
        try {
            const cartJson = localStorage.getItem(CART_STORAGE_KEY);
            return cartJson ? JSON.parse(cartJson) : [];
        } catch (error) {
            console.error('Error reading cart from localStorage', error);
            return [];
        }
    },

    _saveCart: (cartItems) => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    },

    addItem: (product, quantity = 1) => {
        const cartItems = CartService.getCart();
        const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

        if (existingItemIndex >= 0) {
            cartItems[existingItemIndex].quantity += quantity;
        } else {
            cartItems.push({
                ...product,
                quantity
            });
        }

        CartService._saveCart(cartItems);
        return cartItems;
    },

    removeItem: (productId) => {
        const cartItems = CartService.getCart().filter(item => item.id !== productId);
        CartService._saveCart(cartItems);
        return cartItems;
    },

    updateQuantity: (productId, newQuantity) => {
        const cartItems = CartService.getCart();
        const itemIndex = cartItems.findIndex(item => item.id === productId);

        if (itemIndex >= 0) {
            if (newQuantity > 0) {
                cartItems[itemIndex].quantity = newQuantity;
            } else {
                cartItems.splice(itemIndex, 1); // Remove if quantity is 0 or less
            }
            CartService._saveCart(cartItems);
        }

        return cartItems;
    },

    clearCart: () => {
        localStorage.removeItem(CART_STORAGE_KEY);
        return [];
    },

    getTotalItems: () => {
        const cartItems = CartService.getCart();
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    },

    getCartTotal: () => {
        const cartItems = CartService.getCart();
        return cartItems.reduce(
            (total, item) => total + (item.price * item.quantity),
            0
        );
    }
};

export default CartService;