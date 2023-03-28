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

export interface Store {
    companyName: string;
    description: string;
    instaUser: string;
    fbLink: string;
    phoneNumber: string;
    colorPalette: GColorPallette;
    logo: string;
    menu: GMenuItem[];
    userEmail: string;
    username: string;
    categories: string[]
}
