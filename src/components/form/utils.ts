import { isNum } from "../../utils/validate";

//Constructs an object with the data collected by the submit event
export const formatData = (event: SubmitEvent) => {
    event.preventDefault();

    //Define the object properties form
    const keys = Object.keys((event?.currentTarget as any)?.elements);
    const objectData: { [key: string]: number | string | boolean } = {};

    //Filter and fill the object with the values ​​of the form
    keys.forEach((key: string) => {
        if (!isNum(key)) {
            objectData[key] = (event?.currentTarget as any)?.elements[key].value;
        }
    });

    return objectData;
}