import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "light" | "dark" | "black" | "highlight";
    size?: "sm" | "md" | "lg";
    hasShadow?: boolean
}
