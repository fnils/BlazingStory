export const setLocalStorageItem = (key, value) => { localStorage.setItem(key, value); };
export const getLocalStorageItem = (key) => (localStorage.getItem(key) || null);
export const copyTextToClipboard = (text) => navigator.clipboard.writeText(text);
const keydown = "keydown";
const click = "click";
export const setupKeyDownReceiver = () => {
    window.addEventListener("message", (event) => {
        if (event.origin !== location.origin)
            return;
        const message = event.data;
        switch (message.action) {
            case keydown:
                const keydownEvent = new KeyboardEvent(keydown, { ...message.eventArgs, ...{ bubbles: true } });
                document.body.dispatchEvent(keydownEvent);
                break;
            case click:
                const clickEvent = new MouseEvent(click, { bubbles: true });
                document.body.dispatchEvent(clickEvent);
                break;
        }
    }, false);
};
