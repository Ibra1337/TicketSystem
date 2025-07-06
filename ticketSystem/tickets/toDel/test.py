import requests

TOKEN = "d5f8578b0ae12e646ffdb141e63114ead604aa15"

headers = {
    "Authorization": f"Token {TOKEN}",
    "Content-Type": "application/json",
}

data = {
    "title": "Test ticket",
    "description": "This is a test",
    "status": "open"
}

response = requests.post("http://127.0.0.1:8000/api/v1/tickets/", json=data, headers=headers)

print("Status:", response.status_code)
print("Response:", response.json())
