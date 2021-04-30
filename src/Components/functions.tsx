
const ones :readonly string[] = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tens : readonly string[] = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const teens : readonly string[] = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',    'eighteen', 'nineteen'];

function convert_millions(num:number) : any {
  if (num >= 1000000) {
    return convert_millions(Math.floor(num / 1000000)) + " million " + convert_thousands(num % 1000000);
  } else {
    return convert_thousands(num);
  }
}

function convert_thousands(num:number)  {
  if (num >= 1000) {
    return convert_hundreds(Math.floor(num / 1000)) + " thousand " + convert_hundreds(num % 1000);
  } else {
    return convert_hundreds(num);
  }
}

function convert_hundreds(num:number) {
  if (num > 99) {
    return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
  } else {
    return convert_tens(num);
  }
}

function convert_tens(num:number) {
  if (num < 10) return ones[num];
  else if (num >= 10 && num < 20) return teens[num - 10];
  else {
    return tens[Math.floor(num / 10)] + " " + ones[num % 10];
  }
}

function convert(num:number) {
  if (num === 0) return "zero";
  else return convert_millions(num);
}


//parse number to text 
export const integerToString = (num:number) : string =>{
  return convert(num);
}


export const getDaysRangeArray = (start:Date,end:Date) =>{
  
  let dateArr = [];

  for(let dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
  dateArr.push(new Date(dt));
  }

  return dateArr;
}

