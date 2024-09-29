
function generatePassword(length, includeLowecase, includeUppercase, inclueNumbers,includeSymbol){
   const lowercasechar= "abcdefghijklmnopqrstuvwxyz";
   const uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numberchar = "1234567890";
   const symbolschar = "!@#$%^&*()";


   let allchars = "";
   let password = "";

   allchars += includeLowecase ? lowercasechar : "";
   allchars += includeUppercase ? uppercasechar : "";
   allchars += inclueNumbers ? numberchar : "";
   allchars += includeSymbol ? symbolschar : "";

   if(length<=0){
      return `(Pasword length must be atlest 1)`;
   }
   if(allchars.length == 0 ){
      return `(At least 1 character must be selected)`;
   }

   for(let i =0 ; i <length ; i++){
      const randomIndex = Math.floor(Math.random() * allchars.length);
      password += allchars[randomIndex];
   }

   return password;

}

const passwordLength = 12;
const includeLowecase = true;
const includeUppercase = true;
const inclueNumbers = true;
const includeSymbol =true;


const password = generatePassword(passwordLength, includeLowecase, includeUppercase, inclueNumbers,includeSymbol);

console.log(`Generated password : ${password}`);

