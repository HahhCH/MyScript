var body = $response.body
    .replace("\"status\":0","\"status\":1")
    .replace("\"desc\":\"未认证\"","\"desc\":\"已认证\"");
$done({ body });
