// Your code here
function saturdayFun(activity = `roller-skate`) {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(task = `go to the office`) {
    return `This Monday, I will ${task}.`;
}

function wrapAdjective(wrap= `*`) {
    function greeting(greet= `special`) {
        return `You are ${wrap}${greet}${wrap}!`;
    }
    return greeting;
}
