/*************************************************************
 *
 *  MathJax/jax/output/SVG/fonts/Garamond/fontdata.js
 *  
 *  Initializes the SVG OutputJax to use the Garamond fonts

 *  Copyright (c) 2019 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function (SVG,MML,AJAX,HUB) {

    var VERSION = "0.9";

  var ALPHABETS = "GaramondMathJax_Alphabets",
      ARROWS = "GaramondMathJax_Arrows",
      DOUBLESTRUCK = "GaramondMathJax_DoubleStruck",
      LATIN = "GaramondMathJax_Latin",
      MAIN = "GaramondMathJax_Main",
      MARKS = "GaramondMathJax_Marks",
      MISC = "GaramondMathJax_Misc",
      MONOSPACE = "GaramondMathJax_Monospace",
      NONUNICODE = "GaramondMathJax_NonUnicode",
      NORMAL = "GaramondMathJax_Normal",
      OPERATORS = "GaramondMathJax_Operators",
      SANSSERIF = "GaramondMathJax_SansSerif",
      SCRIPT = "GaramondMathJax_Script",
      SHAPES = "GaramondMathJax_Shapes",
      SIZE10 = "GaramondMathJax_Size10",
      SIZE11 = "GaramondMathJax_Size11",
      SIZE12 = "GaramondMathJax_Size12",
      SIZE13 = "GaramondMathJax_Size13",
      SIZE14 = "GaramondMathJax_Size14",
      SIZE15 = "GaramondMathJax_Size15",
      SIZE16 = "GaramondMathJax_Size16",
      SIZE17 = "GaramondMathJax_Size17",
      SIZE18 = "GaramondMathJax_Size18",
      SIZE19 = "GaramondMathJax_Size19",
      SIZE1 = "GaramondMathJax_Size1",
      SIZE20 = "GaramondMathJax_Size20",
      SIZE21 = "GaramondMathJax_Size21",
      SIZE22 = "GaramondMathJax_Size22",
      SIZE23 = "GaramondMathJax_Size23",
      SIZE24 = "GaramondMathJax_Size24",
      SIZE25 = "GaramondMathJax_Size25",
      SIZE26 = "GaramondMathJax_Size26",
      SIZE27 = "GaramondMathJax_Size27",
      SIZE28 = "GaramondMathJax_Size28",
      SIZE29 = "GaramondMathJax_Size29",
      SIZE2 = "GaramondMathJax_Size2",
      SIZE30 = "GaramondMathJax_Size30",
      SIZE31 = "GaramondMathJax_Size31",
      SIZE3 = "GaramondMathJax_Size3",
      SIZE4 = "GaramondMathJax_Size4",
      SIZE5 = "GaramondMathJax_Size5",
      SIZE6 = "GaramondMathJax_Size6",
      SIZE7 = "GaramondMathJax_Size7",
      SIZE8 = "GaramondMathJax_Size8",
      SIZE9 = "GaramondMathJax_Size9",
      SYMBOLS = "GaramondMathJax_Symbols";

  var H = "H", V = "V", EXTRAH = {load:"extra", dir:H}, EXTRAV = {load:"extra", dir:V};

  SVG.Augment({
    FONTDATA: {
      version: VERSION,


      baselineskip: 1200,
      lineH: 800, lineD: 200,

      FONTS: {
        "GaramondMathJax_Alphabets": "Alphabets/Regular/Main.js",
        "GaramondMathJax_Arrows": "Arrows/Regular/Main.js",
        "GaramondMathJax_DoubleStruck": "DoubleStruck/Regular/Main.js",
        "GaramondMathJax_Latin": "Latin/Regular/Main.js",
        "GaramondMathJax_Main": "Main/Regular/Main.js",
        "GaramondMathJax_Marks": "Marks/Regular/Main.js",
        "GaramondMathJax_Misc": "Misc/Regular/Main.js",
        "GaramondMathJax_Monospace": "Monospace/Regular/Main.js",
        "GaramondMathJax_NonUnicode": "NonUnicode/Regular/Main.js",
        "GaramondMathJax_Normal": "Normal/Regular/Main.js",
        "GaramondMathJax_Operators": "Operators/Regular/Main.js",
        "GaramondMathJax_SansSerif": "SansSerif/Regular/Main.js",
        "GaramondMathJax_Script": "Script/Regular/Main.js",
        "GaramondMathJax_Shapes": "Shapes/Regular/Main.js",
        "GaramondMathJax_Size10": "Size10/Regular/Main.js",
        "GaramondMathJax_Size11": "Size11/Regular/Main.js",
        "GaramondMathJax_Size12": "Size12/Regular/Main.js",
        "GaramondMathJax_Size13": "Size13/Regular/Main.js",
        "GaramondMathJax_Size14": "Size14/Regular/Main.js",
        "GaramondMathJax_Size15": "Size15/Regular/Main.js",
        "GaramondMathJax_Size16": "Size16/Regular/Main.js",
        "GaramondMathJax_Size17": "Size17/Regular/Main.js",
        "GaramondMathJax_Size18": "Size18/Regular/Main.js",
        "GaramondMathJax_Size19": "Size19/Regular/Main.js",
        "GaramondMathJax_Size1": "Size1/Regular/Main.js",
        "GaramondMathJax_Size20": "Size20/Regular/Main.js",
        "GaramondMathJax_Size21": "Size21/Regular/Main.js",
        "GaramondMathJax_Size22": "Size22/Regular/Main.js",
        "GaramondMathJax_Size23": "Size23/Regular/Main.js",
        "GaramondMathJax_Size24": "Size24/Regular/Main.js",
        "GaramondMathJax_Size25": "Size25/Regular/Main.js",
        "GaramondMathJax_Size26": "Size26/Regular/Main.js",
        "GaramondMathJax_Size27": "Size27/Regular/Main.js",
        "GaramondMathJax_Size28": "Size28/Regular/Main.js",
        "GaramondMathJax_Size29": "Size29/Regular/Main.js",
        "GaramondMathJax_Size2": "Size2/Regular/Main.js",
        "GaramondMathJax_Size30": "Size30/Regular/Main.js",
        "GaramondMathJax_Size31": "Size31/Regular/Main.js",
        "GaramondMathJax_Size3": "Size3/Regular/Main.js",
        "GaramondMathJax_Size4": "Size4/Regular/Main.js",
        "GaramondMathJax_Size5": "Size5/Regular/Main.js",
        "GaramondMathJax_Size6": "Size6/Regular/Main.js",
        "GaramondMathJax_Size7": "Size7/Regular/Main.js",
        "GaramondMathJax_Size8": "Size8/Regular/Main.js",
        "GaramondMathJax_Size9": "Size9/Regular/Main.js",
        "GaramondMathJax_Symbols": "Symbols/Regular/Main.js"
      },

      VARIANT: {
          "normal": {fonts: [MAIN,NORMAL,MONOSPACE,LATIN,ALPHABETS,MARKS,ARROWS,OPERATORS,SYMBOLS,SHAPES,MISC,NONUNICODE,SIZE1]},
          "bold": {fonts: [MAIN,NORMAL,MONOSPACE,LATIN,ALPHABETS,MARKS,ARROWS,OPERATORS,SYMBOLS,SHAPES,MISC,NONUNICODE,SIZE1], bold:true
, offsetA: 0x1D400, offsetG: 0x1D6A8, offsetN: 0x1D7CE},
          "italic": {fonts: [MAIN,NORMAL,MONOSPACE,LATIN,ALPHABETS,MARKS,ARROWS,OPERATORS,SYMBOLS,SHAPES,MISC,NONUNICODE,SIZE1], italic:true, offsetA: 0x1D434, offsetG: 0x1D6E2, remap: {0x1D455: 0x210E}},
          "bold-italic": {fonts: [MAIN,NORMAL,MONOSPACE,LATIN,ALPHABETS,MARKS,ARROWS,OPERATORS,SYMBOLS,SHAPES,MISC,NONUNICODE,SIZE1], bold: true, italic:true, offsetA: 0x1D468, offsetG: 0x1D71C},
          "double-struck": {
            fonts: [DOUBLESTRUCK],
            offsetA: 0x1D538,
            offsetN: 0x1D7D8,
            remap: {0x1D53A: 0x2102, 0x1D53F: 0x210D, 0x1D545: 0x2115, 0x1D547: 0x2119, 0x1D548: 0x211A, 0x1D549: 0x211D, 0x1D551: 0x2124}
          },
          "fraktur": {
            fonts: [FRAKTUR],
            offsetA: 0x1D504,
            remap: {0x1D506: 0x212D, 0x1D50B: 0x210C, 0x1D50C: 0x2111, 0x1D515: 0x211C, 0x1D51D: 0x2128}
          },
          "bold-fraktur": {
            fonts: [FRAKTUR], bold:true,
            offsetA: 0x1D56C
          },
          "script": {
            fonts: [SCRIPT], italic:true,
            offsetA: 0x1D49C,
            remap: {0x1D49D: 0x212C, 0x1D4A0: 0x2130, 0x1D4A1: 0x2131, 0x1D4A3: 0x210B, 0x1D4A4: 0x2110, 0x1D4A7: 0x2112, 0x1D4A8: 0x2133, 0x1D4AD: 0x211B, 0x1D4BA: 0x212F, 0x1D4BC: 0x210A, 0x1D4C4: 0x2134}
          },
          "bold-script": {
            fonts: [SCRIPT], bold:true, italic:true,
            offsetA: 0x1D4D0
          },
          "sans-serif": {
            fonts: [SANSSERIF],
            offsetA: 0x1D5A0,
            offsetN: 0x1D7E2
          },
          "bold-sans-serif": {
            fonts: [SANSSERIF], bold:true,
            offsetA: 0x1D5D4,
            offsetN: 0x1D7EC,
            offsetG: 0x1D756
          },
          "sans-serif-italic": {
             fonts: [SANSSERIF], italic: true,
             offsetA: 0x1D608
          },
          "sans-serif-bold-italic": {
             fonts: [SANSSERIF], bold:true, italic: true,
             offsetA: 0x1D63C,
             offsetG: 0x1D790
          },
          "monospace": {
             fonts: [MONOSPACE],
             offsetA: 0x1D670,
             offsetN: 0x1D7F6
          },
        "-Garamond-variant": {fonts: [VARIANTS,MAIN,NORMAL,MONOSPACE,LATIN,ALPHABETS,MARKS,ARROWS,OPERATORS,SYMBOLS,SHAPES,MISC,NONUNICODE,SIZE1]},
          "-tex-caligraphic": {fonts: [MAIN,NORMAL,MONOSPACE,LATIN,ALPHABETS,MARKS,ARROWS,OPERATORS,SYMBOLS,SHAPES,MISC,NONUNICODE,SIZE1], italic: true},
          "-tex-oldstyle": {fonts: [MAIN,NORMAL,MONOSPACE,LATIN,ALPHABETS,MARKS,ARROWS,OPERATORS,SYMBOLS,SHAPES,MISC,NONUNICODE,SIZE1]},
          "-tex-caligraphic-bold": {fonts: [MAIN,NORMAL,MONOSPACE,LATIN,ALPHABETS,MARKS,ARROWS,OPERATORS,SYMBOLS,SHAPES,MISC,NONUNICODE,SIZE1], italic: true, bold: true},
          "-tex-oldstyle-bold": {fonts: [MAIN,NORMAL,MONOSPACE,LATIN,ALPHABETS,MARKS,ARROWS,OPERATORS,SYMBOLS,SHAPES,MISC,NONUNICODE,SIZE1], bold: true},
          "-tex-mathit": {fonts: [MAIN,NORMAL,MONOSPACE,LATIN,ALPHABETS,MARKS,ARROWS,OPERATORS,SYMBOLS,SHAPES,MISC,NONUNICODE,SIZE1], italic:true, noIC:true},
          "-largeOp": {fonts:[SIZE1,MAIN]},
          "-smallOp": {}
      },

      RANGES: [
        {name: "alpha", low: 0x61, high: 0x7A, offset: "A", add: 26},
        {name: "Alpha", low: 0x41, high: 0x5A, offset: "A"},
        {name: "number", low: 0x30, high: 0x39, offset: "N"},
        {name: "greek-non-unicode", low: 0x03B1, high: 0x03C9, offset: "G", add: 25},
        {name: "greek", low: 0x03B1, high: 0x03C9, offset: "G", add: 26},
        {name: "Greek", low: 0x0391, high: 0x03F6, offset: "G",
           remap: {0x03F5: 52, 0x03D1: 53, 0x03F0: 54, 0x03D5: 55, 0x03F1: 56, 0x03D6: 57, 0x03F4: 17}}
      ],

      RULECHAR: 0x0305,

      REMAP: {
      },

      REMAPACCENT: {
      },

      REMAPACCENTUNDER: {
      },

      DELIMITERS: {
        0x28:
        {
          dir: V,
          HW: [[920,MAIN], [1168,SIZE1], [1420,SIZE2], [1668,SIZE3], [1920,SIZE4], [2168,SIZE5], [2420,SIZE6], [2668,SIZE7], [2920,SIZE8], [3168,SIZE9], [3420,SIZE10], [3668,SIZE11], [3920,SIZE12], [4168,SIZE13], [4420,SIZE14], [4668,SIZE15], [4920,SIZE16], [5168,SIZE17], [5420,SIZE18], [5668,SIZE19], [5920,SIZE20]],
          stretch: {bot:[0x239D,SYMBOLS], ext:[0x239C,SYMBOLS], top:[0x239B,SYMBOLS]}
        },
        0x29:
        {
          dir: V,
          HW: [[920,MAIN], [1168,SIZE1], [1420,SIZE2], [1668,SIZE3], [1920,SIZE4], [2168,SIZE5], [2420,SIZE6], [2668,SIZE7], [2920,SIZE8], [3168,SIZE9], [3420,SIZE10], [3668,SIZE11], [3920,SIZE12], [4168,SIZE13], [4420,SIZE14], [4668,SIZE15], [4920,SIZE16], [5168,SIZE17], [5420,SIZE18], [5668,SIZE19], [5920,SIZE20]],
          stretch: {bot:[0x23A0,SYMBOLS], ext:[0x239F,SYMBOLS], top:[0x239E,SYMBOLS]}
        },
        0x2F:
        {
          dir: V,
          HW: [[950,MAIN], [1200,SIZE1], [1450,SIZE2], [1700,SIZE3], [1950,SIZE4], [2200,SIZE5], [2450,SIZE6], [2700,SIZE7], [2950,SIZE8], [3200,SIZE9], [3450,SIZE10], [3700,SIZE11], [3950,SIZE12], [4200,SIZE13], [4450,SIZE14], [4700,SIZE15], [4950,SIZE16], [5200,SIZE17], [5450,SIZE18], [5700,SIZE19], [5950,SIZE20]]
        },
        0x3D:
        {
          dir: H,
          HW: [[466,MAIN]],
          stretch: {left:[0x3D,MAIN], rep:[0xE000,SIZE31], right:[0x3D,MAIN]}
        },
        0x5B:
        {
          dir: V,
          HW: [[902,MAIN], [1166,SIZE1], [1418,SIZE2], [1666,SIZE3], [1918,SIZE4], [2166,SIZE5], [2418,SIZE6], [2666,SIZE7], [2917,SIZE8], [3167,SIZE9], [3417,SIZE10], [3667,SIZE11], [3917,SIZE12], [4167,SIZE13], [4417,SIZE14], [4667,SIZE15], [4917,SIZE16], [5167,SIZE17], [5417,SIZE18], [5667,SIZE19], [5917,SIZE20]],
          stretch: {bot:[0x23A3,SYMBOLS], ext:[0x23A2,SYMBOLS], top:[0x23A1,SYMBOLS]}
        },
        0x5C:
        {
          dir: V,
          HW: [[950,MAIN], [1200,SIZE1], [1450,SIZE2], [1700,SIZE3], [1950,SIZE4], [2200,SIZE5], [2450,SIZE6], [2700,SIZE7], [2950,SIZE8], [3200,SIZE9], [3450,SIZE10], [3700,SIZE11], [3950,SIZE12], [4200,SIZE13], [4450,SIZE14], [4700,SIZE15], [4950,SIZE16], [5200,SIZE17], [5450,SIZE18], [5700,SIZE19], [5950,SIZE20]]
        },
        0x5D:
        {
          dir: V,
          HW: [[902,MAIN], [1166,SIZE1], [1418,SIZE2], [1666,SIZE3], [1918,SIZE4], [2166,SIZE5], [2418,SIZE6], [2666,SIZE7], [2918,SIZE8], [3166,SIZE9], [3418,SIZE10], [3666,SIZE11], [3918,SIZE12], [4166,SIZE13], [4418,SIZE14], [4666,SIZE15], [4918,SIZE16], [5166,SIZE17], [5418,SIZE18], [5666,SIZE19], [5918,SIZE20]],
          stretch: {bot:[0x23A6,SYMBOLS], ext:[0x23A5,SYMBOLS], top:[0x23A4,SYMBOLS]}
        },
        0x7B:
        {
          dir: V,
          HW: [[867,MAIN], [1169,SIZE1], [1419,SIZE2], [1669,SIZE3], [1919,SIZE4], [2169,SIZE5], [2419,SIZE6], [2669,SIZE7], [2919,SIZE8], [3169,SIZE9], [3419,SIZE10], [3669,SIZE11], [3919,SIZE12], [4169,SIZE13], [4419,SIZE14], [4669,SIZE15], [4919,SIZE16], [5169,SIZE17], [5419,SIZE18], [5669,SIZE19], [5919,SIZE20]],
          stretch: {bot:[0x23A9,SYMBOLS], ext:[0xE001,SIZE31], mid:[0x23A8,SYMBOLS], top:[0x23A7,SYMBOLS]}
        },
        0x7C:
        {
          dir: V,
          HW: [[950,MAIN], [1200,SIZE1], [1450,SIZE2], [1700,SIZE3], [1950,SIZE4], [2200,SIZE5], [2450,SIZE6], [2700,SIZE7], [2950,SIZE8], [3200,SIZE9], [3450,SIZE10], [3700,SIZE11], [3950,SIZE12], [4200,SIZE13], [4450,SIZE14], [4700,SIZE15], [4950,SIZE16], [5200,SIZE17], [5450,SIZE18], [5700,SIZE19], [5950,SIZE20]],
          stretch: {bot:[0xE002,SIZE31], ext:[0xE003,SIZE31], top:[0xE004,SIZE31]}
        },
        0x7D:
        {
          dir: V,
          HW: [[867,MAIN], [1169,SIZE1], [1419,SIZE2], [1669,SIZE3], [1919,SIZE4], [2169,SIZE5], [2419,SIZE6], [2669,SIZE7], [2919,SIZE8], [3169,SIZE9], [3419,SIZE10], [3669,SIZE11], [3919,SIZE12], [4169,SIZE13], [4419,SIZE14], [4669,SIZE15], [4919,SIZE16], [5169,SIZE17], [5419,SIZE18], [5669,SIZE19], [5919,SIZE20]],
          stretch: {bot:[0x23AD,SYMBOLS], ext:[0xE005,SIZE31], mid:[0x23AC,SYMBOLS], top:[0x23AB,SYMBOLS]}
        },
        0x302:
        {
          dir: H,
          HW: [[214,MAIN], [410,SIZE1], [610,SIZE2], [810,SIZE3], [1010,SIZE4], [1209,SIZE5], [1408,SIZE6], [1609,SIZE7], [1808,SIZE8], [2008,SIZE9], [2208,SIZE10], [2406,SIZE11], [2606,SIZE12], [2806,SIZE13], [3006,SIZE14], [3204,SIZE15], [3404,SIZE16], [3604,SIZE17], [3804,SIZE18], [4002,SIZE19], [4202,SIZE20], [4402,SIZE21], [4602,SIZE22], [4800,SIZE23], [5000,SIZE24], [5200,SIZE25], [5400,SIZE26], [5598,SIZE27], [5798,SIZE28], [5998,SIZE29], [6198,SIZE30], [6396,SIZE31]]
        },
        0x303:
        {
          dir: H,
          HW: [[287,MAIN], [400,SIZE1], [600,SIZE2], [800,SIZE3], [1000,SIZE4], [1200,SIZE5], [1400,SIZE6], [1600,SIZE7], [1800,SIZE8], [2000,SIZE9], [2200,SIZE10], [2400,SIZE11], [2600,SIZE12], [2800,SIZE13], [3000,SIZE14], [3200,SIZE15], [3400,SIZE16], [3600,SIZE17], [3800,SIZE18], [4000,SIZE19], [4200,SIZE20], [4400,SIZE21], [4600,SIZE22], [4800,SIZE23], [5000,SIZE24], [5200,SIZE25], [5400,SIZE26], [5600,SIZE27], [5800,SIZE28], [6000,SIZE29], [6200,SIZE30], [6400,SIZE31]]
        },
        0x306:
        {
          dir: H,
          HW: [[214,MAIN], [444,SIZE1], [661,SIZE2], [877,SIZE3], [1096,SIZE4], [1313,SIZE5], [1529,SIZE6]]
        },
        0x30C:
        {
          dir: H,
          HW: [[216,MAIN], [410,SIZE1], [610,SIZE2], [810,SIZE3], [1010,SIZE4], [1209,SIZE5], [1408,SIZE6], [1609,SIZE7], [1808,SIZE8], [2008,SIZE9], [2208,SIZE10], [2406,SIZE11], [2606,SIZE12], [2806,SIZE13], [3006,SIZE14], [3204,SIZE15], [3404,SIZE16], [3604,SIZE17], [3804,SIZE18], [4002,SIZE19], [4202,SIZE20], [4402,SIZE21], [4602,SIZE22], [4800,SIZE23], [5000,SIZE24], [5200,SIZE25], [5400,SIZE26], [5598,SIZE27], [5798,SIZE28], [5998,SIZE29], [6198,SIZE30], [6396,SIZE31]]
        },
        0x311:
        {
          dir: H,
          HW: [[214,MARKS], [444,SIZE1], [661,SIZE2], [877,SIZE3], [1096,SIZE4], [1313,SIZE5], [1529,SIZE6]]
        },
        0x32C:
        {
          dir: H,
          HW: [[216,MARKS], [410,SIZE1], [610,SIZE2], [810,SIZE3], [1010,SIZE4], [1209,SIZE5], [1408,SIZE6], [1609,SIZE7], [1808,SIZE8], [2008,SIZE9], [2208,SIZE10], [2406,SIZE11], [2606,SIZE12], [2806,SIZE13], [3006,SIZE14], [3204,SIZE15], [3404,SIZE16], [3604,SIZE17], [3804,SIZE18], [4002,SIZE19], [4202,SIZE20], [4402,SIZE21], [4602,SIZE22], [4800,SIZE23], [5000,SIZE24], [5200,SIZE25], [5400,SIZE26], [5598,SIZE27], [5798,SIZE28], [5998,SIZE29], [6198,SIZE30], [6396,SIZE31]]
        },
        0x32D:
        {
          dir: H,
          HW: [[214,MARKS], [410,SIZE1], [610,SIZE2], [810,SIZE3], [1010,SIZE4], [1209,SIZE5], [1408,SIZE6], [1609,SIZE7], [1808,SIZE8], [2008,SIZE9], [2208,SIZE10], [2406,SIZE11], [2606,SIZE12], [2806,SIZE13], [3006,SIZE14], [3204,SIZE15], [3404,SIZE16], [3604,SIZE17], [3804,SIZE18], [4002,SIZE19], [4202,SIZE20], [4402,SIZE21], [4602,SIZE22], [4800,SIZE23], [5000,SIZE24], [5200,SIZE25], [5400,SIZE26], [5598,SIZE27], [5798,SIZE28], [5998,SIZE29], [6198,SIZE30], [6396,SIZE31]]
        },
        0x32E:
        {
          dir: H,
          HW: [[214,MARKS], [444,SIZE1], [661,SIZE2], [877,SIZE3], [1096,SIZE4], [1313,SIZE5], [1529,SIZE6]]
        },
        0x32F:
        {
          dir: H,
          HW: [[214,MARKS], [444,SIZE1], [661,SIZE2], [877,SIZE3], [1096,SIZE4], [1313,SIZE5], [1529,SIZE6]]
        },
        0x330:
        {
          dir: H,
          HW: [[287,MARKS], [400,SIZE1], [600,SIZE2], [800,SIZE3], [1000,SIZE4], [1200,SIZE5], [1400,SIZE6], [1600,SIZE7], [1800,SIZE8], [2000,SIZE9], [2200,SIZE10], [2400,SIZE11], [2600,SIZE12], [2800,SIZE13], [3000,SIZE14], [3200,SIZE15], [3400,SIZE16], [3600,SIZE17], [3800,SIZE18], [4000,SIZE19], [4200,SIZE20], [4400,SIZE21], [4600,SIZE22], [4800,SIZE23], [5000,SIZE24], [5200,SIZE25], [5400,SIZE26], [5600,SIZE27], [5800,SIZE28], [6000,SIZE29], [6200,SIZE30], [6400,SIZE31]]
        },
        0x2016:
        {
          dir: V,
          HW: [[950,MAIN], [1200,SIZE1], [1450,SIZE2], [1700,SIZE3], [1950,SIZE4], [2200,SIZE5], [2450,SIZE6], [2700,SIZE7], [2950,SIZE8], [3200,SIZE9], [3450,SIZE10], [3700,SIZE11], [3950,SIZE12], [4200,SIZE13], [4450,SIZE14], [4700,SIZE15], [4950,SIZE16], [5200,SIZE17], [5450,SIZE18], [5700,SIZE19], [5950,SIZE20]],
          stretch: {bot:[0xE006,SIZE31], ext:[0xE007,SIZE31], top:[0xE008,SIZE31]}
        },
        0x2044:
        {
          dir: V,
          HW: [[950,MAIN], [950,SIZE1], [1200,SIZE2], [1450,SIZE3], [1700,SIZE4], [1950,SIZE5], [2200,SIZE6], [2450,SIZE7], [2700,SIZE8], [2950,SIZE9], [3200,SIZE10], [3450,SIZE11], [3700,SIZE12], [3950,SIZE13], [4200,SIZE14], [4450,SIZE15], [4700,SIZE16], [4950,SIZE17], [5200,SIZE18], [5450,SIZE19], [5700,SIZE20], [5950,SIZE21]]
        },
        0x20E9:
        {
          dir: H,
          HW: [[537,MARKS], [787,SIZE1], [1037,SIZE2], [1287,SIZE3], [1537,SIZE4], [1787,SIZE5], [2037,SIZE6]],
          stretch: {left:[0xE009,SIZE31], rep:[0xE00A,SIZE31], right:[0xE00B,SIZE31]}
        },
        0x2140:
        {
          dir: V,
          HW: [[984,DOUBLESTRUCK], [1404,SIZE1]]
        },
        0x2190:
        {
          dir: H,
          HW: [[900,MAIN]],
          stretch: {left:[0x2190,MAIN], rep:[0xE00C,SIZE31], right:[0xE00D,SIZE31]}
        },
        0x2191:
        {
          dir: V,
          HW: [[842,MAIN]],
          stretch: {ext:[0xE00E,SIZE31], top:[0x2191,MAIN]}
        },
        0x2192:
        {
          dir: H,
          HW: [[900,MAIN]],
          stretch: {left:[0xE00D,SIZE31], rep:[0xE00C,SIZE31], right:[0x2192,MAIN]}
        },
        0x2193:
        {
          dir: V,
          HW: [[842,MAIN]],
          stretch: {bot:[0x2193,MAIN], ext:[0xE00E,SIZE31]}
        },
        0x2194:
        {
          dir: H,
          HW: [[900,MAIN]],
          stretch: {left:[0x2190,MAIN], rep:[0xE00C,SIZE31], right:[0x2192,MAIN]}
        },
        0x21BE:
        {
          dir: V,
          HW: [[852,MAIN]],
          stretch: {ext:[0xE00E,SIZE31], top:[0x21BE,MAIN]}
        },
        0x21BF:
        {
          dir: V,
          HW: [[852,MAIN]],
          stretch: {ext:[0xE00E,SIZE31], top:[0x21BF,MAIN]}
        },
        0x21C2:
        {
          dir: V,
          HW: [[852,MAIN]],
          stretch: {bot:[0x21C2,MAIN], ext:[0xE00E,SIZE31]}
        },
        0x21C3:
        {
          dir: V,
          HW: [[852,MAIN]],
          stretch: {bot:[0x21C3,MAIN], ext:[0xE00E,SIZE31]}
        },
        0x21D0:
        {
          dir: H,
          HW: [[899,MAIN]],
          stretch: {left:[0x21D0,MAIN], rep:[0xE00F,SIZE31], right:[0xE010,SIZE31]}
        },
        0x21D1:
        {
          dir: V,
          HW: [[842,MAIN]],
          stretch: {ext:[0xE011,SIZE31], top:[0x21D1,MAIN]}
        },
        0x21D2:
        {
          dir: H,
          HW: [[899,MAIN]],
          stretch: {left:[0xE010,SIZE31], rep:[0xE00F,SIZE31], right:[0x21D2,MAIN]}
        },
        0x21D3:
        {
          dir: V,
          HW: [[842,MAIN]],
          stretch: {bot:[0x21D3,MAIN], ext:[0xE011,SIZE31]}
        },
        0x21D4:
        {
          dir: H,
          HW: [[899,MAIN]],
          stretch: {left:[0x21D0,MAIN], rep:[0xE00F,SIZE31], right:[0x21D2,MAIN]}
        },
        0x220F:
        {
          dir: V,
          HW: [[962,OPERATORS], [1384,SIZE1]]
        },
        0x2210:
        {
          dir: V,
          HW: [[962,OPERATORS], [1384,SIZE1]]
        },
        0x2211:
        {
          dir: V,
          HW: [[984,OPERATORS], [1404,SIZE1]]
        },
        0x2215:
        {
          dir: V,
          HW: [[950,MAIN], [950,SIZE1], [1200,SIZE2], [1450,SIZE3], [1700,SIZE4], [1950,SIZE5], [2200,SIZE6], [2450,SIZE7], [2700,SIZE8], [2950,SIZE9], [3200,SIZE10], [3450,SIZE11], [3700,SIZE12], [3950,SIZE13], [4200,SIZE14], [4450,SIZE15], [4700,SIZE16], [4950,SIZE17], [5200,SIZE18], [5450,SIZE19], [5700,SIZE20], [5950,SIZE21]]
        },
        0x221A:
        {
          dir: V,
          HW: [[712,MAIN], [982,SIZE1], [1252,SIZE2], [1522,SIZE3], [1792,SIZE4], [2062,SIZE5], [2332,SIZE6], [2602,SIZE7], [2872,SIZE8], [3142,SIZE9], [3412,SIZE10], [3682,SIZE11], [3952,SIZE12], [4222,SIZE13], [4492,SIZE14], [4762,SIZE15], [5032,SIZE16], [5302,SIZE17], [5572,SIZE18], [5842,SIZE19], [6112,SIZE20]],
          stretch: {bot:[0x23B7,SYMBOLS], ext:[0xE012,SIZE31], top:[0xE013,SIZE31]}
        },
        0x2223:
        {
          dir: V,
          HW: [[950,MAIN], [1200,SIZE1], [1450,SIZE2], [1700,SIZE3], [1950,SIZE4], [2200,SIZE5], [2450,SIZE6], [2700,SIZE7], [2950,SIZE8], [3200,SIZE9], [3450,SIZE10], [3700,SIZE11], [3950,SIZE12], [4200,SIZE13], [4450,SIZE14], [4700,SIZE15], [4950,SIZE16], [5200,SIZE17], [5450,SIZE18], [5700,SIZE19], [5950,SIZE20]],
          stretch: {bot:[0xE002,SIZE31], ext:[0xE003,SIZE31], top:[0xE004,SIZE31]}
        },
        0x2225:
        {
          dir: V,
          HW: [[950,MAIN], [1200,SIZE1], [1450,SIZE2], [1700,SIZE3], [1950,SIZE4], [2200,SIZE5], [2450,SIZE6], [2700,SIZE7], [2950,SIZE8], [3200,SIZE9], [3450,SIZE10], [3700,SIZE11], [3950,SIZE12], [4200,SIZE13], [4450,SIZE14], [4700,SIZE15], [4950,SIZE16], [5200,SIZE17], [5450,SIZE18], [5700,SIZE19], [5950,SIZE20]],
          stretch: {bot:[0xE006,SIZE31], ext:[0xE007,SIZE31], top:[0xE008,SIZE31]}
        },
        0x222B:
        {
          dir: V,
          HW: [[1095,MAIN], [1938,SIZE1]]
        },
        0x222C:
        {
          dir: V,
          HW: [[1095,OPERATORS], [1938,SIZE1]]
        },
        0x222D:
        {
          dir: V,
          HW: [[1095,OPERATORS], [1938,SIZE1]]
        },
        0x222E:
        {
          dir: V,
          HW: [[1095,OPERATORS], [1938,SIZE1]]
        },
        0x222F:
        {
          dir: V,
          HW: [[1095,OPERATORS], [1938,SIZE1]]
        },
        0x2230:
        {
          dir: V,
          HW: [[1095,OPERATORS], [1938,SIZE1]]
        },
        0x2231:
        {
          dir: V,
          HW: [[1095,OPERATORS], [1938,SIZE1]]
        },
        0x2232:
        {
          dir: V,
          HW: [[1095,OPERATORS], [1938,SIZE1]]
        },
        0x2233:
        {
          dir: V,
          HW: [[1095,OPERATORS], [1938,SIZE1]]
        },
        0x22C0:
        {
          dir: V,
          HW: [[974,OPERATORS], [1188,SIZE1]]
        },
        0x22C1:
        {
          dir: V,
          HW: [[974,OPERATORS], [1188,SIZE1]]
        },
        0x22C2:
        {
          dir: V,
          HW: [[974,OPERATORS], [1198,SIZE1]]
        },
        0x22C3:
        {
          dir: V,
          HW: [[974,OPERATORS], [1198,SIZE1]]
        },
        0x2308:
        {
          dir: V,
          HW: [[909,MAIN], [1176,SIZE1], [1426,SIZE2], [1676,SIZE3], [1926,SIZE4], [2176,SIZE5], [2426,SIZE6], [2676,SIZE7], [2927,SIZE8], [3176,SIZE9], [3427,SIZE10], [3676,SIZE11], [3927,SIZE12], [4176,SIZE13], [4427,SIZE14], [4676,SIZE15], [4927,SIZE16], [5176,SIZE17], [5427,SIZE18], [5676,SIZE19], [5927,SIZE20]],
          stretch: {bot:[0xE014,SIZE31], ext:[0x23A2,SYMBOLS], top:[0x23A1,SYMBOLS]}
        },
        0x2309:
        {
          dir: V,
          HW: [[909,MAIN], [1177,SIZE1], [1426,SIZE2], [1677,SIZE3], [1926,SIZE4], [2177,SIZE5], [2426,SIZE6], [2677,SIZE7], [2926,SIZE8], [3177,SIZE9], [3426,SIZE10], [3677,SIZE11], [3926,SIZE12], [4177,SIZE13], [4426,SIZE14], [4677,SIZE15], [4926,SIZE16], [5177,SIZE17], [5426,SIZE18], [5677,SIZE19], [5926,SIZE20]],
          stretch: {bot:[0xE015,SIZE31], ext:[0x23A5,SYMBOLS], top:[0x23A4,SYMBOLS]}
        },
        0x230A:
        {
          dir: V,
          HW: [[908,MAIN], [1175,SIZE1], [1425,SIZE2], [1675,SIZE3], [1925,SIZE4], [2175,SIZE5], [2425,SIZE6], [2675,SIZE7], [2925,SIZE8], [3175,SIZE9], [3425,SIZE10], [3675,SIZE11], [3925,SIZE12], [4175,SIZE13], [4425,SIZE14], [4675,SIZE15], [4925,SIZE16], [5175,SIZE17], [5425,SIZE18], [5675,SIZE19], [5925,SIZE20]],
          stretch: {bot:[0x23A3,SYMBOLS], ext:[0x23A2,SYMBOLS], top:[0xE016,SIZE31]}
        },
        0x230B:
        {
          dir: V,
          HW: [[908,MAIN], [1176,SIZE1], [1425,SIZE2], [1676,SIZE3], [1925,SIZE4], [2176,SIZE5], [2425,SIZE6], [1175,SIZE7], [1196,SIZE7,1.018], [1618,SIZE7,1.377], [2039,SIZE7,1.736], [2676,SIZE8], [2925,SIZE9], [3176,SIZE10], [3425,SIZE11], [3676,SIZE12], [3925,SIZE13], [4176,SIZE14], [4425,SIZE15], [4676,SIZE16], [4925,SIZE17], [5176,SIZE18], [5425,SIZE19], [5676,SIZE20]],
          stretch: {bot:[0x23A6,SYMBOLS], ext:[0x23A5,SYMBOLS], top:[0xE017,SIZE31]}
        },
        0x2329:
        {
          dir: V,
          HW: [[950,SYMBOLS], [1200,SIZE1], [1450,SIZE2], [1700,SIZE3], [1950,SIZE4], [2200,SIZE5], [2450,SIZE6], [2700,SIZE7], [2950,SIZE8], [3200,SIZE9], [3450,SIZE10], [3700,SIZE11], [3950,SIZE12], [4200,SIZE13], [4450,SIZE14], [4700,SIZE15], [4950,SIZE16], [5200,SIZE17], [5450,SIZE18], [5700,SIZE19], [5950,SIZE20]]
        },
        0x232A:
        {
          dir: V,
          HW: [[950,SYMBOLS], [1200,SIZE1], [1450,SIZE2], [1700,SIZE3], [1950,SIZE4], [2200,SIZE5], [2450,SIZE6], [2700,SIZE7], [2950,SIZE8], [3200,SIZE9], [3450,SIZE10], [3700,SIZE11], [3950,SIZE12], [4200,SIZE13], [4450,SIZE14], [4700,SIZE15], [4950,SIZE16], [5200,SIZE17], [5450,SIZE18], [5700,SIZE19], [5950,SIZE20]]
        },
        0x23B4:
        {
          dir: H,
          HW: [[537,MAIN], [787,SIZE1], [1037,SIZE2], [1287,SIZE3], [1537,SIZE4], [1787,SIZE5], [2037,SIZE6], [2287,SIZE7], [2537,SIZE8], [2787,SIZE9], [3037,SIZE10], [3287,SIZE11], [3537,SIZE12], [3787,SIZE13], [4037,SIZE14], [4287,SIZE15], [4537,SIZE16], [4787,SIZE17], [5037,SIZE18], [5287,SIZE19], [5537,SIZE20]],
          stretch: {left:[0xE009,SIZE31], rep:[0xE00A,SIZE31], right:[0xE00B,SIZE31]}
        },
        0x23B5:
        {
          dir: H,
          HW: [[537,MAIN], [787,SIZE1], [1037,SIZE2], [1287,SIZE3], [1537,SIZE4], [1787,SIZE5], [2037,SIZE6], [2287,SIZE7], [2537,SIZE8], [2787,SIZE9], [3037,SIZE10], [3287,SIZE11], [3537,SIZE12], [3787,SIZE13], [4037,SIZE14], [4287,SIZE15], [4537,SIZE16], [4787,SIZE17], [5037,SIZE18], [5287,SIZE19], [5537,SIZE20]],
          stretch: {left:[0xE018,SIZE31], rep:[0xE019,SIZE31], right:[0xE01A,SIZE31]}
        },
        0x23D0:
        {
          dir: V,
          HW: [[1500,MAIN], [1618,MAIN,1.079], [2039,MAIN,1.360], [2461,MAIN,1.641]],
          stretch: {ext:[0x23D0,MAIN]}
        },
        0x23DC:
        {
          dir: H,
          HW: [[526,MAIN], [776,SIZE1], [1026,SIZE2], [1276,SIZE3], [1526,SIZE4], [1776,SIZE5], [2025,SIZE6], [2276,SIZE7], [2526,SIZE8], [2776,SIZE9], [3026,SIZE10], [3276,SIZE11], [3526,SIZE12], [3776,SIZE13], [4026,SIZE14], [4276,SIZE15], [4526,SIZE16], [4776,SIZE17], [5026,SIZE18], [5276,SIZE19], [5526,SIZE20]],
          stretch: {left:[0xE01B,SIZE31], rep:[0xE01C,SIZE31], right:[0xE01D,SIZE31]}
        },
        0x23DD:
        {
          dir: H,
          HW: [[526,MAIN], [776,SIZE1], [1026,SIZE2], [1276,SIZE3], [1526,SIZE4], [1776,SIZE5], [2025,SIZE6], [2276,SIZE7], [2526,SIZE8], [2776,SIZE9], [3026,SIZE10], [3276,SIZE11], [3526,SIZE12], [3776,SIZE13], [4026,SIZE14], [4276,SIZE15], [4526,SIZE16], [4776,SIZE17], [5026,SIZE18], [5276,SIZE19], [5526,SIZE20]],
          stretch: {left:[0xE01E,SIZE31], rep:[0xE01F,SIZE31], right:[0xE020,SIZE31]}
        },
        0x23DE:
        {
          dir: H,
          HW: [[520,MAIN], [770,SIZE1], [1020,SIZE2], [1270,SIZE3], [1520,SIZE4], [1770,SIZE5], [2020,SIZE6], [2270,SIZE7], [2520,SIZE8], [2770,SIZE9], [3020,SIZE10], [3270,SIZE11], [3520,SIZE12], [3770,SIZE13], [4020,SIZE14], [4270,SIZE15], [4520,SIZE16], [4770,SIZE17], [5020,SIZE18], [5270,SIZE19], [5520,SIZE20]],
          stretch: {left:[0xE021,SIZE31], rep:[0xE022,SIZE31], mid:[0xE023,SIZE31], right:[0xE024,SIZE31]}
        },
        0x23DF:
        {
          dir: H,
          HW: [[520,MAIN], [770,SIZE1], [1020,SIZE2], [1270,SIZE3], [1520,SIZE4], [1770,SIZE5], [2020,SIZE6], [2270,SIZE7], [2520,SIZE8], [2770,SIZE9], [3020,SIZE10], [3270,SIZE11], [3520,SIZE12], [3770,SIZE13], [4020,SIZE14], [4270,SIZE15], [4520,SIZE16], [4770,SIZE17], [5020,SIZE18], [5270,SIZE19], [5520,SIZE20]],
          stretch: {left:[0xE025,SIZE31], rep:[0xE026,SIZE31], mid:[0xE027,SIZE31], right:[0xE028,SIZE31]}
        },
        0x23E0:
        {
          dir: H,
          HW: [[534,MAIN], [783,SIZE1], [1033,SIZE2], [1283,SIZE3], [1533,SIZE4], [1783,SIZE5], [2033,SIZE6], [2283,SIZE7], [2533,SIZE8], [2783,SIZE9], [3033,SIZE10], [3283,SIZE11], [3533,SIZE12], [3783,SIZE13], [4033,SIZE14], [4283,SIZE15], [4533,SIZE16], [4783,SIZE17], [5033,SIZE18], [5283,SIZE19], [5533,SIZE20]],
          stretch: {left:[0xE029,SIZE31], rep:[0xE02A,SIZE31], right:[0xE02B,SIZE31]}
        },
        0x23E1:
        {
          dir: H,
          HW: [[534,MAIN], [783,SIZE1], [1033,SIZE2], [1283,SIZE3], [1533,SIZE4], [1783,SIZE5], [2033,SIZE6], [2283,SIZE7], [2533,SIZE8], [2783,SIZE9], [3033,SIZE10], [3283,SIZE11], [3533,SIZE12], [3783,SIZE13], [4033,SIZE14], [4283,SIZE15], [4533,SIZE16], [4783,SIZE17], [5033,SIZE18], [5283,SIZE19], [5533,SIZE20]],
          stretch: {left:[0xE02C,SIZE31], rep:[0xE02D,SIZE31], right:[0xE02E,SIZE31]}
        },
        0x27E6:
        {
          dir: V,
          HW: [[902,SYMBOLS], [1167,SIZE1], [1417,SIZE2], [1666,SIZE3], [1918,SIZE4], [2166,SIZE5], [2418,SIZE6], [2666,SIZE7], [2917,SIZE8], [3167,SIZE9], [3417,SIZE10], [3667,SIZE11], [3917,SIZE12], [4167,SIZE13], [4417,SIZE14], [4667,SIZE15], [4917,SIZE16], [5167,SIZE17], [5417,SIZE18], [5667,SIZE19], [5917,SIZE20]],
          stretch: {bot:[0xE02F,SIZE31], ext:[0xE030,SIZE31], top:[0xE031,SIZE31]}
        },
        0x27E7:
        {
          dir: V,
          HW: [[902,SYMBOLS], [1167,SIZE1], [1417,SIZE2], [1666,SIZE3], [1918,SIZE4], [2166,SIZE5], [2418,SIZE6], [2666,SIZE7], [2917,SIZE8], [3167,SIZE9], [3417,SIZE10], [3667,SIZE11], [3917,SIZE12], [4167,SIZE13], [4417,SIZE14], [4667,SIZE15], [4917,SIZE16], [5167,SIZE17], [5417,SIZE18], [5667,SIZE19], [5917,SIZE20]],
          stretch: {bot:[0xE032,SIZE31], ext:[0xE033,SIZE31], top:[0xE034,SIZE31]}
        },
        0x27E8:
        {
          dir: V,
          HW: [[950,MAIN], [1200,SIZE1], [1450,SIZE2], [1700,SIZE3], [1950,SIZE4], [2200,SIZE5], [2450,SIZE6], [2700,SIZE7], [2950,SIZE8], [3200,SIZE9], [3450,SIZE10], [3700,SIZE11], [3950,SIZE12], [4200,SIZE13], [4450,SIZE14], [4700,SIZE15], [4950,SIZE16], [5200,SIZE17], [5450,SIZE18], [5700,SIZE19], [5950,SIZE20]]
        },
        0x27E9:
        {
          dir: V,
          HW: [[950,MAIN], [1200,SIZE1], [1450,SIZE2], [1700,SIZE3], [1950,SIZE4], [2200,SIZE5], [2450,SIZE6], [2700,SIZE7], [2950,SIZE8], [3200,SIZE9], [3450,SIZE10], [3700,SIZE11], [3950,SIZE12], [4200,SIZE13], [4450,SIZE14], [4700,SIZE15], [4950,SIZE16], [5200,SIZE17], [5450,SIZE18], [5700,SIZE19], [5950,SIZE20]]
        },
        0x27EA:
        {
          dir: V,
          HW: [[950,SYMBOLS], [1200,SIZE1], [1450,SIZE2], [1700,SIZE3], [1950,SIZE4], [2200,SIZE5], [2450,SIZE6], [2700,SIZE7], [2950,SIZE8], [3200,SIZE9], [3450,SIZE10], [3700,SIZE11], [3950,SIZE12], [4200,SIZE13], [4450,SIZE14], [4700,SIZE15], [4950,SIZE16], [5200,SIZE17], [5450,SIZE18], [5700,SIZE19], [5950,SIZE20]]
        },
        0x27EB:
        {
          dir: V,
          HW: [[950,SYMBOLS], [1200,SIZE1], [1450,SIZE2], [1700,SIZE3], [1950,SIZE4], [2200,SIZE5], [2450,SIZE6], [2700,SIZE7], [2950,SIZE8], [3200,SIZE9], [3450,SIZE10], [3700,SIZE11], [3950,SIZE12], [4200,SIZE13], [4450,SIZE14], [4700,SIZE15], [4950,SIZE16], [5200,SIZE17], [5450,SIZE18], [5700,SIZE19], [5950,SIZE20]]
        },
        0x27EE:
        {
          dir: V,
          HW: [[920,MAIN], [1168,SIZE1], [1420,SIZE2], [1668,SIZE3], [1920,SIZE4], [2168,SIZE5], [2420,SIZE6], [2668,SIZE7], [2920,SIZE8], [3168,SIZE9], [3420,SIZE10], [3668,SIZE11], [3920,SIZE12], [4168,SIZE13], [4420,SIZE14], [4668,SIZE15], [4920,SIZE16], [5168,SIZE17], [5420,SIZE18], [5668,SIZE19], [5920,SIZE20]],
          stretch: {bot:[0xE035,SIZE31], ext:[0xE036,SIZE31], top:[0xE037,SIZE31]}
        },
        0x27EF:
        {
          dir: V,
          HW: [[920,MAIN], [1168,SIZE1], [1420,SIZE2], [1668,SIZE3], [1920,SIZE4], [2168,SIZE5], [2420,SIZE6], [2668,SIZE7], [2920,SIZE8], [3168,SIZE9], [3420,SIZE10], [3668,SIZE11], [3920,SIZE12], [4168,SIZE13], [4420,SIZE14], [4668,SIZE15], [4920,SIZE16], [5168,SIZE17], [5420,SIZE18], [5668,SIZE19], [5920,SIZE20]],
          stretch: {bot:[0xE038,SIZE31], ext:[0xE039,SIZE31], top:[0xE03A,SIZE31]}
        },
        0x2906:
        {
          dir: H,
          HW: [[781,ARROWS], [1281,SIZE1]]
        },
        0x2907:
        {
          dir: H,
          HW: [[781,ARROWS], [1281,SIZE1]]
        },
        0x2A00:
        {
          dir: V,
          HW: [[836,OPERATORS], [1150,SIZE1]]
        },
        0x2A01:
        {
          dir: V,
          HW: [[836,OPERATORS], [1150,SIZE1]]
        },
        0x2A02:
        {
          dir: V,
          HW: [[836,OPERATORS], [1150,SIZE1]]
        },
        0x2A03:
        {
          dir: V,
          HW: [[974,OPERATORS], [1198,SIZE1]]
        },
        0x2A04:
        {
          dir: V,
          HW: [[974,OPERATORS], [1198,SIZE1]]
        },
        0x2A05:
        {
          dir: V,
          HW: [[974,OPERATORS], [1198,SIZE1]]
        },
        0x2A06:
        {
          dir: V,
          HW: [[974,OPERATORS], [1198,SIZE1]]
        },
        0x2A09:
        {
          dir: V,
          HW: [[732,OPERATORS], [1039,SIZE1]]
        },
        0x2A0C:
        {
          dir: V,
          HW: [[1095,OPERATORS], [1938,SIZE1]]
        },
        0x2A11:
        {
          dir: V,
          HW: [[1095,OPERATORS], [1938,SIZE1]]
        },
        0xFF0F:
        {
          dir: V,
          HW: [[950,ALPHABETS], [950,SIZE1], [1200,SIZE2], [1450,SIZE3], [1700,SIZE4], [1950,SIZE5], [2200,SIZE6], [2450,SIZE7], [2700,SIZE8], [2950,SIZE9], [3200,SIZE10], [3450,SIZE11], [3700,SIZE12], [3950,SIZE13], [4200,SIZE14], [4450,SIZE15], [4700,SIZE16], [4950,SIZE17], [5200,SIZE18], [5450,SIZE19], [5700,SIZE20], [5950,SIZE21]]
        }
      }

    }
  });
  MathJax.Hub.Register.LoadHook(SVG.fontDir+"/Size1/Regular/Main.js",function () {
    var i;
    for (i = 0x222B; i <= 0x222D; i++)
      SVG.FONTDATA.FONTS[SIZE1][i][2] -= 190;
    for (i = 0x222E; i <= 0x2231; i++)
      SVG.FONTDATA.FONTS[SIZE1][i][2] -= 100;
  });
  AJAX.loadComplete(SVG.fontDir + "/fontdata.js");

})(MathJax.OutputJax.SVG,MathJax.ElementJax.mml,MathJax.Ajax,MathJax.Hub);
