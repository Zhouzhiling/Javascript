
    function addWidth(name,num)
    {
      bb = document['getElementById']("colorBlock");
      bb.style[name] = num;
    }
    function changeColor(inputcolor)
    {
      var bb = document.getElementById("colorBlock");
      bb.style.background = inputcolor;
    }

    function changeTxt()
    {
      var oTxt = document.getElementById("toChange");
      oTxt.title = "Successful!";
      if(oTxt.value != "Successful!")
      {
        oTxt.value="Successful!";
        oTxt.className = "redbg";
      }

      else
      {
        oTxt.value="OK??";
        oTxt.className = " ";
      }

      //alert("???");
      var num = document.getElementByTagName("li").length;
      alert(num);
      // var num = 7.561;
      // var num = Math.round(num);
      // alert(num);



    }

