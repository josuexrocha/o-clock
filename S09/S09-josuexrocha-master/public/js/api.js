// api.js
export const fetchWithErrorHandling = async (url, options) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Une erreur est survenue");
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur:", error);
        throw error;
    }
};
