function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60JUzwce7m3":
        Script1();
        break;
      case "69z7oquzGOJ":
        Script2();
        break;
      case "5q7MeLLpE1d":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var C = player.GetVar("C");
var F= (C*1.8)+32;


player.SetVar("CText", C);
player.SetVar("FText", F);
}

function Script2()
{
  var player = GetPlayer();

var CText = player.GetVar("CText");

player.SetVar("C", CText);
}

function Script3()
{
  var player = GetPlayer();

var FText = player.GetVar("FText");
var C = (FText-32)/1.8;

player.SetVar("C", C);
}

