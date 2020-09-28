/**
* 存储localStorage
*/
export const setLocalStorage = (name, content) => {
    if(!name) return;
    if(typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    localStorage.setItem(name, content);
}

/**
* 获取localStorage
*/
export const getLocalStorage = name => {
    if(!name) return;
    return localStorage.getItem(name);
}

/**
* 删除localStorage
*/
export const removeLocalStorage = name => {
    if(!name) return;
    localStorage.removeItem(name);
}

/**
* 存储sessionStorage
*/
export const setSessionStorage = (name, content) => {
    if(!name) return;
    if(typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    sessionStorage.setItem(name, content);
}

/**
* 获取sessionStorage
*/
export const getSessionStorage = name => {
    if(!name) return;
    return sessionStorage.getItem(name);
}

/**
* 删除sessionStorage
*/
export const removeSessionStorage = name => {
    if(!name) return;
    sessionStorage.removeItem(name);
}
