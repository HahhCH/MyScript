var body = $response.body
    .replace(/\"has_user_been_prime\":false/, "\"has_user_been_prime\":true")
    .replace(/\"is_prime_avaliable\":false/, "\"is_prime_avaliable\":true")
    .replace(/\"is_admin\":false/, "\"is_admin\":true")
    .replace(/\"is_expert\":false/, "\"is_expert\":true")
    .replace(/\"is_social_verified\":false/, "\"is_social_verified\":true")
    .replace(/m\.tb\.cn/g, "xxxxxxxxxx")
    .replace(/\"active\":false/, "\"active\":true")
    .replace(/\"activityRemainderTime\":\d+/, "\"activityRemainderTime\":1000")
    .replace(/\"activityWaitTime\":\d+/, "\"activityWaitTime\":0")
    .replace(/\"isActive\":0/, "\"isActive\":1")
    .replace(/\"count\":null/, "\"count\":200")
    .replace(/\"count\":0/, "\"count\":200")
    .replace(/\"saleOut\":true/, "\"saleOut\":false")
    .replace(/\"stock\":null/, "\"stock\":200")
    .replace(/showCount = \d+/, "showCount = 0")
    .replace(/\"S\":\"LTQ=\"/, "\"S\":\"MTAw\"")
    .replace(/\"vipStatus\":0/, "\"vipStatus\":1")
    .replace("\"status\":0", "\"status\":1")
    .replace("\"desc\":\"未认证\"", "\"desc\":\"已认证\"")
$done({ body });
