export function classnames(classes) {
    const names = []

    for (const [key, value] of Object.entries(classes)) {
        if (value) {
            names.push(key);
        }
    }

    return names.join(" ");
}