# chat-gpt-starter
This is a Python Flask starter pack for a ChatGPT project that uses OpenAI API to create a ChatGPT chatbox.  
**Original author: [Skolo Online](https://github.com/skolo-online/chat-gpt-starter)**

## Usage
### Step 1 
You need to generate you own OpenAI API key from [here](https://platform.openai.com/account/api-keys), then modify `config.py` file by replaceing `OPENAI_KEY` with your own key. And don't forget to remove the very first "from keys import ..." line.  
Anyway, your final `config.py` file should look like:
```python
class Config(object):
    DEBUG = True
    TESTING = False

class DevelopmentConfig(Config):
    SECRET_KEY = "this-is-a-super-secret-key"
    OPENAI_KEY = "YOUR_OWN_OPENAI_API_KEY!!!"

config = {
    'development': DevelopmentConfig,
    'testing': DevelopmentConfig,
    'production': DevelopmentConfig
}
```
### Step 2
Simply do:
```shell
python app.py
```

And enjoy Chatgpt-ing! 