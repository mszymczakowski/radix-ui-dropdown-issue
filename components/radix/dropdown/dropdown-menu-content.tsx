import { DropdownMenuContent as RadixDropdownMenuContent, DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { reduceProps } from "../../../lib/utilities/reduce-props";

type Props = React.PropsWithChildren<{} & DropdownMenuContentProps>;

function DropdownMenuContentComponent(props: Props) {
    const dropdownMenuContentProps: DropdownMenuContentProps = reduceProps(props, ["children"]);

    return (
        <RadixDropdownMenuContent
            className="w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            {...dropdownMenuContentProps}
        >
            {props.children}
        </RadixDropdownMenuContent>
    );
}

export const DropdownMenuContent = DropdownMenuContentComponent;
export const CustomDropdownMenuContent = DropdownMenuContentComponent;
