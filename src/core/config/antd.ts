import { type ThemeConfig } from "antd";
import { COLOR } from "../../../tailwind.config";
import { Color } from "antd/es/color-picker";

export const antdTheme: ThemeConfig = {
  cssVar: true,
  hashed: false,
  token: {
    // fontFamily: "nunito",
    colorPrimary: COLOR.PRIMARY,
    // colorPrimary: "#15803d",
    // "#15803d",
    // fontFamily: "Nunito"
    // colorBgLayout: "#f1f5f9",
    // colorBgContainer: "#f1f5f9",
    // colorBgContainerDisabled: "#64748b",
    // colorBgTextActive: "#f1f5f9",
    // colorBorder: "#e2e8f0",
    // colorTextPlaceholder: "#64748b",
    colorError: "#b91c1c",
    fontFamily: "inherit"
  },
  components: {
    Input: {
      colorBgContainer: COLOR.SLATE,
      colorTextPlaceholder: COLOR.SUBTLE,
      lineWidthFocus: 0,
    },
    Form: {
      verticalLabelPadding: 0,
    },
    Button: {
      primaryShadow: 'none',
      textHoverBg: COLOR.SLATE,
      lineWidthFocus: 2
    },
    Table: {
      borderColor: COLOR.SLATE,
      rowHoverBg: COLOR.SLATE_SECONDARY,
      headerBg: COLOR.SLATE,
      rowSelectedBg: COLOR.SLATE,
      rowSelectedHoverBg: COLOR.SLATE_SECONDARY
    },
    Avatar: {
      colorBgContainer: "#f1f5f9",
      colorBgBase: "#f1f5f9",
      colorTextPlaceholder: "#64748b"
    },
    Menu: {
      itemHeight: 30,
      subMenuItemBg: "#fff",
      itemHoverBg: "#e2e8f0",
      itemBorderRadius: 5,
      itemActiveBg: "#f1f5f9",
      itemSelectedBg: "fff",
      fontSize: 14,
    },
    Select: {
      colorBgContainer: COLOR.SLATE,
      colorTextPlaceholder: COLOR.SUBTLE
    },
    DatePicker: {
      colorBgContainer: COLOR.SLATE,
      colorTextPlaceholder: COLOR.SUBTLE
    },
    Pagination: {
      colorBgLayout: COLOR.SLATE,
      colorBgContainer: COLOR.SLATE,
      colorPrimaryBgHover: COLOR.SLATE,
      colorPrimaryActive: COLOR.SLATE,
    },
    Upload: {
      colorBgContainer: COLOR.SLATE,
    },
    Radio: {
      colorBgContainer: COLOR.SLATE,
      colorTextPlaceholder: COLOR.SUBTLE,
      colorBgLayout: COLOR.SUBTLE,
      controlItemBgActive: COLOR.ORANGE,
    }
    // Tooltip: {
    //   colorBgContainer: COLOR.PRIMARY
    // },
    // Badge: {
    //   colorBgBase: COLOR.BLUE,
    //   colorBgContainer: COLOR.BLUE,
    //   colorPrimary: COLOR.BLUE
    // }
    // Drawer: {
    //   paddi
    // }
  }
}