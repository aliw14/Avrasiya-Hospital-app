import { StyleSheet, TextStyle } from 'react-native';
import { normalize } from '../theme/metrics';
import { colors } from '../theme/colors';


export const montserratFonts = {
    400: 'Montserrat-Regular',
    600: 'Montserrat-SemiBold',
    700: 'Montserrat-Bold',
};

// const fontSize46 = normalize('font', 46);
// const fontSize32 = normalize('font', 32);
// const fontSize24 = normalize('font', 24);
const fontSize18 = normalize('font', 18);
const fontSize16 = normalize('font', 16);
const fontSize14 = normalize('font', 14);
const fontSize12 = normalize('font', 12);

const lineHeight18 = fontSize18;

const commonFontStyling: TextStyle = {
    includeFontPadding: false,
    padding: 0,
    color: colors.ink.darkest,
};

export const TypographyStyles = StyleSheet.create({
    // title1: {
    //     fontSize: fontSize46,
    //     fontFamily: bebasFonts[700],
    //     ...commonFontStyling,
    // },
    // title2: {
    //     fontSize: fontSize32,
    //     fontFamily: bebasFonts[700],
    //     ...commonFontStyling,
    // },
    // title3: {
    //     fontSize: fontSize24,
    //     fontFamily: bebasFonts[700],
    //     ...commonFontStyling,
    // },
    LargeNoneBold: {
        fontSize: fontSize18,
        fontFamily: montserratFonts[700],
        ...commonFontStyling,
    },
    LargeNoneSemibold: {
        fontSize: fontSize18,
        fontFamily: montserratFonts[600],
        ...commonFontStyling,
    },
    LargeNoneRegular: {
        fontSize: fontSize18,
        fontFamily: montserratFonts[400],
        ...commonFontStyling,
    },
    RegularNoneSemiBold: {
        fontSize: fontSize16,
        fontFamily: montserratFonts[600],
        ...commonFontStyling,
    },
    RegularNoneBold: {
        fontSize: fontSize16,
        fontFamily: montserratFonts[700],
        ...commonFontStyling,
    },
    RegularNoneRegular: {
        fontSize: fontSize16,
        fontFamily: montserratFonts[400],
        ...commonFontStyling,
    },
    RegularNormalSemiBold: {
        fontSize: fontSize16,
        fontFamily: montserratFonts[600],
        ...commonFontStyling,
    },
    RegularNormalRegular: {
        fontSize: fontSize16,
        fontFamily: montserratFonts[400],
        ...commonFontStyling,
    },

    RegularTightSemibold: {
        fontSize: fontSize16,
        fontFamily: montserratFonts[600],
        ...commonFontStyling,
    },
    RegularTightRegular: {
        fontSize: fontSize16,
        fontFamily: montserratFonts[400],
        ...commonFontStyling,
    },
    SmallNoneSemibold: {
        fontSize: fontSize14,
        fontFamily: montserratFonts[600],
        ...commonFontStyling,
    },
    SmallNoneBold: {
        fontSize: fontSize14,
        fontFamily: montserratFonts[700],
        ...commonFontStyling,
    },
    SmallNoneRegular: {
        fontSize: fontSize14,
        fontFamily: montserratFonts[400],
        ...commonFontStyling,
    },
    SmallNormalRegular: {
        fontFamily: montserratFonts[400],
        ...commonFontStyling,
    },
    TinyNormalRegular: {
        fontSize: fontSize12,
        fontFamily: montserratFonts[400],
        ...commonFontStyling,
    },
    TinyNoneSemibold: {
        fontSize: fontSize12,
        fontFamily: montserratFonts[600],
        ...commonFontStyling,
    },
    TinyNoneBold: {
        fontSize: fontSize12,
        fontFamily: montserratFonts[700],
        ...commonFontStyling,
    },
    TinyNormalBold: {
        fontSize: fontSize12,
        fontFamily: montserratFonts[700],
        lineHeight: lineHeight18
    },
    SmallTightRegular: {
        fontSize: fontSize14,
        fontFamily: montserratFonts[400],
        ...commonFontStyling,
    },
});
