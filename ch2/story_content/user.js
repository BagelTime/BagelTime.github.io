function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JUR4XIFZPz":
        Script1();
        break;
  }
}

function Script1()
{
  var initial = 1000;

var player = GetPlayer();

var Front= player.GetVar("Front");
var Back= initial - Front;

player.SetVar("Back", Back);
}

