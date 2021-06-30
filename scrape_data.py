from facebook_scraper import get_posts
from pprint import pprint
import requests
import json
from datetime import datetime
import config
import pymongo

url = "http://localhost:5000/get-most-recent-post/"
latest = requests.get(url = url).json()

for post in get_posts(group=110354088989367, pages=50,timeout=60, options={"allow_extra_requests": False}):
    if post.get("listing_title"):
        if latest["post_id"] == None or (datetime.strptime(str(post['time']), '%Y-%m-%d %H:%M:%S') > datetime.strptime(str(latest['time']), '%Y-%m-%d %H:%M:%S')):
            insert_data = {
                    key:post[key] if post[key] is not None else -1000
                        for key in [
                            'post_id','time','listing_title','listing_price','listing_location','post_text', 
                            'username','images_lowquality','available','post_url'
                        ]
                    }
            
            insert_data['time'] = insert_data['time'].strftime("%Y-%m-%d %H:%M:%S")
            insert_data['parsed'] = False
            url = "http://localhost:5000/add-housing-posts/"
            post=requests.post(url, json = insert_data)