
from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/processpayment', methods=['POST'])
def process_payment():
    data = request.json

    # Simulate order processing
    print(f"Processing order for {data['username']} - Amount: ${data['amount']}")

    # Send to ledger
    try:
        ledger_response = requests.post('http://ledger:5003/ledger', json=data)
        return jsonify({'status': 'Order processed and recorded', 'ledger': ledger_response.json()})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5001, host='0.0.0.0')
