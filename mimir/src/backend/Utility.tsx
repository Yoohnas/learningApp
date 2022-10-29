export const handleError = (response: Response) => {
    if (!response.ok) {
        throw new Error(`Error-Status: ${response.status}`)
    }
}