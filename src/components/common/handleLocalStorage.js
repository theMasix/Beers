export function getLocalStorage(localName) {
    const itemStr = localStorage.getItem(localName)
    if (!itemStr) {
        return []
    }
    const localArr = JSON.parse(itemStr)
    const now = new Date();
    const tempArr = [];
    for (let item of localArr) {
        if (now.getTime() < item.expiry) {
            tempArr.push(item);
        }
    }
    return tempArr.length === 0 ? localArr : tempArr;
}
export function setLocalStorage(localName, value) {
    localStorage.setItem(localName, JSON.stringify(value));
}
