import React from "react";
import clsx from "clsx";
import { forwardRef } from "react";

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}



const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
    ({ as: Comp = "section", className, children, ...restProps }, ref) => {
        return (
            <Comp ref={ref}
                className={clsx("px-4 py-8 sm:py-4 md:px-6 md:py-12 lg:py-14", className)}
                {...restProps}>
                <div className="mx-auto w-full max-w-[70rem]">
                    {children}
                </div>

            </Comp>
        )
    }
)

Bounded.displayName = "Bounded"

export default Bounded;