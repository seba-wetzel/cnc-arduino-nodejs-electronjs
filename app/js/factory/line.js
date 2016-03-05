angular.factory('Line', ['lineTable','config', (lineTable,config) => {
  return{
    add : (line) => {
      if(lineTable.length > 14){ 
        lineTable.shift();
      }
      lineTable.push(line);
    },
    new : (code,ejes,steps,travel,nro,type) => {
      switch(type){
        case 1: type='positive'; break;
        case 2: type='active'; break;
        case 3: type='warning';break;
        case 4: type='negative';break;
        case 5: type='disabled';break;
        default:type='';
      }
      return {
        travel : travel === undefined? '' : travel,
        steps  : steps  === undefined? [] : steps,
        type   ,
        ejes   : ejes   === undefined? [] : ejes,
        nro    : nro    === undefined? '' : nro,
        code
      }
    },
    codeType : (c , t) => {
      if(t === 'steps'){
        return {
        travel:'',
        nro:'',
        type : 'none',
        code : `Comando manual: ${c}`,
        steps : c.split(','),
        ejes : [
          c.split(',')[0] * config.motor.xy.advance / config.motor.xy.steps,
          c.split(',')[1] * config.motor.xy.advance / config.motor.xy.steps,
          c.split(',')[2] * config.motor.z.advance  / config.motor.z.steps
          ]
        }
      }else if(t === 'mm'){
        return {
        travel:'',
        nro:'',
        type : 'none',
        code : `Comando manual: ${c} ${t}`,
        ejes : c.split(','),
        steps : [
          Math.round(c.split(',')[0] * (config.motor.xy.steps / config.motor.xy.advance)),
          Math.round(c.split(',')[1] * (config.motor.xy.steps / config.motor.xy.advance)),
          Math.round(c.split(',')[2] * (config.motor.z.steps  / config.motor.z.advance))
        ]
      }
      }else{
        return {
        code : `Comando manual ${t}: ${c}`,
        travel:'',
        nro:'',
        type : 'none'
        }
      }
    },
    
    addMsj:  (msg,type) => {
      if(lineTable.length > 14){ 
      lineTable.shift();
      }
      switch(type){
        case 1: type='positive'; break;
        case 2: type='active'; break;
        case 3: type='warning';break;
        case 4: type='negative';break;
        case 5: type='disabled';break;
        default:type='';
      }
      lineTable.push({nro:'',ejes:[],type,code:msg,steps:[]});
    }
    
  }// return
}]);