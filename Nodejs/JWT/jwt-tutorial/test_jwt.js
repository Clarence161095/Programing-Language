import jwt from 'jsonwebtoken'

const token = `eyJhbGciOiJSUzI1NiIsImtpZCI6ImY1NWUyOTRlZWRjMTY3Y2Q5N2JiNWE4MTliYmY3OTA2MzZmMTIzN2UiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmd1eeG7hW4gQW5oIFR14bqlbiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaGVIRzYybUhhQ05YRUpBd1lfZFl6QUFDSXJkUGhfWmNWVXR3ODBmQT1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9xdWl6LWQwY2EwIiwiYXVkIjoicXVpei1kMGNhMCIsImF1dGhfdGltZSI6MTYzNzA3Mjg3NSwidXNlcl9pZCI6Ik42YW0wYzhodFZjdGczRmFPaWlzWXNwZzBaRjMiLCJzdWIiOiJONmFtMGM4aHRWY3RnM0ZhT2lpc1lzcGcwWkYzIiwiaWF0IjoxNjM3MDcyODc1LCJleHAiOjE2MzcwNzY0NzUsImVtYWlsIjoibmd1eWVuYW5odHVhbjE2MTA5NUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMDY0NjU5MzExMTk3MTY4MDg4NSJdLCJlbWFpbCI6WyJuZ3V5ZW5hbmh0dWFuMTYxMDk1QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.C3RRSHCcb0w8a3QFJ_k98py3CcrZ6a0gWcBrg4f1BYNRTPgimYMA5U5IDftaxMl477APUAqx0C9QXKhz7zRjJfTfOREiQpFufzWFfLiibxhXVFK4yDTdCi8_kRKJbIJkE1o82XDPZv4YX8ZgNIL9Y2c1Znn4whj4fOWrmDcI0oxJrESjg9w3JdEeWsFZp09NZXZqZoEGGC8CfftadzAtfbTiHM-O3RQLID1c-nkrhWHnFeIbvzN_J0WQBK8s3M_CSOBohDekI0pxmTwEjl4P2OzbkY9dY-N5KPMQywiRQdpnVSoj_0z-VkGmDLufR-FPGHOzMReOcaK-w9rc4wiI3A
token eyJhbGciOiJSUzI1NiIsImtpZCI6ImY1NWUyOTRlZWRjMTY3Y2Q5N2JiNWE4MTliYmY3OTA2MzZmMTIzN2UiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmd1eeG7hW4gQW5oIFR14bqlbiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaGVIRzYybUhhQ05YRUpBd1lfZFl6QUFDSXJkUGhfWmNWVXR3ODBmQT1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9xdWl6LWQwY2EwIiwiYXVkIjoicXVpei1kMGNhMCIsImF1dGhfdGltZSI6MTYzNzA3Mjg3NSwidXNlcl9pZCI6Ik42YW0wYzhodFZjdGczRmFPaWlzWXNwZzBaRjMiLCJzdWIiOiJONmFtMGM4aHRWY3RnM0ZhT2lpc1lzcGcwWkYzIiwiaWF0IjoxNjM3MDcyODc1LCJleHAiOjE2MzcwNzY0NzUsImVtYWlsIjoibmd1eWVuYW5odHVhbjE2MTA5NUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMDY0NjU5MzExMTk3MTY4MDg4NSJdLCJlbWFpbCI6WyJuZ3V5ZW5hbmh0dWFuMTYxMDk1QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.C3RRSHCcb0w8a3QFJ_k98py3CcrZ6a0gWcBrg4f1BYNRTPgimYMA5U5IDftaxMl477APUAqx0C9QXKhz7zRjJfTfOREiQpFufzWFfLiibxhXVFK4yDTdCi8_kRKJbIJkE1o82XDPZv4YX8ZgNIL9Y2c1Znn4whj4fOWrmDcI0oxJrESjg9w3JdEeWsFZp09NZXZqZoEGGC8CfftadzAtfbTiHM-O3RQLID1c-nkrhWHnFeIbvzN_J0WQBK8s3M_CSOBohDekI0pxmTwEjl4P2OzbkY9dY-N5KPMQywiRQdpnVSoj_0z-VkGmDLufR-FPGHOzMReOcaK-w9rc4wiI3A`

const payload = jwt.verify(token)

console.log(`payload`, payload)