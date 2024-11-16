from flask import Flask, request, jsonify
import openai  # For AI integration

# Initialize Flask app
app = Flask(__name__)

# Route to process form data
@app.route('/process_data', methods=['POST'])
def process_data():
    # Extract form data
    age = request.form.get('age')
    experience = request.form.get('experience')
    goal = request.form.get('goal')
    income = request.form.get('income')

    # Use AI to generate a lesson plan
    lesson_plan = generate_lesson_plan(age, experience, goal, income)
om flask import Flask, request, jsonify
import openai  # For AI integration

# Initialize Flask app
app = Flask(__name__)

# Route to process form data
@app.route('/process_data', methods=['POST'])
def process_data():
    # Extract form data
    age = request.form.get('age')
    experience = request.form.get('experience')
    goal = request.form.get('goal')
    income = request.form.get('income')

    # Use AI to generate a lesson plan
    lesson_plan = generate_lesson_plan(age, experience, goal, income)

  
