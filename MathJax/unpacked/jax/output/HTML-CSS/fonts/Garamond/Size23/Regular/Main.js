/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/fonts/Garamond/Size23/Regular/Main.js
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

MathJax.OutputJax['HTML-CSS'].FONTDATA.FONTS['GaramondMathJax_Size23'] = {
  directory: 'Size23/Regular',
  family: 'GaramondMathJax_Size23',
  testString: '\u00A0\u0302\u0303\u030C\u032C\u032D\u0330',
  0x20: [0,0,200,0,0],
  0xA0: [0,0,200,0,0],
  0x302: [826,-551,4800,0,4800],
  0x303: [799,-568,4800,0,4800],
  0x30C: [826,-551,4800,0,4800],
  0x32C: [-101,376,4800,0,4800],
  0x32D: [-101,376,4800,0,4800],
  0x330: [-104,335,4800,0,4800]
};

MathJax.Callback.Queue(
  ["initFont",MathJax.OutputJax["HTML-CSS"],"GaramondMathJax_Size23"],
  ["loadComplete",MathJax.Ajax,MathJax.OutputJax["HTML-CSS"].fontDir+"/Size23/Regular/Main.js"]
);
