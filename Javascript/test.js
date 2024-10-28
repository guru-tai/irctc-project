async function fetchingData(url, callback) {
  const response = await fetch(url);
  if (!response.ok) {
    callback(new Error("error while fetching"), null);
  }
  const data = await response.json();
  callback(null, data);
}
function handledata(error, data) {
  if (error) {
    console.log(error);
  } else {
    handleResponse(data);
  }
}
function handleResponse(data) {
  let d = data.data.sort((value) => {
    if (value.package < value.package) return -1;
    if (value.package > value.package) return 1;
  });
  handleLatestResponse(d);
  //    console.log(d);
}
function handleLatestResponse(data) {
  const obj = {id:null,children:[]};
  data.map((v, k) => {
    if (v === data[k].genderPreference) {
      {
        if (obj.id === null) {
          obj.id = v.genderPreference;
          obj.children = children.push({v});
        } else if (v === obj.id) {
          obj.id = v.genderPreference;
          obj.children = children.push({v});;
        } else {
          obj.id = v.genderPreference;
          obj.children = children.push({v});;
        }
      }
    }
  });
  console.log(obj);
}
const url =
  "https://drives-stage.thetapacademy.com/api/general/get-active-drives?filters[isTechnical]=true&limit=50&page=1";
fetchingData(url, handledata);
