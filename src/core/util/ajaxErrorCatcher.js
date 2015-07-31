export const ajaxErrorCatcher = function(res){
  const json = res.json();
  console.error('ajax error:', json);
  return json;
}