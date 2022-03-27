const paypal = require('@paypal/checkout-server-sdk');
  
// Creating an environment
let clientId = "AYaC88wXkHCiNiBbd1AFXniZjkEeal1BQDC62bHIf1xOaVqwPGjDOL45B2zNrOTJ2yunaJDSUDGcghDF";
let clientSecret = "EJzGuPvrSmCC5bZ7vpA9AhRc3ySU_CJGYSupHTC5PZyDGw5iEhfIlmh_tM3gfrTKUpPyNFi8gE6cGXAZ";

// This sample uses SandboxEnvironment. In production, use LiveEnvironment
let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

export default async function handler(req, res) {
  if (req.method === "POST"){
    const {value, currency_code} = req.body
    const request = new paypal.orders.OrdersCreateRequest()
    request.requestBody({
        "intent": "CAPTURE",
        "purchase_units": [
            {
                "amount": {
                    "currency_code": currency_code,
                    "value":value
                }
            }
        ]
    });

    const response = await client.execute(request)
    return res.json({id: response.result.id})
  }

}
