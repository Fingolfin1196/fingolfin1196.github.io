/*************************************************************
 *
 *  MathJax/jax/output/SVG/fonts/Garamond/fontdata-extra.js
 *  
 *  Adds extra stretchy characters to the Garamond fonts

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

(function (SVG) {
  var VERSION = "0.9";

  var DELIMITERS = SVG.FONTDATA.DELIMITERS;

  var H = "H", V = "V";

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

  var delim = {

  };
  
  for (var id in delim) {if (delim.hasOwnProperty(id)) {DELIMITERS[id] = delim[id]}};

  MathJax.Ajax.loadComplete(SVG.fontDir + "/fontdata-extra.js");

})(MathJax.OutputJax["SVG"]);
