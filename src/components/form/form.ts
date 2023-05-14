import { validateMail } from "../../utils/validate";
import { formatData } from "./utils";
import { tamplateMsgError } from "./template";

//Validate the current data form element and update
const eventForm = (props: { event: SubmitEvent, target: HTMLElement }) => {
    const data = formatData(props.event);
    const isMail = validateMail((data as any)?.e_mail);

    //get element error message
    const msgError = props.target.querySelector('.form__error');

    //validate render error and already element error message
    if (!isMail && !msgError) {
        props.target.innerHTML += tamplateMsgError();
        return;
    }

    (props.event as any).target.reset();
    
    if (!isMail && msgError) return;

    if (isMail && msgError) msgError.remove();
}


const cntrlFrom = (target: HTMLElement) => {
    target.addEventListener('submit', (event: SubmitEvent) => eventForm({ event, target }));
}

export default cntrlFrom;