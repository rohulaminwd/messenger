
function smsAdd(id1, id2, id3){
    const newComment = document.getElementById(id1);
    
    if(newComment.value != ''){
        const newDiv = document.createElement('div');
        newDiv.classList.add('sms-r');

        const newP = document.createElement('p')
        newP.innerText = newComment.value;

        const addP = document.getElementById(id2).appendChild(newDiv);
        addP.appendChild(newP);

        // second person comment
        const secondDiv = document.createElement('div');
        secondDiv.classList.add('sms-l');

        const secondP = document.createElement('p');
        secondP.innerText = newComment.value;
        
        const addSecond = document.getElementById(id3).appendChild(secondDiv);
        addSecond.appendChild(secondP);
    }
    scrolled();
    newComment.value = '';

    boxNone1();
    boxNone2();
}

    

// color apply

function colorApply(id1, id2){
        document.getElementById(id1).style.backgroundColor = id2;
}

// love react

function loveSent(id1, id2, id3){
    const loveReact = document.getElementById(id1).innerText;

    const Div = document.createElement('div');
    Div.classList.add('sms-r');

    const P = document.createElement('p')
    P.innerText = loveReact;

    const addPL = document.getElementById(id3).appendChild(Div);
    addPL.appendChild(P);

    // second person

    const DivS = document.createElement('div');
    DivS.classList.add('sms-l');

    const PS = document.createElement('p')
    PS.innerText = loveReact;

    const addPlS =  document.getElementById(id2).appendChild(DivS);
    addPlS.appendChild(PS);

    scrolled();
}


// scroll event add

function scrolled(){
    document.getElementById('sms-box-second').scrollBy(0, 5000);
    document.getElementById('sms-box').scrollBy(0, 5000);
}
function scroll1(id){
    document.getElementById(id).scrollBy(0, -5000);
}

// EMOGI BOx ADD
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.style.display === "block") {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
    }
  }

  function clickBox(id){
    var x = document.getElementById(id);
    if(x.style.display === "block"){
        x.style.display = "none";
    }
  }
  function boxNone1(){
    var x = document.getElementById('my-emoji-box1');
    if(x.style.display === "block"){
        x.style.display = "none";
    }
  }
  function boxNone2(){
    var x = document.getElementById('my-emoji-box2');
    if(x.style.display === "block"){
        x.style.display = "none";
    }
  }
// emogi added
function addItem2(id1,id2){
    let added = document.getElementById(id1);
    const loveValu = document.getElementById(id2).innerText;
    added.value = added.value + loveValu;
} 

function leniarColor(id){
  var dom = document.getElementById(id);
  const actived = dom.style.background = 'linear-gradient(#ffcc99, #ccff99, #ccff66)';
}


// DELETE CHAT

function deletChat(id1, id2){
  const x1 = document.getElementsByClassName(id1);
  const x2 = document.getElementsByClassName(id2);

  for(const item1 of x1.length){
    console.log(item);
  }
}


// function getCssValuePrefix(id)
// {
//     var rtrnVal = '';//default to standard syntax
//     var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

//     // Create a temporary DOM object for testing
//     var dom = document.getElementById(id);

//     for (var i = 0; i < prefixes.length; i++)
//     {
//         // Attempt to set the style
//         dom.style.background = prefixes[i] + 'linear-gradient(#ffcc99, #ccff99, #ccff66)';

//         // Detect if the style was successfully set
//         if (dom.style.background)
//         {
//             rtrnVal = prefixes[i];
//         }
//     }

//     return rtrnVal;
// }