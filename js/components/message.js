function errorDuringApiCall(error) {
  const theError = `<div class="error">
    There was an error:<br>
     ${error}
    </div>`;
  return theError;
}
