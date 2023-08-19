var body = $response.body
  .replace(/9,29,59,99/, "0,1,2,3")
  .replace(/console.log\(tishi\)/, "alert\(tishi\)")
  .replace(/ts = false/, "ts = true")
$done({ body });
