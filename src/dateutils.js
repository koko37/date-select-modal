function today(){
  return new Date() 
}
function tomorrow(){ 
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d;
}
function nextWeek() { 
  const d = new Date();
  d.setDate(d.getDate() + 7);
  return d;
}
function nextMonth() { 
  const d = new Date();
  d.setMonth(d.getMonth() + 1);
  return d;
}
function nextYear() { 
  const d = new Date();
  d.setYear(d.getYear() + 1);
  return d;
}

export {
  today,
  tomorrow,
  nextWeek,
  nextMonth,
  nextYear
};
