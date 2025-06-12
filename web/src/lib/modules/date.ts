/**
 * Formats a given datetime string into the format "DD-MM-YYYY".
 *
 * @param {string} dateTime - An ISO datetime string to format.
 * @returns {string} The formatted date string.
 * 
 * @example
 * formatDate("2023-11-22T15:37:00.000Z"); 
 * // returns "22-11-2023"
 */
export function formatDate(dateTime: string): string {
    // Create a new date object
    const myDate = new Date(dateTime);

    // Convert date to MM/DD/YYYY format
    const dateArray = myDate.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).split('/');

    // Return formatted string as DD-MM-YYYY
    return `${dateArray[1]}-${dateArray[0]}-${dateArray[2]}`;
}

/**
 * Formats a given datetime string into the format "DD-MM-YYYY, HH:mm (in CET timezone)".
 *
 * @param {string} dateTime - An ISO datetime string to format.
 * @returns {string} The formatted datetime string.
 * 
 * @example
 * formatDateTime("2023-11-22T15:37:00.000Z"); 
 * // returns "22-11-2023, 16:37" (given that CET is UTC+1)
 */
export function formatDateTime(dateTime: string): string {
    // Create a new date object
    const myDate = new Date(dateTime);

    // Convert date to MM/DD/YYYY format
    const dateArray = myDate.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).split('/');

    // Convert time to HH:mm format in CET timezone
    const formattedTime = myDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
        timeZone: 'CET'
    });

    // Return formatted string as DD-MM-YYYY, HH:mm
   return `${dateArray[0]}-${dateArray[1]}-${dateArray[2]}, ${formattedTime}`;
}