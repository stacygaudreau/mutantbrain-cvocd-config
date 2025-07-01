import { ButtonProps } from "@/type/Button.types";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
    "inline-flex items-center justify-center font-medium disabled:brightness-50 disabled:pointer-events-none",
    {
        variants: {
            variant: {
                light: "bg-mutant-grey text-off-white hover:bg-mutant-grey-highlight",
                dark: "bg-bg-main text-off-white hover:bg-mutant-grey-highlight",
                black: "bg-black text-off-white hover:bg-mutant-green/40",
                highlight: "bg-mutant-orange/90 text-off-white hover:bg-mutant-orange",
            },
            size: {
                sm: "h-8 px-3 text-sm",
                md: "h-10 px-4 text-base",
                lg: "h-12 px-6 text-lg",
            },
            hasShadow: {
                false: null,
                true: "shadow-sm-vert",
            }
        },
        defaultVariants: {
            variant: "light",
            size: "md",
        },
    }
);

const Button: React.FC<ButtonProps> = ({
    className,
    variant,
    size,
    hasShadow,
    children,
    ...props
}) => {
    return (
        <button
            className={buttonVariants({ variant, size, hasShadow, className })}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
