export const showAmount = amount => amount || '0.00';

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}
// eslint-disable-next-line import/prefer-default-export
export function copyTextToClipboard(text) {
    return new Promise((resolve, reject) => {
        try {
            if (!navigator.clipboard) {
                fallbackCopyTextToClipboard(text);
                return;
            }
            navigator.clipboard.writeText(text).then(resolve, reject);
            resolve();
        } catch (err) {
            throw new Error(err);
        }
    });
}
