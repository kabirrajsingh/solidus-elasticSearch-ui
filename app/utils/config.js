// export const API_BASE_URL = 'https://kzur4id4cf.execute-api.ap-south-1.amazonaws.com'; 
export const API_BASE_URL = 'http://localhost:8080'; 
export const API_ENDPOINTS={
    START_SESSION:`${API_BASE_URL}/start-session`,
    CHAT:`${API_BASE_URL}/chat`,
   PRODUCTS_PAGINATED :`${API_BASE_URL}/api/v1/products/paginated`,
   PRODUCT:`${API_BASE_URL}/api/v1/products`,
   GET_PRODUCT_REVIEW_SCORES: `${API_BASE_URL}/get-product-review-scores`
}

export const COLORS={
    LIGHT_BG: "bg-white",
    DARK_BG: "bg-black",
    LIGHT_TEXT: "text-gray-800",
    DARK_TEXT: "text-gray-100",
    BOT_LIGHT: "bg-pink-500",
    BOT_DARK: "bg-blue-600",
    USER_LIGHT: "bg-white",
    USER_DARK: "bg-green-600",
    BORDER_LIGHT: "border-red-500",
    BORDER_DARK: "border-gray-700",
    INPUT_LIGHT: "bg-white",
    INPUT_DARK: "bg-gray-700",
    BUTTON_LIGHT: "bg-rose-500 hover:bg-rose-600",
    BUTTON_DARK: "bg-blue-600 hover:bg-blue-700",
    TOGGLE_LIGHT: "bg-pink-700 hover:bg-red-600",
    TOGGLE_DARK: "bg-gray-800 hover:bg-gray-700",
    RAKUTEN_RED_BG:"bg-red-700	",
    RAKUTEN_RED:"text-red-700",
    RAKUTEN_ROSE_BG:"bg-rose-100",
    RAKUTEN_GREY_BG:"bg-stone-500",
    RAKUTEN_LIGHTRED_BG:"bg-red-400",
    RAKUTEN_AMBER_BG:"bg-amber-100",
    RAKUTEN_BLUE_BG:"bg-blue-200"
}
