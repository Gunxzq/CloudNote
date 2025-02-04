function debounce(func, delay) {
    let timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, arguments);
        }, delay);
    };
}

async function stickup(paramer){
    console.log("内容"+paramer)
    let ClipboardItems =await navigator.clipboard.read()
    for(const item of ClipboardItems){
        for (const type of item.types) {
            const blob = await item.getType(type);
            // console.log(URL.createObjectURL(blob));
            console.log(item)
            console.log(blob)
          }
    }
}













export {
    debounce,
    stickup
}