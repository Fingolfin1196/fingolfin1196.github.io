/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/fonts/Garamond/Size21/Regular/Main.js
 *  
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

MathJax.OutputJax['HTML-CSS'].FONTDATA.FONTS['GaramondMathJax_Size21'] = {
  directory: 'Size21/Regular',
  family: 'GaramondMathJax_Size21',
  testString: '\u00A0\u0302\u0303\u030C\u032C\u032D\u0330\u2044\u2215\uFF0F',
  0x20: [0,0,200,0,0],
  0xA0: [0,0,200,0,0],
  0x302: [819,-551,4402,0,4402],
  0x303: [789,-568,4400,0,4400],
  0x30C: [819,-551,4402,0,4402],
  0x32C: [-101,369,4402,0,4402],
  0x32D: [-101,369,4402,0,4402],
  0x330: [-104,325,4400,0,4400],
  0x2044: [3225,2725,892,89,802],
  0x2215: [3225,2725,892,89,802],
  0xFF0F: [3225,2725,892,89,802]
};

MathJax.Callback.Queue(
  ["initFont",MathJax.OutputJax["HTML-CSS"],"GaramondMathJax_Size21"],
  ["loadComplete",MathJax.Ajax,MathJax.OutputJax["HTML-CSS"].fontDir+"/Size21/Regular/Main.js"]
);
