const API = "http://localhost:3001/api";
 
export async function getProducts(category?: string) {
 
    const url = category
        ? `${API}/products?category=${category}`
        : `${API}/products`;
 
    const response = await fetch(url);
 
    return response.json();
 
}