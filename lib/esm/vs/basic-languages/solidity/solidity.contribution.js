/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(4dc7b06d9b65ba5e55620b7c1c40afdcf4f517af)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/


// src/basic-languages/solidity/solidity.contribution.ts
import { registerLanguage } from "../_.contribution.js";
registerLanguage({
  id: "sol",
  extensions: [".sol"],
  aliases: ["sol", "solidity", "Solidity"],
  loader: () => {
    if (false) {
      return new Promise((resolve, reject) => {
        __require(["vs/basic-languages/solidity/solidity"], resolve, reject);
      });
    } else {
      return import("./solidity.js");
    }
  }
});
