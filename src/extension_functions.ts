
export function sniff_Object(this: any, 
    sniffing_path: string | string[],
    absent_func: (last_available_step: any) => any = () => false,
    present_func: (last_available_step: any) => any = () => true,
): any {

    const pave_path = Array.isArray(sniffing_path)
        ? sniffing_path
        : sniffing_path.split(".");
    let current_step = this;

    for (const next_step of pave_path) {
        if ((current_step as any)[next_step] !== undefined) {
            current_step = (current_step as any)[next_step];
        } else {
            return absent_func(current_step);
        }
    }
    return present_func(current_step);
};

export function pave_Object(this: any, 
    pave_path: string | string[],
    path_occupied_call: () => any = () => Object,
    path_paved_call: () => any = () => Object,
): any {

    const leading_steps = Array.isArray(pave_path)
        ? pave_path
        : pave_path.split(".");
    const last_step: string = leading_steps.pop() as string;
    let current_step = this;

    const pave_LastElem = (elem: any) => {
        if (elem[last_step] === undefined) {
            elem[last_step] = path_paved_call() || {}; // will cause problems if path_paved_call returns false
            return true;
        } else {
            const resp = path_occupied_call();
            if (resp) { elem[last_step] = resp; }
            return false;
        }
    };

    if (leading_steps.length > 0) {
        current_step.sniff(leading_steps,
            () => {
                for (const next_step of leading_steps) {

                    (current_step as any)[next_step] =
                        (current_step as any)[next_step]
                        ? (current_step as any)[next_step]
                        : {};

                    current_step = (current_step as any)[next_step];
                }
                return pave_LastElem(current_step);
            },
            (paved_leading_path: any) => {
                return pave_LastElem(paved_leading_path);
            },
        );
    } else {
        return pave_LastElem(current_step);
    }
};

export function is_ObjectEmpty(this: any) {
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
};

export function is_ObjectObject(this: any) {
    return this === Object(this);
};

export function has_ObjectFunction(this: any, func_name: string): boolean {
    return typeof (this as any)[func_name] === "function";
};

