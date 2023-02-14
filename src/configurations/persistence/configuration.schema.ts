import * as mongoose from "mongoose";

export const GMenuItem = new mongoose.Schema();
GMenuItem.add({
    href: String,
    text: String,
    subItems: [GMenuItem]
})

export const GColorPallette = new mongoose.Schema({
    primary: String,
    secondary: String,
    tertiary: String,
    quaternary: String,
    primaryFont: String,
    secondaryFont: String
})

export const ConfigurationSchema = new mongoose.Schema({
    companyName: String,
    description: String,
    instaUser: String,
    fbLink: String,
    phoneNumber: String,
    colorPalette: GColorPallette,
    logo: String,
    menu: [GMenuItem]
})