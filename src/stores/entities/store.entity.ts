export interface GColorPallette {
    primary: string,
    secondary: string,
    tertiary: string,
    quaternary: string,
    primaryFont: string,
    secondaryFont: string
}
export interface GMenuItem {
    href: string,
    text: string,
    subItems: GMenuItem []
}

export class Store {
    get categories(): string[] {
        return this._categories;
    }
    get userEmail(): string {
        return this._userEmail;
    }
    constructor() {
    this.companyName = "";
    this.description = "";
    this.instaUser = "";
    this.fbLink = "";
    this.phoneNumber = "";
    this.colorPalette = {} as GColorPallette;
    this.logo = "";
    this.menu = [];
    this._userEmail = "";
    this.username = "";
    this._categories = [];
    }
    private companyName: string;
    private description: string;
    private instaUser: string;
    private fbLink: string;
    private phoneNumber: string;
    private colorPalette: GColorPallette;
    private logo: string;
    private menu: GMenuItem[];
    private _userEmail: string;
    private username: string;
    private _categories: string[]


}
