/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,xml, html}"],
  theme: {
    extend: {
      colors: {
        frame_color: "red",
        "line-light": "hsla(0,0%,100%,.2)",
        green: "#c0fb51",
        scroll_indicator: "var(--scroll-indicator-color)",
        gray: "#e9e9e9",
        admin_background: "#f8f8f8",
        sub_header_bg: "rgba(34,34,34,0.8)",
        sf_bg: "#e9e9e9",
        line: "#d3d3d3",
        light_gray_2: "#f3f3f3",
        error: "#FA5D29",
        lemon: "#dceda9",
      },

      fontSize: {
        small_text: "var(--small-text-font-size)",
        header_text: "var(--header-font-size)",
        category: "var(--category-font-size)",
        news_item_title: "var(--news-title-font-size)",
        load_more: "var(--load-more-font-size)",
        continue_disc: "var(--continue-disc-text-font-size)",
        continue_master: "var(--continue-master-text-font-size)",
        footer_disc_text: "var(--footer-disc-text-font-size)",
        footer_main_text: "var(--footer-main-text-font-size)",
        footer_code_text: "var(--footer-code-text-font-size)",
        spec_main_title: "var(--title-font-size)",
        spec_desc_title: "var(--title-desc-font-size)",
        spec_pharagraph: "var(--spec-news-pharagraph-font-size)",
        spec_section_heading: "var(--spec-news-section-heading-font-size)",
        spec_section_sub_heading:
          "var(--spec-news-section-sub-heading-font-size)",
        spec_explore_left: "var(--spec-news-explore-left-font-size)",
        spec_explore_item_title:
          "var(--spec-news-explore-item-title-font-size)",
      },

      backgroundImage: {
        scroll_indicator: "#000",
      },
      backgroundPosition: {
        footer_master_bg:
          "center calc(100% - var(--footer-bottom-height) - var(--footer-bottom-padding))",
      },
      animation: {
        "music-wave-200ms": "music 0.5s ease-in-out 0.2s infinite alternate;",
        "music-wave-300ms": "music 0.5s ease-in-out 0.3s infinite alternate;",
        "music-wave-400ms": "music 0.5s ease-in-out 0.4s infinite alternate;",
      },
      keyframes: {
        music: {
          "0%": {
            height: " 2px",
          },
          "40% ": {
            height: "28px",
          },
          "50%": {
            height: "18px",
          },
          "80%": {
            height: "10px",
          },
          "100%": {
            height: " 5px",
          },
        },
      },
      margin: {
        content_top:
          "calc(var(--padding-outer) + var(--frame-line-width) + var(--sub-menu-height) + var(--frame-line-width))",
        content_left:
          "calc(var(--padding-outer) + var(--frame-line-width) + var(--sidebar-column-width) + var(--frame-line-width))",
      },
      maxWidth: {
        content:
          "calc( 100vw - var(--padding-outer) - var(--frame-line-width) - var(--sidebar-column-width) - var(--frame-line-width) - var(--frame-line-width) - var(--padding-outer))",
      },
      width: {
        frame_left:
          "calc(var(--padding-outer) + var(--frame-line-width) + var(--sidebar-column-width) + var(--frame-line-width))",
        frame_right: "calc(var(--padding-outer) + var(--frame-line-width))",
        frame_x:
          "calc(100vw -  var(--padding-outer) - var(--frame-line-width) - var(--sidebar-column-width) - var(--frame-line-width) - var(--padding-outer))",
        humburger:
          "calc(var(--frame-line-width) + var(--sidebar-column-width) + var(--frame-line-width))",
        side_menu_width:
          "calc(var(--side-menu-main-content-width) + var(--frame-line-width) + var(--sidebar-column-width))",
        side_menu_main_column_width:
          "calc(var(--side-menu-main-content-width) + var(--frame-line-width))",
        close_icon: "var(--sidebar-column-width)",
        master_img_bottom_intervert_cut_width:
          "calc( (100vw - var(--padding-outer) - var(--frame-line-width) - var(--sidebar-column-width) - var(--frame-line-width) - var(--frame-line-width) - var(--padding-outer)) / 2 + var(--padding-outer) + var(--frame-line-width) + var(--sidebar-column-width) + var(--frame-line-width) - var(--svg-cut-for-img-bottom-interverted-cut-width))",

        continue_text_block_left_width:
          "calc((100vw / var(--continue-devided-column)) * var(--continue-text-block-left-take) - var(--padding-outer) - var(--frame-line-width) - var(--sidebar-column-width) - var(--frame-line-width))",
        continue_text_block_right_width:
          "calc((100vw / var(--continue-devided-column)) * var(--continue-text-block-right-take) - var(--frame-line-width) - var(--padding-outer))",
        continue_icon_box_hover_width:
          "calc(100% + var(--frame-line-width) * 2)",

        footer_column_width:
          "calc(100vw - (var(--footer-column-gap) * (var(--footer-column) - 1)) / var(--footer-column))",

        spec_title_left_column_width:
          "calc(100vw * var(--title-left-column-width) - var(--padding-outer) - var(--frame-line-width) - var(--sidebar-column-width) - var(--frame-line-width))",
        explore_left_width:
          "calc(100vw / var(--footer-column) - var(--padding-outer) - var(--frame-line-width) - var(--sidebar-column-width) - var(--frame-line-width))",
        explore_list_width:
          "calc(100% + var(--frame-line-width) + var(--frame-line-width))",
        explore_item_width:
          "calc(100% + var(--frame-line-width) + var(--frame-line-width))",
        explore_icon_frame_width:
          "calc(var(--spec-news-explore-icon-box-size) + var(--frame-line-width))",
      },
      height: {
        "main-content": "calc( 100vh - 90px - 3px )",
        "sub-content": "calc( 100vh - 20px - 1px )",
        frame_top:
          "calc(var(--padding-outer) + var(--frame-line-width) + var(--sub-menu-height) + var(--frame-line-width))",
        frame_bottom: "calc(var(--padding-outer) + var(--frame-line-width))",
        frame_side:
          "calc(100vh -  var(--padding-outer) - var(--frame-line-width) - var(--sub-menu-height) - var(--padding-outer))",
        humburger:
          "calc(var(--frame-line-width) + var(--sub-menu-height) + var(--frame-line-width))",
        sidebar: "calc(100vh - var(--padding-outer) - var(--padding-outer))",
        close_icon:
          "calc(var(--frame-line-width) + var(--sub-menu-height) + var(--frame-line-width))",

        continue_disc_height:
          "calc(var(--continue-block-height) * 2 - var(--continue-social-height))",
        continue_icon_box_hover_height:
          "calc(100% + var(--frame-line-width) * 2)",

        content:
          "calc(100vh -  var(--padding-outer) - var(--frame-line-width) - var(--sub-menu-height) - var(--frame-line-width) - var(--frame-line-width) - var(--padding-outer))",
        footer_height:
          "calc(100vh + var(--footer-bottom-height) + var(--padding-outer) +  var(--frame-line-width) + var(--sub-menu-height) + var(--frame-line-width))",
        explore_item_height:
          "calc(100% + var(--frame-line-width) + var(--frame-line-width))",
      },
      objectPosition: {
        "center-bottom": "60% 35%",
      },
      borderRadius: {
        frame: "var(--radius-default)",
        side_menu: "var(--radius-default)",
        explore_item: "var(--spec-news-explore-item-border-radius)",
      },
      borderWidth: {
        frame: "var(--frame-line-width)",
        side_menu: "var(--frame-line-width)",
      },
      inset: {
        frame_br_curve: "calc(var(--frame-line-width) - var(--padding-outer))",
        header_left:
          "calc(var(--padding-outer) + var(--frame-line-width) + var(--sidebar-column-width) + var(--frame-line-width))",
        header_top: "calc(var(--padding-outer) + var(--frame-line-width))",
        news_item_overlay_top:
          "calc((100% - var(--news-item-overlay-size)) / 2)",
        news_item_overlay_left:
          "calc((100% - var(--news-item-overlay-size)) / 2)",
        content_left:
          "calc(var(--padding-outer) + var(--frame-line-width) + var(--sidebar-column-width) + var(--frame-line-width))",
        content_top:
          "calc(var(--padding-outer) + var(--frame-line-width) + var(--sub-menu-height) + var(--frame-line-width))",
        sticky_footer_bottom_position:
          "calc(100vh - var(--footer-bottom-height))",
        button_frame_corner_effect_left:
          "calc(var(--button-frame-width) - (var(--button-frame-corner-size) * 2 ))",
        button_frame_corner_effect_top:
          "calc(var(--button-frame-height) - (var(--button-frame-corner-size) * 2 ))",
        explore_icon_left_arrow_left:
          "calc(var(--spec-news-explore-icon-box-size) + var(--frame-line-width))",
      },
    },
  },
  plugins: [],
};
