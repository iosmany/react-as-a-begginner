

const handleResponse = async (response: Response) => {
    if (response.ok) {
        return response.json();
    } else {
        const error = await response.json();
        throw new Error(error.message);
    }
}

const handleErrors = (error: Error, action: unknown) => {
    console.error('Error:', error);
    console.error('Action:', action);
    return error;
}

export { handleResponse, handleErrors }