

class CategoryApi {
    getCategories() {
        return fetch('<some dummy url>')
            .then((response) => {
                return response.json();
            })
            .catch(error => {
                return error;
            });
    }
}

export const categoryApi = new CategoryApi();