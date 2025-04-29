export function changeTheme(color: "cyan" | "orange" | "violet" | "emerald") {
    switch (color) {
        case "cyan":
            document.documentElement.classList.remove(
                "orange",
                "violet",
                "emerald"
            );
            break;
        case "orange":
            document.documentElement.classList.remove(
                "cyan",
                "violet",
                "emerald"
            );
            break;
        case "violet":
            document.documentElement.classList.remove(
                "orange",
                "cyan",
                "emerald"
            );
            break;
        case "emerald":
            document.documentElement.classList.remove(
                "orange",
                "violet",
                "cyan"
            );
            break;
    }
}