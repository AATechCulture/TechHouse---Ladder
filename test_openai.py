import openai

openai.api_key="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"

# Test prompt for the OpenAI API
try:
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Can you say hello?"}
        ]
    )
    print("API Test Successful!")
    print("Response:", response['choices'][0]['message']['content'])
except Exception as e:
    print("API Test Failed!")
    print("Error:", str(e))
