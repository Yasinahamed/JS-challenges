function isDivisible(n, x, y) {
  
    const r1=n/x;
    const r2=n/y;
     if(r1%1==0&&r2%1==0)
        return true;
     else
        return false;
  }