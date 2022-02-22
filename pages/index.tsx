import { ChevronDownIcon } from "@heroicons/react/solid";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import type { NextPage } from "next";
import { PropsWithChildren, useState } from "react";
import { CustomDropdownMenuContent } from "../components/radix/dropdown/dropdown-menu-content";
import { CustomDropdownMenuItem } from "../components/radix/dropdown/dropdown-menu-item";
import { CustomDropdownMenuLabel } from "../components/radix/dropdown/dropdown-menu-label";

const dropdownValues: string[] = [
    "foo",
    "bar",
    "baz",
    "this is test",
    "test value 2",
    "test value 3",
    "zzz",
    "abcdefghijklmnopqrstuvwxyz",
];

type TestDropdownMenuProps = PropsWithChildren<{
    filterValue: string;
    setFilterValue: (text: string) => void;
}>;

const TestDropdownMenu = (props: TestDropdownMenuProps) => {
    return (
        <DropdownMenu onOpenChange={(open) => (open ? null : props.setFilterValue(""))}>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center px-2 py-1 bg-gray-100 border">
                    Open <ChevronDownIcon className="w-5 h-5" />
                </button>
            </DropdownMenuTrigger>

            <CustomDropdownMenuContent align="start">
                <input
                    className="w-full p-2 mb-2 border-b"
                    type="text"
                    placeholder="Search..."
                    value={props.filterValue}
                    onChange={(event) => props.setFilterValue(event.target.value)}
                />
                {props.children}
            </CustomDropdownMenuContent>
        </DropdownMenu>
    );
};

function getFilteredDropdownValues(filterValue: string): string[] {
    const trimmedFilterValue = filterValue.trim().toLowerCase();
    return dropdownValues.filter((value) => value.toLowerCase().indexOf(trimmedFilterValue) !== -1);
}

const Home: NextPage = () => {
    const [itemDropdownFilter, setItemDropdownFilter] = useState<string>("");
    const [labelDropdownFilter, setLabelDropdownFilter] = useState<string>("");

    return (
        <div className="flex-col">
            <div className="flex-col mb-8">
                <h1 className="text-2xl">Issue:</h1>
                <div>Type first letter of any available item in search field to see the difference in behavior.</div>
                <div>
                    Search field in dropdown that is using radix <span className="font-bold">DropdownMenuItem</span> items loses
                    its focus when you use as the first letter an letter that any option begins with, so letters: f, b, t z, a.
                    Any other letter used is working fine, so the field does not blur. Also works fine when you manually focus the
                    field again after and type more letters in the filter field.
                </div>
                <div>
                    Search field in dropdown that is using radix <span className="font-bold">DropdownMenuLabel</span> works
                    perfectly fine in all cases described above.
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex-col">
                    <h2 className="mb-2 font-bold">Using DropdownMenuItem</h2>
                    <TestDropdownMenu filterValue={itemDropdownFilter} setFilterValue={setItemDropdownFilter}>
                        {getFilteredDropdownValues(itemDropdownFilter).map((value) => (
                            <CustomDropdownMenuItem
                                key={value}
                                content={value}
                                onBlur={(event) => console.warn("CustomDropdownMenuItem onBlur", event)}
                            />
                        ))}
                    </TestDropdownMenu>
                </div>
                <div className="flex-col">
                    <h2 className="mb-2 font-bold">Using DropdownMenuLabel</h2>
                    <TestDropdownMenu filterValue={labelDropdownFilter} setFilterValue={setLabelDropdownFilter}>
                        {getFilteredDropdownValues(labelDropdownFilter).map((value) => (
                            <CustomDropdownMenuLabel
                                key={value}
                                content={value}
                                onBlur={(event) => console.warn("CustomDropdownMenuLabel onBlur", event)}
                            />
                        ))}
                    </TestDropdownMenu>
                </div>
            </div>
        </div>
    );
};

export default Home;
