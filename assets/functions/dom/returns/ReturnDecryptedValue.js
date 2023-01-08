/**
 *
 *  This is used to return a encrpyted local/session storage value
 *
 */

import CryptoAES from "crypto-js/aes";
import CryptoENC from "crypto-js/enc-utf8";

export default function ReturnDecryptedValue(storage, parent_param, value) {
  let decryptedValue;

  if (storage.getItem(parent_param)) {
    if (storage.getItem(value)) {
      decryptedValue = CryptoAES.decrypt(
        storage.getItem(value).toString(),
        "secret key 123"
      );

      console.log(decryptedValue.toString(CryptoENC));
      return decryptedValue.toString(CryptoENC);
    }
  }
}
