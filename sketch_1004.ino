int Button=3;
int LED=13;
boolean onoff=LOW; 
void setup()
{
  pinMode(Button,INPUT); 
  pinMode(LED,OUTPUT);
}
void loop(){
  if(digitalRead(Button)==LOW) 
  {
    delay(10);
    if(digitalRead(Button)==HIGH)
    {
      digitalWrite(LED,onoff); 
      onoff=(!onoff); 
      delay(10);
      while(digitalRead(Button)==HIGH)
        delay(1);
      }
    }
  }
