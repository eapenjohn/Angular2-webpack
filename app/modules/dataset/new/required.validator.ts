export function RequiredValidator(cntrl) {
    return cntrl.value ? null : {
        RequiredValidator: {
            valid: false
        }
    }
}