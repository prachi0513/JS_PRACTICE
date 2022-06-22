let a = [
  {
    valid: "Y",
    mof: "ONLINE",
    dof: "11-03-2022",
    ret_prd: "022022",
    rtntype: "GSTR1",
    arn: "AA060222262513N",
    status: "Filed",
  },
  {
    valid: "Y",
    mof: "ONLINE",
    dof: "11-02-2022",
    ret_prd: "012022",
    rtntype: "GSTR1",
    arn: "AA060122266442M",
    status: "Filed",
  },
  {
    valid: "Y",
    mof: "ONLINE",
    dof: "10-01-2022",
    ret_prd: "122021",
    rtntype: "GSTR1",
    arn: "AA0612212468667",
    status: "Filed",
  },
  {
    valid: "Y",
    mof: "ONLINE",
    dof: "11-12-2021",
    ret_prd: "112021",
    rtntype: "GSTR1",
    arn: "AA061121244930O",
    status: "Filed",
  },
  {
    valid: "Y",
    mof: "ONLINE",
    dof: "11-11-2021",
    ret_prd: "102021",
    rtntype: "GSTR1",
    arn: "AA061021222675O",
    status: "Filed",
  },
  {
    valid: "Y",
    mof: "ONLINE",
    dof: "11-10-2021",
    ret_prd: "092021",
    rtntype: "GSTR1",
    arn: "AA0609213062689",
    status: "Filed",
  },
  {
    valid: "Y",
    mof: "ONLINE",
    dof: "11-09-2021",
    ret_prd: "082021",
    rtntype: "GSTR1",
    arn: "AA060821241613G",
    status: "Filed",
  },
  {
    valid: "Y",
    mof: "ONLINE",
    dof: "11-08-2021",
    ret_prd: "072021",
    rtntype: "GSTR1",
    arn: "AA060721232653F",
    status: "Filed",
  },
  {
    valid: "Y",
    mof: "ONLINE",
    dof: "11-07-2021",
    ret_prd: "062021",
    rtntype: "GSTR1",
    arn: "AA060621231070Y",
    status: "Filed",
  },
];

let latestDate = Math.max(...a.map((ele) => new Date(ele.dof)));
latestDate = new Date(latestDate);
console.log(latestDate);

let latestObject = a.filter((ele) => {
  let date = new Date(ele.dof);
  return date.getTime() === latestDate.getTime();
});

console.log(latestObject);
