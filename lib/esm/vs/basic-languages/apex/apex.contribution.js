/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(4dc7b06d9b65ba5e55620b7c1c40afdcf4f517af)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/


// src/basic-languages/apex/apex.contribution.ts
import { registerLanguage } from "../_.contribution.js";
registerLanguage({
  id: "apex",
  extensions: [".cls"],
  aliases: ["Apex", "apex"],
  mimetypes: ["text/x-apex-source", "text/x-apex"],
  loader: () => {
    if (false) {
      return new Promise((resolve, reject) => {
        __require(["vs/basic-languages/apex/apex"], resolve, reject);
      });
    } else {
      return import("./apex.js");
    }
  }
});
