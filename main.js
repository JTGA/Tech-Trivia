
<!-- TWO STEPS TO INSTALL TRIVIA QUESTIONS:

  1.  Copy the coding into the HEAD of your HTML document
  2.  Add the last code into the BODY of your HTML document  -->

<!-- STEP ONE: Paste this code into the HEAD of your HTML document  -->

<HEAD>

<SCRIPT LANGUAGE="JavaScript">

<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://www.javascriptsource.com -->
<!-- Original:  Jeremy Greenfield (paperairplane@noisebox.com ) -->
<!-- Web Site:  http://www.buckers.0catch.com -->
<!-- Begin
function Round1()
{
Q1=prompt("Who invented the lightbulb?","Your Answer Here");
if (Q1=="Thomas Edison")
{
alert("Correct!")
document.verify.Question2.value="Granted"
}
else
{
alert("Incorrect! Try Again.")
}
}
function Round2()
{
Q2=prompt("In science, H202 was one molecule of what?","Your Answer Here \(lower case\)")
if (Q2=="hydrogen peroxide")
{
alert("Correct!")
document.verify.Question3.value="Granted"
}
else
{
alert("Incorrect! Try Again.")
}
}
function Round3()
{
Q3=prompt("Which state has the longest sea border?","Your Answer Here")
if (Q3=="Alaska")
{
alert("Correct!")
document.verify.Question4.value="Granted"
}
else
{
alert("Incorrect! Try Again.")
}
}
function Round4()
{
Q4=prompt("The theory E=MC2 was made by whom?","Your Answer Here")
if (Q4=="Albert Einstein")
{
alert("Correct!")
document.verify.Question5.value="Granted"
}
else
{
alert("Incorrect! Try Again.")
}
}
function Round5()
{
Q3=prompt("What is 12 to the third power? Do not use a calculator!","Your Answer Here \(do not include comma\)")
if (Q3=="1728")
{
alert("Correct!")
alert("You answered every question correctly! Congrats! \n\n\n\n\n\n\n\n\n Created By Jeremy Greenfield")
alert("Thanks for playing!")
}
else
{
alert("Incorrect! Try Again.")
}
}
function PendRound2()
{
if (document.verify.Question2.value=="Granted")
{
Round2()
}
if (document.verify.Question2.value=="Denied")
{
alert("You must answer the previous rounds correctly before advancing to this round.") 
}
}
function PendRound3()
{
if (document.verify.Question3.value=="Granted")
{
Round3()
}
if (document.verify.Question3.value=="Denied")
{
alert("You must answer the previous rounds correctly before advancing to this round.") 
}
}
function PendRound4()
{
if (document.verify.Question4.value=="Granted")
{
Round4()
}
if (document.verify.Question4.value=="Denied")
{
alert("You must answer the previous rounds correctly before advancing to this round.") 
}
}
function PendRound5()
{
if (document.verify.Question5.value=="Granted")
{
Round5()
}
if (document.verify.Question5.value=="Denied")
{
alert("You must answer the previous rounds correctly before advancing to this round.") 
}
}
//  End -->
</script>

</HEAD>

<!-- STEP TWO: Copy this code into the BODY of your HTML document  -->

<BODY>

<form name="verify">
<input type="hidden" name="Question2" value="Denied"><input type="hidden" name="Question3" value="Denied"><input type="hidden" name="Question4" value="Denied"><input type="hidden" name="Question5" value="Denied">
</form>
<input type="button" value="Round 1" name="R1" style="color: #0000FF; font-family: Courier New" onClick="Round1()">
<input type="button" value="Round 2" name="R3" style="color: #0000FF; font-family: Courier New" onClick="PendRound2()">
<input type="button" value="Round 3" name="R3" style="color: #0000FF; font-family: Courier New" onClick="PendRound3()">
<input type="button" value="Round 4" name="R4" style="color: #0000FF; font-family: Courier New" onClick="PendRound4()">
<input type="button" value="Round 5" name="R5" style="color: #0000FF; font-family: Courier New" onClick="PendRound5()">
</form>

<p><center>
<font face="arial, helvetica" size"-2">Free JavaScripts provided<br>
by <a href="http://javascriptsource.com">The JavaScript Source</a></font>
</center><p>

<!-- Script Size:  3.87 KB -->