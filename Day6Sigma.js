function checkAnswer1()
{
    const userAnswer = document.getElementById("answer-input1").value;
    if(userAnswer.toLowerCase() == "kuala lumpur")
    {
        document.getElementById("result1").innerHTML = "Correct!";
    }
    else if(userAnswer.toLowerCase() == "kl")
    {
        document.getElementById("result1").innerHTML = "Correct!";
    }
    else
    {
        document.getElementById("result1").innerHTML = "Incorrect!";
    }
}

function checkAnswer2()
{
    const answer2 = document.getElementById("answer-input2").value;
    if( answer2.toLowerCase() == "anwar ibrahim")
    {
        document.getElementById("result2").innerHTML = "Yes! Correct!";
    }
    else if( answer2.toLowerCase() == "anwar")
    {
        document.getElementById("result2").innerHTML = "Official name please ~ ";
    }
    else
    {
        document.getElementById("result2").innerHTML = "Did you pass your SPM?"
    }
}

function checkAnswer3()
{
    const answer3 = document.getElementById("answer-input3").value;
    if(answer3.toLowerCase() == "yes")
    {
        document.getElementById("result3").innerHTML = "Yes you are! ^^";
    }
    else if(answer3.toLowerCase() == "no")
    {
        document.getElementById("result3").innerHTML = "I'm sorry but you are! xD"
    }
    else if(answer3 == "")
    {
        document.getElementById("result3").innerHTML = "Awwww~ just yes or no, be confidence~"
    }
}