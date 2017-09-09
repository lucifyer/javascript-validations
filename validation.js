
/**************************************************************************************************/
/***************************************Fields that cannot be left blank***************************/
/**************************************************************************************************/

//To validate for only numbers in the field

function allownum(inputid , messageid)
{
  if(!document.myform[inputid].value == "")
  {
     if(!document.myform[inputid].value.match(/^[0-9]+$/))
      {
          document.getElementById(messageid).style.display="block";
          document.getElementById(messageid).style.color="red";
          document.getElementById(messageid).innerHTML="Enter only digits";
          document.getElementById(inputid).style.borderColor="red";
          return false;
      }
      else
      {
           document.getElementById(messageid).style.display="none";
           document.getElementById(inputid).style.borderColor="silver";
           return true;

      }
  }
  else
  {
      document.getElementById(inputid).style.borderColor="red";
      document.getElementById(messageid).style.display="block";
      document.getElementById(messageid).style.color="red";
      document.getElementById(messageid).innerHTML="Field can't be blank";
      return false;
  }
}

//To validate for only alphabets in the field

function allowalpha(inputid,messageid)
{
  if(!document.myform[inputid].value == "")
  {
     if(!document.myform[inputid].value.match(/^[a-zA-Z]+$/))
      {
          document.getElementById(messageid).style.display="block";
          document.getElementById(messageid).style.color="red";
          document.getElementById(messageid).innerHTML="Enter only alphabets!";
          document.getElementById(inputid).style.borderColor="red";
          return false;
      }
      else
      {
           document.getElementById(messageid).style.display="none";
           document.getElementById(inputid).style.borderColor="silver";
           return true;
      }
  }
  else
  {
      document.getElementById(inputid).style.borderColor="red";
      document.getElementById(messageid).style.display="block";
      document.getElementById(messageid).style.color="red";
      document.getElementById(messageid).innerHTML="Field can't be blank";
      return false;
  }
}

//To validate for only alphabets and numbers
function allowalphanum(inputid,messageid)
{
  if(!document.myform[inputid].value == "")
  {
     if(!document.myform[inputid].value.match(/^[a-zA-Z0-9]+$/))
      {
          document.getElementById(messageid).style.display="block";
          document.getElementById(messageid).style.color="red";
          document.getElementById(messageid).innerHTML="No special characters allowed!";
          document.getElementById(inputid).style.borderColor="red";
          return false;
      }
      else
      {
           document.getElementById(messageid).style.display="none";
           document.getElementById(inputid).style.borderColor="silver";
           return true;
      }
  }
  else
  {
      document.getElementById(inputid).style.borderColor="red";
      document.getElementById(messageid).style.display="block";
      document.getElementById(messageid).style.color="red";
      document.getElementById(messageid).innerHTML="Field can't be blank";
      return false;
  }
}

//To validate for aadhar number- 12 digits
function aadharcheck(inputid,messageid)
{
  if(!document.myform[inputid].value == "")
  {
     if(!document.myform[inputid].value.match(/^\d{12}$/))
      {
          document.getElementById(messageid).style.display="block";
          document.getElementById(messageid).style.color="red";
          document.getElementById(messageid).innerHTML="Invalid Aadhar ID";
          document.getElementById(inputid).style.borderColor="red";
          return false;
      }
      else
      {
           document.getElementById(messageid).style.display="none";
           document.getElementById(inputid).style.borderColor="silver";
           return true;
      }
  }
  else
  {
      document.getElementById(messageid).style.display="block";
      document.getElementById(inputid).style.borderColor="red";
      document.getElementById(messageid).style.color="red";
      document.getElementById(messageid).innerHTML="Field can't be blank";
      return false;
  }
}

// To validate for a email address

function validateemail(inputid,messageid)
{
  if(!document.myform[inputid].value == "")
  {
     if(!document.myform[inputid].value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
      {
          document.getElementById(messageid).style.display="block";
          document.getElementById(messageid).style.color="red";
          document.getElementById(messageid).innerHTML="Invalid email address";
          document.getElementById(inputid).style.borderColor="red";
          return false;
      }
      else
      {
           document.getElementById(messageid).style.display="none";
           document.getElementById(inputid).style.borderColor="silver";
           return true;
      }
  }
  else
  {
    document.getElementById(messageid).style.display="block";
    document.getElementById(messageid).style.color="red";
    document.getElementById(messageid).innerHTML="Field cannot be empty";
    document.getElementById(inputid).style.borderColor="red";
    return false;
  }
}

//To validate for pin code - 6 digits
function pincheck(inputid,messageid)
{
  if(!document.myform[inputid].value == "")
  {
     if(!document.myform[inputid].value.match(/^\d{6}$/))
      {
          document.getElementById(messageid).style.display="block";
          document.getElementById(messageid).style.color="red";
          document.getElementById(messageid).innerHTML="Invalid pin code! Exactly 6 digits!";
          document.getElementById(inputid).style.borderColor="red";
          return false;
      }
      else
      {
           document.getElementById(messageid).style.display="none";
           document.getElementById(inputid).style.borderColor="silver";
           return true;
      }
  }
  else
  {
      document.getElementById(inputid).style.borderColor="red";
      document.getElementById(messageid).style.display="block";
      document.getElementById(messageid).style.color="red";
      document.getElementById(messageid).innerHTML="Field can't be blank";
      return false;
  }
}

//To allow dot and  alphabets and space
function allowdot(inputid,messageid)
{
  if(!document.myform[inputid].value == "")
  {
     if(!document.myform[inputid].value.match(/^[a-zA-Z. ]+$/))
      {
          document.getElementById(messageid).style.display="block";
          document.getElementById(messageid).style.color="red";
          document.getElementById(messageid).innerHTML="No special characters!";
          document.getElementById(inputid).style.borderColor="red";
          return false;
      }
      else
      {
           document.getElementById(messageid).style.display="none";
           document.getElementById(inputid).style.borderColor="silver";
           return true;
      }
  }
  else
  {
      document.getElementById(inputid).style.borderColor="red";
      document.getElementById(messageid).style.display="block";
      document.getElementById(messageid).style.color="red";
      document.getElementById(messageid).innerHTML="Field can't be blank";
      return false;
  }
}

//To allow only alphabets and dash and dot and space
function allowdotdash(inputid,messageid)
{
  if(!document.myform[inputid].value == "")
  {
     if(!document.myform[inputid].value.match(/^[a-zA-Z\-. ]+$/))
      {
          document.getElementById(messageid).style.display="block";
          document.getElementById(messageid).style.color="red";
          document.getElementById(messageid).innerHTML="No special characters!";
          document.getElementById(inputid).style.borderColor="red";
          return false;
      }
      else
      {
           document.getElementById(messageid).style.display="none";
           document.getElementById(inputid).style.borderColor="silver";
           return true;

      }
  }
  else
  {
      document.getElementById(inputid).style.borderColor="red";
      document.getElementById(messageid).style.display="block";
      document.getElementById(messageid).style.color="red";
      document.getElementById(messageid).innerHTML="Field can't be blank";
      return false;
  }
}

//To allow dot,dash,numbers,alphabets, space
function allowdotdashnum(inputid,messageid)
{
  if(!document.myform[inputid].value == "")
  {
     if(!document.myform[inputid].value.match(/^[a-zA-Z0-9\-. ]+$/))
              {
                  document.getElementById(messageid).style.display="block";
                  document.getElementById(messageid).style.color="red";
                  document.getElementById(messageid).innerHTML="No special characters!";
                  document.getElementById(inputid).style.borderColor="red";
                  return false;
              }
      else
      {
           document.getElementById(messageid).style.display="none";
           document.getElementById(inputid).style.borderColor="silver";
           return true;
      }
  }
  else
  {
      document.getElementById(inputid).style.borderColor="red";
      document.getElementById(messageid).style.display="block";
      document.getElementById(messageid).style.color="red";
      document.getElementById(messageid).innerHTML="Field can't be blank";
      return false;

  }
}

//To check if the field is empty for not
//Better for dropdowns, date such input types

function notnull(inputid,messageid)
{
  if(document.myform[inputid].value == "")
  {
    document.getElementById(inputid).style.borderColor="red";
    document.getElementById(messageid).style.display="block";
    document.getElementById(messageid).style.color="red";
    document.getElementById(messageid).innerHTML="Field can't be blank";
    return false;
  }
  else {
    document.getElementById(messageid).style.display="none";
    document.getElementById(inputid).style.borderColor="silver";
    return true;
  }
}


//For 10 digit mobile phone number

function allowphone(inputid,messageid)
  {if(!document.myform[inputid].value == "")
  {
     if(!document.myform[inputid].value.match(/^\d{10}$/))
      {
          document.getElementById(messageid).style.display="block";
          document.getElementById(messageid).style.color="red";
          document.getElementById(messageid).innerHTML="Invalid mobile no!";
          document.getElementById(inputid).style.borderColor="red";
          return false;

      }
      else
      {
           document.getElementById(messageid).style.display="none";
           document.getElementById(inputid).style.borderColor="silver";
           return true;
      }
  }
  else
  {
      document.getElementById(inputid).style.borderColor="red";
      document.getElementById(messageid).style.display="block";
      document.getElementById(messageid).style.color="red";
      document.getElementById(messageid).innerHTML="Field can't be blank";
      return false;

  }
}


/**************************************************************************************************/
/***************************************Fields that can be left blank******************************/
/**************************************************************************************************/

//To validate ofr numbers and can be left blank

function allownumnull(inputid,messageid)
{
  if(!document.myform[inputid].value == "")
  {
     if(isNaN(document.myform[inputid].value))
      {
          document.getElementById(messageid).style.display="block";
          document.getElementById(messageid).style.color="red";
          document.getElementById(messageid).innerHTML="Enter only digits";
          document.getElementById(inputid).style.borderColor="red";
          return false;
      }
      else
      {
           document.getElementById(messageid).style.display="none";
           document.getElementById(inputid).style.borderColor="silver";
           return true;
      }
  }
  else
  {
       document.getElementById(messageid).style.display="none";
       document.getElementById(inputid).style.borderColor="silver";
       return true;
  }
}

//To validate for only alphabets in the field and can be left blank

function allowalphanull(inputid,messageid)
{

  if(!document.myform[inputid].value == "")
  {
     if(!document.myform[inputid].value.match(/^[a-zA-Z]+$/))
      {
          document.getElementById(messageid).style.display="block";
          document.getElementById(messageid).style.color="red";
          document.getElementById(messageid).innerHTML="Enter only alphabets!";
          document.getElementById(inputid).style.borderColor="red";
          return false;
      }
      else
      {
           document.getElementById(messageid).style.display="none";
           document.getElementById(inputid).style.borderColor="silver";
           return true;
      }
  }
  else
  {
       document.getElementById(messageid).style.display="none";
       document.getElementById(inputid).style.borderColor="silver";
       return true;
  }
}

//To validate for only alphabets and numbers and can be left blank
function allowalphanumnull(inputid,messageid)
{
  if(!document.myform[inputid].value == "")
  {
     if(!document.myform[inputid].value.match(/^[a-zA-Z0-9]+$/))
      {
          document.getElementById(messageid).style.display="block";
          document.getElementById(messageid).style.color="red";
          document.getElementById(messageid).innerHTML="No special characters allowed!";
          document.getElementById(inputid).style.borderColor="red";
          return false;
      }
      else
      {
           document.getElementById(messageid).style.display="none";
           document.getElementById(inputid).style.borderColor="silver";
           return true;
      }
  }
  else
  {
       document.getElementById(messageid).style.display="none";
       document.getElementById(inputid).style.borderColor="silver";
       return true;
  }
}

//To validate for aadhar number- 12 digits and can be left blank
function aadharchecknull(inputid,messageid)
{
  if(!document.myform[inputid].value == "")
  {
     if(!document.myform[inputid].value.match(/^\d{12}$/))
      {
          document.getElementById(messageid).style.display="block";
          document.getElementById(messageid).style.color="red";
          document.getElementById(messageid).innerHTML="Invalid Aadhar ID";
          document.getElementById(inputid).style.borderColor="red";
          return false;
      }
      else
      {
           document.getElementById(messageid).style.display="none";
           document.getElementById(inputid).style.borderColor="silver";
           return true;
      }
  }
  else
  {
       document.getElementById(messageid).style.display="none";
       document.getElementById(inputid).style.borderColor="silver";
       return true;
  }
}

//To validate for pin code - 6 digits and can be left blank
function pinchecknull(inputid,messageid)
{
  if(!document.myform[inputid].value == "")
  {
     if(!document.myform[inputid].value.match(/^\d{6}$/))
      {
          document.getElementById(messageid).style.display="block";
          document.getElementById(messageid).style.color="red";
          document.getElementById(messageid).innerHTML="Invalid pin code! Exactly 6 digits!";
          document.getElementById(inputid).style.borderColor="red";
          return false;
      }
      else
      {
           document.getElementById(messageid).style.display="none";
           document.getElementById(inputid).style.borderColor="silver";
           return true;
      }
  }
  else
  {
       document.getElementById(messageid).style.display="none";
       document.getElementById(inputid).style.borderColor="silver";
       return true;

  }
}

//To allow dot and dash characters along with alphabets and can be left blank
function allowdotdashnull(inputid,messageid)
{
  if(!document.myform[inputid].value == "")
  {
     if(!document.myform[inputid].value.match(/^[a-zA-Z\-.  ]+$/))
      {
          document.getElementById(messageid).style.display="block";
          document.getElementById(messageid).style.color="red";
          document.getElementById(messageid).innerHTML="No special characters!";
          document.getElementById(inputid).style.borderColor="red";
          return false;
      }
      else
      {
           document.getElementById(messageid).style.display="none";
           document.getElementById(inputid).style.borderColor="silver";
           return true;
      }
  }
  else
  {
       document.getElementById(messageid).style.display="none";
       document.getElementById(inputid).style.borderColor="silver";
       return true;
  }
}

//To validate email address and can be left blank
function validateemailnull(inputid,messageid)
{
  if(!document.myform[inputid].value == "")
  {
     if(!document.myform[inputid].value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
      {
          document.getElementById(messageid).style.display="block";
          document.getElementById(messageid).style.color="red";
          document.getElementById(messageid).innerHTML="Invalid email address";
          document.getElementById(inputid).style.borderColor="red";
          return false;
      }
      else
      {
           document.getElementById(messageid).style.display="none";
           document.getElementById(inputid).style.borderColor="silver";
           return true;
      }
  }
  else
  {
       document.getElementById(messageid).style.display="none";
       document.getElementById(inputid).style.borderColor="silver";
       return true;
  }
}
