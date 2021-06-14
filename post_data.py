from flask import Flask, jsonify, request
from flask_cors import CORS
import pymongo
import config
import json
from facebook_scraper import get_posts
from datetime import datetime
import requests

app = Flask(__name__)

connection_url = 'mongodb+srv://{}:{}@cluster0.oz6gy.mongodb.net/test?retryWrites=true&w=majority'.format(config.username,config.password)
client = pymongo.MongoClient(connection_url)
Database = client.get_database('fb_posts')
fb_housing_posts = Database.fb_housing_posts

@app.route('/add-housing-posts/', methods=['POST'])
def add_housing_posts():
    content = request.get_json()
    post_data = fb_housing_posts.insert(content)
    return "success"

if __name__ == '__main__':
    app.run(debug=True)