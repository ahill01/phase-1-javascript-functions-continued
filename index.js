// code your solution here
function saturdayFun(fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`;
}

const mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}
//mondayWork();

function wrapAdjective(flair ="*"){
    const inner = function(adj="special"){
    return `You are ${flair}${adj}${flair}!`;
    }
    return inner;
}
