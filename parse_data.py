import re
import pymongo
import jsonify
import requests

url = "http://localhost:5000/get-unprocessed-posts/"
data = requests.get(url).json()

for post in data['result']:
    title_dict = {
        'bed': re.compile(r'\d+(?=\s+bed)|$',re.IGNORECASE),
        'bed1' : re.compile(r'\w+(?=/)|$',re.IGNORECASE),
        'rooms':re.compile(r'(\w+(?=\s+rooms))|$',re. IGNORECASE),
        'bath': re.compile(r'\d+(?=\s+bath)|$',re.IGNORECASE),
        'baths': re.compile(r'\d+(?=\s+baths)|$',re.IGNORECASE),
        'price': re.compile(r'\$[0-9]+|$'),
        'address': re.compile(r'\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St)\.?|$',re.IGNORECASE)
    }

    body_dict = {
        'address': re.compile(r'\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St)\.?|$',re.IGNORECASE),
        'utilities': re.compile(r'(?<=\butilities are\s)(\w+).group()|$',re.IGNORECASE)
    }

    parsed_dict = {}

    for key, rx in title_dict.items():
        match = rx.search(post['listing_title'])
        if match is not None:
            if type(match) != re.Pattern:
                title_dict[key] = match.group()

    parsed_dict['listing_location'] = post['listing_location']
    parsed_dict['price'] = post['listing_price'].replace("$","")

    for key, rx in body_dict.items():
        match = rx.search(post['post_text'])
        if match is not None:
            if type(match) != re.Pattern:
                body_dict[key] = match.group()

    for key in title_dict:
        if title_dict[key] != '':
            parsed_dict[key] = title_dict[key]

    for key in body_dict:
        if body_dict[key] != '':
            parsed_dict[key] = body_dict[key]

    for key in post:
        parsed_dict[key] = post[key]

    if 'beds' in parsed_dict:
        if parsed_dict['bed']!= '' and parsed_dict['beds']:
            del parsed_dict['beds']
    
    if 'baths' in parsed_dict:
        if parsed_dict['bath']!= '' and parsed_dict['baths']:
            del parsed_dict['baths']

    url = "http://localhost:5000/add-processed-posts/"
    post=requests.post(url, json = parsed_dict)