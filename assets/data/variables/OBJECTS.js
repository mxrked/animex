// This file is used to hold some objects
import Product from "../classes/Product";

// Image imports
import {
  DEMON_SLAYER_VOL_1_IMG,
  DEMON_SLAYER_VOL_2_IMG,
  DEMON_SLAYER_VOL_3_IMG,
  DEMON_SLAYER_VOL_4_IMG,
  DEMON_SLAYER_VOL_5_IMG,
  DEMON_SLAYER_VOL_6_IMG,
  DEMON_SLAYER_VOL_7_IMG,
  DEMON_SLAYER_VOL_8_IMG,
  DEMON_SLAYER_VOL_9_IMG,
  DEMON_SLAYER_VOL_10_IMG,
  DEMON_SLAYER_VOL_11_IMG,
  DEMON_SLAYER_VOL_12_IMG,
  DEMON_SLAYER_VOL_13_IMG,
  DEMON_SLAYER_VOL_14_IMG,
  DEMON_SLAYER_VOL_15_IMG,
  DEMON_SLAYER_VOL_16_IMG,
  DEMON_SLAYER_VOL_17_IMG,
  DEMON_SLAYER_VOL_18_IMG,
  DEMON_SLAYER_VOL_19_IMG,
  DEMON_SLAYER_VOL_20_IMG,
  DEMON_SLAYER_VOL_21_IMG,
  DEMON_SLAYER_VOL_22_IMG,
  DEMON_SLAYER_VOL_23_IMG,
  GIYU_FIG_IMG,
  INOSUKE_FIG_IMG,
  MUZAN_FIG_IMG,
  NEZUKO_FIG_IMG,
  RENGOKU_FIG_IMG,
  SHINOBU_FIG_IMG,
  TANJIROU_FIG_IMG,
  TENGEN_FIG_IMG,
  ZENITSU_FIG_IMG,
  HINOKAMI_KAGURA_SWEATSHIRT_IMG,
  INOSUKE_BLACK_TSHIRT_IMG,
  NEZUKO_YELLOW_TSHIRT_IMG,
  TANJIRO_AND_RENGOKU_WHITE_TSHIRT_IMG,
  ZENITSU_KIMONO_IMG,
  DS_MAIN_CHARACTERS_TSHIRT_IMG,
  JONATHAN_FIG_IMG,
  PB_DIO_FIG_IMG,
  BARON_FIG_IMG,
  BT_JOSEPH_FIG_IMG,
  CAESAR_FIG_IMG,
  LISA_LISA_FIG_IMG,
  STROHIEM_FIG_IMG,
  ESIDISI_FIG_IMG,
  WAMUU_FIG_IMG,
  KARS_FIG_IMG,
  JOJO_PB_VOL_1_IMG,
  JOJO_PB_VOL_2_IMG,
  JOJO_PB_VOL_3_IMG,
  JOJO_BT_VOL_1_IMG,
  JOJO_BT_VOL_2_IMG,
  JOJO_BT_VOL_3_IMG,
  JOJO_BT_VOL_4_IMG,
  JOJO_SDC_VOL_1_IMG,
  JOJO_SDC_VOL_2_IMG,
  JOJO_SDC_VOL_3_IMG,
  JOJO_SDC_VOL_4_IMG,
  JOJO_SDC_VOL_5_IMG,
  JOJO_SDC_VOL_6_IMG,
  JOJO_SDC_VOL_7_IMG,
  JOJO_SDC_VOL_8_IMG,
  JOJO_SDC_VOL_9_IMG,
  JOJO_SDC_VOL_10_IMG,
  JOJO_DIUB_VOL_1_IMG,
  JOJO_DIUB_VOL_2_IMG,
  JOJO_DIUB_VOL_3_IMG,
  JOJO_DIUB_VOL_4_IMG,
  JOJO_DIUB_VOL_5_IMG,
  JOJO_DIUB_VOL_6_IMG,
  JOJO_DIUB_VOL_7_IMG,
  JOJO_DIUB_VOL_8_IMG,
  JOJO_DIUB_VOL_9_IMG,
  JOJO_GW_VOL_1_IMG,
  JOJO_GW_VOL_2_IMG,
  JOJO_GW_VOL_3_IMG,
  JOJO_GW_VOL_4_IMG,
  JOJO_GW_VOL_5_IMG,
  JOJO_GW_VOL_6_IMG,
  JOJO_GW_VOL_7_IMG,
  JOJO_GW_VOL_8_IMG,
  JOJO_GW_VOL_9_IMG,
  JOJO_GW_VOL_10_IMG,
  JOJO_GW_VOL_11_IMG,
  JOJO_GW_VOL_12_IMG,
  JOJO_GW_VOL_13_IMG,
  JOJO_GW_VOL_14_IMG,
  JOJO_GW_VOL_15_IMG,
  JOJO_GW_VOL_16_IMG,
  JOJO_GW_VOL_17_IMG,
  JOJO_SO_VOL_1_IMG,
  JOJO_SO_VOL_2_IMG,
  JOJO_SO_VOL_3_IMG,
  JOJO_SO_VOL_4_IMG,
  JOJO_SO_VOL_5_IMG,
  JOJO_SO_VOL_6_IMG,
  JOJO_SO_VOL_7_IMG,
  JOJO_SO_VOL_8_IMG,
  JOJO_SO_VOL_9_IMG,
  JOJO_SO_VOL_10_IMG,
  JOJO_SO_VOL_11_IMG,
  JOJO_SO_VOL_12_IMG,
  JOJO_SO_VOL_13_IMG,
  JOJO_SO_VOL_14_IMG,
  JOJO_SO_VOL_15_IMG,
  JOJO_SO_VOL_16_IMG,
  JOJO_SO_VOL_17_IMG,
  JOJO_SBR_VOL_1_IMG,
  JOJO_SBR_VOL_2_IMG,
  JOJO_SBR_VOL_3_IMG,
  JOJO_SBR_VOL_4_IMG,
  JOJO_SBR_VOL_5_IMG,
  JOJO_SBR_VOL_6_IMG,
  JOJO_SBR_VOL_7_IMG,
  JOJO_SBR_VOL_8_IMG,
  JOJO_SBR_VOL_9_IMG,
  JOJO_SBR_VOL_10_IMG,
  JOJO_SBR_VOL_11_IMG,
  JOJO_SBR_VOL_12_IMG,
  JOJO_SBR_VOL_13_IMG,
  JOJO_SBR_VOL_14_IMG,
  JOJO_SBR_VOL_15_IMG,
  JOJO_SBR_VOL_16_IMG,
  JOJO_SBR_VOL_17_IMG,
  JOJO_SBR_VOL_18_IMG,
  JOJO_SBR_VOL_19_IMG,
  JOJO_SBR_VOL_20_IMG,
  JOJO_SBR_VOL_21_IMG,
  JOJO_SBR_VOL_22_IMG,
  JOJO_SBR_VOL_23_IMG,
  JOJO_SBR_VOL_24_IMG,
  JOJO_JJL_VOL_1_IMG,
  JOJO_JJL_VOL_2_IMG,
  JOJO_JJL_VOL_3_IMG,
  JOJO_JJL_VOL_4_IMG,
  JOJO_JJL_VOL_5_IMG,
  JOJO_JJL_VOL_6_IMG,
  JOJO_JJL_VOL_7_IMG,
  JOJO_JJL_VOL_8_IMG,
  JOJO_JJL_VOL_9_IMG,
  JOJO_JJL_VOL_10_IMG,
  JOJO_JJL_VOL_11_IMG,
  JOJO_JJL_VOL_12_IMG,
  JOJO_JJL_VOL_13_IMG,
  JOJO_JJL_VOL_14_IMG,
  JOJO_JJL_VOL_15_IMG,
  JOJO_JJL_VOL_16_IMG,
  JOJO_JJL_VOL_17_IMG,
  JOJO_JJL_VOL_18_IMG,
  JOJO_JJL_VOL_19_IMG,
  JOJO_JJL_VOL_20_IMG,
  JOJO_JJL_VOL_21_IMG,
  JOJO_JJL_VOL_22_IMG,
  JOJO_JJL_VOL_23_IMG,
  JOJO_JJL_VOL_24_IMG,
  JOJO_JJL_VOL_25_IMG,
  JOJO_JJL_VOL_26_IMG,
  JOJO_JJL_VOL_27_IMG,
} from "../../cdn_returns/PRODUCT_IMGS";

//! FIGURES
// Demon Slayer
const TANJIROU_FIG = new Product(
  "#S1_F1",
  "Demon Slayer",
  "Figure",
  "Tanjirou Kamado",
  TANJIROU_FIG_IMG,
  "A small figurine of the character Tanjirou Kamado from Demon Slayer.",
  35.6,
  0
);
const NEZUKO_FIG = new Product(
  "#S1_F2",
  "Demon Slayer",
  "Figure",
  "Nezuko Kamado",
  NEZUKO_FIG_IMG,
  "A small figurine of the character Nezuko Kamado from Demon Slayer.",
  39.5,
  0
);
const ZENITSU_FIG = new Product(
  "#S1_F3",
  "Demon Slayer",
  "Figure",
  "Zenitsu Agatsuma",
  ZENITSU_FIG_IMG,
  "A small figurine of the character Zenitsu Agatsuma from Demon Slayer.",
  33.12,
  0
);
const INOSUKE_FIG = new Product(
  "#S1_F4",
  "Demon Slayer",
  "Figure",
  "Inosuke Hashibira",
  INOSUKE_FIG_IMG,
  "A small figurine of the character Inosuke Hashibira from Demon Slayer.",
  34.33,
  0
);
const GIYU_FIG = new Product(
  "#S1_F5",
  "Demon Slayer",
  "Figure",
  "Giyu Tomioka",
  GIYU_FIG_IMG,
  "A small figurine of the character Giyu Tomioka from Demon Slayer.",
  37.0,
  0
);
const SHINOBU_FIG = new Product(
  "#S1_F6",
  "Demon Slayer",
  "Figure",
  "Shinobu Kocho",
  SHINOBU_FIG_IMG,
  "A small figurine of the character Shinobu Kocho from Demon Slayer.",
  36.45,
  0
);
const RENGOKU_FIG = new Product(
  "#S1_F7",
  "Demon Slayer",
  "Figure",
  "Rengoku Kyojuro",
  RENGOKU_FIG_IMG,
  "A small figurine of the character Rengoku Kyojuro from Demon Slayer.",
  39.0,
  0
);
const TENGEN_FIG = new Product(
  "#S1_F8",
  "Demon Slayer",
  "Figure",
  "Tengen Uzui",
  TENGEN_FIG_IMG,
  "A small figurine of the character Tengen Uzui from Demon Slayer.",
  38.05,
  0
);
const AKAZA_FIG = new Product(
  "#S1_9",
  "Demon Slayer",
  "Figure",
  "Akaza",
  SHINOBU_FIG_IMG,
  "A small figurine of the character Shinobu Kocho from Demon Slayer.",
  36.45,
  0
);
const MUZAN_FIG = new Product(
  "#S1_10",
  "Demon Slayer",
  "Figure",
  "Muzan Kibutsuji",
  MUZAN_FIG_IMG,
  "A small figurine of the character Muzan Kibutsuji from Demon Slayer.",
  37.75,
  0
);

// JoJo
const JONATHAN_FIG = new Product(
  "#S2_F1",
  "JoJo's Bizarre Adventure",
  "Figure",
  "Jonathan Joestar",
  JONATHAN_FIG_IMG,
  "A small figurine of the character Jonathan Joestar from JoJo's Bizarre Adventure.",
  40.36,
  0
);
const PB_DIO_FIG = new Product(
  "#S2_F2",
  "JoJo's Bizarre Adventure",
  "Figure",
  "Dio Brando (PB)",
  PB_DIO_FIG_IMG,
  "A small figurine of the character Dio Brando (Phantom Blood) from JoJo's Bizarre Adventure.",
  45.1,
  0
);
const BARON_FIG = new Product(
  "#S2_F3",
  "JoJo's Bizarre Adventure",
  "Figure",
  "Baron Zeppeli",
  BARON_FIG_IMG,
  "A small figurine of the character Baron Zeppeli from JoJo's Bizarre Adventure.",
  38.5,
  0
);
const BT_JOSEPH_FIG = new Product(
  "#S2_F4",
  "JoJo's Bizarre Adventure",
  "Figure",
  "Joseph Joestar (BT)",
  BT_JOSEPH_FIG_IMG,
  "A small figurine of the character Joseph Joestar (Battle Tendency) from JoJo's Bizarre Adventure.",
  36.94,
  0
);
const CAESAR_FIG = new Product(
  "#S2_F5",
  "JoJo's Bizarre Adventure",
  "Figure",
  "Caesar Zeppeli",
  CAESAR_FIG_IMG,
  "A small figurine of the character Caesar Zeppeli from JoJo's Bizarre Adventure.",
  35.1,
  0
);
const LISA_LISA_FIG = new Product(
  "#S2_F6",
  "JoJo's Bizarre Adventure",
  "Figure",
  "Lisa Lisa",
  LISA_LISA_FIG_IMG,
  "A small figurine of the character Lisa Lisa from JoJo's Bizarre Adventure.",
  32.48,
  0
);
const STROHIEM_FIG = new Product(
  "#S2_F7",
  "JoJo's Bizarre Adventure",
  "Figure",
  "Rudol von Stroheim",
  STROHIEM_FIG_IMG,
  "A small figurine of the character Rudol von Stroheim from JoJo's Bizarre Adventure.",
  35.33,
  0
);
const ESIDISI_FIG = new Product(
  "#S2_F8",
  "JoJo's Bizarre Adventure",
  "Figure",
  "Esidisi",
  ESIDISI_FIG_IMG,
  "A small figurine of the character Esidisi from JoJo's Bizarre Adventure.",
  37.05,
  0
);
const WAMUU_FIG = new Product(
  "#S2_F9",
  "JoJo's Bizarre Adventure",
  "Figure",
  "Wamuu",
  WAMUU_FIG_IMG,
  "A small figurine of the character Wamuu from JoJo's Bizarre Adventure.",
  38.35,
  0
);
const KARS_FIG = new Product(
  "#S2_F10",
  "JoJo's Bizarre Adventure",
  "Figure",
  "Kars",
  KARS_FIG_IMG,
  "A small figurine of the character Kars from JoJo's Bizarre Adventure.",
  40.42,
  0
);

//! MANGA
const DEMON_SLAYER_VOL_1_MANGA = new Product(
  "#S1_M1",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 1",
  DEMON_SLAYER_VOL_1_IMG,
  "Volume 1 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_2_MANGA = new Product(
  "#S1_M2",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 2",
  DEMON_SLAYER_VOL_2_IMG,
  "Volume 2 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_3_MANGA = new Product(
  "#S1_M3",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 3",
  DEMON_SLAYER_VOL_3_IMG,
  "Volume 3 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_4_MANGA = new Product(
  "#S1_M4",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 4",
  DEMON_SLAYER_VOL_4_IMG,
  "Volume 4 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_5_MANGA = new Product(
  "#S1_M5",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 5",
  DEMON_SLAYER_VOL_5_IMG,
  "Volume 5 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_6_MANGA = new Product(
  "#S1_M6",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 6",
  DEMON_SLAYER_VOL_6_IMG,
  "Volume 6 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_7_MANGA = new Product(
  "#S1_M7",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 7",
  DEMON_SLAYER_VOL_7_IMG,
  "Volume 7 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_8_MANGA = new Product(
  "#S1_M8",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 8",
  DEMON_SLAYER_VOL_8_IMG,
  "Volume 8 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_9_MANGA = new Product(
  "#S1_M9",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 9",
  DEMON_SLAYER_VOL_9_IMG,
  "Volume 9 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_10_MANGA = new Product(
  "#S1_M10",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 10",
  DEMON_SLAYER_VOL_10_IMG,
  "Volume 10 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_11_MANGA = new Product(
  "#S1_M11",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 11",
  DEMON_SLAYER_VOL_11_IMG,
  "Volume 11 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_12_MANGA = new Product(
  "#S1_M12",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 12",
  DEMON_SLAYER_VOL_12_IMG,
  "Volume 12 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_13_MANGA = new Product(
  "#S1_M13",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 13",
  DEMON_SLAYER_VOL_13_IMG,
  "Volume 13 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_14_MANGA = new Product(
  "#S1_M14",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 14",
  DEMON_SLAYER_VOL_14_IMG,
  "Volume 14 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_15_MANGA = new Product(
  "#S1_M15",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 15",
  DEMON_SLAYER_VOL_15_IMG,
  "Volume 15 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_16_MANGA = new Product(
  "#S1_M16",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 16",
  DEMON_SLAYER_VOL_16_IMG,
  "Volume 16 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_17_MANGA = new Product(
  "#S1_M17",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 17",
  DEMON_SLAYER_VOL_17_IMG,
  "Volume 17 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_18_MANGA = new Product(
  "#S1_M18",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 18",
  DEMON_SLAYER_VOL_18_IMG,
  "Volume 18 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_19_MANGA = new Product(
  "#S1_M19",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 19",
  DEMON_SLAYER_VOL_19_IMG,
  "Volume 19 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_20_MANGA = new Product(
  "#S1_M20",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 20",
  DEMON_SLAYER_VOL_20_IMG,
  "Volume 20 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_21_MANGA = new Product(
  "#S1_M21",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 21",
  DEMON_SLAYER_VOL_21_IMG,
  "Volume 21 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_22_MANGA = new Product(
  "#S1_M22",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 22",
  DEMON_SLAYER_VOL_22_IMG,
  "Volume 22 of the Demon Slayer manga.",
  30.15,
  0
);
const DEMON_SLAYER_VOL_23_MANGA = new Product(
  "#S1_M23",
  "Demon Slayer",
  "Manga",
  "Demon Slayer Vol. 23",
  DEMON_SLAYER_VOL_23_IMG,
  "Volume 23 of the Demon Slayer manga.",
  30.15,
  0
);

// JoJo
const JOJO_PB_VOL_1_MANGA = new Product(
  "#S2_M1",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Phantom Blood Vol. 1",
  JOJO_PB_VOL_1_IMG,
  "Volume 1 of Phantom Blood from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_PB_VOL_2_MANGA = new Product(
  "#S2_M2",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Phantom Blood Vol. 2",
  JOJO_PB_VOL_2_IMG,
  "Volume 2 of Phantom Blood from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_PB_VOL_3_MANGA = new Product(
  "#S2_M3",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Phantom Blood Vol. 3",
  JOJO_PB_VOL_3_IMG,
  "Volume 3 of Phantom Blood from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_BT_VOL_1_MANGA = new Product(
  "#S2_M4",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Battle Tendency Vol. 1",
  JOJO_BT_VOL_1_IMG,
  "Volume 1 of Battle Tendency from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_BT_VOL_2_MANGA = new Product(
  "#S2_M5",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Battle Tendency Vol. 2",
  JOJO_BT_VOL_2_IMG,
  "Volume 2 of Battle Tendency from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_BT_VOL_3_MANGA = new Product(
  "#S2_M6",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Battle Tendency Vol. 3",
  JOJO_BT_VOL_3_IMG,
  "Volume 3 of Battle Tendency from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_BT_VOL_4_MANGA = new Product(
  "#S2_M7",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Battle Tendency Vol. 4",
  JOJO_BT_VOL_4_IMG,
  "Volume 4 of Battle Tendency from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SDC_VOL_1_MANGA = new Product(
  "#S2_M8",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stardust Crusaders Vol. 1",
  JOJO_SDC_VOL_1_IMG,
  "Volume 1 of Stardust Crusaders from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SDC_VOL_2_MANGA = new Product(
  "#S2_M9",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stardust Crusaders Vol. 2",
  JOJO_SDC_VOL_2_IMG,
  "Volume 2 of Stardust Crusaders from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SDC_VOL_3_MANGA = new Product(
  "#S2_M10",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stardust Crusaders Vol. 3",
  JOJO_SDC_VOL_3_IMG,
  "Volume 3 of Stardust Crusaders from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SDC_VOL_4_MANGA = new Product(
  "#S2_M11",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stardust Crusaders Vol. 4",
  JOJO_SDC_VOL_4_IMG,
  "Volume 4 of Stardust Crusaders from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SDC_VOL_5_MANGA = new Product(
  "#S2_M12",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stardust Crusaders Vol. 5",
  JOJO_SDC_VOL_5_IMG,
  "Volume 5 of Stardust Crusaders from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SDC_VOL_6_MANGA = new Product(
  "#S2_M13",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stardust Crusaders Vol. 6",
  JOJO_SDC_VOL_6_IMG,
  "Volume 6 of Stardust Crusaders from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SDC_VOL_7_MANGA = new Product(
  "#S2_M14",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stardust Crusaders Vol. 7",
  JOJO_SDC_VOL_7_IMG,
  "Volume 7 of Stardust Crusaders from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SDC_VOL_8_MANGA = new Product(
  "#S2_M15",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stardust Crusaders Vol. 8",
  JOJO_SDC_VOL_8_IMG,
  "Volume 8 of Stardust Crusaders from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SDC_VOL_9_MANGA = new Product(
  "#S2_M16",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stardust Crusaders Vol. 9",
  JOJO_SDC_VOL_9_IMG,
  "Volume 9 of Stardust Crusaders from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SDC_VOL_10_MANGA = new Product(
  "#S2_M17",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stardust Crusaders Vol. 10",
  JOJO_SDC_VOL_10_IMG,
  "Volume 10 of Stardust Crusaders from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_DIUB_VOL_1_MANGA = new Product(
  "#S2_M18",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Diamond Is Unbreakable Vol. 1",
  JOJO_DIUB_VOL_1_IMG,
  "Volume 1 of Diamond Is Unbreakable from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_DIUB_VOL_2_MANGA = new Product(
  "#S2_M19",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Diamond Is Unbreakable Vol. 2",
  JOJO_DIUB_VOL_2_IMG,
  "Volume 2 of Diamond Is Unbreakable from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_DIUB_VOL_3_MANGA = new Product(
  "#S2_M20",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Diamond Is Unbreakable Vol. 3",
  JOJO_DIUB_VOL_3_IMG,
  "Volume 3 of Diamond Is Unbreakable from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_DIUB_VOL_4_MANGA = new Product(
  "#S2_M21",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Diamond Is Unbreakable Vol. 4",
  JOJO_DIUB_VOL_4_IMG,
  "Volume 4 of Diamond Is Unbreakable from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_DIUB_VOL_5_MANGA = new Product(
  "#S2_M22",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Diamond Is Unbreakable Vol. 5",
  JOJO_DIUB_VOL_5_IMG,
  "Volume 5 of Diamond Is Unbreakable from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_DIUB_VOL_6_MANGA = new Product(
  "#S2_M23",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Diamond Is Unbreakable Vol. 6",
  JOJO_DIUB_VOL_6_IMG,
  "Volume 6 of Diamond Is Unbreakable from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_DIUB_VOL_7_MANGA = new Product(
  "#S2_M24",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Diamond Is Unbreakable Vol. 7",
  JOJO_DIUB_VOL_7_IMG,
  "Volume 7 of Diamond Is Unbreakable from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_DIUB_VOL_8_MANGA = new Product(
  "#S2_M25",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Diamond Is Unbreakable Vol. 8",
  JOJO_DIUB_VOL_8_IMG,
  "Volume 8 of Diamond Is Unbreakable from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_DIUB_VOL_9_MANGA = new Product(
  "#S2_M26",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Diamond Is Unbreakable Vol. 9",
  JOJO_DIUB_VOL_9_IMG,
  "Volume 9 of Diamond Is Unbreakable from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_GW_VOL_1_MANGA = new Product(
  "#S2_M27",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Golden Wind Vol. 1",
  JOJO_GW_VOL_1_IMG,
  "Volume 1 of Golden Wind from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_GW_VOL_2_MANGA = new Product(
  "#S2_M28",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Golden Wind Vol. 2",
  JOJO_GW_VOL_2_IMG,
  "Volume 2 of Golden Wind from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_GW_VOL_3_MANGA = new Product(
  "#S2_M29",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Golden Wind Vol. 3",
  JOJO_GW_VOL_3_IMG,
  "Volume 3 of Golden Wind from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_GW_VOL_4_MANGA = new Product(
  "#S2_M30",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Golden Wind Vol. 4",
  JOJO_GW_VOL_4_IMG,
  "Volume 4 of Golden Wind from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_GW_VOL_5_MANGA = new Product(
  "#S2_M31",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Golden Wind Vol. 5",
  JOJO_GW_VOL_5_IMG,
  "Volume 5 of Golden Wind from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_GW_VOL_6_MANGA = new Product(
  "#S2_M32",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Golden Wind Vol. 6",
  JOJO_GW_VOL_6_IMG,
  "Volume 6 of Golden Wind from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_GW_VOL_7_MANGA = new Product(
  "#S2_M33",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Golden Wind Vol. 7",
  JOJO_GW_VOL_7_IMG,
  "Volume 7 of Golden Wind from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_GW_VOL_8_MANGA = new Product(
  "#S2_M34",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Golden Wind Vol. 8",
  JOJO_GW_VOL_8_IMG,
  "Volume 8 of Golden Wind from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_GW_VOL_9_MANGA = new Product(
  "#S2_M35",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Golden Wind Vol. 9",
  JOJO_GW_VOL_9_IMG,
  "Volume 9 of Golden Wind from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_GW_VOL_10_MANGA = new Product(
  "#S2_M36",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Golden Wind Vol. 10",
  JOJO_GW_VOL_10_IMG,
  "Volume 10 of Golden Wind from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_GW_VOL_11_MANGA = new Product(
  "#S2_M37",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Golden Wind Vol. 11",
  JOJO_GW_VOL_11_IMG,
  "Volume 11 of Golden Wind from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_GW_VOL_12_MANGA = new Product(
  "#S2_M38",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Golden Wind Vol. 12",
  JOJO_GW_VOL_12_IMG,
  "Volume 12 of Golden Wind from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_GW_VOL_13_MANGA = new Product(
  "#S2_M39",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Golden Wind Vol. 13",
  JOJO_GW_VOL_13_IMG,
  "Volume 13 of Golden Wind from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_GW_VOL_14_MANGA = new Product(
  "#S2_M40",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Golden Wind Vol. 14",
  JOJO_GW_VOL_14_IMG,
  "Volume 14 of Golden Wind from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_GW_VOL_15_MANGA = new Product(
  "#S2_M41",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Golden Wind Vol. 15",
  JOJO_GW_VOL_15_IMG,
  "Volume 15 of Golden Wind from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_GW_VOL_16_MANGA = new Product(
  "#S2_M42",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Golden Wind Vol. 16",
  JOJO_GW_VOL_16_IMG,
  "Volume 16 of Golden Wind from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_GW_VOL_17_MANGA = new Product(
  "#S2_M43",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Golden Wind Vol. 17",
  JOJO_GW_VOL_17_IMG,
  "Volume 17 of Golden Wind from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SO_VOL_1_MANGA = new Product(
  "#S2_M44",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stone Ocean Vol. 1",
  JOJO_SO_VOL_1_IMG,
  "Volume 1 of Stone Ocean from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SO_VOL_2_MANGA = new Product(
  "#S2_M45",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stone Ocean Vol. 2",
  JOJO_SO_VOL_2_IMG,
  "Volume 2 of Stone Ocean from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SO_VOL_3_MANGA = new Product(
  "#S2_M46",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stone Ocean Vol. 3",
  JOJO_SO_VOL_3_IMG,
  "Volume 3 of Stone Ocean from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SO_VOL_4_MANGA = new Product(
  "#S2_M47",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stone Ocean Vol. 4",
  JOJO_SO_VOL_4_IMG,
  "Volume 4 of Stone Ocean from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SO_VOL_5_MANGA = new Product(
  "#S2_M48",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stone Ocean Vol. 5",
  JOJO_SO_VOL_5_IMG,
  "Volume 5 of Stone Ocean from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SO_VOL_6_MANGA = new Product(
  "#S2_M49",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stone Ocean Vol. 6",
  JOJO_SO_VOL_6_IMG,
  "Volume 6 of Stone Ocean from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SO_VOL_7_MANGA = new Product(
  "#S2_M50",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stone Ocean Vol. 7",
  JOJO_SO_VOL_7_IMG,
  "Volume 7 of Stone Ocean from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SO_VOL_8_MANGA = new Product(
  "#S2_M51",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stone Ocean Vol. 8",
  JOJO_SO_VOL_8_IMG,
  "Volume 8 of Stone Ocean from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SO_VOL_9_MANGA = new Product(
  "#S2_M52",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stone Ocean Vol. 9",
  JOJO_SO_VOL_9_IMG,
  "Volume 9 of Stone Ocean from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SO_VOL_10_MANGA = new Product(
  "#S2_M53",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stone Ocean Vol. 10",
  JOJO_SO_VOL_10_IMG,
  "Volume 10 of Stone Ocean from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SO_VOL_11_MANGA = new Product(
  "#S2_M54",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stone Ocean Vol. 11",
  JOJO_SO_VOL_11_IMG,
  "Volume 11 of Stone Ocean from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SO_VOL_12_MANGA = new Product(
  "#S2_M55",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stone Ocean Vol. 12",
  JOJO_SO_VOL_12_IMG,
  "Volume 12 of Stone Ocean from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SO_VOL_13_MANGA = new Product(
  "#S2_M56",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stone Ocean Vol. 13",
  JOJO_SO_VOL_13_IMG,
  "Volume 13 of Stone Ocean from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SO_VOL_14_MANGA = new Product(
  "#S2_M57",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stone Ocean Vol. 14",
  JOJO_SO_VOL_14_IMG,
  "Volume 14 of Stone Ocean from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SO_VOL_15_MANGA = new Product(
  "#S2_M58",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stone Ocean Vol. 15",
  JOJO_SO_VOL_15_IMG,
  "Volume 15 of Stone Ocean from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SO_VOL_16_MANGA = new Product(
  "#S2_M59",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stone Ocean Vol. 16",
  JOJO_SO_VOL_16_IMG,
  "Volume 16 of Stone Ocean from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SO_VOL_17_MANGA = new Product(
  "#S2_M60",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Stone Ocean Vol. 17",
  JOJO_SO_VOL_17_IMG,
  "Volume 17 of Stone Ocean from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_1_MANGA = new Product(
  "#S2_M61",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 1",
  JOJO_SBR_VOL_1_IMG,
  "Volume 1 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_2_MANGA = new Product(
  "#S2_M62",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 2",
  JOJO_SBR_VOL_2_IMG,
  "Volume 2 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_3_MANGA = new Product(
  "#S2_M63",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 3",
  JOJO_SBR_VOL_3_IMG,
  "Volume 3 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_4_MANGA = new Product(
  "#S2_M64",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 4",
  JOJO_SBR_VOL_4_IMG,
  "Volume 4 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_5_MANGA = new Product(
  "#S2_M65",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 5",
  JOJO_SBR_VOL_5_IMG,
  "Volume 5 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_6_MANGA = new Product(
  "#S2_M66",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 6",
  JOJO_SBR_VOL_6_IMG,
  "Volume 6 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_7_MANGA = new Product(
  "#S2_M67",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 7",
  JOJO_SBR_VOL_7_IMG,
  "Volume 7 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_8_MANGA = new Product(
  "#S2_M68",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 8",
  JOJO_SBR_VOL_8_IMG,
  "Volume 8 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_9_MANGA = new Product(
  "#S2_M69",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 9",
  JOJO_SBR_VOL_9_IMG,
  "Volume 9 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_10_MANGA = new Product(
  "#S2_M70",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 10",
  JOJO_SBR_VOL_10_IMG,
  "Volume 10 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_11_MANGA = new Product(
  "#S2_M71",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 11",
  JOJO_SBR_VOL_11_IMG,
  "Volume 11 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_12_MANGA = new Product(
  "#S2_M72",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 12",
  JOJO_SBR_VOL_12_IMG,
  "Volume 12 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_13_MANGA = new Product(
  "#S2_M73",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 13",
  JOJO_SBR_VOL_13_IMG,
  "Volume 13 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_14_MANGA = new Product(
  "#S2_M74",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 14",
  JOJO_SBR_VOL_14_IMG,
  "Volume 14 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_15_MANGA = new Product(
  "#S2_M75",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 15",
  JOJO_SBR_VOL_15_IMG,
  "Volume 15 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_16_MANGA = new Product(
  "#S2_M76",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 16",
  JOJO_SBR_VOL_16_IMG,
  "Volume 16 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_17_MANGA = new Product(
  "#S2_M77",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 17",
  JOJO_SBR_VOL_17_IMG,
  "Volume 17 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_18_MANGA = new Product(
  "#S2_M78",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 18",
  JOJO_SBR_VOL_18_IMG,
  "Volume 8 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_19_MANGA = new Product(
  "#S2_M79",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 19",
  JOJO_SBR_VOL_19_IMG,
  "Volume 9 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_20_MANGA = new Product(
  "#S2_M80",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 20",
  JOJO_SBR_VOL_20_IMG,
  "Volume 10 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_21_MANGA = new Product(
  "#S2_M81",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 21",
  JOJO_SBR_VOL_21_IMG,
  "Volume 11 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_22_MANGA = new Product(
  "#S2_M82",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 22",
  JOJO_SBR_VOL_22_IMG,
  "Volume 12 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_23_MANGA = new Product(
  "#S2_M83",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 23",
  JOJO_SBR_VOL_23_IMG,
  "Volume 13 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_SBR_VOL_24_MANGA = new Product(
  "#S2_M84",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Steel Ball Run Vol. 24",
  JOJO_SBR_VOL_24_IMG,
  "Volume 14 of Steel Ball Run from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_1_MANGA = new Product(
  "#S2_M85",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 1",
  JOJO_JJL_VOL_1_IMG,
  "Volume 1 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_2_MANGA = new Product(
  "#S2_M86",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 2",
  JOJO_JJL_VOL_2_IMG,
  "Volume 2 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_3_MANGA = new Product(
  "#S2_M87",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 3",
  JOJO_JJL_VOL_3_IMG,
  "Volume 3 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_4_MANGA = new Product(
  "#S2_M88",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 4",
  JOJO_JJL_VOL_4_IMG,
  "Volume 4 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_5_MANGA = new Product(
  "#S2_M89",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 5",
  JOJO_JJL_VOL_5_IMG,
  "Volume 5 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_6_MANGA = new Product(
  "#S2_M90",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 6",
  JOJO_JJL_VOL_6_IMG,
  "Volume 6 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_7_MANGA = new Product(
  "#S2_M91",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 7",
  JOJO_JJL_VOL_7_IMG,
  "Volume 7 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_8_MANGA = new Product(
  "#S2_M92",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 8",
  JOJO_JJL_VOL_8_IMG,
  "Volume 8 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_9_MANGA = new Product(
  "#S2_M93",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 9",
  JOJO_JJL_VOL_9_IMG,
  "Volume 9 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_10_MANGA = new Product(
  "#S2_M94",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 10",
  JOJO_JJL_VOL_10_IMG,
  "Volume 10 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_11_MANGA = new Product(
  "#S2_M95",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 11",
  JOJO_JJL_VOL_11_IMG,
  "Volume 11 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_12_MANGA = new Product(
  "#S2_M96",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 12",
  JOJO_JJL_VOL_12_IMG,
  "Volume 12 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_13_MANGA = new Product(
  "#S2_M97",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 13",
  JOJO_JJL_VOL_13_IMG,
  "Volume 13 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_14_MANGA = new Product(
  "#S2_M98",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 14",
  JOJO_JJL_VOL_14_IMG,
  "Volume 14 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_15_MANGA = new Product(
  "#S2_M99",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 15",
  JOJO_JJL_VOL_15_IMG,
  "Volume 15 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_16_MANGA = new Product(
  "#S2_M100",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 16",
  JOJO_JJL_VOL_16_IMG,
  "Volume 16 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_17_MANGA = new Product(
  "#S2_M101",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 17",
  JOJO_JJL_VOL_17_IMG,
  "Volume 17 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_18_MANGA = new Product(
  "#S2_M102",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 18",
  JOJO_JJL_VOL_18_IMG,
  "Volume 18 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_19_MANGA = new Product(
  "#S2_M103",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 19",
  JOJO_JJL_VOL_19_IMG,
  "Volume 19 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_20_MANGA = new Product(
  "#S2_M104",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 20",
  JOJO_JJL_VOL_20_IMG,
  "Volume 20 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_21_MANGA = new Product(
  "#S2_M105",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 21",
  JOJO_JJL_VOL_21_IMG,
  "Volume 21 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_22_MANGA = new Product(
  "#S2_M106",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 22",
  JOJO_JJL_VOL_22_IMG,
  "Volume 22 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_23_MANGA = new Product(
  "#S2_M107",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 23",
  JOJO_JJL_VOL_23_IMG,
  "Volume 23 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_24_MANGA = new Product(
  "#S2_M108",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 24",
  JOJO_JJL_VOL_24_IMG,
  "Volume 24 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_25_MANGA = new Product(
  "#S2_M109",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 25",
  JOJO_JJL_VOL_25_IMG,
  "Volume 25 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_26_MANGA = new Product(
  "#S2_M110",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 26",
  JOJO_JJL_VOL_26_IMG,
  "Volume 26 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);
const JOJO_JJL_VOL_27_MANGA = new Product(
  "#S2_M111",
  "JoJo's Bizarre Adventure",
  "Manga",
  "Jojolion Vol. 27",
  JOJO_JJL_VOL_27_IMG,
  "Volume 27 of Jojolion from JoJo's Bizarre Adventure.",
  30.15,
  0
);

//! CLOTHING
const HINOKAMI_KAGURA_SWEATSHIRT_CLOTHING = new Product(
  "#S1_C1",
  "Demon Slayer",
  "Clothing",
  "Hinokami Kagura Sweatshirt",
  HINOKAMI_KAGURA_SWEATSHIRT_IMG,
  "A sweatshirt of the Hinokami Kagura from Demon Slayer.",
  27.3,
  0
);
const INOSUKE_BLACK_TSHIRT_CLOTHING = new Product(
  "#S1_C2",
  "Demon Slayer",
  "Clothing",
  "Inosuke Black T-shirt",
  INOSUKE_BLACK_TSHIRT_IMG,
  "A black t-shirt of Inosuke Hashibira from Demon Slayer.",
  22.33,
  0
);
const DS_MAIN_CHARACTERS_TSHIRT_CLOTHING = new Product(
  "#S1_C3",
  "Demon Slayer",
  "Clothing",
  "Demon Slayer Main Characters T-shirt",
  DS_MAIN_CHARACTERS_TSHIRT_IMG,
  "A t-shirt of the main characters in Demon Slayer.",
  25.2,
  0
);
const NEZUKO_YELLOW_TSHIRT_CLOTHING = new Product(
  "#S1_C4",
  "Demon Slayer",
  "Clothing",
  "Nezuko Yellow T-shirt",
  NEZUKO_YELLOW_TSHIRT_IMG,
  "A yellow t-shirt of Nezuko Kamado from Demon Slayer.",
  23.55,
  0
);
const TANJIRO_AND_RENGOKU_WHITE_TSHIRT_CLOTHING = new Product(
  "#S1_C5",
  "Demon Slayer",
  "Clothing",
  "Tanjiro/Rengoku White T-shirt",
  TANJIRO_AND_RENGOKU_WHITE_TSHIRT_IMG,
  "A white t-shirt of Tanjiro Kamado and Rengoku Kyojuro from Demon Slayer.",
  25.62,
  0
);
const ZENITSU_KIMONO_CLOTHING = new Product(
  "#S1_C6",
  "Demon Slayer",
  "Clothing",
  "Zenitsu Kimono",
  ZENITSU_KIMONO_IMG,
  "A kimono of Zenitsu Agatsuma from Demon Slayer.",
  36.29,
  0
);

export {
  TANJIROU_FIG,
  NEZUKO_FIG,
  ZENITSU_FIG,
  INOSUKE_FIG,
  GIYU_FIG,
  SHINOBU_FIG,
  RENGOKU_FIG,
  TENGEN_FIG,
  AKAZA_FIG,
  MUZAN_FIG,
  JONATHAN_FIG,
  PB_DIO_FIG,
  BARON_FIG,
  BT_JOSEPH_FIG,
  CAESAR_FIG,
  LISA_LISA_FIG,
  STROHIEM_FIG,
  ESIDISI_FIG,
  WAMUU_FIG,
  KARS_FIG,
};
export {
  DEMON_SLAYER_VOL_1_MANGA,
  DEMON_SLAYER_VOL_2_MANGA,
  DEMON_SLAYER_VOL_3_MANGA,
  DEMON_SLAYER_VOL_4_MANGA,
  DEMON_SLAYER_VOL_5_MANGA,
  DEMON_SLAYER_VOL_6_MANGA,
  DEMON_SLAYER_VOL_7_MANGA,
  DEMON_SLAYER_VOL_8_MANGA,
  DEMON_SLAYER_VOL_9_MANGA,
  DEMON_SLAYER_VOL_10_MANGA,
  DEMON_SLAYER_VOL_11_MANGA,
  DEMON_SLAYER_VOL_12_MANGA,
  DEMON_SLAYER_VOL_13_MANGA,
  DEMON_SLAYER_VOL_14_MANGA,
  DEMON_SLAYER_VOL_15_MANGA,
  DEMON_SLAYER_VOL_16_MANGA,
  DEMON_SLAYER_VOL_17_MANGA,
  DEMON_SLAYER_VOL_18_MANGA,
  DEMON_SLAYER_VOL_19_MANGA,
  DEMON_SLAYER_VOL_20_MANGA,
  DEMON_SLAYER_VOL_21_MANGA,
  DEMON_SLAYER_VOL_22_MANGA,
  DEMON_SLAYER_VOL_23_MANGA,
  JOJO_PB_VOL_1_MANGA,
  JOJO_PB_VOL_2_MANGA,
  JOJO_PB_VOL_3_MANGA,
  JOJO_BT_VOL_1_MANGA,
  JOJO_BT_VOL_2_MANGA,
  JOJO_BT_VOL_3_MANGA,
  JOJO_BT_VOL_4_MANGA,
  JOJO_SDC_VOL_1_MANGA,
  JOJO_SDC_VOL_2_MANGA,
  JOJO_SDC_VOL_3_MANGA,
  JOJO_SDC_VOL_4_MANGA,
  JOJO_SDC_VOL_5_MANGA,
  JOJO_SDC_VOL_6_MANGA,
  JOJO_SDC_VOL_7_MANGA,
  JOJO_SDC_VOL_8_MANGA,
  JOJO_SDC_VOL_9_MANGA,
  JOJO_SDC_VOL_10_MANGA,
  JOJO_DIUB_VOL_1_MANGA,
  JOJO_DIUB_VOL_2_MANGA,
  JOJO_DIUB_VOL_3_MANGA,
  JOJO_DIUB_VOL_4_MANGA,
  JOJO_DIUB_VOL_5_MANGA,
  JOJO_DIUB_VOL_6_MANGA,
  JOJO_DIUB_VOL_7_MANGA,
  JOJO_DIUB_VOL_8_MANGA,
  JOJO_DIUB_VOL_9_MANGA,
  JOJO_GW_VOL_1_MANGA,
  JOJO_GW_VOL_2_MANGA,
  JOJO_GW_VOL_3_MANGA,
  JOJO_GW_VOL_4_MANGA,
  JOJO_GW_VOL_5_MANGA,
  JOJO_GW_VOL_6_MANGA,
  JOJO_GW_VOL_7_MANGA,
  JOJO_GW_VOL_8_MANGA,
  JOJO_GW_VOL_9_MANGA,
  JOJO_GW_VOL_10_MANGA,
  JOJO_GW_VOL_11_MANGA,
  JOJO_GW_VOL_12_MANGA,
  JOJO_GW_VOL_13_MANGA,
  JOJO_GW_VOL_14_MANGA,
  JOJO_GW_VOL_15_MANGA,
  JOJO_GW_VOL_16_MANGA,
  JOJO_GW_VOL_17_MANGA,
  JOJO_SO_VOL_1_MANGA,
  JOJO_SO_VOL_2_MANGA,
  JOJO_SO_VOL_3_MANGA,
  JOJO_SO_VOL_4_MANGA,
  JOJO_SO_VOL_5_MANGA,
  JOJO_SO_VOL_6_MANGA,
  JOJO_SO_VOL_7_MANGA,
  JOJO_SO_VOL_8_MANGA,
  JOJO_SO_VOL_9_MANGA,
  JOJO_SO_VOL_10_MANGA,
  JOJO_SO_VOL_11_MANGA,
  JOJO_SO_VOL_12_MANGA,
  JOJO_SO_VOL_13_MANGA,
  JOJO_SO_VOL_14_MANGA,
  JOJO_SO_VOL_15_MANGA,
  JOJO_SO_VOL_16_MANGA,
  JOJO_SO_VOL_17_MANGA,
  JOJO_SBR_VOL_1_MANGA,
  JOJO_SBR_VOL_2_MANGA,
  JOJO_SBR_VOL_3_MANGA,
  JOJO_SBR_VOL_4_MANGA,
  JOJO_SBR_VOL_5_MANGA,
  JOJO_SBR_VOL_6_MANGA,
  JOJO_SBR_VOL_7_MANGA,
  JOJO_SBR_VOL_8_MANGA,
  JOJO_SBR_VOL_9_MANGA,
  JOJO_SBR_VOL_10_MANGA,
  JOJO_SBR_VOL_11_MANGA,
  JOJO_SBR_VOL_12_MANGA,
  JOJO_SBR_VOL_13_MANGA,
  JOJO_SBR_VOL_14_MANGA,
  JOJO_SBR_VOL_15_MANGA,
  JOJO_SBR_VOL_16_MANGA,
  JOJO_SBR_VOL_17_MANGA,
  JOJO_SBR_VOL_18_MANGA,
  JOJO_SBR_VOL_19_MANGA,
  JOJO_SBR_VOL_20_MANGA,
  JOJO_SBR_VOL_21_MANGA,
  JOJO_SBR_VOL_22_MANGA,
  JOJO_SBR_VOL_23_MANGA,
  JOJO_SBR_VOL_24_MANGA,
  JOJO_JJL_VOL_1_MANGA,
  JOJO_JJL_VOL_2_MANGA,
  JOJO_JJL_VOL_3_MANGA,
  JOJO_JJL_VOL_4_MANGA,
  JOJO_JJL_VOL_5_MANGA,
  JOJO_JJL_VOL_6_MANGA,
  JOJO_JJL_VOL_7_MANGA,
  JOJO_JJL_VOL_8_MANGA,
  JOJO_JJL_VOL_9_MANGA,
  JOJO_JJL_VOL_10_MANGA,
  JOJO_JJL_VOL_11_MANGA,
  JOJO_JJL_VOL_12_MANGA,
  JOJO_JJL_VOL_13_MANGA,
  JOJO_JJL_VOL_14_MANGA,
  JOJO_JJL_VOL_15_MANGA,
  JOJO_JJL_VOL_16_MANGA,
  JOJO_JJL_VOL_17_MANGA,
  JOJO_JJL_VOL_18_MANGA,
  JOJO_JJL_VOL_19_MANGA,
  JOJO_JJL_VOL_20_MANGA,
  JOJO_JJL_VOL_21_MANGA,
  JOJO_JJL_VOL_22_MANGA,
  JOJO_JJL_VOL_23_MANGA,
  JOJO_JJL_VOL_24_MANGA,
  JOJO_JJL_VOL_25_MANGA,
  JOJO_JJL_VOL_26_MANGA,
  JOJO_JJL_VOL_27_MANGA,
};
export {
  HINOKAMI_KAGURA_SWEATSHIRT_CLOTHING,
  INOSUKE_BLACK_TSHIRT_CLOTHING,
  DS_MAIN_CHARACTERS_TSHIRT_CLOTHING,
  NEZUKO_YELLOW_TSHIRT_CLOTHING,
  TANJIRO_AND_RENGOKU_WHITE_TSHIRT_CLOTHING,
  ZENITSU_KIMONO_CLOTHING,
};
