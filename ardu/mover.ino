// 01--
// -12-
// --23
// 0--3
void MoveX(int sent){
  StatusLED();
  switch (sent) {
    case 1:
      StepX(xp);
      xyzp[0]++;
      if(xp<3){
        xp++;
      }else{
        xp=0;
      }
    break;
    case 0:
      StepX(xp);
      xyzp[0]--;
      if(xp>0){
        xp--;
      }else{
        xp=3;
      }
    break;
  }
}
void MoveY(int sent){
  StatusLED();
  switch (sent) {
    case 0:
      StepY(yp);
      xyzp[1]--;
      if(yp<3){
        yp++;
      }else{
        yp=0;
      }
    break;
    case 1:
      StepY(yp);
      xyzp[1]++;
      if(yp>0){
        yp--;
      }else{
        yp=3;
      }
    break;
  }
}
void MoveZ(int sent){
  StatusLED();
  switch (sent) {
    case 1:
      StepZ(zp);
      xyzp[2]++;
      if(zp<3){
        zp++;
      }else{
        zp=0;
      }
    break;
    case 0:
      StepZ(zp);
      xyzp[2]--;
      if(zp>0){
        zp--;
      }else{
        zp=3;
      }
    break;
  }
}
void StepX(int i){
  if(_time!=0){
    int j=0;
    if(i!=3){ j=i+1; }else{ j=0; }
    digitalWrite(pinX[i],HIGH);
    digitalWrite(pinX[j],HIGH);
    delay(_time);
    digitalWrite(pinX[i],LOW);
    digitalWrite(pinX[j],LOW);
    if(xyzp[1]==0){
      delay(_time);
    }
  }else{
    digitalWrite(pinX[i],LOW);
  }
}
void StepY(int i){
  if(_time!=0){
    int j=0;
    if(i!=3){ j=i+1; }else{ j=0; }
    digitalWrite(pinY[i],HIGH);
    digitalWrite(pinY[j],HIGH);
    delay(_time);
    digitalWrite(pinY[i],LOW);
    digitalWrite(pinY[j],LOW);
    if(xyzp[0]==0){
      delay(_time);
    }
  }else{
    digitalWrite(pinY[i],LOW);
  }
}
void StepZ(int i){
  if(_time!=0){
    //int j = 0;if(i!=3){j=i+1;}else{j=0;}
    digitalWrite(pinZ[i],HIGH);
    //digitalWrite(pinZ[j],HIGH);
    delay(_time);
    digitalWrite(pinZ[i],LOW);
    //digitalWrite(pinZ[j],LOW);
    delay(_time);
  }else{
    digitalWrite(pinZ[i],LOW);
  }
}
