import { useState } from "react"

export default function AIExplanation() {

const [text, setText] = useState("")

async function explain() {

const response = await fetch(
  "<https://api.openai.com/v1/chat/completions>",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content:
            "Explain bubble sort and quick sort simply for students."
        }
      ]
    })
  }
)

const data = await response.json()

setText(data.choices[0].message.content)

}

return (

<div className="ai-box">

  <button onClick={explain}>
    AI Explain
  </button>

  <p>{text}</p>

</div>

)

}