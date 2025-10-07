
export const path = "timers";

export const basicStructure= {
    sec: 0,
    run: false,
    dead: false
}

export const basicData = {
    timerFunc: {...basicStructure},
    timerClass: {...basicStructure}
};

export function getLocalDataKey(key){
    const lastData = JSON.parse(localStorage.getItem(path)) || basicData;
    return lastData[key] || basicStructure
}

export function setLocalDataKey(name, keys, values){
    const lastData = JSON.parse(localStorage.getItem(path)) || basicData;
    const item = lastData[name] || {...basicStructure};
    keys.forEach((key, i) => {
        item[key] = values[i];
    })
    lastData[name] = item;
    localStorage.setItem(path, JSON.stringify(lastData));
}
