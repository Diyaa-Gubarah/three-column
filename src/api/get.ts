export const fetchData = async <T>(endpoint: string): Promise<T> => {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};
