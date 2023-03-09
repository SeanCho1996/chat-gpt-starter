import openai
import config

api_key = config.DevelopmentConfig.OPENAI_KEY
openai.api_key = api_key

def GetResponse(prompt:str):
    messages = []
    messages.append({"role": "system", 
                     "content": "You are a helpful assistant."})

    question = {}
    question["role"] = "assistant"
    question["content"] = prompt
    messages.append(question)


    response = openai.ChatCompletion.create(
                        model="gpt-3.5-turbo",
                        messages=messages
                )

    try:
        answer = response['choices'][0]['message']['content'].replace('\n', '<br>') 
    except Exception as e:
        answer = f"Error: {e}"
    
    return answer