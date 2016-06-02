#!/bin/bash
# curl "http://httpbin.org/patch?id=${ID}" \

curl "http://tic-tac-toe.wdibos.com/change-password/$ID" \
 --include \
 --request PATCH \
 --header "Authorization: Token token=$TOKEN" \
 --header "Content-Type: application/json" \
 --data "{
   \"passwords\": {
     \"old\": \"$OLD\",
     \"new\": \"$NEW\"
   }
 }"

# data output from curl doesn't have a trailing newline
echo
