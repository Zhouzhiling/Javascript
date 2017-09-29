    function showPic(whichpic)
    {
        var source = whichpic.getAttribute("href");
        var placeHolder = document.getElementById("placeholder");
        placeHolder.setAttribute("src".source);
    }

    function countBodyChindren()

    {
        var body_element = document.getElementsByTagName("body")[0];
        alert(body_element.childNodes.length);
    }



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
      // var paras = document.getElementsByTagName("p");
      // for(var i=0;i<paras.length;i++)
      // {
      //     var txt_title = paras[i].getAttribute("title");
      //     if(txt_title!=null)
      //     alert(txt_title);
      // }
      // var num = 7.561;
      // var num = Math.round(num);
      // alert(num);



    }

