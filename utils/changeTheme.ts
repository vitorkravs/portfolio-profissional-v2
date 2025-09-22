export function changeTheme(color: "cyan" | "orange" | "violet" | "emerald") {
    if (typeof document === "undefined" || !document) return;

    switch (color) {
        case "cyan":
            document.documentElement.classList.remove("orange", "violet", "emerald");
            document.documentElement.classList.add('cyan');
            break;
        case "orange":
            document.documentElement.classList.remove("cyan", "violet", "emerald");
            document.documentElement.classList.add('orange');
            break;
        case "violet":
            document.documentElement.classList.remove("orange", "cyan", "emerald");
            document.documentElement.classList.add('violet');
            break;
        case "emerald":
            document.documentElement.classList.remove("orange", "violet", "cyan");
            document.documentElement.classList.add('emerald');
            break;
    }
}
