import { DropdownMenuItem as RadixDropdownMenuItem, DropdownMenuItemProps } from "@radix-ui/react-dropdown-menu";
import React, { ReactElement } from "react";
import { reduceProps } from "../../../lib/utilities/reduce-props";

type Props = {
    content: ReactElement | string;
    textClassName?: string;
    leftSlot?: ReactElement;
    rightSlot?: ReactElement;
} & DropdownMenuItemProps;

function DropdownMenuItemComponent(props: Props) {
    const dropdownMenuItemProps: DropdownMenuItemProps = reduceProps(props, [
        "content",
        "textClassName",
        "leftSlot",
        "rightSlot",
        "asChild",
    ]);

    return (
        <RadixDropdownMenuItem asChild {...dropdownMenuItemProps}>
            <button className="flex items-center w-full px-4 py-2 text-gray-700 outline-none hover:bg-gray-100 hover:text-gray-900">
                {!!props.leftSlot && props.leftSlot}
                <span className={`flex-1 text-left ${props.textClassName || ""}`}>{props.content}</span>
                {!!props.rightSlot && props.rightSlot}
            </button>
        </RadixDropdownMenuItem>
    );
}

export const DropdownMenuItem = DropdownMenuItemComponent;
export const CustomDropdownMenuItem = DropdownMenuItemComponent;
