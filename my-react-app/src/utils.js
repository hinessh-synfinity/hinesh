const isArrayisEmpty = (arr) => {
 if(arr !== undefined && arr !== null && arr.lenght >0) {
    return true;
 }
  return false;

 }

 const dumpLogs = (message) => {
    console.log(message);
 }

 export {isArrayisEmpty, dumpLogs}