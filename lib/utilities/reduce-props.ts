/**
 * Used to reduce properties from a TSrc object to have only properties from TDest.
 * @param value Value to reduce properties from
 * @param properties Array of property names to remove from the object.
 * @returns Object with reduced properties.
 */
export function reduceProps<TSrc extends TDest, TDest>(value: TSrc, properties: Array<keyof TSrc>) {
    let result = {} as TDest;
    for (const property of Object.keys(value) as Array<keyof TDest>) {
        if (properties.indexOf(property) !== -1) continue;

        result[property] = value[property];
    }

    return result;
}

/*
Example of use:
interface ITest1 {
    name: string;
    age: number;
}

interface ITest2 extends ITest1 {
    surname: string;
}

interface ITest3 extends ITest2 {
    city: string;
}

const fullObject: ITest3 = {
    name: "John",
    surname: "Doe",
    age: 25,
    city: "Warsaw"
};

const objectAs2 = reduceProps<ITest3, ITest2>(fullObject, ["city"]);
const objectAs1 = reduceProps<ITest3, ITest1>(fullObject, ["city", "surname"]);

Logger.info("fullObject", JSON.stringify(fullObject, null, 2));
Logger.info("objectAs1 (will have only name and age)", JSON.stringify(objectAs1, null, 2));
Logger.info("objectAs2 (will have name, age and surname)", JSON.stringify(objectAs2, null, 2));
*/
