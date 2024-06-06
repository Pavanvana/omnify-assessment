/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-black": "#000000",
        "base-white": "#FFFFFF",
        "gray-25": "#FCFCFD",
        "gray-50": "#F9FAFB",
        "gray-100": "#F2F4F7",
        "gray-200": "#EAECF0",
        "gray-300": "#D0D5DD",
        "gray-400": "#98A2B3",
        "gray-500": "#667085",
        "gray-600": "#475467",
        "gray-700": "#344054",
        "gray-800": "#1D2939",
        "gray-900": "#101828",
        "primary-25": "#F5FAFF",
        "primary-50": "#EFF8FF",
        "primary-100": "#D1E9FF",
        "primary-200": "#B2DDFF",
        "primary-300": "#84CAFF",
        "primary-400": "#53B1FD",
        "primary-500": "#2E90FA",
        "primary-600": "#1570EF",
        "primary-700": "#175CD3",
        "primary-800": "#1849A9",
        "primary-900": "#194185",
        "error-25": "#FFFBFA",
        "error-50": "#FEF3F2",
        "error-100": "#FEE4E2",
        "error-200": "#FECDCA",
        "error-300": "#FDA29B",
        "error-400": "#F97066",
        "error-500": "#F04438",
        "error-600": "#D92D20",
        "error-700": "#B42318",
        "error-800": "#912018",
        "error-900": "#7A271A",
        "warning-25": "#FFFCF5",
        "warning-50": "#FFFAEB",
        "warning-100": "#FEF0C7",
        "warning-200": "#FEDF89",
        "warning-300": "#FEC84B",
        "warning-400": "#FDB022",
        "warning-500": "#F79009",
        "warning-600": "#DC6803",
        "warning-700": "#B54708",
        "warning-800": "#93370D",
        "warning-900": "#7A2E0E",
        "success-25": "#F6FEF9",
        "success-50": "#ECFDF3",
        "success-100": "#D1FADF",
        "success-200": "#A6F4C5",
        "success-300": "#6CE9A6",
        "success-400": "#32D583",
        "success-500": "#12B76A",
        "success-600": "#039855",
        "success-700": "#027A48",
        "success-800": "#05603A",
        "success-900": "#054F31",
        "moss-25": "#FAFDF7",
        "moss-50": "#F5FBEE",
        "moss-100": "#E6F4D7",
        "moss-200": "#CEEAB0",
        "moss-300": "#ACDC79",
        "moss-400": "#86CB3C",
        "moss-500": "#669F2A",
        "moss-600": "#4F7A21",
        "moss-700": "#3F621A",
        "moss-800": "#335015",
        "moss-900": "#2B4212",
        "green-light-25": "#FAFEF5",
        "green-light-50": "#F3FEE7",
        "green-light-100": "#E3FBCC",
        "green-light-200": "#D0F8AB",
        "green-light-300": "#A6EF67",
        "green-light-400": "#85E13A",
        "green-light-500": "#66C61C",
        "green-light-600": "#4CA30D",
        "green-light-700": "#3B7C0F",
        "green-light-800": "#326212",
        "green-light-900": "#2B5314",
        "green-25": "#F6FEF9",
        "green-50": "#EDFCF2",
        "green-100": "#D3F8DF",
        "green-200": "#AAF0C4",
        "green-300": "#73E2A3",
        "green-400": "#3CCB7F",
        "green-500": "#16B364",
        "green-600": "#099250",
        "green-700": "#087443",
        "green-800": "#095C37",
        "green-900": "#084C2E",
        "teal-25": "#F6FEFC",
        "teal-50": "#F0FDF9",
        "teal-100": "#CCFBEF",
        "teal-200": "#99F6E0",
        "teal-300": "#5FE9D0",
        "teal-400": "#2ED3B7",
        "teal-500": "#15B79E",
        "teal-600": "#0E9384",
        "teal-700": "#107569",
        "teal-800": "#125D56",
        "teal-900": "#134E48",
        "cyan-25": "#F5FEFF",
        "cyan-50": "#ECFDFF",
        "cyan-100": "#CFF9FE",
        "cyan-200": "#A5F0FC",
        "cyan-300": "#67E3F9",
        "cyan-400": "#22CCEE",
        "cyan-500": "#06AED4",
        "cyan-600": "#088AB2",
        "cyan-700": "#0E7090",
        "cyan-800": "#155B75",
        "cyan-900": "#164C63",
        "blue-light-25": "#F5FBFF",
        "blue-light-50": "#F0F9FF",
        "blue-light-100": "#E0F2FE",
        "blue-light-200": "#B9E6FE",
        "blue-light-300": "#7CD4FD",
        "blue-light-400": "#36BFFA",
        "blue-light-500": "#0BA5EC",
        "blue-light-600": "#0086C9",
        "blue-light-700": "#026AA2",
        "blue-light-800": "#065986",
        "blue-light-900": "#0B4A6F",
        "blue-25": "#F5FAFF",
        "blue-50": "#EFF8FF",
        "blue-100": "#D1E9FF",
        "blue-200": "#B2DDFF",
        "blue-300": "#84CAFF",
        "blue-400": "#53B1FD",
        "blue-500": "#2E90FA",
        "blue-600": "#1570EF",
        "blue-700": "#175CD3",
        "blue-800": "#1849A9",
        "blue-900": "#194185",
        "blue-dark-25": "#F5F8FF",
        "blue-dark-50": "#EFF4FF",
        "blue-dark-100": "#D1E0FF",
        "blue-dark-200": "#B2CCFF",
        "blue-dark-300": "#84ADFF",
        "blue-dark-400": "#528BFF",
        "blue-dark-500": "#2970FF",
        "blue-dark-600": "#155EEF",
        "blue-dark-700": "#004EEB",
        "blue-dark-800": "#0040C1",
        "blue-dark-900": "#00359E",
        "indigo-25": "#F5F8FF",
        "indigo-50": "#EEF4FF",
        "indigo-100": "#E0EAFF",
        "indigo-200": "#C7D7FE",
        "indigo-300": "#A4BCFD",
        "indigo-400": "#8098F9",
        "indigo-500": "#6172F3",
        "indigo-600": "#444CE7",
        "indigo-700": "#3538CD",
        "indigo-800": "#2D31A6",
        "indigo-900": "#2D3282",
        "violet-25": "#FBFAFF",
        "violet-50": "#F5F3FF",
        "violet-100": "#ECE9FE",
        "violet-200": "#DDD6FE",
        "violet-300": "#C3B5FD",
        "violet-400": "#A48AFB",
        "violet-500": "#875BF7",
        "violet-600": "#7839EE",
        "violet-700": "#6927DA",
        "violet-800": "#5720B7",
        "violet-900": "#491C96",
        "purple-25": "#FAFAFF",
        "purple-50": "#F4F3FF",
        "purple-100": "#EBE9FE",
        "purple-200": "#D9D6FE",
        "purple-300": "#BDB4FE",
        "purple-400": "#9B8AFB",
        "purple-500": "#7A5AF8",
        "purple-600": "#6938EF",
        "purple-700": "#5925DC",
        "purple-800": "#4A1FB8",
        "purple-900": "#3E1C96",
        "fuchsia-25": "#FEFAFF",
        "fuchsia-50": "#FDF4FF",
        "fuchsia-100": "#FBE8FF",
        "fuchsia-200": "#F6D0FE",
        "fuchsia-300": "#EEAAFD",
        "fuchsia-400": "#E478FA",
        "fuchsia-500": "#D444F1",
        "fuchsia-600": "#BA24D5",
        "fuchsia-700": "#9F1AB1",
        "fuchsia-800": "#821890",
        "fuchsia-900": "#6F1877",
        "pink-25": "#FEF6FB",
        "pink-50": "#FDF2FA",
        "pink-100": "#FCE7F6",
        "pink-200": "#FCCEEE",
        "pink-300": "#FAA7E0",
        "pink-400": "#F670C7",
        "pink-500": "#EE46BC",
        "pink-600": "#DD2590",
        "pink-700": "#C11574",
        "pink-800": "#9E165F",
        "pink-900": "#851651",
        "rose-25": "#FFF5F6",
        "rose-50": "#FFF1F3",
        "rose-100": "#FFE4E8",
        "rose-200": "#FECDD6",
        "rose-300": "#FEA3B4",
        "rose-400": "#FD6F8E",
        "rose-500": "#F63D68",
        "rose-600": "#E31B54",
        "rose-700": "#C01048",
        "rose-800": "#A11043",
        "rose-900": "#89123E",
        "orange-dark-25": "#FFF9F5",
        "orange-dark-50": "#FFF4ED",
        "orange-dark-100": "#FFE6D5",
        "orange-dark-200": "#FFD6AE",
        "orange-dark-300": "#FF9C66",
        "orange-dark-400": "#FF692E",
        "orange-dark-500": "#FF4405",
        "orange-dark-600": "#E62E05",
        "orange-dark-700": "#BC1B06",
        "orange-dark-800": "#97180C",
        "orange-dark-900": "#771A0D",
        "orange-25": "#FEFAF5",
        "orange-50": "#FEF6EE",
        "orange-100": "#FDEAD7",
        "orange-200": "#F9DBAF",
        "orange-300": "#F7B27A",
        "orange-400": "#F38744",
        "orange-500": "#EF6820",
        "orange-600": "#E04F16",
        "orange-700": "#B93815",
        "orange-800": "#932F19",
        "orange-900": "#772917",
        "yellow-25": "#FEFDF0",
        "yellow-50": "#FEFBE8",
        "yellow-100": "#FEF7C3",
        "yellow-200": "#FEEE95",
        "yellow-300": "#FDE272",
        "yellow-400": "#FAC515",
        "yellow-500": "#EAAA08",
        "yellow-600": "#CA8504",
        "yellow-700": "#A15C07",
        "yellow-800": "#854A0E",
        "yellow-900": "#713B12",
        "#343C6A": "#343C6A",
        "#E2E2E2": "#E2E2E2",
      },
      spacing: {
        px: "1px",
        0: "0",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
        10: "40px",
        12: "48px",
        16: "64px",
        20: "80px",
        24: "96px",
        32: "128px",
        40: "160px",
        48: "192px",
        56: "224px",
        64: "256px",
        "1.5px": "1.5px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "8px": "8px",
        "10px": "10px",
        "11px": "11px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "17px": "17px",
        "18px": "18px",
        "19px": "19px",
        "20px": "20px",
        "21px": "21px",
        "22px": "22px",
        "23px": "23px",
        "24px": "24px",
        "25px": "25px",
        "26px": "26px",
        "27px": "27px",
        "28px": "28px",
        "30px": "30px",
        "32px": "32px",
        "35px": "35px",
        "36px": "36px",
        "38px": "38px",
        "39px": "39px",
        "40px": "40px",
        "42px": "42px",
        "44px": "44px",
        "50px": "50px",
        "60px": "60px",
        "80px": "80px",
        "160px": "160px",
        "320px": "320px",
        "328px": "328px",
        "56px": "56px",
        "96px": "96px",
        "104px": "104px",
        "52px": "52px",
        "54px": "54px",
        "62px": "62px",
        "345px": "345px",
        "282px": "282px",
        "1100px": "1100px",
        "80vh": "80vh",
        "60vh": "60vh",
        "70vw": "70vw",
        "58vw": "58vw",
        "60vw": "60vw",
        "100vh": "100vh",
        "65vh": "65vh",
        "100vw": "100vw",
      },
      backgroundColor: (theme) => theme("colors"),
      backgroundOpacity: (theme) => theme("opacity"),
      backgroundPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        default: theme("colors.gray.300", "currentColor"),
      }),
      borderOpacity: (theme) => theme("opacity"),
      borderRadius: {
        none: "0",
        sm: "2px",
        default: "4px",
        md: "6px",
        lg: "8px",
        full: "9999px",
        "2px": "2px",
        "4px": "4px",
        "6px": "6px",
        "8px": "8px",
        "10px": "10px",
        "12px": "12px",
        "14px": "14px",
        "16px": "16px",
        "20px": "20px",
        "24px": "24px",
        "25px": "25px",
      },
      borderWidth: {
        default: "1px",
        1: "1px",
        0: "0",
        2: "2px",
        4: "4px",
        8: "8px",
        "1.5px": "1.5px",
        "16px": "16px",
      },
      boxShadow: {
        custom: "0px 2px 3px 0px rgba(100, 116, 139, 0.05)",
        xs: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        defaultFocusedShadow:
          "0px 0px 0px 4px #D1E9FF, 0px 1px 2px rgba(16, 24, 40, 0.05)",
        errorFocusedShadow:
          "0px 0px 0px 4px #FEE4E2, 0px 1px 2px rgba(16, 24, 40, 0.05)",
        none: "none",
        "custom-xs": "0px 1px 2px rgba(16, 24, 40, 0.05)",
        "custom-sm":
          "0px 1px 2px rgba(16, 24, 40, 0.06), 0px 1px 3px rgba(16, 24, 40, 0.1)",
        "custom-md":
          "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.1)",
        "custom-lg":
          "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
        "custom-xl":
          "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
        "custom-2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
        "custom-3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",
      },
      outline: {
        none: "none !important",
        outline: ["focus-within"],
      },
      cursor: {
        auto: "auto",
        default: "default",
        pointer: "pointer",
        wait: "wait",
        text: "text",
        move: "move",
        help: "help",
        "not-allowed": "not-allowed",
      },
      pointerEvents: {
        none: "none",
      },
      divideColor: (theme) => theme("borderColor"),
      divideOpacity: (theme) => theme("borderOpacity"),
      divideWidth: (theme) => theme("borderWidth"),
      fill: {
        current: "currentColor",
      },
      flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        none: "none",
      },
      flexGrow: {
        0: "0",
        default: "1",
      },
      flexShrink: {
        0: "0",
        default: "1",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "20px": "20px",
        "24px": "24px",
        "26px": "26px",
        "30px": "30px",
        "36px": "36px",
        "48px": "48px",
        "60px": "60px",
        "72px": "72px",
        "98px": "98px",
        "128px": "128px",
      },
      fontWeight: {
        hairline: "100",
        thin: "100",
        light: "300",
        normal: "normal",
        medium: "500",
        semibold: "600",
        bold: "bold",
        extrabold: "800",
        black: "900",
        extralight: "200",
      },
      height: (theme) => ({
        auto: "auto",
        ...theme("spacing"),
        full: "100%",
        screen: "100vh",
        "90vh": "90vh",
      }),
      inset: {
        0: "0",
        auto: "auto",
        "10px": "10px",
        5: "5%",
        "64px": "64px",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
        "0.4px": "0.4px",
        "0.2px": "0.2px",
        "negative-0.02em": "-0.32px",
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        4: "1.33",
        5: "1.43",
        6: "1.5",
        7: "1.56",
        8: "1.33",
        9: "1.2",
        10: "1.11",
        "18px": "18px",
        "30px": "30px",
        "38px": "38px",
        "44px": "44px",
        "60px": "60px",
        "72px": "72px",
        "90px": "90px",
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
      },
      margin: (theme, { negative }) => ({
        auto: "auto",
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      maxHeight: (theme) => ({
        ...theme("spacing"),
        full: "100%",
        screen: "100vh",
        "0px": "0px",
        "24px": "24px",
        "424.5px": "424.5px",
        "90vh": "90vh",
        "85vh": "85vh",
        "75vh": "75vh",
        "67vh": "67vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "250px": "250px",
        "530px": "530px",
        "60vh": "60vh",
      }),
      maxWidth: (theme, { breakpoints }) => ({
        unset: "unset",
        none: "none",
        xs: "320px",
        sm: "384px",
        md: "448px",
        lg: "512px",
        xl: "576px",
        "2xl": "672px",
        "3xl": "768px",
        "4xl": "896px",
        "5xl": "1024px",
        "6xl": "1152px",
        full: "100%",
        "250px": "250px",
        "400px": "400px",
        "125px": "125px",
        "145px": "145px",
        "166px": "166px",
        "112px": "112px",
        "85vw": "85vw",
        "138px": "138px",
        "78px": "78px",
        "136px": "136px",
        "116px": "116px",
        "160px": "160px",
        ...breakpoints(theme("screens")),
      }),
      minHeight: {
        0: "0",
        full: "100%",
        "16vh": "16vh",
        "60vh": "60vh",
        screen: "100vh",
        "512px": "512px",
        "150px": "150px",
        "600px": "600px",
      },
      minWidth: {
        0: "0",
        full: "100%",
        "42px": "42px",
        "48px": "48px",
        "64px": "64px",
        "400px": "400px",
        "148px": "148px",
        "78px": "78px",
        "200px": "200px",
        "262px": "262px",
        "314px": "314px",
        "196px": "196px",
        "74px": "74px",
        "78px": "78px",
        "182px": "182px",
      },
      objectPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
      },
      opacity: {
        0: "0",
        8: "0.08",
        10: "0.1",
        25: "0.25",
        50: "0.5",
        80: "0.8",
        75: "0.75",
        100: "1",
      },
      order: {
        first: "-9999",
        last: "9999",
        none: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
      padding: (theme) => theme("spacing"),
      placeholderColor: (theme) => theme("colors"),
      placeholderOpacity: (theme) => theme("opacity"),
      space: (theme, { negative }) => ({
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      stroke: {
        current: "currentColor",
      },
      strokeWidth: {
        0: "0",
        1: "1",
        2: "2",
      },
      textColor: (theme) => theme("colors"),
      textOpacity: (theme) => theme("opacity"),
      width: (theme) => ({
        auto: "auto",
        ...theme("spacing"),
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "48%": "48%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        "800px": "800px",
        "262px": "262px",
        "312px": "312px",
        "18px": "18px",
        "100px": "100px",
        "66px": "66px",
        "56px": "56px",
        minContent: "min-content",
        maxContent: "max-content",
        fitContent: "fit-content",
        full: "100%",
        screen: "100vw",
        unset: "unset",
      }),
      zIndex: {
        auto: "auto",
        nl5: "-50",
        nl4: "-40",
        nl3: "-30",
        nl2: "-20",
        nl1: "-10",
        l0: "0",
        l05: "5",
        l09: "9",
        l1: "10",
        l2: "20",
        l3: "30",
        l4: "40",
        l5: "50",
        l6: "60",
        l7: "70",
        l8: "80",
        l9: "90",
        l10: "100",
        l01: "1",
        l100: "1000",
        c0: "0",
        c1: "1",
        c2: "2",
        c3: "3",
        c4: "4",
        c5: "5",
        c6: "6",
        c7: "7",
        c8: "8",
        c9: "9",
        c10: "10",
        c11: "11",
        c12: "12",
        c13: "13",
        c14: "14",
        c15: "15",
        c16: "16",
        c17: "17",
        c18: "18",
        c19: "19",
        c20: "20",
      },
      gap: (theme) => theme("spacing"),
      gridTemplateColumns: {
        none: "none",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridColumn: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
      },
      gridColumnStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridColumnEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridTemplateRows: {
        none: "none",
        1: "repeat(1, minmax(0, 1fr))",
        2: "repeat(2, minmax(0, 1fr))",
        3: "repeat(3, minmax(0, 1fr))",
        4: "repeat(4, minmax(0, 1fr))",
        5: "repeat(5, minmax(0, 1fr))",
        6: "repeat(6, minmax(0, 1fr))",
      },
      gridRow: {
        auto: "auto",
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
      },
      gridRowStart: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
      },
      gridRowEnd: {
        auto: "auto",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
      },
      transformOrigin: {
        center: "center",
        top: "top",
        "top-right": "top right",
        right: "right",
        "bottom-right": "bottom right",
        bottom: "bottom",
        "bottom-left": "bottom left",
        left: "left",
        "top-left": "top left",
      },
      scale: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
      },
      rotate: {
        "-180": "-180deg",
        "-90": "-90deg",
        "-45": "-45deg",
        0: "0",
        45: "45deg",
        90: "90deg",
        180: "180deg",
      },
      translate: (theme, { negative }) => ({
        ...theme("spacing"),
        ...negative(theme("spacing")),
        "-full": "-100%",
        "-1/2": "-50%",
        "1/2": "50%",
        full: "100%",
      }),
      skew: {
        "-12": "-12deg",
        "-6": "-6deg",
        "-3": "-3deg",
        0: "0",
        3: "3deg",
        6: "6deg",
        12: "12deg",
      },
      transitionProperty: {
        none: "none",
        all: "all",
        default:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        colors: "background-color, border-color, color, fill, stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform",
      },
      transitionTimingFunction: {
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
        250: "250ms",
        600: "600ms",
      },
      transitionDelay: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
    },
  },
  plugins: [],
};
