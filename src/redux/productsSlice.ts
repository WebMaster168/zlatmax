import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../api/productsApi";
 
// Пока можно использовать any.
// Чуть позже заменим его на интерфейс Product.
interface ProductsState {
    items: any[];
    loading: boolean;
    error: string | null;
}
 
const initialState: ProductsState = {
    items: [],
    loading: false,
    error: null,
};
 
// Асинхронная загрузка товаров
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (category: string | undefined, { rejectWithValue }) => {
        try {
            const products = await getProducts(category);
            return products;
        } catch (error) {
            return rejectWithValue("Не удалось загрузить товары");
        }
    }
);
 
const productsSlice = createSlice({
    name: "products",
    initialState,
 
    reducers: {
        // Позже здесь будут:
        // clearProducts()
        // sortProducts()
        // filterProducts()
    },
 
    extraReducers: (builder) => {
        builder
 
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
 
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
 
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    (action.payload as string) ||
                    "Ошибка загрузки товаров";
            });
    },
});
 
export default productsSlice.reducer;