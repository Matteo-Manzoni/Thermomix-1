from flask import Flask, render_template, jsonify, request, make_response
import sys, json, os, random, smtplib
from email.mime.text import MIMEText

app = Flask(__name__, static_url_path='/static')



@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/buy')
def buy():
    return render_template('buy.html')

@app.route('/buy/contact', methods=['POST'])
def buy_contact():
    if request.method == 'POST':
        data = {
            'fname': request.form['fname'],
            'lname': request.form['lname'],
            'email': request.form['email'],
            'mobile': request.form['mobile'],
            'postcode': request.form['postcode'],
            'message': request.form['message']
        }
        # Process the data as needed. For now, we'll just print it to the console.
        print(data)
        return "Form submitted successfully!"


@app.route('/demos')
def finance():
    return render_template('demos.html')

@app.route('/join-us')
def join():
    return render_template('join.html')

@app.route('/what-is-a-thermomix')
def thermomix():
    return render_template('thermomix.html')



# run app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)