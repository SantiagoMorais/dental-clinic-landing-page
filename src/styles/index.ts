import { tv } from "tailwind-variants";

export const listItem = tv({
  base: "text-nowrap group cursor-pointer w-fit relative",
  variants: {
    hoverEffect: {
      primary:
        "after:absolute after:w-full after:-bottom-1 after:left-0 after:h-0.25 after:bg-secondary-color after:scale-x-0 after:duration-500 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform",
    },
  },
});

export const navLink = tv({
  base: "duration-500 group-hover:drop-shadow-white",
});

export const button = tv({
  base: "px-6 py-2 rounded-full text-center cursor-pointer duration-300 text-nowrap",
  variants: {
    color: {
      primary: "bg-secondary-color",
    },
    hoverEffect: {
      primary: "hover:shadow-all-around hover:ring-1",
    },
  },
});
