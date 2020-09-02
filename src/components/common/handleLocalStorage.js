export function getLocalStorage(localName) {
    return localStorage.getItem(localName) ? JSON.parse(localStorage.getItem(localName)) : [];  
}
export function setLocalStorage(localName,value) {
      localStorage.setItem(localName, JSON.stringify(value)); 
}
