

document.getElementById('sms-sent').addEventListener('click', function(){

    const newComment = document.getElementById('comment-box');
    
    if(newComment.value != ''){
        const newDiv = document.createElement('div');
        newDiv.classList.add('sms-r');

        const newP = document.createElement('p')
        newP.innerText = newComment.value;

        const addP = document.getElementById('sms-box').appendChild(newDiv);
        addP.appendChild(newP);

        // second person comment
        const secondDiv = document.createElement('div');
        secondDiv.classList.add('sms-l');

        const secondP = document.createElement('p');
        secondP.innerText = newComment.value;
        
        const addSecond = document.getElementById('sms-box-second').appendChild(secondDiv);
        addSecond.appendChild(secondP);
    }
    scrolled();
    newComment.value = '';
})


// second person
document.getElementById('second-sms-sent').addEventListener('click', function(){

    const newCommentS = document.getElementById('comment-box-second');
    
    if(newCommentS.value != ''){
        const newDivS = document.createElement('div');
        newDivS.classList.add('sms-r');

        const newPS = document.createElement('p')
        newPS.innerText = newCommentS.value;

        const addPS = document.getElementById('sms-box-second').appendChild(newDivS);
        addPS.appendChild(newPS);

        // second person
        const secondDivS = document.createElement('div');
        secondDivS.classList.add('sms-l');

        const secondPS = document.createElement('p');
        secondPS.innerText = newCommentS.value;
        
        const addSecondS = document.getElementById('sms-box').appendChild(secondDivS);
        addSecondS.appendChild(secondPS);
    }

    scrolled();

    newCommentS.value = '';
})


// color apply

function colorApply(id1, id2){
        document.getElementById(id1).style.backgroundColor = id2;
}

document.getElementById('gold').addEventListener('click', function(){
    document.getElementById('color-apply').style.backgroundColor = 'lightpink';
})

document.getElementById('lightblue').addEventListener('click', function(){
    document.getElementById('color-apply').style.backgroundColor = 'lightblue';

    // second person 
})
document.getElementById('oranges').addEventListener('click', function(){
    document.getElementById('color-applyed').style.backgroundColor = 'white';
})

document.getElementById('golds').addEventListener('click', function(){
    document.getElementById('color-applyed').style.backgroundColor = 'lightpink';
})

document.getElementById('lightblues').addEventListener('click', function(){
    document.getElementById('color-applyed').style.backgroundColor = 'lightblue';
})



// love react

document.getElementById('love').addEventListener('dblclick', function(){

        const loveReact = document.getElementById('love').innerText;

        const Div = document.createElement('div');
        Div.classList.add('sms-r');

        const P = document.createElement('p')
        P.innerText = loveReact;

        const addPL = document.getElementById('sms-box').appendChild(Div);
        addPL.appendChild(P);

        // second person

        const DivS = document.createElement('div');
        DivS.classList.add('sms-l');

        const PS = document.createElement('p')
        PS.innerText = loveReact;

        const addPlS =  document.getElementById('sms-box-second').appendChild(DivS);
        addPlS.appendChild(PS);

        scrolled();
})


document.getElementById('love-S').addEventListener('dblclick', function(){

        const loveReact = document.getElementById('love').innerText;

        const Div = document.createElement('div');
        Div.classList.add('sms-r');

        const P = document.createElement('p')
        P.innerText = loveReact;

        const addPL = document.getElementById('sms-box-second').appendChild(Div);
        addPL.appendChild(P);

        // second person

        const DivS = document.createElement('div');
        DivS.classList.add('sms-l');

        const PS = document.createElement('p')
        PS.innerText = loveReact;

        const addPlS =  document.getElementById('sms-box').appendChild(DivS);
        addPlS.appendChild(PS);

        scrolled();
})



// text area valu love reack


document.getElementById('love').addEventListener('click', function(){
    let added = document.getElementById('comment-box');
    const loveValu = document.getElementById('love').innerText;
    added.value = added.value + loveValu;
    scrolled();
})
// second person
document.getElementById('love-S').addEventListener('click', function(){
    let added = document.getElementById('comment-box-second');

    const loveValu = document.getElementById('love').innerText;
    added.value = added.value + loveValu;
    scrolled();
})


// scroll event add

function scrolled(){
    document.getElementById('sms-box-second').scrollBy(0, 500);
    document.getElementById('sms-box').scrollBy(0, 500);
}

// EMOGI BOS ADD
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function clickBox(id){
    var x = document.getElementById(id);
    if(x.style.display === "block"){
        x.style.display = "none";
    }
  }

function addItem2(id1,id2){
    let added = document.getElementById(id1);
    const loveValu = document.getElementById(id2).innerText;
    added.value = added.value + loveValu;
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