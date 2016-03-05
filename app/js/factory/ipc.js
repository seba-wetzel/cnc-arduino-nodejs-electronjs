angular.factory('ipc',  ['$rootScope','cnc',($rootScope,cnc) => {
  const ipcRenderer = electron.ipcRenderer;
  return {
    sendArd : (cmd,callback) => {
      if(cmd !== null && cnc.arduino ){
        ipcRenderer.send('send-command',cmd);
        cnc.working = true;
        cnc.file.line.interpreted = 0;
        //callback();
        return true;
      }else{
        return false;
      }
    },
    on:  (eventName, callback) => {
      ipcRenderer.on(eventName, (event, arg) => {
        callback(event,arg);        
        $rootScope.$apply();
      });
    },
    send:  (eventName, data) => {
      ipcRenderer.send(eventName, data );
    },
    sendSync: (eventName, data) => {
      return ipcRenderer.sendSync (eventName, data );
    }
  }// return
}]);