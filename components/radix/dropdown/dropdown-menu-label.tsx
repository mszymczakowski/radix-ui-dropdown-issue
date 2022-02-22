import { DropdownMenuLabel as RadixDropdownMenuLabel, DropdownMenuLabelProps } from "@radix-ui/react-dropdown-menu";
import React, { ReactElement } from "react";
import { reduceProps } from "../../../lib/utilities/reduce-props";

type Props = {
    content: ReactElement | string;
    textClassName?: string;
    leftSlot?: ReactElement;
    rightSlot?: ReactElement;
} & DropdownMenuLabelProps;

function DropdownMenuLabelComponent(props: Props) {
    const dropdownMenuLabelProps: DropdownMenuLabelProps = reduceProps(props, [
        "content",
        "textClassName",
        "leftSlot",
        "rightSlot",
        "asChild",
    ]);

    return (
        <RadixDropdownMenuLabel asChild {...dropdownMenuLabelProps}>
            <div className="flex items-center w-full px-4 py-2 text-gray-700 outline-none">
                {!!props.leftSlot && props.leftSlot}
                <span className={`flex-1 text-left ${props.textClassName || ""}`}>{props.content}</span>
                {!!props.rightSlot && props.rightSlot}
            </div>
        </RadixDropdownMenuLabel>
    );
}

export const DropdownMenuLabel = DropdownMenuLabelComponent;
export const CustomDropdownMenuLabel = DropdownMenuLabelComponent;
