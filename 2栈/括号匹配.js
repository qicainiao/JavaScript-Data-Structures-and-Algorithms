var moduleJson = {//括号匹配模板，你可以增加别的匹配，比如“{}”，“<>”，等，只需写入moduleJson里面去
    ")":"(",
    "]":"["
}

var testStr = "([22(11)](44))()()";//测试字符串
var tempSaveArray = [];//用于存储字符串的数组
for(var i = 0;i<testStr.length;i++){//如果存在括号字符，就加入数组
    for(var key in moduleJson){
        if(testStr[i] == key||testStr[i]==moduleJson[key]){//如果字符串中存在json中的key 和value字符，就加入数组
            tempSaveArray.push(testStr[i]);
        }
    }
}

console.log("tempSaveArray===>",tempSaveArray);
if(tempSaveArray.length){
    if((tempSaveArray.length%2)!=0){//如果括号的长度为奇数，肯定不匹配
        console.log("括号不匹配");
    }else{//如果字符串括号长度为偶数，就进行遍历数组，进行判断 12345  0 4

        for(var j = 0;j<tempSaveArray.length;j++){
            //（（（（））））
            if(moduleJson[tempSaveArray[j]]){//如果是右括号，就和前一个进行匹配。
                //拿到数组前一位的字符，是否与自己匹配
                if(j>0){
                    console.log("前一个元素："+j+tempSaveArray[j-1]+" 后一个元素"+tempSaveArray[j]+"---moduleJson----"+moduleJson[tempSaveArray[j]]);
                    console.log(moduleJson[tempSaveArray[j]]==tempSaveArray[j-1]);
                    if(moduleJson[tempSaveArray[j]]==tempSaveArray[j-1]){//说明两个括号进行了匹配，让其出栈
                            console.log(j-1,"括号进行了匹配");
                            tempSaveArray.splice(j-1,2);
                            j=0;//从新遍历数组
                    }
                }
            }
        }

        if(tempSaveArray.length){//没有移除完毕
            console.log("括号不匹配");
        } else{
            console.log("括号匹配，恭喜你语法正确！");
        }
    }
}else{
    console.log("你输入的字符串不存在括号");
  }


  //方法二正则表达实现
