
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


export const getDaysRangeArray = (start:Date,array:any[]) =>{
  
  let dateArr = [];
  let end = new Date();
  let len = array.forEach(itm=>{
    return itm.reduce((acc:any,i:any,index:number)=>{
      return acc +index;
    },0)
  })
  for(let dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
  dateArr.push(new Date(dt));
  }

  return dateArr;
}




//chunk an array 
export const chunkArray = (array:[], chunk_size:number) => Array(Math.ceil(array.length / chunk_size)).fill([]).map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size));

  export const  dateToNum = (d:string):number => {
    // Convert date "26-06-2016" to 20160626
    d.split("-"); 
    return Number(d[0]+d[1]+d[2]);
}

export const groupByDate = (array :any[] ) =>{
   
  let grouped = [];
  let tmpObj:any = {};
  array.forEach(item => {
  //convert date to an acceptable identifier
  let d:any = "D_" + item.referencedate.replace(/[^a-zA-Z0-9]/g, "");
  if (tmpObj[d]) {
    tmpObj[d].push(item);
  } else {
    tmpObj[d] = [item]
  }
  });

  for (let i in tmpObj) grouped.push(tmpObj[i]);

  return grouped;
}
    
