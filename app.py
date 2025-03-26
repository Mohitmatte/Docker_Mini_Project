from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('first.html')

@app.route('/our_story')
def our_story():
    return render_template('our_story.html')

@app.route('/our_impact')
def our_impact():
    return render_template('our_impact.html')

@app.route('/our_projects')
def our_projects():
    return render_template('our_projects.html')

if __name__ == '__main__':
    app.run(debug=True)
