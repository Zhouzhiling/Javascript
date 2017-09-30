window.onload = function()
{
    prepareGallery();
}

function prepareGallery()
{
    //准备工作
    if(!document.getElementsByTagName || !document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    //准备工作done

    for(var i=0;i<links.length;i++)
    {
        links[i].onclick = function()
        {
            return showPic(this);
        }
    }
}


function showPic(whichpic)
    {
        if(!document.getElementById("placeholder")) return true;
        var source = whichpic.getAttribute("href");
        var placeholder = document.getElementById("placeholder");
        placeholder.setAttribute("src",source);

        var text = (whichpic.getAttribute("title"))?whichpic.getAttribute("title"):"";
        //上下等价↑↓
        // if(whichpic.getAttribute("title"))
        // {
        //     var text = whichpic.getAttribute("title");
        // }
        // else
        // {
        //     var text = "";
        // }

        if(!document.getElementById("description")) return false;
        var description = document.getElementById("description");
        description.firstChild.nodeValue = text;
        return false;
    }

    function popUp(url)
    {
        window.open(url,"new_one!!");
    }


    function countBodyChindren()

    {
        var body_element = document.getElementsByTagName("body")[0];
        alert(body_element.childNodes.length);
        var textOfP = document.getElementById("para");
        textOfP.childNodes[0].nodeValue = "233333";

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

