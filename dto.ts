export class YourDto {
    readonly name: string;
    readonly status: boolean;

    constructor(name: string, status: boolean) {
        this.name = name;
        this.status = status;
    }
}
