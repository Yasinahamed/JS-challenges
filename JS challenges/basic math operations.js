function basicOp(operation, value1, value2){
    const operationString= value1+operation+value2;
    const res=eval(operationString);
    return res;
  }