import os
import PyPDF2
import openai

print("Hackathon 2024")

def gptChatbot(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role:" "user","content": prompt}]
    )
    return response.choices[0]message.content.strip()

if __name__ == "__main__":