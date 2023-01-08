/**
 *
 *  This is used to sign out of the users account
 *
 */

import RemoveStorageVariable from "../storages/RemoveStorageVariable";
import SaveAccountCartItems from "../products/saves/SaveAccountCartItems";
import SaveAccountFavoriteItems from "../products/saves/SaveAccountFavoriteItems";
import DeclareStorageVariable from "../storages/DeclareStorageVariable";

export default function SignoutAccount(rooter) {
  RemoveStorageVariable("local", "Logged In");
  RemoveStorageVariable("local", "Username");
  RemoveStorageVariable("local", "E_Email");
  RemoveStorageVariable("local", "E_Password");
  DeclareStorageVariable("session", "Reset APIs", true);

  SaveAccountCartItems(false);
  SaveAccountFavoriteItems(false);

  if (rooter.pathname !== "/account") {
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }

  if (rooter.pathname === "/account") {
    setTimeout(() => {
      rooter.push("/");
    }, 300);
  }
}
