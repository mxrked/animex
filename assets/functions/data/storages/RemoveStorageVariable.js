/**
 *
 *  This is used to remove either a local or session storage variable
 *
 */

export default function RemoveStorageVariable(storageType, variableName) {
  if (storageType == "session") {
    sessionStorage.removeItem(variableName);
  }

  if (storageType == "local") {
    localStorage.removeItem(variableName);
  }
}
