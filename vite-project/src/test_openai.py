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
