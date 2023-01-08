/**
 *
 *  This is used to declare either a local or session storage variable
 *
 */

export default function DeclareStorageVariable(
  storageType,
  variableName,
  variableValue
) {
  if (storageType == "session") {
    sessionStorage.setItem(variableName, variableValue);
  }

  if (storageType == "local") {
    localStorage.setItem(variableName, variableValue);
  }
}
