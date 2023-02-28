export class GenericGlistoreException {
    #message: string;

    constructor(message: string) {
        this.#message = message;
    }

    toString() {
        return `
        [ ERROR ] Glistore Exception raised with message ${this.#message}
        `
    }
}
