/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/fonts/Garamond/fontdata.js
 *  
 *  Initializes the HTML-CSS OutputJax to use the Garamond fonts

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

(function (HTMLCSS,MML,AJAX) {

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

  HTMLCSS.Augment({
    FONTDATA: {
      version: VERSION,


      TeX_factor: 0.996,
      baselineskip: 1.200,
      lineH: 0.800, lineD: 0.200,

      hasStyleChar: true,  // char 0xEFFD encodes font style

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
          HW: [[0.920,MAIN], [1.168,SIZE1], [1.420,SIZE2], [1.668,SIZE3], [1.920,SIZE4], [2.168,SIZE5], [2.420,SIZE6], [2.668,SIZE7], [2.920,SIZE8], [3.168,SIZE9], [3.420,SIZE10], [3.668,SIZE11], [3.920,SIZE12], [4.168,SIZE13], [4.420,SIZE14], [4.668,SIZE15], [4.920,SIZE16], [5.168,SIZE17], [5.420,SIZE18], [5.668,SIZE19], [5.920,SIZE20]],
          stretch: {bot:[0x239D,SYMBOLS], ext:[0x239C,SYMBOLS], top:[0x239B,SYMBOLS]}
        },
        0x29:
        {
          dir: V,
          HW: [[0.920,MAIN], [1.168,SIZE1], [1.420,SIZE2], [1.668,SIZE3], [1.920,SIZE4], [2.168,SIZE5], [2.420,SIZE6], [2.668,SIZE7], [2.920,SIZE8], [3.168,SIZE9], [3.420,SIZE10], [3.668,SIZE11], [3.920,SIZE12], [4.168,SIZE13], [4.420,SIZE14], [4.668,SIZE15], [4.920,SIZE16], [5.168,SIZE17], [5.420,SIZE18], [5.668,SIZE19], [5.920,SIZE20]],
          stretch: {bot:[0x23A0,SYMBOLS], ext:[0x239F,SYMBOLS], top:[0x239E,SYMBOLS]}
        },
        0x2F:
        {
          dir: V,
          HW: [[0.950,MAIN], [1.200,SIZE1], [1.450,SIZE2], [1.700,SIZE3], [1.950,SIZE4], [2.200,SIZE5], [2.450,SIZE6], [2.700,SIZE7], [2.950,SIZE8], [3.200,SIZE9], [3.450,SIZE10], [3.700,SIZE11], [3.950,SIZE12], [4.200,SIZE13], [4.450,SIZE14], [4.700,SIZE15], [4.950,SIZE16], [5.200,SIZE17], [5.450,SIZE18], [5.700,SIZE19], [5.950,SIZE20]]
        },
        0x3D:
        {
          dir: H,
          HW: [[0.466,MAIN]],
          stretch: {left:[0x3D,MAIN], rep:[0xE000,SIZE31], right:[0x3D,MAIN]}
        },
        0x5B:
        {
          dir: V,
          HW: [[0.902,MAIN], [1.166,SIZE1], [1.418,SIZE2], [1.666,SIZE3], [1.918,SIZE4], [2.166,SIZE5], [2.418,SIZE6], [2.666,SIZE7], [2.917,SIZE8], [3.167,SIZE9], [3.417,SIZE10], [3.667,SIZE11], [3.917,SIZE12], [4.167,SIZE13], [4.417,SIZE14], [4.667,SIZE15], [4.917,SIZE16], [5.167,SIZE17], [5.417,SIZE18], [5.667,SIZE19], [5.917,SIZE20]],
          stretch: {bot:[0x23A3,SYMBOLS], ext:[0x23A2,SYMBOLS], top:[0x23A1,SYMBOLS]}
        },
        0x5C:
        {
          dir: V,
          HW: [[0.950,MAIN], [1.200,SIZE1], [1.450,SIZE2], [1.700,SIZE3], [1.950,SIZE4], [2.200,SIZE5], [2.450,SIZE6], [2.700,SIZE7], [2.950,SIZE8], [3.200,SIZE9], [3.450,SIZE10], [3.700,SIZE11], [3.950,SIZE12], [4.200,SIZE13], [4.450,SIZE14], [4.700,SIZE15], [4.950,SIZE16], [5.200,SIZE17], [5.450,SIZE18], [5.700,SIZE19], [5.950,SIZE20]]
        },
        0x5D:
        {
          dir: V,
          HW: [[0.902,MAIN], [1.166,SIZE1], [1.418,SIZE2], [1.666,SIZE3], [1.918,SIZE4], [2.166,SIZE5], [2.418,SIZE6], [2.666,SIZE7], [2.918,SIZE8], [3.166,SIZE9], [3.418,SIZE10], [3.666,SIZE11], [3.918,SIZE12], [4.166,SIZE13], [4.418,SIZE14], [4.666,SIZE15], [4.918,SIZE16], [5.166,SIZE17], [5.418,SIZE18], [5.666,SIZE19], [5.918,SIZE20]],
          stretch: {bot:[0x23A6,SYMBOLS], ext:[0x23A5,SYMBOLS], top:[0x23A4,SYMBOLS]}
        },
        0x7B:
        {
          dir: V,
          HW: [[0.867,MAIN], [1.169,SIZE1], [1.419,SIZE2], [1.669,SIZE3], [1.919,SIZE4], [2.169,SIZE5], [2.419,SIZE6], [2.669,SIZE7], [2.919,SIZE8], [3.169,SIZE9], [3.419,SIZE10], [3.669,SIZE11], [3.919,SIZE12], [4.169,SIZE13], [4.419,SIZE14], [4.669,SIZE15], [4.919,SIZE16], [5.169,SIZE17], [5.419,SIZE18], [5.669,SIZE19], [5.919,SIZE20]],
          stretch: {bot:[0x23A9,SYMBOLS], ext:[0xE001,SIZE31], mid:[0x23A8,SYMBOLS], top:[0x23A7,SYMBOLS]}
        },
        0x7C:
        {
          dir: V,
          HW: [[0.950,MAIN], [1.200,SIZE1], [1.450,SIZE2], [1.700,SIZE3], [1.950,SIZE4], [2.200,SIZE5], [2.450,SIZE6], [2.700,SIZE7], [2.950,SIZE8], [3.200,SIZE9], [3.450,SIZE10], [3.700,SIZE11], [3.950,SIZE12], [4.200,SIZE13], [4.450,SIZE14], [4.700,SIZE15], [4.950,SIZE16], [5.200,SIZE17], [5.450,SIZE18], [5.700,SIZE19], [5.950,SIZE20]],
          stretch: {bot:[0xE002,SIZE31], ext:[0xE003,SIZE31], top:[0xE004,SIZE31]}
        },
        0x7D:
        {
          dir: V,
          HW: [[0.867,MAIN], [1.169,SIZE1], [1.419,SIZE2], [1.669,SIZE3], [1.919,SIZE4], [2.169,SIZE5], [2.419,SIZE6], [2.669,SIZE7], [2.919,SIZE8], [3.169,SIZE9], [3.419,SIZE10], [3.669,SIZE11], [3.919,SIZE12], [4.169,SIZE13], [4.419,SIZE14], [4.669,SIZE15], [4.919,SIZE16], [5.169,SIZE17], [5.419,SIZE18], [5.669,SIZE19], [5.919,SIZE20]],
          stretch: {bot:[0x23AD,SYMBOLS], ext:[0xE005,SIZE31], mid:[0x23AC,SYMBOLS], top:[0x23AB,SYMBOLS]}
        },
        0x302:
        {
          dir: H,
          HW: [[0.215,MAIN], [0.410,SIZE1], [0.610,SIZE2], [0.810,SIZE3], [1.010,SIZE4], [1.209,SIZE5], [1.408,SIZE6], [1.609,SIZE7], [1.808,SIZE8], [2.008,SIZE9], [2.208,SIZE10], [2.406,SIZE11], [2.606,SIZE12], [2.806,SIZE13], [3.006,SIZE14], [3.204,SIZE15], [3.404,SIZE16], [3.604,SIZE17], [3.804,SIZE18], [4.002,SIZE19], [4.202,SIZE20], [4.402,SIZE21], [4.602,SIZE22], [4.800,SIZE23], [5.000,SIZE24], [5.200,SIZE25], [5.400,SIZE26], [5.598,SIZE27], [5.798,SIZE28], [5.998,SIZE29], [6.198,SIZE30], [6.396,SIZE31]]
        },
        0x303:
        {
          dir: H,
          HW: [[0.287,MAIN], [0.400,SIZE1], [0.600,SIZE2], [0.800,SIZE3], [1.000,SIZE4], [1.200,SIZE5], [1.400,SIZE6], [1.600,SIZE7], [1.800,SIZE8], [2.000,SIZE9], [2.200,SIZE10], [2.400,SIZE11], [2.600,SIZE12], [2.800,SIZE13], [3.000,SIZE14], [3.200,SIZE15], [3.400,SIZE16], [3.600,SIZE17], [3.800,SIZE18], [4.000,SIZE19], [4.200,SIZE20], [4.400,SIZE21], [4.600,SIZE22], [4.800,SIZE23], [5.000,SIZE24], [5.200,SIZE25], [5.400,SIZE26], [5.600,SIZE27], [5.800,SIZE28], [6.000,SIZE29], [6.200,SIZE30], [6.400,SIZE31]]
        },
        0x306:
        {
          dir: H,
          HW: [[0.214,MAIN], [0.444,SIZE1], [0.661,SIZE2], [0.877,SIZE3], [1.096,SIZE4], [1.313,SIZE5], [1.529,SIZE6]]
        },
        0x30C:
        {
          dir: H,
          HW: [[0.216,MAIN], [0.410,SIZE1], [0.610,SIZE2], [0.810,SIZE3], [1.010,SIZE4], [1.209,SIZE5], [1.408,SIZE6], [1.609,SIZE7], [1.808,SIZE8], [2.008,SIZE9], [2.208,SIZE10], [2.406,SIZE11], [2.606,SIZE12], [2.806,SIZE13], [3.006,SIZE14], [3.204,SIZE15], [3.404,SIZE16], [3.604,SIZE17], [3.804,SIZE18], [4.002,SIZE19], [4.202,SIZE20], [4.402,SIZE21], [4.602,SIZE22], [4.800,SIZE23], [5.000,SIZE24], [5.200,SIZE25], [5.400,SIZE26], [5.598,SIZE27], [5.798,SIZE28], [5.998,SIZE29], [6.198,SIZE30], [6.396,SIZE31]]
        },
        0x311:
        {
          dir: H,
          HW: [[0.214,MARKS], [0.444,SIZE1], [0.661,SIZE2], [0.877,SIZE3], [1.096,SIZE4], [1.313,SIZE5], [1.529,SIZE6]]
        },
        0x32C:
        {
          dir: H,
          HW: [[0.216,MARKS], [0.410,SIZE1], [0.610,SIZE2], [0.810,SIZE3], [1.010,SIZE4], [1.209,SIZE5], [1.408,SIZE6], [1.609,SIZE7], [1.808,SIZE8], [2.008,SIZE9], [2.208,SIZE10], [2.406,SIZE11], [2.606,SIZE12], [2.806,SIZE13], [3.006,SIZE14], [3.204,SIZE15], [3.404,SIZE16], [3.604,SIZE17], [3.804,SIZE18], [4.002,SIZE19], [4.202,SIZE20], [4.402,SIZE21], [4.602,SIZE22], [4.800,SIZE23], [5.000,SIZE24], [5.200,SIZE25], [5.400,SIZE26], [5.598,SIZE27], [5.798,SIZE28], [5.998,SIZE29], [6.198,SIZE30], [6.396,SIZE31]]
        },
        0x32D:
        {
          dir: H,
          HW: [[0.215,MARKS], [0.410,SIZE1], [0.610,SIZE2], [0.810,SIZE3], [1.010,SIZE4], [1.209,SIZE5], [1.408,SIZE6], [1.609,SIZE7], [1.808,SIZE8], [2.008,SIZE9], [2.208,SIZE10], [2.406,SIZE11], [2.606,SIZE12], [2.806,SIZE13], [3.006,SIZE14], [3.204,SIZE15], [3.404,SIZE16], [3.604,SIZE17], [3.804,SIZE18], [4.002,SIZE19], [4.202,SIZE20], [4.402,SIZE21], [4.602,SIZE22], [4.800,SIZE23], [5.000,SIZE24], [5.200,SIZE25], [5.400,SIZE26], [5.598,SIZE27], [5.798,SIZE28], [5.998,SIZE29], [6.198,SIZE30], [6.396,SIZE31]]
        },
        0x32E:
        {
          dir: H,
          HW: [[0.214,MARKS], [0.444,SIZE1], [0.661,SIZE2], [0.877,SIZE3], [1.096,SIZE4], [1.313,SIZE5], [1.529,SIZE6]]
        },
        0x32F:
        {
          dir: H,
          HW: [[0.214,MARKS], [0.444,SIZE1], [0.661,SIZE2], [0.877,SIZE3], [1.096,SIZE4], [1.313,SIZE5], [1.529,SIZE6]]
        },
        0x330:
        {
          dir: H,
          HW: [[0.287,MARKS], [0.400,SIZE1], [0.600,SIZE2], [0.800,SIZE3], [1.000,SIZE4], [1.200,SIZE5], [1.400,SIZE6], [1.600,SIZE7], [1.800,SIZE8], [2.000,SIZE9], [2.200,SIZE10], [2.400,SIZE11], [2.600,SIZE12], [2.800,SIZE13], [3.000,SIZE14], [3.200,SIZE15], [3.400,SIZE16], [3.600,SIZE17], [3.800,SIZE18], [4.000,SIZE19], [4.200,SIZE20], [4.400,SIZE21], [4.600,SIZE22], [4.800,SIZE23], [5.000,SIZE24], [5.200,SIZE25], [5.400,SIZE26], [5.600,SIZE27], [5.800,SIZE28], [6.000,SIZE29], [6.200,SIZE30], [6.400,SIZE31]]
        },
        0x2016:
        {
          dir: V,
          HW: [[0.950,MAIN], [1.200,SIZE1], [1.450,SIZE2], [1.700,SIZE3], [1.950,SIZE4], [2.200,SIZE5], [2.450,SIZE6], [2.700,SIZE7], [2.950,SIZE8], [3.200,SIZE9], [3.450,SIZE10], [3.700,SIZE11], [3.950,SIZE12], [4.200,SIZE13], [4.450,SIZE14], [4.700,SIZE15], [4.950,SIZE16], [5.200,SIZE17], [5.450,SIZE18], [5.700,SIZE19], [5.950,SIZE20]],
          stretch: {bot:[0xE006,SIZE31], ext:[0xE007,SIZE31], top:[0xE008,SIZE31]}
        },
        0x2044:
        {
          dir: V,
          HW: [[0.950,MAIN], [0.950,SIZE1], [1.200,SIZE2], [1.450,SIZE3], [1.700,SIZE4], [1.950,SIZE5], [2.200,SIZE6], [2.450,SIZE7], [2.700,SIZE8], [2.950,SIZE9], [3.200,SIZE10], [3.450,SIZE11], [3.700,SIZE12], [3.950,SIZE13], [4.200,SIZE14], [4.450,SIZE15], [4.700,SIZE16], [4.950,SIZE17], [5.200,SIZE18], [5.450,SIZE19], [5.700,SIZE20], [5.950,SIZE21]]
        },
        0x20E9:
        {
          dir: H,
          HW: [[0.537,MARKS], [0.787,SIZE1], [1.037,SIZE2], [1.287,SIZE3], [1.537,SIZE4], [1.787,SIZE5], [2.037,SIZE6]],
          stretch: {left:[0xE009,SIZE31], rep:[0xE00A,SIZE31], right:[0xE00B,SIZE31]}
        },
        0x2140:
        {
          dir: V,
          HW: [[0.984,DOUBLESTRUCK], [1.404,SIZE1]]
        },
        0x2190:
        {
          dir: H,
          HW: [[0.900,MAIN]],
          stretch: {left:[0x2190,MAIN], rep:[0xE00C,SIZE31], right:[0xE00D,SIZE31]}
        },
        0x2191:
        {
          dir: V,
          HW: [[0.842,MAIN]],
          stretch: {ext:[0xE00E,SIZE31], top:[0x2191,MAIN]}
        },
        0x2192:
        {
          dir: H,
          HW: [[0.900,MAIN]],
          stretch: {left:[0xE00D,SIZE31], rep:[0xE00C,SIZE31], right:[0x2192,MAIN]}
        },
        0x2193:
        {
          dir: V,
          HW: [[0.842,MAIN]],
          stretch: {bot:[0x2193,MAIN], ext:[0xE00E,SIZE31]}
        },
        0x2194:
        {
          dir: H,
          HW: [[0.900,MAIN]],
          stretch: {left:[0x2190,MAIN], rep:[0xE00C,SIZE31], right:[0x2192,MAIN]}
        },
        0x21BE:
        {
          dir: V,
          HW: [[0.852,MAIN]],
          stretch: {ext:[0xE00E,SIZE31], top:[0x21BE,MAIN]}
        },
        0x21BF:
        {
          dir: V,
          HW: [[0.852,MAIN]],
          stretch: {ext:[0xE00E,SIZE31], top:[0x21BF,MAIN]}
        },
        0x21C2:
        {
          dir: V,
          HW: [[0.852,MAIN]],
          stretch: {bot:[0x21C2,MAIN], ext:[0xE00E,SIZE31]}
        },
        0x21C3:
        {
          dir: V,
          HW: [[0.852,MAIN]],
          stretch: {bot:[0x21C3,MAIN], ext:[0xE00E,SIZE31]}
        },
        0x21D0:
        {
          dir: H,
          HW: [[0.900,MAIN]],
          stretch: {left:[0x21D0,MAIN], rep:[0xE00F,SIZE31], right:[0xE010,SIZE31]}
        },
        0x21D1:
        {
          dir: V,
          HW: [[0.842,MAIN]],
          stretch: {ext:[0xE011,SIZE31], top:[0x21D1,MAIN]}
        },
        0x21D2:
        {
          dir: H,
          HW: [[0.900,MAIN]],
          stretch: {left:[0xE010,SIZE31], rep:[0xE00F,SIZE31], right:[0x21D2,MAIN]}
        },
        0x21D3:
        {
          dir: V,
          HW: [[0.842,MAIN]],
          stretch: {bot:[0x21D3,MAIN], ext:[0xE011,SIZE31]}
        },
        0x21D4:
        {
          dir: H,
          HW: [[0.900,MAIN]],
          stretch: {left:[0x21D0,MAIN], rep:[0xE00F,SIZE31], right:[0x21D2,MAIN]}
        },
        0x220F:
        {
          dir: V,
          HW: [[0.962,OPERATORS], [1.384,SIZE1]]
        },
        0x2210:
        {
          dir: V,
          HW: [[0.962,OPERATORS], [1.384,SIZE1]]
        },
        0x2211:
        {
          dir: V,
          HW: [[0.984,OPERATORS], [1.404,SIZE1]]
        },
        0x2215:
        {
          dir: V,
          HW: [[0.950,MAIN], [0.950,SIZE1], [1.200,SIZE2], [1.450,SIZE3], [1.700,SIZE4], [1.950,SIZE5], [2.200,SIZE6], [2.450,SIZE7], [2.700,SIZE8], [2.950,SIZE9], [3.200,SIZE10], [3.450,SIZE11], [3.700,SIZE12], [3.950,SIZE13], [4.200,SIZE14], [4.450,SIZE15], [4.700,SIZE16], [4.950,SIZE17], [5.200,SIZE18], [5.450,SIZE19], [5.700,SIZE20], [5.950,SIZE21]]
        },
        0x221A:
        {
          dir: V,
          HW: [[0.712,MAIN], [0.982,SIZE1], [1.252,SIZE2], [1.522,SIZE3], [1.792,SIZE4], [2.062,SIZE5], [2.332,SIZE6], [2.602,SIZE7], [2.872,SIZE8], [3.142,SIZE9], [3.412,SIZE10], [3.682,SIZE11], [3.952,SIZE12], [4.222,SIZE13], [4.492,SIZE14], [4.762,SIZE15], [5.032,SIZE16], [5.302,SIZE17], [5.572,SIZE18], [5.842,SIZE19], [6.112,SIZE20]],
          stretch: {bot:[0x23B7,SYMBOLS], ext:[0xE012,SIZE31], top:[0xE013,SIZE31]}
        },
        0x2223:
        {
          dir: V,
          HW: [[0.950,MAIN], [1.200,SIZE1], [1.450,SIZE2], [1.700,SIZE3], [1.950,SIZE4], [2.200,SIZE5], [2.450,SIZE6], [2.700,SIZE7], [2.950,SIZE8], [3.200,SIZE9], [3.450,SIZE10], [3.700,SIZE11], [3.950,SIZE12], [4.200,SIZE13], [4.450,SIZE14], [4.700,SIZE15], [4.950,SIZE16], [5.200,SIZE17], [5.450,SIZE18], [5.700,SIZE19], [5.950,SIZE20]],
          stretch: {bot:[0xE002,SIZE31], ext:[0xE003,SIZE31], top:[0xE004,SIZE31]}
        },
        0x2225:
        {
          dir: V,
          HW: [[0.950,MAIN], [1.200,SIZE1], [1.450,SIZE2], [1.700,SIZE3], [1.950,SIZE4], [2.200,SIZE5], [2.450,SIZE6], [2.700,SIZE7], [2.950,SIZE8], [3.200,SIZE9], [3.450,SIZE10], [3.700,SIZE11], [3.950,SIZE12], [4.200,SIZE13], [4.450,SIZE14], [4.700,SIZE15], [4.950,SIZE16], [5.200,SIZE17], [5.450,SIZE18], [5.700,SIZE19], [5.950,SIZE20]],
          stretch: {bot:[0xE006,SIZE31], ext:[0xE007,SIZE31], top:[0xE008,SIZE31]}
        },
        0x222B:
        {
          dir: V,
          HW: [[1.095,MAIN], [1.938,SIZE1]]
        },
        0x222C:
        {
          dir: V,
          HW: [[1.095,OPERATORS], [1.938,SIZE1]]
        },
        0x222D:
        {
          dir: V,
          HW: [[1.095,OPERATORS], [1.938,SIZE1]]
        },
        0x222E:
        {
          dir: V,
          HW: [[1.095,OPERATORS], [1.938,SIZE1]]
        },
        0x222F:
        {
          dir: V,
          HW: [[1.095,OPERATORS], [1.938,SIZE1]]
        },
        0x2230:
        {
          dir: V,
          HW: [[1.095,OPERATORS], [1.938,SIZE1]]
        },
        0x2231:
        {
          dir: V,
          HW: [[1.095,OPERATORS], [1.938,SIZE1]]
        },
        0x2232:
        {
          dir: V,
          HW: [[1.095,OPERATORS], [1.938,SIZE1]]
        },
        0x2233:
        {
          dir: V,
          HW: [[1.095,OPERATORS], [1.938,SIZE1]]
        },
        0x22C0:
        {
          dir: V,
          HW: [[0.974,OPERATORS], [1.188,SIZE1]]
        },
        0x22C1:
        {
          dir: V,
          HW: [[0.974,OPERATORS], [1.188,SIZE1]]
        },
        0x22C2:
        {
          dir: V,
          HW: [[0.974,OPERATORS], [1.198,SIZE1]]
        },
        0x22C3:
        {
          dir: V,
          HW: [[0.974,OPERATORS], [1.198,SIZE1]]
        },
        0x2308:
        {
          dir: V,
          HW: [[0.909,MAIN], [1.176,SIZE1], [1.426,SIZE2], [1.676,SIZE3], [1.926,SIZE4], [2.176,SIZE5], [2.426,SIZE6], [2.676,SIZE7], [2.927,SIZE8], [3.176,SIZE9], [3.427,SIZE10], [3.676,SIZE11], [3.927,SIZE12], [4.176,SIZE13], [4.427,SIZE14], [4.676,SIZE15], [4.927,SIZE16], [5.176,SIZE17], [5.427,SIZE18], [5.676,SIZE19], [5.927,SIZE20]],
          stretch: {bot:[0xE014,SIZE31], ext:[0x23A2,SYMBOLS], top:[0x23A1,SYMBOLS]}
        },
        0x2309:
        {
          dir: V,
          HW: [[0.909,MAIN], [1.177,SIZE1], [1.426,SIZE2], [1.677,SIZE3], [1.926,SIZE4], [2.177,SIZE5], [2.426,SIZE6], [2.677,SIZE7], [2.926,SIZE8], [3.177,SIZE9], [3.426,SIZE10], [3.677,SIZE11], [3.926,SIZE12], [4.177,SIZE13], [4.426,SIZE14], [4.677,SIZE15], [4.926,SIZE16], [5.177,SIZE17], [5.426,SIZE18], [5.677,SIZE19], [5.926,SIZE20]],
          stretch: {bot:[0xE015,SIZE31], ext:[0x23A5,SYMBOLS], top:[0x23A4,SYMBOLS]}
        },
        0x230A:
        {
          dir: V,
          HW: [[0.908,MAIN], [1.175,SIZE1], [1.425,SIZE2], [1.675,SIZE3], [1.925,SIZE4], [2.175,SIZE5], [2.425,SIZE6], [2.675,SIZE7], [2.925,SIZE8], [3.175,SIZE9], [3.425,SIZE10], [3.675,SIZE11], [3.925,SIZE12], [4.175,SIZE13], [4.425,SIZE14], [4.675,SIZE15], [4.925,SIZE16], [5.175,SIZE17], [5.425,SIZE18], [5.675,SIZE19], [5.925,SIZE20]],
          stretch: {bot:[0x23A3,SYMBOLS], ext:[0x23A2,SYMBOLS], top:[0xE016,SIZE31]}
        },
        0x230B:
        {
          dir: V,
          HW: [[0.908,MAIN], [1.176,SIZE1], [1.425,SIZE2], [1.676,SIZE3], [1.925,SIZE4], [2.176,SIZE5], [2.425,SIZE6], [1.175,SIZE7], [1.196,SIZE7,1.018], [1.618,SIZE7,1.377], [2.039,SIZE7,1.736], [2.676,SIZE8], [2.925,SIZE9], [3.176,SIZE10], [3.425,SIZE11], [3.676,SIZE12], [3.925,SIZE13], [4.176,SIZE14], [4.425,SIZE15], [4.676,SIZE16], [4.925,SIZE17], [5.176,SIZE18], [5.425,SIZE19], [5.676,SIZE20]],
          stretch: {bot:[0x23A6,SYMBOLS], ext:[0x23A5,SYMBOLS], top:[0xE017,SIZE31]}
        },
        0x2329:
        {
          dir: V,
          HW: [[0.950,SYMBOLS], [1.200,SIZE1], [1.450,SIZE2], [1.700,SIZE3], [1.950,SIZE4], [2.200,SIZE5], [2.450,SIZE6], [2.700,SIZE7], [2.950,SIZE8], [3.200,SIZE9], [3.450,SIZE10], [3.700,SIZE11], [3.950,SIZE12], [4.200,SIZE13], [4.450,SIZE14], [4.700,SIZE15], [4.950,SIZE16], [5.200,SIZE17], [5.450,SIZE18], [5.700,SIZE19], [5.950,SIZE20]]
        },
        0x232A:
        {
          dir: V,
          HW: [[0.950,SYMBOLS], [1.200,SIZE1], [1.450,SIZE2], [1.700,SIZE3], [1.950,SIZE4], [2.200,SIZE5], [2.450,SIZE6], [2.700,SIZE7], [2.950,SIZE8], [3.200,SIZE9], [3.450,SIZE10], [3.700,SIZE11], [3.950,SIZE12], [4.200,SIZE13], [4.450,SIZE14], [4.700,SIZE15], [4.950,SIZE16], [5.200,SIZE17], [5.450,SIZE18], [5.700,SIZE19], [5.950,SIZE20]]
        },
        0x23B4:
        {
          dir: H,
          HW: [[0.537,MAIN], [0.787,SIZE1], [1.037,SIZE2], [1.287,SIZE3], [1.537,SIZE4], [1.787,SIZE5], [2.037,SIZE6], [2.287,SIZE7], [2.537,SIZE8], [2.787,SIZE9], [3.037,SIZE10], [3.287,SIZE11], [3.537,SIZE12], [3.787,SIZE13], [4.037,SIZE14], [4.287,SIZE15], [4.537,SIZE16], [4.787,SIZE17], [5.037,SIZE18], [5.287,SIZE19], [5.537,SIZE20]],
          stretch: {left:[0xE009,SIZE31], rep:[0xE00A,SIZE31], right:[0xE00B,SIZE31]}
        },
        0x23B5:
        {
          dir: H,
          HW: [[0.537,MAIN], [0.787,SIZE1], [1.037,SIZE2], [1.287,SIZE3], [1.537,SIZE4], [1.787,SIZE5], [2.037,SIZE6], [2.287,SIZE7], [2.537,SIZE8], [2.787,SIZE9], [3.037,SIZE10], [3.287,SIZE11], [3.537,SIZE12], [3.787,SIZE13], [4.037,SIZE14], [4.287,SIZE15], [4.537,SIZE16], [4.787,SIZE17], [5.037,SIZE18], [5.287,SIZE19], [5.537,SIZE20]],
          stretch: {left:[0xE018,SIZE31], rep:[0xE019,SIZE31], right:[0xE01A,SIZE31]}
        },
        0x23D0:
        {
          dir: V,
          HW: [[1.500,MAIN], [1.618,MAIN,1.079], [2.039,MAIN,1.360], [2.461,MAIN,1.641]],
          stretch: {ext:[0x23D0,MAIN]}
        },
        0x23DC:
        {
          dir: H,
          HW: [[0.526,MAIN], [0.776,SIZE1], [1.026,SIZE2], [1.276,SIZE3], [1.526,SIZE4], [1.776,SIZE5], [2.026,SIZE6], [2.276,SIZE7], [2.526,SIZE8], [2.776,SIZE9], [3.026,SIZE10], [3.276,SIZE11], [3.526,SIZE12], [3.776,SIZE13], [4.026,SIZE14], [4.276,SIZE15], [4.526,SIZE16], [4.776,SIZE17], [5.026,SIZE18], [5.276,SIZE19], [5.526,SIZE20]],
          stretch: {left:[0xE01B,SIZE31], rep:[0xE01C,SIZE31], right:[0xE01D,SIZE31]}
        },
        0x23DD:
        {
          dir: H,
          HW: [[0.526,MAIN], [0.776,SIZE1], [1.026,SIZE2], [1.276,SIZE3], [1.526,SIZE4], [1.776,SIZE5], [2.026,SIZE6], [2.276,SIZE7], [2.526,SIZE8], [2.776,SIZE9], [3.026,SIZE10], [3.276,SIZE11], [3.526,SIZE12], [3.776,SIZE13], [4.026,SIZE14], [4.276,SIZE15], [4.526,SIZE16], [4.776,SIZE17], [5.026,SIZE18], [5.276,SIZE19], [5.526,SIZE20]],
          stretch: {left:[0xE01E,SIZE31], rep:[0xE01F,SIZE31], right:[0xE020,SIZE31]}
        },
        0x23DE:
        {
          dir: H,
          HW: [[0.520,MAIN], [0.770,SIZE1], [1.020,SIZE2], [1.270,SIZE3], [1.520,SIZE4], [1.770,SIZE5], [2.020,SIZE6], [2.270,SIZE7], [2.520,SIZE8], [2.770,SIZE9], [3.020,SIZE10], [3.270,SIZE11], [3.520,SIZE12], [3.770,SIZE13], [4.020,SIZE14], [4.270,SIZE15], [4.520,SIZE16], [4.770,SIZE17], [5.020,SIZE18], [5.270,SIZE19], [5.520,SIZE20]],
          stretch: {left:[0xE021,SIZE31], rep:[0xE022,SIZE31], mid:[0xE023,SIZE31], right:[0xE024,SIZE31]}
        },
        0x23DF:
        {
          dir: H,
          HW: [[0.520,MAIN], [0.770,SIZE1], [1.020,SIZE2], [1.270,SIZE3], [1.520,SIZE4], [1.770,SIZE5], [2.020,SIZE6], [2.270,SIZE7], [2.520,SIZE8], [2.770,SIZE9], [3.020,SIZE10], [3.270,SIZE11], [3.520,SIZE12], [3.770,SIZE13], [4.020,SIZE14], [4.270,SIZE15], [4.520,SIZE16], [4.770,SIZE17], [5.020,SIZE18], [5.270,SIZE19], [5.520,SIZE20]],
          stretch: {left:[0xE025,SIZE31], rep:[0xE026,SIZE31], mid:[0xE027,SIZE31], right:[0xE028,SIZE31]}
        },
        0x23E0:
        {
          dir: H,
          HW: [[0.534,MAIN], [0.784,SIZE1], [1.034,SIZE2], [1.284,SIZE3], [1.534,SIZE4], [1.784,SIZE5], [2.034,SIZE6], [2.284,SIZE7], [2.534,SIZE8], [2.784,SIZE9], [3.034,SIZE10], [3.284,SIZE11], [3.533,SIZE12], [3.783,SIZE13], [4.033,SIZE14], [4.283,SIZE15], [4.533,SIZE16], [4.783,SIZE17], [5.033,SIZE18], [5.283,SIZE19], [5.533,SIZE20]],
          stretch: {left:[0xE029,SIZE31], rep:[0xE02A,SIZE31], right:[0xE02B,SIZE31]}
        },
        0x23E1:
        {
          dir: H,
          HW: [[0.534,MAIN], [0.784,SIZE1], [1.034,SIZE2], [1.284,SIZE3], [1.534,SIZE4], [1.784,SIZE5], [2.034,SIZE6], [2.284,SIZE7], [2.534,SIZE8], [2.784,SIZE9], [3.034,SIZE10], [3.284,SIZE11], [3.533,SIZE12], [3.783,SIZE13], [4.033,SIZE14], [4.283,SIZE15], [4.533,SIZE16], [4.783,SIZE17], [5.033,SIZE18], [5.283,SIZE19], [5.533,SIZE20]],
          stretch: {left:[0xE02C,SIZE31], rep:[0xE02D,SIZE31], right:[0xE02E,SIZE31]}
        },
        0x27E6:
        {
          dir: V,
          HW: [[0.902,SYMBOLS], [1.167,SIZE1], [1.417,SIZE2], [1.666,SIZE3], [1.918,SIZE4], [2.166,SIZE5], [2.418,SIZE6], [2.666,SIZE7], [2.917,SIZE8], [3.167,SIZE9], [3.417,SIZE10], [3.667,SIZE11], [3.917,SIZE12], [4.167,SIZE13], [4.417,SIZE14], [4.667,SIZE15], [4.917,SIZE16], [5.167,SIZE17], [5.417,SIZE18], [5.667,SIZE19], [5.917,SIZE20]],
          stretch: {bot:[0xE02F,SIZE31], ext:[0xE030,SIZE31], top:[0xE031,SIZE31]}
        },
        0x27E7:
        {
          dir: V,
          HW: [[0.902,SYMBOLS], [1.167,SIZE1], [1.417,SIZE2], [1.666,SIZE3], [1.918,SIZE4], [2.166,SIZE5], [2.418,SIZE6], [2.666,SIZE7], [2.917,SIZE8], [3.167,SIZE9], [3.417,SIZE10], [3.667,SIZE11], [3.917,SIZE12], [4.167,SIZE13], [4.417,SIZE14], [4.667,SIZE15], [4.917,SIZE16], [5.167,SIZE17], [5.417,SIZE18], [5.667,SIZE19], [5.917,SIZE20]],
          stretch: {bot:[0xE032,SIZE31], ext:[0xE033,SIZE31], top:[0xE034,SIZE31]}
        },
        0x27E8:
        {
          dir: V,
          HW: [[0.950,MAIN], [1.200,SIZE1], [1.450,SIZE2], [1.700,SIZE3], [1.950,SIZE4], [2.200,SIZE5], [2.450,SIZE6], [2.700,SIZE7], [2.950,SIZE8], [3.200,SIZE9], [3.450,SIZE10], [3.700,SIZE11], [3.950,SIZE12], [4.200,SIZE13], [4.450,SIZE14], [4.700,SIZE15], [4.950,SIZE16], [5.200,SIZE17], [5.450,SIZE18], [5.700,SIZE19], [5.950,SIZE20]]
        },
        0x27E9:
        {
          dir: V,
          HW: [[0.950,MAIN], [1.200,SIZE1], [1.450,SIZE2], [1.700,SIZE3], [1.950,SIZE4], [2.200,SIZE5], [2.450,SIZE6], [2.700,SIZE7], [2.950,SIZE8], [3.200,SIZE9], [3.450,SIZE10], [3.700,SIZE11], [3.950,SIZE12], [4.200,SIZE13], [4.450,SIZE14], [4.700,SIZE15], [4.950,SIZE16], [5.200,SIZE17], [5.450,SIZE18], [5.700,SIZE19], [5.950,SIZE20]]
        },
        0x27EA:
        {
          dir: V,
          HW: [[0.950,SYMBOLS], [1.200,SIZE1], [1.450,SIZE2], [1.700,SIZE3], [1.950,SIZE4], [2.200,SIZE5], [2.450,SIZE6], [2.700,SIZE7], [2.950,SIZE8], [3.200,SIZE9], [3.450,SIZE10], [3.700,SIZE11], [3.950,SIZE12], [4.200,SIZE13], [4.450,SIZE14], [4.700,SIZE15], [4.950,SIZE16], [5.200,SIZE17], [5.450,SIZE18], [5.700,SIZE19], [5.950,SIZE20]]
        },
        0x27EB:
        {
          dir: V,
          HW: [[0.950,SYMBOLS], [1.200,SIZE1], [1.450,SIZE2], [1.700,SIZE3], [1.950,SIZE4], [2.200,SIZE5], [2.450,SIZE6], [2.700,SIZE7], [2.950,SIZE8], [3.200,SIZE9], [3.450,SIZE10], [3.700,SIZE11], [3.950,SIZE12], [4.200,SIZE13], [4.450,SIZE14], [4.700,SIZE15], [4.950,SIZE16], [5.200,SIZE17], [5.450,SIZE18], [5.700,SIZE19], [5.950,SIZE20]]
        },
        0x27EE:
        {
          dir: V,
          HW: [[0.920,MAIN], [1.168,SIZE1], [1.420,SIZE2], [1.668,SIZE3], [1.920,SIZE4], [2.168,SIZE5], [2.420,SIZE6], [2.668,SIZE7], [2.920,SIZE8], [3.168,SIZE9], [3.420,SIZE10], [3.668,SIZE11], [3.920,SIZE12], [4.168,SIZE13], [4.420,SIZE14], [4.668,SIZE15], [4.920,SIZE16], [5.168,SIZE17], [5.420,SIZE18], [5.668,SIZE19], [5.920,SIZE20]],
          stretch: {bot:[0xE035,SIZE31], ext:[0xE036,SIZE31], top:[0xE037,SIZE31]}
        },
        0x27EF:
        {
          dir: V,
          HW: [[0.920,MAIN], [1.168,SIZE1], [1.420,SIZE2], [1.668,SIZE3], [1.920,SIZE4], [2.168,SIZE5], [2.420,SIZE6], [2.668,SIZE7], [2.920,SIZE8], [3.168,SIZE9], [3.420,SIZE10], [3.668,SIZE11], [3.920,SIZE12], [4.168,SIZE13], [4.420,SIZE14], [4.668,SIZE15], [4.920,SIZE16], [5.168,SIZE17], [5.420,SIZE18], [5.668,SIZE19], [5.920,SIZE20]],
          stretch: {bot:[0xE038,SIZE31], ext:[0xE039,SIZE31], top:[0xE03A,SIZE31]}
        },
        0x2906:
        {
          dir: H,
          HW: [[0.781,ARROWS], [1.281,SIZE1]]
        },
        0x2907:
        {
          dir: H,
          HW: [[0.781,ARROWS], [1.281,SIZE1]]
        },
        0x2A00:
        {
          dir: V,
          HW: [[0.836,OPERATORS], [1.150,SIZE1]]
        },
        0x2A01:
        {
          dir: V,
          HW: [[0.836,OPERATORS], [1.150,SIZE1]]
        },
        0x2A02:
        {
          dir: V,
          HW: [[0.836,OPERATORS], [1.150,SIZE1]]
        },
        0x2A03:
        {
          dir: V,
          HW: [[0.974,OPERATORS], [1.198,SIZE1]]
        },
        0x2A04:
        {
          dir: V,
          HW: [[0.974,OPERATORS], [1.198,SIZE1]]
        },
        0x2A05:
        {
          dir: V,
          HW: [[0.974,OPERATORS], [1.198,SIZE1]]
        },
        0x2A06:
        {
          dir: V,
          HW: [[0.974,OPERATORS], [1.198,SIZE1]]
        },
        0x2A09:
        {
          dir: V,
          HW: [[0.732,OPERATORS], [1.039,SIZE1]]
        },
        0x2A0C:
        {
          dir: V,
          HW: [[1.095,OPERATORS], [1.938,SIZE1]]
        },
        0x2A11:
        {
          dir: V,
          HW: [[1.095,OPERATORS], [1.938,SIZE1]]
        },
        0xFF0F:
        {
          dir: V,
          HW: [[0.950,ALPHABETS], [0.950,SIZE1], [1.200,SIZE2], [1.450,SIZE3], [1.700,SIZE4], [1.950,SIZE5], [2.200,SIZE6], [2.450,SIZE7], [2.700,SIZE8], [2.950,SIZE9], [3.200,SIZE10], [3.450,SIZE11], [3.700,SIZE12], [3.950,SIZE13], [4.200,SIZE14], [4.450,SIZE15], [4.700,SIZE16], [4.950,SIZE17], [5.200,SIZE18], [5.450,SIZE19], [5.700,SIZE20], [5.950,SIZE21]]
        }
      }

    }
  });
  MathJax.Hub.Register.LoadHook(HTMLCSS.fontDir+"/Size1/Regular/Main.js",function () {
    var i;
    for (i = 0x222B; i <= 0x222D; i++) {
      HTMLCSS.FONTDATA.FONTS[SIZE1][i][2] -= 190;
      HTMLCSS.FONTDATA.FONTS[SIZE1][i][5] = {rfix:-190};
    }
    for (i = 0x222E; i <= 0x2231; i++) {
      HTMLCSS.FONTDATA.FONTS[SIZE1][i][2] -= 100;
      HTMLCSS.FONTDATA.FONTS[SIZE1][i][5] = {rfix:-100};
    }
  });
  AJAX.loadComplete(HTMLCSS.fontDir + "/fontdata.js");

})(MathJax.OutputJax["HTML-CSS"],MathJax.ElementJax.mml,MathJax.Ajax);
