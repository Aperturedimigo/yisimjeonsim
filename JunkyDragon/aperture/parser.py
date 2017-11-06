import requests
import time
while True:
    req = requests.get('http://163.44.165.68:8080/')
    req.encoding = 'utf-8'
    html = req.text
    att = int(html)
    print(att)
    time.sleep(1.5)
