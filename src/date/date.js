export function setNewDate(date) {
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear()

    return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes} ${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year}` 
    
}
