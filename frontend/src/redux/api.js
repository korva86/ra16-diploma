export async function fetchCatalogList(id, offset, search) {
    const q = new URLSearchParams({
        offset: offset,
        categoryId: id,
        q: search,
    });

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/items?${q}`);
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json()
}

export async function fetchCatalogItem(id) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/items/${id}`);
    if (!response.ok) {
        if (response.status === 404) {
            document.location.href = '/404'
        }
        throw new Error(response.statusText)
    }
    return await response.json()
}

export async function fetchCategories() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/categories`);
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json()
}

export async function fetchTopSales() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/top-sales`);
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return await response.json()
}

export async function sendOrder(cart) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/order`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cart),
    });
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    try {
        return await response.json()
    } catch (e) {
        return
    }

}